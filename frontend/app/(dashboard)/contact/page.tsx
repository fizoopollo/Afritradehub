"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { apiPost } from "@/lib/api";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const mutation = useMutation({
    mutationFn: (body: { name: string; email: string; subject: string; message: string }) =>
      apiPost("/contact/", body),
    onSuccess: () => {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrors({});
    },
    onError: (err: Error & { body?: Record<string, string[]> }) => {
      const next: Record<string, string> = {};
      if (err.body) {
        Object.entries(err.body).forEach(([k, v]) => {
          next[k] = Array.isArray(v) ? v[0] : String(v);
        });
      }
      setErrors(next);
    },
  });

  function validate() {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Name is required.";
    if (!email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email.";
    if (!subject.trim()) next.subject = "Subject is required.";
    if (!message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    mutation.mutate({ name, email, subject, message });
  }

  return (
    <div className="space-y-6 max-w-xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Contact us</h1>
        <p className="text-muted-foreground">
          Send a message and we’ll get back to you as soon as we can.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <Input
            id="contact-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            aria-required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name && (
            <p id="contact-name-error" className="text-sm text-destructive mt-1" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            aria-required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email && (
            <p id="contact-email-error" className="text-sm text-destructive mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-subject" className="block text-sm font-medium mb-1">
            Subject
          </label>
          <Input
            id="contact-subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            aria-required
            aria-invalid={!!errors.subject}
          />
          {errors.subject && (
            <p className="text-sm text-destructive mt-1" role="alert">{errors.subject}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows={5}
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
            aria-required
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="text-sm text-destructive mt-1" role="alert">{errors.message}</p>
          )}
        </div>
        {mutation.isSuccess && (
          <p className="text-sm text-green-600" role="status">
            Thank you. We will get back to you soon.
          </p>
        )}
        {mutation.isError && !errors.name && !errors.email && (
          <p className="text-sm text-destructive" role="alert">
            Something went wrong. Please try again.
          </p>
        )}
        <Button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Sending…" : "Submit"}
        </Button>
      </form>
    </div>
  );
}
