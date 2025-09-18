import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Analytics from "@/components/analytics/Analytics";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { CookieConsentProvider } from "@/components/privacy/CookieConsent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import Docs from "./pages/Docs";
import Integrations from "./pages/Integrations";
import APIStatus from "./pages/APIStatus";
import Press from "./pages/Press";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import DoNotSellShare from "./pages/DoNotSellShare";
import Security from "./pages/Security";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ErrorBoundary>
        <TooltipProvider>
          <CookieConsentProvider>
            <BrowserRouter>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/integrations" element={<Integrations />} />
                    <Route path="/api-status" element={<APIStatus />} />
                    <Route path="/press" element={<Press />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/do-not-sell-or-share" element={<DoNotSellShare />} />
                    <Route path="/security" element={<Security />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
              <Analytics />
              <Toaster />
            </BrowserRouter>
          </CookieConsentProvider>
        </TooltipProvider>
      </ErrorBoundary>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
