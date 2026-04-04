"""
WebSocket consumer for real-time messaging.
"""
import json
from channels.generic.websocket import AsyncJsonWebsocketConsumer


class ChatConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        self.thread_id = self.scope["url_route"]["kwargs"].get("thread_id")
        if self.thread_id:
            self.room_name = f"thread_{self.thread_id}"
        else:
            self.room_name = "lobby"
        await self.channel_layer.group_add(self.room_name, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.room_name, self.channel_name)

    async def receive_json(self, content):
        action = content.get("action", "message")
        if action == "message":
            await self.channel_layer.group_send(
                self.room_name,
                {
                    "type": "chat_message",
                    "message": content.get("body", ""),
                    "sender_id": self.scope.get("user") and self.scope["user"].id,
                },
            )

    async def chat_message(self, event):
        await self.send_json({
            "type": "message",
            "body": event["message"],
            "sender_id": event.get("sender_id"),
        })
