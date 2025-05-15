
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutDPMC from "./pages/AboutDPMC";
import VisionMission from "./pages/VisionMission";
import ChairmanMessage from "./pages/ChairmanMessage";
import PrincipalMessage from "./pages/PrincipalMessage";
import EngineeringTrades from "./pages/EngineeringTrades";
import NonEngineeringTrades from "./pages/NonEngineeringTrades";
import AdmissionProcess from "./pages/AdmissionProcess";
import FeeStructure from "./pages/FeeStructure";
import ApplyOnline from "./pages/ApplyOnline";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-dpmc" element={<AboutDPMC />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/chairman-message" element={<ChairmanMessage />} />
          <Route path="/principal-message" element={<PrincipalMessage />} />
          <Route path="/engineering-trades" element={<EngineeringTrades />} />
          <Route path="/non-engineering-trades" element={<NonEngineeringTrades />} />
          <Route path="/admission-process" element={<AdmissionProcess />} />
          <Route path="/fee-structure" element={<FeeStructure />} />
          <Route path="/apply-online" element={<ApplyOnline />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
