import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import MentalHealth from "./pages/MentalHealth";
import Neurological from "./pages/Neurological";
import ChronicPain from "./pages/ChronicPain";
import Metabolic from "./pages/Metabolic";
import Method from "./pages/Method";
import Science from "./pages/Science";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import Anxiety from "./pages/Anxiety";
import Depression from "./pages/Depression";
import PTSD from "./pages/PTSD";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <FloatingWhatsApp />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/neurological" element={<Neurological />} />
          <Route path="/chronic-pain" element={<ChronicPain />} />
          <Route path="/metabolic" element={<Metabolic />} />
          <Route path="/method" element={<Method />} />
          <Route path="/science" element={<Science />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/cases" element={<CaseStudies />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/anxiety" element={<Anxiety />} />
          <Route path="/depression" element={<Depression />} />
          <Route path="/ptsd" element={<PTSD />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
