import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageRedirect } from "@/components/LanguageRedirect";
import Index from "./pages/Index";
import B2B from "./pages/B2B";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Redirect root to default language */}
            <Route path="/" element={<Navigate to="/de" replace />} />
            
            {/* Language-specific routes */}
            <Route path="/:lang" element={<LanguageRedirect><Index /></LanguageRedirect>} />
            <Route path="/:lang/b2b" element={<LanguageRedirect><B2B /></LanguageRedirect>} />
            
            {/* Legal pages (German only) */}
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/:lang/impressum" element={<Impressum />} />
            <Route path="/:lang/datenschutz" element={<Datenschutz />} />
            
            {/* Backward compatibility - redirect old routes */}
            <Route path="/b2b" element={<Navigate to="/de/b2b" replace />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
