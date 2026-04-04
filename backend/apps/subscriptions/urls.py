from django.urls import path
from . import views

urlpatterns = [
    path("plans/", views.PlanListView.as_view()),
    path("", views.SubscriptionListCreateView.as_view()),
]
