import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TradehubDirectory from "./pages/TradehubDirectory";
import AfrifyLanding from "./pages/AfrifyLanding";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import PricingPage from "./pages/Pricing";
import AboutPage from "./pages/About";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tradehub" element={<TradehubDirectory />} />
          <Route path="/afrify" element={<AfrifyLanding />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Placeholder routes for footer links */}
          <Route path="/careers" element={<ComingSoon />} />
          <Route path="/contact" element={<ComingSoon />} />
          <Route path="/docs" element={<ComingSoon />} />
          <Route path="/help" element={<ComingSoon />} />
          <Route path="/blog" element={<ComingSoon />} />
          <Route path="/privacy" element={<ComingSoon />} />
          <Route path="/terms" element={<ComingSoon />} />
          <Route path="/cookies" element={<ComingSoon />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
