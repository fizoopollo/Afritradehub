# Afrify Backend

Afrify is a drag-and-drop store builder service that allows users to create and publish online stores.

## Setup

### Prerequisites
- Python 3.11+
- pip

### Installation

1. Create and activate virtual environment:
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run migrations:
```bash
python manage.py migrate
```

4. Create superuser (optional):
```bash
python manage.py createsuperuser
```

5. Start development server:
```bash
python manage.py runserver 8001
```

## API Endpoints

### Authentication
- `POST /api/token/` - Get JWT token
- `POST /api/token/refresh/` - Refresh JWT token

### Stores
- `GET /api/stores/` - List user's stores
- `POST /api/stores/` - Create new store
- `GET /api/stores/{slug}/` - Get store details
- `PUT /api/stores/{slug}/` - Update store
- `POST /api/stores/{slug}/publish/` - Publish store
- `POST /api/stores/{slug}/unpublish/` - Unpublish store

### Templates
- `GET /api/stores/templates/` - List all templates
- `GET /api/stores/templates/{slug}/` - Get template details
- `GET /api/stores/templates/by_category/?category=fashion` - Get templates by category

### Design
- `GET /api/stores/designs/` - Get user's store design
- `PUT /api/stores/designs/` - Update store design
- `POST /api/stores/designs/{store_slug}/preview/` - Get design preview

## Publishing Options

Afrify supports multiple publishing options:

1. **Afrify Platform**: `store.afrify.store` - Hosted on Afrify
2. **Custom Domain**: Your own domain - Self-hosted or custom
3. **Both**: Available on both platforms

## Integration with Afritrade

When a user publishes their Afrify store to the Afritrade B2B platform:
- The store information is synced to Afritrade
- The user's Afritrade account is linked
- The store appears in the B2B directory
- Products can be listed on Afritrade alongside your store

## Development

### Models

- **Store**: User's online store with publishing options
- **StoreTemplate**: Pre-built templates for different industries
- **StoreDesign**: Customization settings for each store
- **PublishHistory**: Track publishing attempts and status

### Authentication

Afrify integrates with Afritrade's auth system:
- Users with existing Afritrade accounts can sign in directly
- New users can register via Google or business email
- JWT tokens are used for API authentication
