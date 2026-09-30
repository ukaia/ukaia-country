import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import QuoteRedirect from "./pages/QuoteRedirect";
import ThankYou from "./pages/ThankYou";
import Book from "./pages/Book";
import Privacy from "./pages/Privacy";
import SiteFooter from "./components/SiteFooter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="flex min-h-screen flex-col bg-background">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/quote" element={<QuoteRedirect />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/book" element={<Book />} />
              <Route path="/privacy" element={<Privacy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <SiteFooter />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
