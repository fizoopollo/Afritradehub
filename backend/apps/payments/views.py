from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class CreateCheckoutSessionView(APIView):
    """Create Stripe Checkout session (placeholder)."""
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # TODO: integrate Stripe Checkout
        return Response({"url": "/checkout/session-placeholder"}, status=200)


class FlutterwaveInitializeView(APIView):
    """Initialize Flutterwave payment (placeholder)."""
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # TODO: integrate Flutterwave
        return Response({"link": "/payment/flutterwave-placeholder"}, status=200)
