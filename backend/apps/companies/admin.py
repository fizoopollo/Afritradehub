from django.contrib import admin
from .models import Company

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ("name", "country", "verification_status", "created_at")
    list_filter = ("verification_status", "country")
    search_fields = ("name", "email")
    prepopulated_fields = {"slug": ("name",)}
