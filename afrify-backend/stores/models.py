from django.db import models
from django.contrib.auth.models import User
from django.core.validators import URLValidator
import uuid


class Store(models.Model):
    """User's online store"""
    PUBLISH_TYPE_CHOICES = [
        ('afrify', 'Afrify Platform'),
        ('custom_domain', 'Custom Domain'),
        ('both', 'Both'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name='afrify_store')
    
    # Store Information
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, max_length=100)
    description = models.TextField(blank=True, null=True)
    logo = models.ImageField(upload_to='store_logos/', blank=True, null=True)
    cover_image = models.ImageField(upload_to='store_covers/', blank=True, null=True)
    
    # Business Info
    business_email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    
    # Publishing Options
    publish_type = models.CharField(max_length=20, choices=PUBLISH_TYPE_CHOICES, default='afrify')
    custom_domain = models.CharField(max_length=255, blank=True, null=True, validators=[URLValidator()])
    afrify_domain = models.CharField(max_length=255, unique=True, blank=True, null=True)  # subdomain.afrify.store
    
    # Status
    is_published = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    
    # Integration with Afritrade
    afritrade_account_id = models.CharField(max_length=255, blank=True, null=True)  # Link to Afritrade account
    
    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.name


class StoreTemplate(models.Model):
    """Available templates for stores"""
    CATEGORY_CHOICES = [
        ('fashion', 'Fashion'),
        ('food', 'Food & Grocery'),
        ('electronics', 'Electronics'),
        ('handmade', 'Handmade'),
        ('services', 'Services'),
        ('beauty', 'Beauty'),
        ('art', 'Art & Gallery'),
        ('auto', 'Auto'),
        ('bags', 'Bags'),
        ('jewelry', 'Jewelry'),
        ('books', 'Books'),
        ('sports', 'Sports'),
        ('home', 'Home & Garden'),
        ('wellness', 'Wellness'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    description = models.TextField()
    
    # Template Details
    thumbnail = models.ImageField(upload_to='template_thumbnails/')
    preview_url = models.URLField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    rating = models.IntegerField(default=100)  # Percentage
    
    # Template Configuration
    color_scheme = models.JSONField(default=dict)  # {primary, secondary, accent colors}
    features = models.JSONField(default=list)  # List of features included
    is_new = models.BooleanField(default=False)
    is_popular = models.BooleanField(default=False)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-is_popular', '-created_at']
    
    def __str__(self):
        return self.name


class StoreDesign(models.Model):
    """Store design customization"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    store = models.OneToOneField(Store, on_delete=models.CASCADE, related_name='design')
    template = models.ForeignKey(StoreTemplate, on_delete=models.SET_NULL, null=True, blank=True)
    
    # Design Customization
    primary_color = models.CharField(max_length=7, default='#FF6B35')  # Hex color
    secondary_color = models.CharField(max_length=7, default='#F7931E')
    accent_color = models.CharField(max_length=7, default='#004E89')
    
    # Layout
    layout_config = models.JSONField(default=dict)  # Custom layout settings
    sections = models.JSONField(default=dict)  # Hero, features, products, etc.
    
    # Content
    hero_title = models.CharField(max_length=255, blank=True, null=True)
    hero_subtitle = models.CharField(max_length=500, blank=True, null=True)
    hero_image = models.ImageField(upload_to='store_hero/', blank=True, null=True)
    
    # Navigation
    nav_items = models.JSONField(default=list)  # Navigation menu items
    footer_text = models.TextField(blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"Design for {self.store.name}"


class PublishHistory(models.Model):
    """Track store publish history"""
    PUBLISH_STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
        ('unpublished', 'Unpublished'),
        ('error', 'Error'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    store = models.ForeignKey(Store, on_delete=models.CASCADE, related_name='publish_history')
    status = models.CharField(max_length=20, choices=PUBLISH_STATUS_CHOICES)
    publish_type = models.CharField(max_length=20, choices=Store.PUBLISH_TYPE_CHOICES)
    
    message = models.TextField(blank=True, null=True)  # Error message if any
    
    published_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-published_at']
    
    def __str__(self):
        return f"{self.store.name} - {self.status} ({self.published_at})"

