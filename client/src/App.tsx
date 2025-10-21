import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import PanneauxPhotovoltaiques from "@/pages/PanneauxPhotovoltaiques";
import PompesChaleur from "@/pages/PompesChaleur";
import BatteriesStockage from "@/pages/BatteriesStockage";
import BornesRecharge from "@/pages/BornesRecharge";
import ElectriciteGenerale from "@/pages/ElectriciteGenerale";
import VMC from "@/pages/VMC";
import DemandeDevis from "@/pages/DemandeDevis";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/panneaux-photovoltaiques" element={<PanneauxPhotovoltaiques />} />
              <Route path="/pompes-a-chaleur" element={<PompesChaleur />} />
              <Route path="/batteries-stockage" element={<BatteriesStockage />} />
              <Route path="/bornes-recharge" element={<BornesRecharge />} />
              <Route path="/electricite-generale" element={<ElectriciteGenerale />} />
              <Route path="/vmc" element={<VMC />} />
              <Route path="/demande-devis" element={<DemandeDevis />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
