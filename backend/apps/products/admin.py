from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "company", "price", "quantity", "available", "created_at")
    list_filter = ("available", "company")
    search_fields = ("name", "sku")
