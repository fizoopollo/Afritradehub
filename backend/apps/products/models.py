"""
Product and inventory models for marketplace.
"""
from django.db import models
from apps.companies.models import Company


class Product(models.Model):
    """Product listed by a company."""
    company = models.ForeignKey(
        Company, on_delete=models.CASCADE, related_name="products"
    )
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    description = models.TextField(blank=True)
    sku = models.CharField(max_length=100, blank=True)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    compare_at_price = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True
    )
    cost_per_item = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True
    )
    quantity = models.PositiveIntegerField(default=0)
    available = models.BooleanField(default=True)
    color = models.CharField(max_length=50, blank=True)
    weight = models.DecimalField(
        max_digits=10, decimal_places=3, null=True, blank=True, help_text="kg"
    )
    image = models.ImageField(upload_to="products/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "products_product"
        unique_together = [["company", "slug"]]
        ordering = ["-created_at"]

    def __str__(self):
        return self.name
