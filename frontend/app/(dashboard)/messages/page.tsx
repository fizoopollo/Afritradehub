"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send } from "lucide-react";

export default function MessagesPage() {
  const [message, setMessage] = useState("");

  return (
    <div className="space-y-6 h-[calc(100vh-12rem)] flex flex-col">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Messages</h1>
          <p className="text-muted-foreground">
            Real-time chat. Connect via WebSocket for live updates.
          </p>
        </div>
        <Button>New message</Button>
      </div>

      <div className="flex-1 rounded-lg border border-border bg-card flex flex-col min-h-0">
        <div className="border-b border-border p-4">
          <p className="text-sm font-medium">Select a thread or start a new conversation</p>
        </div>
        <div className="flex-1 overflow-y-auto p-4 flex flex-col items-center justify-center text-muted-foreground">
          <MessageSquare className="h-12 w-12 mb-3" aria-hidden />
          <p className="text-sm">No thread selected</p>
          <p className="text-xs mt-1">Messages will appear here when you have an active thread (WebSocket).</p>
        </div>
        <div className="border-t border-border p-3 flex gap-2">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), setMessage(""))}
            aria-label="Message input"
          />
          <Button size="icon" aria-label="Send message">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
