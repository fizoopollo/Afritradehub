from rest_framework import serializers
from .models import Thread, Message


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ("id", "thread", "sender", "body", "read_at", "created_at")
        read_only_fields = ("sender", "thread")


class ThreadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thread
        fields = ("id", "created_at", "updated_at")
