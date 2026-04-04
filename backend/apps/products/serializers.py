from rest_framework import serializers
from .models import Product
from apps.companies.serializers import CompanyListSerializer


class ProductSerializer(serializers.ModelSerializer):
    company_detail = CompanyListSerializer(source="company", read_only=True)

    class Meta:
        model = Product
        fields = (
            "id", "company", "company_detail", "name", "slug", "description", "sku",
            "price", "compare_at_price", "cost_per_item", "quantity", "available",
            "color", "weight", "image", "created_at", "updated_at",
        )
        read_only_fields = ("id", "created_at", "updated_at")


class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            "id", "company", "name", "slug", "price", "compare_at_price",
            "quantity", "available", "color", "image", "created_at",
        )
