from django.urls import path
from . import views

app_name = "messaging"
urlpatterns = [
    path("threads/", views.ThreadListCreateView.as_view(), name="thread_list"),
    path("threads/<int:pk>/", views.ThreadDetailView.as_view(), name="thread_detail"),
    path("threads/<int:pk>/messages/", views.MessageListCreateView.as_view(), name="messages"),
]
