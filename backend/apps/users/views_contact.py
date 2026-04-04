"""
Contact form submission API.
"""
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers_contact import ContactSerializer


class ContactSubmitView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # In production: send email or queue task
        serializer.save()
        return Response(
            {"detail": "Thank you. We will get back to you soon."},
            status=status.HTTP_201_CREATED,
        )
