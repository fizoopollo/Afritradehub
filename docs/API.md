# Afritradehub API Reference

Base URL: `/api` (e.g. `http://localhost:8000/api`).

Responses are JSON. Paginated list endpoints return:

```json
{
  "count": 100,
  "next": "http://.../api/companies/?page=2",
  "previous": null,
  "results": [ ... ]
}
```

## Authentication

- **Obtain JWT:** `POST /api/auth/token/`  
  Body: `{ "email": "user@example.com", "password": "..." }`  
  Response: `{ "access": "<access_token>", "refresh": "<refresh_token>" }`

- **Refresh:** `POST /api/auth/token/refresh/`  
  Body: `{ "refresh": "<refresh_token>" }`

- **Use:** `Authorization: Bearer <access_token>` on protected endpoints.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET/POST | `/companies/` | List/create companies |
| GET/PUT/PATCH/DELETE | `/companies/<slug>/` | Company detail |
| GET/POST | `/products/` | List/create products |
| GET/PUT/PATCH/DELETE | `/products/<id>/` | Product detail |
| GET/POST | `/orders/drafts/` | Draft orders |
| GET/PUT/PATCH/DELETE | `/orders/drafts/<id>/` | Draft order detail |
| GET/POST | `/orders/` | Orders |
| GET/PUT/PATCH/DELETE | `/orders/<id>/` | Order detail |
| GET/POST | `/orders/shipping-labels/` | Shipping labels |
| GET | `/orders/abandoned-checkouts/` | Abandoned checkouts |
| GET | `/notifications/` | Notifications (authenticated) |
| GET/POST | `/subscriptions/plans/` | List plans (public) / subscriptions (auth) |
| POST | `/payments/stripe/checkout/` | Create Stripe Checkout session |
| POST | `/payments/flutterwave/initialize/` | Initialize Flutterwave payment |
| GET/POST | `/messages/threads/` | Threads |
| GET | `/messages/threads/<id>/` | Thread detail |
| GET/POST | `/messages/threads/<id>/messages/` | Messages in thread |
| POST | `/contact/` | Contact form (no auth) |
| GET/PUT/PATCH | `/auth/me/` | Current user profile |
| POST | `/auth/me/password/` | Change password |

## Filtering & ordering

- **Companies:** `?search=...`, `?country=...`, `?verification_status=...`, `?ordering=-created_at`
- **Products:** `?search=...`, `?company=...`, `?available=...`, `?color=...`, `?ordering=-price`
- **Orders:** `?company=...`, `?status=...`

## WebSocket (messages)

Connect to: `ws://localhost:8000/ws/chat/<thread_id>/` (or `/ws/chat/` for lobby).

Send JSON: `{ "action": "message", "body": "Hello" }`.  
Receive: `{ "type": "message", "body": "...", "sender_id": ... }`.
