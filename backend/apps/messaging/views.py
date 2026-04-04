from rest_framework import generics
from .models import Thread, Message
from .serializers import ThreadSerializer, MessageSerializer


class ThreadListCreateView(generics.ListCreateAPIView):
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer


class ThreadDetailView(generics.RetrieveAPIView):
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer


class MessageListCreateView(generics.ListCreateAPIView):
    serializer_class = MessageSerializer

    def get_queryset(self):
        return Message.objects.filter(thread_id=self.kwargs["pk"]).order_by("created_at")

    def perform_create(self, serializer):
        serializer.save(thread_id=self.kwargs["pk"], sender=self.request.user)
