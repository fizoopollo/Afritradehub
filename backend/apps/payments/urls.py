from django.urls import path
from . import views

urlpatterns = [
    path("stripe/checkout/", views.CreateCheckoutSessionView.as_view()),
    path("flutterwave/initialize/", views.FlutterwaveInitializeView.as_view()),
]
