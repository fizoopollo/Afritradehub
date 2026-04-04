from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.utils.text import slugify
from .models import Store, StoreTemplate, StoreDesign, PublishHistory
from .serializers import StoreDetailSerializer, StoreListSerializer, StoreTemplateSerializer, StoreDesignSerializer, PublishHistorySerializer


class IsOwnerOrReadOnly(permissions.BasePermission):
    """Custom permission to only allow owners to edit their store"""
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.owner == request.user


class StoreViewSet(viewsets.ModelViewSet):
    """API endpoints for Afrify stores"""
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Store.objects.all()
    lookup_field = 'slug'
    
    def get_serializer_class(self):
        if self.action == 'list':
            return StoreListSerializer
        return StoreDetailSerializer
    
    def get_queryset(self):
        if self.request.user.is_authenticated:
            return Store.objects.filter(owner=self.request.user) | Store.objects.filter(is_published=True)
        return Store.objects.filter(is_published=True)
    
    def perform_create(self, serializer):
        # Auto-generate slug from name
        slug = slugify(serializer.validated_data['name'])
        # Ensure uniqueness
        count = Store.objects.filter(slug=slug).count()
        if count > 0:
            slug = f"{slug}-{count + 1}"
        
        store = serializer.save(owner=self.request.user, slug=slug)
        # Create default design
        StoreDesign.objects.create(store=store)
        # Generate Afrify domain
        store.afrify_domain = f"{slug}.afrify.store"
        store.save()
    
    def perform_update(self, serializer):
        instance = serializer.save()
        # Update Afrify domain if slug changes
        if instance.slug != serializer.initial_data.get('slug', instance.slug):
            instance.afrify_domain = f"{instance.slug}.afrify.store"
            instance.save()
    
    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def publish(self, request, slug=None):
        """Publish store"""
        store = self.get_object()
        if store.owner != request.user:
            return Response({'error': 'You do not own this store'}, status=status.HTTP_403_FORBIDDEN)
        
        try:
            store.is_published = True
            store.save()
            
            # Create publish history record
            PublishHistory.objects.create(
                store=store,
                status='published',
                publish_type=store.publish_type
            )
            
            return Response({'status': 'Store published successfully'})
        except Exception as e:
            PublishHistory.objects.create(
                store=store,
                status='error',
                publish_type=store.publish_type,
                message=str(e)
            )
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def unpublish(self, request, slug=None):
        """Unpublish store"""
        store = self.get_object()
        if store.owner != request.user:
            return Response({'error': 'You do not own this store'}, status=status.HTTP_403_FORBIDDEN)
        
        store.is_published = False
        store.save()
        
        PublishHistory.objects.create(
            store=store,
            status='unpublished',
            publish_type=store.publish_type
        )
        
        return Response({'status': 'Store unpublished successfully'})


class StoreTemplateViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoints for store templates"""
    queryset = StoreTemplate.objects.all()
    serializer_class = StoreTemplateSerializer
    lookup_field = 'slug'
    
    @action(detail=False, methods=['get'])
    def by_category(self, request):
        """Get templates by category"""
        category = request.query_params.get('category')
        if category:
            templates = StoreTemplate.objects.filter(category=category)
            serializer = self.get_serializer(templates, many=True)
            return Response(serializer.data)
        return Response({'error': 'Category parameter required'}, status=status.HTTP_400_BAD_REQUEST)


class StoreDesignViewSet(viewsets.ModelViewSet):
    """API endpoints for store design customization"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = StoreDesignSerializer
    
    def get_queryset(self):
        return StoreDesign.objects.filter(store__owner=self.request.user)
    
    def get_object(self):
        store_slug = self.kwargs.get('store_slug')
        store = get_object_or_404(Store, slug=store_slug, owner=self.request.user)
        return store.design
    
    @action(detail=False, methods=['post'], url_path='(?P<store_slug>[^/.]+)/preview')
    def preview(self, request, store_slug):
        """Get design preview"""
        store = get_object_or_404(Store, slug=store_slug)
        design = store.design
        serializer = self.get_serializer(design)
        return Response(serializer.data)


class PublishHistoryViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoints for publish history"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PublishHistorySerializer
    
    def get_queryset(self):
        return PublishHistory.objects.filter(store__owner=self.request.user).order_by('-published_at')

