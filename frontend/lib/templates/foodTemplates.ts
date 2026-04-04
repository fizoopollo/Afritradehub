export type FoodTemplate = {
  slug: string;
  name: string;
  image: string;
  price: string;
  rating: string;
  tag: string;
  gradient: string;
  accent: string;
  tagline: string;
  description: string;
  products: { name: string; desc: string; price: string }[];
  testimonials: { name: string; text: string }[];
  stats: { value: string; label: string }[];
};

export const foodTemplates: FoodTemplate[] = [
  {
    slug: "farm-table",
    name: "Farm Table",
    image: "/assets/food/farmtable.jpg",
    price: "$370",
    rating: "97%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #8b4513 0%, #d2691e 50%, #daa520 100%)",
    accent: "amber",
    tagline: "Farm to Table Dining",
    description: "Organic, locally-sourced food and meal delivery from sustainable farms.",
    products: [
      { name: "Organic Vegetable Box", desc: "Weekly assorted organic vegetables from local farms.", price: "$28" },
      { name: "Grass-Fed Beef Pack", desc: "Premium grass-fed beef cuts from local ranches.", price: "$65" },
      { name: "Fresh Egg Dozen", desc: "Free-range farm eggs collected daily.", price: "$8" },
      { name: "Farm Fresh Meal Kit", desc: "Complete meal ingredients with recipes.", price: "$45" },
    ],
    testimonials: [
      { name: "Foodie F.", text: "The freshness and quality is incomparable." },
      { name: "Health Conscious H.", text: "Know exactly where my food comes from. Love it." },
    ],
    stats: [
      { value: "12K+", label: "Weekly Deliveries" },
      { value: "97%", label: "Satisfaction" },
    ],
  },
  {
    slug: "spice-market",
    name: "Spice Market",
    image: "/assets/food/spicemarket.jpg",
    price: "$340",
    rating: "96%",
    tag: "",
    gradient: "linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffbb33 100%)",
    accent: "orange",
    tagline: "Global Flavors & Spices",
    description: "Premium spices, herbs, and international ingredients from around the world.",
    products: [
      { name: "Saffron Threads", desc: "Premium Persian saffron threads, hand-collected.", price: "$24" },
      { name: "Exotic Spice Blend", desc: "Curated blend of rare global spices.", price: "$18" },
      { name: "International Herbs Kit", desc: "Variety of fresh-dried herbs from different regions.", price: "$32" },
      { name: "Truffle Oil Premium", desc: "Black truffle-infused gourmet oil.", price: "$42" },
    ],
    testimonials: [
      { name: "Chef C.", text: "Best spice quality I've found anywhere." },
      { name: "Home Cook H.", text: "Transforms ordinary cooking into gourmet meals." },
    ],
    stats: [
      { value: "8.5K+", label: "Customers Served" },
      { value: "96%", label: "Satisfaction" },
    ],
  },
  {
    slug: "artisan-bakery",
    name: "Artisan Bakery",
    image: "/assets/food/artisanbakery.jpg",
    price: "$380",
    rating: "97%",
    tag: "PREMIUM",
    gradient: "linear-gradient(135deg, #d2b48c 0%, #daa520 50%, #8b4513 100%)",
    accent: "amber",
    tagline: "Fresh Baked Goodness",
    description: "Artisanal breads, pastries, and baked goods made fresh daily with quality ingredients.",
    products: [
      { name: "Sourdough Loaf", desc: "Traditional sourdough baked daily in wood oven.", price: "$6" },
      { name: "Croissants Assortment", desc: "Fresh French-style croissants in multiple flavors.", price: "$14/half-dozen" },
      { name: "Whole Grain Bread", desc: "Nutritious whole grain bread with seeds.", price: "$5" },
      { name: "Custom Cake Orders", desc: "Custom cakes for special occasions and events.", price: "From $75" },
    ],
    testimonials: [
      { name: "Bread Lover B.", text: "The taste of real artisanal baking." },
      { name: "Event Planner E.", text: "Our cakes are always show-stoppers." },
    ],
    stats: [
      { value: "500+", label: "Daily Customers" },
      { value: "97%", label: "Satisfaction" },
    ],
  },
];

export function getFoodTemplateBySlug(slug: string): FoodTemplate | undefined {
  return foodTemplates.find((t) => t.slug === slug);
}
