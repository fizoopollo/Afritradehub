from rest_framework import generics, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from .models import Company
from .serializers import CompanySerializer, CompanyListSerializer


class CompanyListCreateView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Company.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ["country", "verification_status"]
    search_fields = ["name", "description", "city"]
    ordering_fields = ["name", "created_at", "verified_at"]
    ordering = ["-created_at"]

    def get_serializer_class(self):
        return CompanyListSerializer if self.request.method == "GET" else CompanySerializer


class CompanyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = "slug"
    lookup_url_kwarg = "slug"
