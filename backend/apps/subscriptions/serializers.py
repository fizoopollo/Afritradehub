from rest_framework import serializers
from .models import Plan, Subscription


class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = ("id", "name", "slug", "price", "currency", "interval", "features", "is_active")


class SubscriptionSerializer(serializers.ModelSerializer):
    plan_detail = PlanSerializer(source="plan", read_only=True)
    class Meta:
        model = Subscription
        fields = ("id", "plan", "plan_detail", "status", "current_period_end", "created_at", "updated_at")
