"""
Seed example companies and products for development.
Run: python manage.py seed_data
"""
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from apps.companies.models import Company
from apps.products.models import Product
from apps.subscriptions.models import Plan

User = get_user_model()


class Command(BaseCommand):
    help = "Seed example companies and products"

    def handle(self, *args, **options):
        # Create or get user for ownership
        user, _ = User.objects.get_or_create(
            email="admin@afritradehub.com",
            defaults={"username": "admin", "is_staff": True, "is_superuser": True},
        )
        if not user.password or user.password == "!":
            user.set_password("admin")
            user.save()

        # Plans
        for slug, name, price, features in [
            ("starter", "Starter", 29, ["Up to 10 products", "Basic support"]),
            ("pro", "Pro", 99, ["Unlimited products", "Priority support", "Analytics"]),
            ("enterprise", "Enterprise", 299, ["Everything in Pro", "Dedicated manager", "API access"]),
        ]:
            Plan.objects.get_or_create(
                slug=slug,
                defaults={
                    "name": name,
                    "price": price,
                    "currency": "USD",
                    "interval": "month",
                    "features": features,
                    "is_active": True,
                },
            )
        self.stdout.write("Plans created.")

        # Companies
        companies_data = [
            {"name": "East Africa Coffee Co", "country": "Kenya", "city": "Nairobi", "slug": "east-africa-coffee"},
            {"name": "West Africa Cocoa Ltd", "country": "Ghana", "city": "Accra", "slug": "west-africa-cocoa"},
            {"name": "Southern Textiles", "country": "South Africa", "city": "Cape Town", "slug": "southern-textiles"},
        ]
        created_companies = []
        for c in companies_data:
            company, created = Company.objects.get_or_create(
                slug=c["slug"],
                defaults={
                    "name": c["name"],
                    "description": f"Verified African business: {c['name']}.",
                    "email": f"contact@{c['slug']}.com",
                    "country": c["country"],
                    "city": c["city"],
                    "verification_status": "verified" if c["slug"] != "southern-textiles" else "pending",
                    "created_by": user,
                },
            )
            if created:
                created_companies.append(company)

        self.stdout.write(f"Companies: {len(created_companies)} created.")

        # Products (for first two companies)
        product_data = [
            ("Arabica Roast", "coffee-arabica", "99.00", "Brown", 1),
            ("Robusta Blend", "coffee-robusta", "79.00", "Brown", 1),
            ("Premium Cocoa", "cocoa-premium", "149.00", "Brown", 2),
            ("Cotton Fabric Roll", "fabric-cotton", "45.00", "White", 3),
        ]
        created_products = 0
        for name, slug, price, color, company_idx in product_data:
            company = Company.objects.get(slug=companies_data[company_idx - 1]["slug"])
            _, created = Product.objects.get_or_create(
                company=company,
                slug=slug,
                defaults={
                    "name": name,
                    "description": f"Product: {name}",
                    "price": price,
                    "quantity": 100,
                    "available": True,
                    "color": color,
                },
            )
            if created:
                created_products += 1

        self.stdout.write(f"Products: {created_products} created.")
        self.stdout.write(self.style.SUCCESS("Seed complete."))
