from django.db import models
from django.conf import settings


class Payment(models.Model):
    PROVIDER = (("stripe", "Stripe"), ("flutterwave", "Flutterwave"))
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True
    )
    provider = models.CharField(max_length=20, choices=PROVIDER)
    external_id = models.CharField(max_length=255, blank=True)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    currency = models.CharField(max_length=3, default="ZAR")
    status = models.CharField(max_length=50, default="pending")
    metadata = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)
