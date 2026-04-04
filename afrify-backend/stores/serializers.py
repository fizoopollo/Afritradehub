from rest_framework import serializers
from .models import Store, StoreTemplate, StoreDesign, PublishHistory


class StoreTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = StoreTemplate
        fields = ['id', 'name', 'slug', 'category', 'description', 'thumbnail', 'price', 'rating', 'features', 'is_new']


class StoreDesignSerializer(serializers.ModelSerializer):
    template_detail = StoreTemplateSerializer(source='template', read_only=True)
    
    class Meta:
        model = StoreDesign
        fields = ['id', 'store', 'template', 'template_detail', 'primary_color', 'secondary_color', 
                  'accent_color', 'hero_title', 'hero_subtitle', 'layout_config', 'sections']
        read_only_fields = ['id']


class StoreDetailSerializer(serializers.ModelSerializer):
    design = StoreDesignSerializer(read_only=True)
    
    class Meta:
        model = Store
        fields = ['id', 'name', 'slug', 'description', 'logo', 'cover_image', 'business_email', 
                  'phone', 'address', 'country', 'publish_type', 'custom_domain', 'afrify_domain', 
                  'is_published', 'is_active', 'design', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at', 'afrify_domain']


class StoreListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = ['id', 'name', 'slug', 'logo', 'business_email', 'is_published', 'publish_type', 'created_at']
        read_only_fields = ['id', 'created_at']


class PublishHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PublishHistory
        fields = ['id', 'store', 'status', 'publish_type', 'message', 'published_at']
        read_only_fields = ['id', 'published_at']
