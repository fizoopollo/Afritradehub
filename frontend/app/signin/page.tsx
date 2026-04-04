"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageLayout } from "@/components/landing/PageLayout";
import { ArrowRight, Mail, Lock, ArrowLeft } from "lucide-react";

export default function SigninPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "demo@afrify.com",
    password: "demo123456",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
    if (!formData.email || !formData.password) {
      setError("Please enter email and password");
      setLoading(false);
      return;
    }

    try {
      // For demo purposes, save to localStorage and redirect
      const userData = {
        email: formData.email,
        name: formData.email.split("@")[0],
        storeName: "My Afrify Store",
        loggedInAt: new Date().toISOString(),
      };
      
      localStorage.setItem("afrify_user", JSON.stringify(userData));
      localStorage.setItem("afrify_token", "demo-token-" + Date.now());

      setLoading(false);

      // Redirect to dashboard
      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    } catch (err) {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  const handleDemoSignin = () => {
    // Quick demo login
    const userData = {
      email: "demo@afrify.com",
      name: "demo",
      storeName: "Demo Store",
      loggedInAt: new Date().toISOString(),
    };
    
    localStorage.setItem("afrify_user", JSON.stringify(userData));
    localStorage.setItem("afrify_token", "demo-token-" + Date.now());
    
    router.push("/dashboard");
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
              Welcome Back to <span className="text-gradient-orange">Afrify</span>
            </h1>
            <p className="text-muted-foreground">
              Sign in to manage your online store
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 mb-4"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
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

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
                {!loading && <ArrowRight className="h-5 w-5 ml-2" />}
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-card text-muted-foreground">or</span>
                </div>
              </div>

              {/* Demo Button */}
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full"
                onClick={handleDemoSignin}
              >
                Quick Demo Login
              </Button>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/signup" className="font-semibold text-secondary hover:underline">
                  Sign Up
                </Link>
              </p>

              {/* Forgot Password */}
              <p className="text-center text-xs text-muted-foreground">
                <Link href="/forgot-password" className="hover:underline">
                  Forgot your password?
                </Link>
              </p>
            </form>
          </motion.div>

          {/* Demo Credentials Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary/5 border border-secondary/20 rounded-lg p-4 text-center text-sm"
          >
            <p className="font-semibold mb-2">Testing the app?</p>
            <p className="text-muted-foreground mb-3">Use demo credentials:</p>
            <p className="font-mono text-xs">
              Email: <span className="text-secondary">demo@afrify.com</span>
            </p>
            <p className="font-mono text-xs mb-3">
              Password: <span className="text-secondary">demo123456</span>
            </p>
            <p className="text-xs text-muted-foreground">Or click "Quick Demo Login"</p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
