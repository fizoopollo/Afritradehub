"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageLayout } from "@/components/landing/PageLayout";
import { ArrowRight, Mail, Lock, User, Store, ArrowLeft } from "lucide-react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    storeName: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validation
    if (!formData.fullName || !formData.email || !formData.password || !formData.storeName) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      // Create user account
      const response = await fetch("http://172.20.20.20:8000/api/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.email,
          email: formData.email,
          password: formData.password,
          first_name: formData.fullName,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.detail || "Signup failed. Please try again.");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setLoading(false);

      // Redirect to store builder in 2 seconds
      setTimeout(() => {
        window.location.href = "/afrify/builder";
      }, 2000);
    } catch (err) {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="container max-w-md">
          <Link href="/tradehub" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-secondary transition-colors px-4 py-2 rounded-lg bg-muted/50 hover:bg-muted border border-border mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Afritrade
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-black mb-3">
              Create Your <span className="text-gradient-orange">Afrify Store</span>
            </h1>
            <p className="text-muted-foreground">
              Join thousands of African entrepreneurs building successful online stores
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Store Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">Store Name</label>
                <div className="relative">
                  <Store className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    name="storeName"
                    value={formData.storeName}
                    onChange={handleChange}
                    placeholder="My Awesome Store"
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                  {error}
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 text-sm">
                  ✓ Account created! Redirecting to builder...
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={loading || success}
              >
                {loading ? "Creating Account..." : "Start Building Free"}
                {!loading && <ArrowRight className="h-5 w-5 ml-2" />}
              </Button>

              {/* Sign In Link */}
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/signin" className="font-semibold text-secondary hover:underline">
                  Sign In
                </Link>
              </p>

              {/* Terms */}
              <p className="text-center text-xs text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link href="/terms" className="underline hover:no-underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline hover:no-underline">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center text-sm"
          >
            <p className="text-muted-foreground mb-6">Everything you need to launch:</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-secondary/5">✓ Store Builder</div>
              <div className="p-3 rounded-lg bg-secondary/5">✓ 20+ Templates</div>
              <div className="p-3 rounded-lg bg-secondary/5">✓ Product Upload</div>
              <div className="p-3 rounded-lg bg-secondary/5">✓ Mobile Payments</div>
              <div className="p-3 rounded-lg bg-secondary/5">✓ Analytics</div>
              <div className="p-3 rounded-lg bg-secondary/5">✓ Support</div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
