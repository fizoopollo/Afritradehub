"""
Orders, draft orders, shipping labels, abandoned checkouts.
"""
from decimal import Decimal
from django.db import models
from django.conf import settings
from apps.companies.models import Company
from apps.products.models import Product


class DraftOrder(models.Model):
    """Draft order (not yet placed)."""
    company = models.ForeignKey(
        Company, on_delete=models.CASCADE, related_name="draft_orders"
    )
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True
    )
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class DraftOrderLine(models.Model):
    draft_order = models.ForeignKey(
        DraftOrder, on_delete=models.CASCADE, related_name="lines"
    )
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=12, decimal_places=2)


class Order(models.Model):
    """Placed order."""
    STATUS = (
        ("unpaid", "Unpaid"),
        ("preparing", "Preparing"),
        ("delivering", "Delivering"),
        ("delivered", "Delivered"),
        ("cancelled", "Cancelled"),
    )
    company = models.ForeignKey(
        Company, on_delete=models.CASCADE, related_name="orders"
    )
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True
    )
    status = models.CharField(max_length=20, choices=STATUS, default="unpaid")
    total = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal("0"))
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class OrderLine(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="lines")
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=12, decimal_places=2)


class ShippingLabel(models.Model):
    """Shipping label / rate info."""
    company = models.ForeignKey(
        Company, on_delete=models.CASCADE, related_name="shipping_labels"
    )
    order = models.OneToOneField(
        Order, on_delete=models.CASCADE, null=True, blank=True, related_name="shipping_label"
    )
    carrier = models.CharField(max_length=100)
    tracking_number = models.CharField(max_length=255, blank=True)
    rate_amount = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True
    )
    created_at = models.DateTimeField(auto_now_add=True)


class AbandonedCheckout(models.Model):
    """Abandoned checkout (cart not completed)."""
    company = models.ForeignKey(
        Company, on_delete=models.CASCADE, related_name="abandoned_checkouts"
    )
    email = models.EmailField(blank=True)
    cart_snapshot = models.JSONField(default=dict)
    recovered = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
