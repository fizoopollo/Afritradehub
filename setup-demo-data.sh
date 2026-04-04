#!/bin/bash
# Setup script to create test accounts and sample data

echo "========================================="
echo "Afritrade Hub - Testing & Demo Setup"
echo "========================================="

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Afritrade Backend Setup
echo -e "${YELLOW}Setting up Afritrade...${NC}"
cd "c:\Users\fezza\Afritradehub 2\backend"

# Create superuser for Afritrade (optional)
echo "Creating Afritrade superuser..."
python manage.py shell <<EOF
from django.contrib.auth.models import User
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@afritrade.com', 'admin123456')
    print("Afritrade superuser created: admin / admin123456")
else:
    print("Afritrade superuser already exists")
EOF

# Afrify Backend Setup
echo -e "${YELLOW}Setting up Afrify...${NC}"
cd "c:\Users\fezza\Afritradehub 2\afrify-backend"

# Create superuser for Afrify
echo "Creating Afrify superuser..."
python manage.py shell <<EOF
from django.contrib.auth.models import User
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@afrify.com', 'admin123456')
    print("Afrify superuser created: admin / admin123456")
else:
    print("Afrify superuser already exists")
EOF

# Create sample templates for Afrify
echo "Creating sample store templates..."
python manage.py shell <<EOF
from stores.models import StoreTemplate

templates_data = [
    {
        'name': 'Fashion Forward',
        'slug': 'fashion-forward',
        'category': 'fashion',
        'description': 'Modern fashion store template with lookbook and product showcase',
        'price': 0.00,
        'rating': 100,
        'features': ['Product Grid', 'Color Swatches', 'Size Guide', 'Wishlist'],
        'is_popular': True
    },
    {
        'name': 'Fresh Market',
        'slug': 'fresh-market',
        'category': 'food',
        'description': 'Vibrant grocery store with organic product focus',
        'price': 0.00,
        'rating': 98,
        'features': ['Category Filters', 'Bulk Orders', 'Subscription Option', 'Recipe Ideas'],
        'is_popular': True
    },
    {
        'name': 'TechStore Pro',
        'slug': 'techstore-pro',
        'category': 'electronics',
        'description': 'Modern electronics store with specs and comparison tools',
        'price': 100.00,
        'rating': 99,
        'features': ['Tech Specs', 'Comparison', 'Reviews', 'Warranty Info'],
        'is_popular': False
    },
]

for template_data in templates_data:
    defaults = {k: v for k, v in template_data.items() if k not in ['name', 'slug']}
    StoreTemplate.objects.get_or_create(
        name=template_data['name'],
        slug=template_data['slug'],
        defaults=defaults
    )

print(f"Created {StoreTemplate.objects.count()} store templates")
EOF

echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}Setup Complete!${NC}"
echo -e "${GREEN}=========================================${NC}"
echo ""
echo "Test Credentials:"
echo "  Afritrade: admin / admin123456"
echo "  Afrify: admin / admin123456"
echo ""
echo "Admin Panels:"
echo "  Afritrade: http://localhost:8000/admin"
echo "  Afrify: http://localhost:8001/admin"
echo ""
