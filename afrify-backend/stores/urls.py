from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StoreViewSet, StoreTemplateViewSet, StoreDesignViewSet, PublishHistoryViewSet

router = DefaultRouter()
router.register(r'', StoreViewSet, basename='store')
router.register(r'templates', StoreTemplateViewSet, basename='template')
router.register(r'designs', StoreDesignViewSet, basename='design')
router.register(r'publish-history', PublishHistoryViewSet, basename='publish-history')

urlpatterns = [
    path('', include(router.urls)),
]
