from django.urls import path
from . import views

app_name = "orders"
urlpatterns = [
    path("drafts/", views.DraftOrderListCreateView.as_view(), name="draft_list_create"),
    path("drafts/<int:pk>/", views.DraftOrderDetailView.as_view(), name="draft_detail"),
    path("", views.OrderListCreateView.as_view(), name="list_create"),
    path("<int:pk>/", views.OrderDetailView.as_view(), name="detail"),
    path("shipping-labels/", views.ShippingLabelListCreateView.as_view(), name="shipping_labels"),
    path("abandoned-checkouts/", views.AbandonedCheckoutListView.as_view(), name="abandoned_checkouts"),
]
