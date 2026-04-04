from rest_framework import serializers
from .models import DraftOrder, DraftOrderLine, Order, OrderLine, ShippingLabel, AbandonedCheckout
from apps.products.serializers import ProductListSerializer


class DraftOrderLineSerializer(serializers.ModelSerializer):
    product_detail = ProductListSerializer(source="product", read_only=True)
    class Meta:
        model = DraftOrderLine
        fields = ("id", "product", "product_detail", "quantity", "price")


class DraftOrderSerializer(serializers.ModelSerializer):
    lines = DraftOrderLineSerializer(many=True, read_only=True)
    class Meta:
        model = DraftOrder
        fields = ("id", "company", "notes", "lines", "created_at", "updated_at")


class OrderLineSerializer(serializers.ModelSerializer):
    product_detail = ProductListSerializer(source="product", read_only=True)
    class Meta:
        model = OrderLine
        fields = ("id", "product", "product_detail", "quantity", "price")


class OrderSerializer(serializers.ModelSerializer):
    lines = OrderLineSerializer(many=True, read_only=True)
    class Meta:
        model = Order
        fields = ("id", "company", "status", "total", "notes", "lines", "created_at", "updated_at")


class ShippingLabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingLabel
        fields = ("id", "company", "order", "carrier", "tracking_number", "rate_amount", "created_at")


class AbandonedCheckoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = AbandonedCheckout
        fields = ("id", "company", "email", "cart_snapshot", "recovered", "created_at")
