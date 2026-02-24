import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search, MapPin, Filter, ShieldCheck, Star, Building2,
  ChevronDown, Globe, Package
} from "lucide-react";

const industries = ["All Industries", "Agriculture", "Manufacturing", "Technology", "Textiles", "Energy", "Mining", "Food & Beverage", "Construction"];
const countries = ["All Countries", "Nigeria", "Kenya", "South Africa", "Ghana", "Tanzania", "Ethiopia", "Egypt", "Morocco"];

const mockCompanies = [
  { id: 1, name: "Lagos Textiles Co.", industry: "Textiles", country: "Nigeria", city: "Lagos", verified: true, premium: true, rating: 4.8, reviews: 127, products: 45, description: "Premium African fabrics and textiles manufacturer with 20+ years of experience." },
  { id: 2, name: "Nairobi Solar Solutions", industry: "Energy", country: "Kenya", city: "Nairobi", verified: true, premium: false, rating: 4.6, reviews: 89, products: 23, description: "Leading solar energy equipment supplier across East Africa." },
  { id: 3, name: "GhanaGreen Exports", industry: "Agriculture", country: "Ghana", city: "Accra", verified: true, premium: true, rating: 4.9, reviews: 203, products: 67, description: "Organic cocoa, shea butter, and agricultural products for global markets." },
  { id: 4, name: "Cape Tech Industries", industry: "Technology", country: "South Africa", city: "Cape Town", verified: true, premium: false, rating: 4.5, reviews: 56, products: 18, description: "Cutting-edge tech hardware and IoT solutions for African businesses." },
  { id: 5, name: "Addis Construction Materials", industry: "Construction", country: "Ethiopia", city: "Addis Ababa", verified: false, premium: false, rating: 4.2, reviews: 34, products: 31, description: "Quality construction materials and building supplies." },
  { id: 6, name: "Cairo Food Processing", industry: "Food & Beverage", country: "Egypt", city: "Cairo", verified: true, premium: true, rating: 4.7, reviews: 156, products: 52, description: "Leading food processing and packaging company in North Africa." },
];

export default function TradehubDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");

  const filtered = mockCompanies.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === "All Industries" || c.industry === selectedIndustry;
    const matchesCountry = selectedCountry === "All Countries" || c.country === selectedCountry;
    return matchesSearch && matchesIndustry && matchesCountry;
  });

  return (
    <PageLayout>
      {/* Header */}
      <section className="bg-foreground py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-black text-background mb-4">
              Find Trusted <span className="text-gradient-primary">African Suppliers</span>
            </h1>
            <p className="text-background/60 text-lg">
              Browse verified businesses across 34 African countries
            </p>
          </div>

          {/* Search */}
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search companies, products, or industries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 pl-12 text-base rounded-xl bg-background border-none"
                />
              </div>
              <Button variant="hero" size="lg" className="h-14 px-8">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 shrink-0 space-y-6">
            <div>
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filters
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-xs text-muted-foreground font-medium mb-1.5 block">Industry</label>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm"
                  >
                    {industries.map((i) => <option key={i}>{i}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground font-medium mb-1.5 block">Country</label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm"
                  >
                    {countries.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="verified" className="rounded border-border" />
                  <label htmlFor="verified" className="text-sm">Verified only</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="premium" className="rounded border-border" />
                  <label htmlFor="premium" className="text-sm">Premium suppliers</label>
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{filtered.length}</span> companies found
              </p>
              <select className="h-9 px-3 rounded-lg border border-border bg-background text-sm">
                <option>Most Relevant</option>
                <option>Highest Rated</option>
                <option>Most Reviews</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="space-y-4">
              {filtered.map((company, i) => (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Avatar */}
                    <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-lg">{company.name}</h3>
                            {company.verified && (
                              <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-xs">
                                <ShieldCheck className="h-3 w-3 mr-1" /> Verified
                              </Badge>
                            )}
                            {company.premium && (
                              <Badge className="bg-accent/20 text-accent-foreground border-none text-xs">
                                <Star className="h-3 w-3 mr-1" /> Premium
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1"><Globe className="h-3.5 w-3.5" />{company.industry}</span>
                            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{company.city}, {company.country}</span>
                            <span className="flex items-center gap-1"><Package className="h-3.5 w-3.5" />{company.products} products</span>
                          </div>
                        </div>
                        <div className="text-right shrink-0 hidden sm:block">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-accent text-accent" />
                            <span className="font-bold">{company.rating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{company.reviews} reviews</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{company.description}</p>
                      <div className="mt-4 flex gap-2">
                        <Button size="sm" variant="hero">Contact Supplier</Button>
                        <Button size="sm" variant="outline">View Profile</Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
