"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
}

type ToastContextValue = {
  toasts: Toast[];
  addToast: (t: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
} | null;

const ToastContext = createContext<ToastContextValue>(null);

export function ToastProvider(props: { children: React.ReactNode }) {
  const { children } = props;
  const [toasts, setToasts] = useState<Toast[]>([]);
  const addToast = useCallback((t: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { ...t, id }]);
    setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== id)), 5000);
  }, []);
  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((x) => x.id !== id));
  }, []);
  const value = { toasts, addToast, removeToast };
  return React.createElement(
    ToastContext.Provider,
    { value },
    children,
    React.createElement(
      "div",
      {
        className: "fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm",
        role: "region",
        "aria-label": "Notifications",
      },
      toasts.map((t) =>
        React.createElement(
          "div",
          {
            key: t.id,
            className: cn(
              "flex items-start gap-2 rounded-lg border px-4 py-3 shadow-lg bg-card text-card-foreground",
              t.variant === "destructive" && "border-destructive/50 bg-destructive/10"
            ),
          },
          React.createElement("div", { className: "flex-1 min-w-0" },
            t.title && React.createElement("p", { className: "font-medium text-sm" }, t.title),
            t.description &&
              React.createElement("p", { className: "text-sm text-muted-foreground mt-0.5" }, t.description)
          ),
          React.createElement(
            "button",
            {
              type: "button",
              onClick: () => removeToast(t.id),
              className: "shrink-0 rounded p-1 hover:bg-muted",
              "aria-label": "Dismiss",
            },
            React.createElement(X, { className: "h-4 w-4" })
          )
        )
      )
    )
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) return { toasts: [], addToast: () => {}, removeToast: () => {} };
  return ctx;
}
