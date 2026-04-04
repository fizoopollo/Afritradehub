from django.urls import path, include
from . import views

app_name = "companies"
urlpatterns = [
    path("", views.CompanyListCreateView.as_view(), name="list_create"),
    path("<slug:slug>/", views.CompanyDetailView.as_view(), name="detail"),
]
