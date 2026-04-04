from rest_framework import serializers
from .models import Company


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = (
            "id", "name", "slug", "description", "logo", "website", "email", "phone",
            "country", "city", "address", "verification_status", "verified_at",
            "created_at", "updated_at",
        )
        read_only_fields = ("id", "slug", "verification_status", "verified_at", "created_at", "updated_at")


class CompanyListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = (
            "id", "name", "slug", "logo", "country", "city", "verification_status", "created_at",
        )
