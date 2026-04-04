"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiGet } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, BadgeCheck, Pencil, MoreHorizontal, Filter } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Company {
  id: number;
  name: string;
  slug: string;
  logo: string | null;
  country: string;
  city: string;
  verification_status: string;
  created_at: string;
}

interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export default function CompaniesPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: [
      "companies",
      { search, country, status },
    ],
    queryFn: () => {
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      if (country) params.set("country", country);
      if (status) params.set("verification_status", status);
      return apiGet<PaginatedResponse<Company>>(
        `/companies/?${params.toString()}`
      );
    },
  });

  const companies = data?.results ?? [];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Companies</h1>
          <p className="text-muted-foreground">
            Verified African businesses. Filter and manage company profiles.
          </p>
        </div>
        <Button asChild>
          <Link href="/companies/new">Add company</Link>
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Input
          placeholder="Search companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
          aria-label="Search companies"
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
          <div className="flex flex-wrap gap-2">
            <Input
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-40"
            />
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="h-10 rounded-md border border-input bg-background px-3 text-sm"
              aria-label="Verification status"
            >
              <option value="">All statuses</option>
              <option value="pending">Pending</option>
              <option value="verified">Verified</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        )}
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" aria-hidden />
          <span className="sr-only">Loading companies…</span>
        </div>
      )}
      {error && (
        <div className="rounded-md border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          Failed to load companies. You may need to start the backend or log in.
        </div>
      )}
      {!isLoading && !error && (
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm" role="table">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-3 font-medium">Company</th>
                <th className="text-left p-3 font-medium">Location</th>
                <th className="text-left p-3 font-medium">Status</th>
                <th className="text-right p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {companies.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-muted-foreground">
                    No companies found. Add one to get started.
                  </td>
                </tr>
              ) : (
                companies.map((c) => (
                  <tr key={c.id} className="border-b border-border hover:bg-muted/30">
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium">{c.name}</span>
                      </div>
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {[c.city, c.country].filter(Boolean).join(", ") || "—"}
                    </td>
                    <td className="p-3">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
                          c.verification_status === "verified" &&
                            "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
                          c.verification_status === "pending" &&
                            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
                          c.verification_status === "rejected" &&
                            "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                        )}
                      >
                        {c.verification_status === "verified" && (
                          <BadgeCheck className="h-3 w-3" aria-hidden />
                        )}
                        {c.verification_status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="icon" aria-label={`Edit ${c.name}`} asChild>
                          <Link href={`/companies/${c.slug}/edit`}>
                            <Pencil className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" aria-label={`More actions for ${c.name}`}>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
