"""Contact form API (mounted at /api/contact/)."""
from django.urls import path
from . import views_contact

urlpatterns = [
    path("", views_contact.ContactSubmitView.as_view(), name="contact_submit"),
]
