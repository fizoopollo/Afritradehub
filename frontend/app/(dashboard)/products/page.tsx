"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiGet } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package, Plus, Filter, Upload } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Product {
  id: number;
  name: string;
  slug: string;
  price: string;
  compare_at_price: string | null;
  quantity: number;
  available: boolean;
  color: string;
  image: string | null;
  created_at: string;
}

interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [available, setAvailable] = useState<string>("");
  const [color, setColor] = useState("");
  const [sort, setSort] = useState("-created_at");
  const [filterOpen, setFilterOpen] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", { search, available, color, sort }],
    queryFn: () => {
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      if (available === "true") params.set("available", "true");
      if (available === "false") params.set("available", "false");
      if (color) params.set("color", color);
      if (sort) params.set("ordering", sort);
      return apiGet<PaginatedResponse<Product>>(`/products/?${params.toString()}`);
    },
  });

  const products = data?.results ?? [];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">
            Add, import, and manage products. Filter by availability and price.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/products/import" className="gap-2">
              <Upload className="h-4 w-4" />
              Import
            </Link>
          </Button>
          <Button asChild>
            <Link href="/products/new" className="gap-2">
              <Plus className="h-4 w-4" />
              Add product
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
          aria-label="Search products"
        />
        <Button
          variant="outline"
          size="icon"
          onClick={() => setFilterOpen(!filterOpen)}
          aria-expanded={filterOpen}
          aria-label="Toggle filters"
        >
          <Filter className="h-4 w-4" />
        </Button>
        {filterOpen && (
          <div className="flex flex-wrap gap-2 items-center">
            <select
              value={available}
              onChange={(e) => setAvailable(e.target.value)}
              className="h-10 rounded-md border border-input bg-background px-3 text-sm"
              aria-label="Availability"
            >
              <option value="">All</option>
              <option value="true">Available</option>
              <option value="false">Unavailable</option>
            </select>
            <Input
              placeholder="Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-28"
            />
          </div>
        )}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="h-10 rounded-md border border-input bg-background px-3 text-sm"
          aria-label="Sort by"
        >
          <option value="-created_at">Newest</option>
          <option value="created_at">Oldest</option>
          <option value="price">Price low</option>
          <option value="-price">Price high</option>
          <option value="name">Name A–Z</option>
          <option value="-name">Name Z–A</option>
        </select>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" aria-hidden />
          <span className="sr-only">Loading products…</span>
        </div>
      )}
      {error && (
        <div className="rounded-md border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          Failed to load products. Start the backend or check API URL.
        </div>
      )}
      {!isLoading && !error && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.length === 0 ? (
            <div className="col-span-full rounded-lg border border-dashed border-border p-12 text-center text-muted-foreground">
              No products found. Add or import products to get started.
            </div>
          ) : (
            products.map((p) => (
              <div
                key={p.id}
                className="rounded-lg border border-border bg-card overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-square bg-muted flex items-center justify-center">
                  {p.image ? (
                    <img src={p.image} alt="" className="object-cover w-full h-full" />
                  ) : (
                    <Package className="h-12 w-12 text-muted-foreground" />
                  )}
                </div>
                <div className="p-3">
                  <p className="font-medium truncate">{p.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {p.price} {p.compare_at_price && <span className="line-through">{p.compare_at_price}</span>}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span
                      className={cn(
                        "text-xs",
                        p.available ? "text-green-600" : "text-muted-foreground"
                      )}
                    >
                      {p.available ? "In stock" : "Out of stock"} ({p.quantity})
                    </span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/products/${p.id}`}>Edit</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
