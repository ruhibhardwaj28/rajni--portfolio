import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IntroLoader from "./components/IntroLoader";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 40,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showIntro ? (
          <IntroLoader onAnimationComplete={() => setShowIntro(false)} />
        ) : (
          <div className="transition-opacity duration-1000 opacity-100">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
