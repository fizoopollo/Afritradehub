import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Globe, ArrowRight } from "lucide-react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-orange-gradient items-center justify-center p-12">
        <div className="max-w-md text-secondary-foreground">
          <div className="h-12 w-12 rounded-xl bg-secondary-foreground/20 flex items-center justify-center mb-8">
            <Globe className="h-7 w-7" />
          </div>
          <h2 className="text-4xl font-black mb-4">Join Africa's Trade Revolution</h2>
          <p className="text-secondary-foreground/70 text-lg leading-relaxed">
            Create your account and start trading with verified businesses across 34 African countries.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm"
        >
          <div className="mb-8">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="h-8 w-8 rounded-lg bg-hero-gradient flex items-center justify-center">
                <Globe className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Afritrade</span>
            </Link>
            <h1 className="text-2xl font-black mb-2">Create your account</h1>
            <p className="text-muted-foreground text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link>
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} className="mt-1.5 h-11" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1.5 h-11" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1.5 h-11" />
            </div>
            <Button variant="hero" className="w-full h-11">
              Create Account <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <p className="mt-6 text-xs text-center text-muted-foreground">
            By signing up, you agree to our{" "}
            <Link to="/terms" className="text-primary hover:underline">Terms</Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
              <div className="relative flex justify-center text-xs"><span className="px-2 bg-background text-muted-foreground">or sign up with</span></div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-11">Google</Button>
              <Button variant="outline" className="h-11">Facebook</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
