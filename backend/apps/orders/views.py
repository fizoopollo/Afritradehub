from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from .models import DraftOrder, Order, ShippingLabel, AbandonedCheckout
from .serializers import (
    DraftOrderSerializer,
    OrderSerializer,
    ShippingLabelSerializer,
    AbandonedCheckoutSerializer,
)


class DraftOrderListCreateView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = DraftOrder.objects.prefetch_related("lines__product").all()
    serializer_class = DraftOrderSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["company"]


class DraftOrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DraftOrder.objects.prefetch_related("lines__product").all()
    serializer_class = DraftOrderSerializer


class OrderListCreateView(generics.ListCreateAPIView):
    queryset = Order.objects.prefetch_related("lines__product").all()
    serializer_class = OrderSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["company", "status"]


class OrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.prefetch_related("lines__product").all()
    serializer_class = OrderSerializer


class ShippingLabelListCreateView(generics.ListCreateAPIView):
    queryset = ShippingLabel.objects.all()
    serializer_class = ShippingLabelSerializer
    filterset_fields = ["company"]


class AbandonedCheckoutListView(generics.ListAPIView):
    queryset = AbandonedCheckout.objects.all()
    serializer_class = AbandonedCheckoutSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["company", "recovered"]
