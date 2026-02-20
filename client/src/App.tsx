import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import PanneauxPhotovoltaiques from "@/pages/PanneauxPhotovoltaiques";
import PompesChaleur from "@/pages/PompesChaleur";
import BatteriesStockage from "@/pages/BatteriesStockage";
import BornesRecharge from "@/pages/BornesRecharge";
import ElectriciteGenerale from "@/pages/ElectriciteGenerale";
import VMC from "@/pages/VMC";
import Isolation from "@/pages/Isolation";
import Platrerie from "@/pages/Platrerie";
import Menuiseries from "@/pages/Menuiseries";
import Couverture from "@/pages/Couverture";
import MaitriseOeuvre from "@/pages/MaitriseOeuvre";
import IsolationCombles from "@/pages/IsolationCombles";
import DemandeDevis from "@/pages/DemandeDevis";
import Blog from "@/pages/Blog";
import BlogArticle from "@/pages/BlogArticle";
import MentionsLegales from "@/pages/MentionsLegales";

// Pages locales SEO (landing pages)
import PanneauxSolairesLaRochelle from "@/pages/local/PanneauxSolairesLaRochelle";
import PanneauxSolairesRochefort from "@/pages/local/PanneauxSolairesRochefort";
import PanneauxSolairesSaintes from "@/pages/local/PanneauxSolairesSaintes";
import PompeChaleurLaRochelle from "@/pages/local/PompeChaleurLaRochelle";
import PompeChaleurRochefort from "@/pages/local/PompeChaleurRochefort";
import PompeChaleurSaintes from "@/pages/local/PompeChaleurSaintes";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/panneaux-photovoltaiques" element={<PanneauxPhotovoltaiques />} />
              <Route path="/pompes-a-chaleur" element={<PompesChaleur />} />
              <Route path="/batteries-stockage" element={<BatteriesStockage />} />
              <Route path="/bornes-recharge" element={<BornesRecharge />} />
              <Route path="/electricite-generale" element={<ElectriciteGenerale />} />
              <Route path="/vmc" element={<VMC />} />
              <Route path="/isolation" element={<Isolation />} />
              <Route path="/isolation-combles" element={<IsolationCombles />} />
              <Route path="/platrerie" element={<Platrerie />} />
              <Route path="/menuiseries" element={<Menuiseries />} />
              <Route path="/couverture" element={<Couverture />} />
              <Route path="/maitrise-oeuvre" element={<MaitriseOeuvre />} />
              <Route path="/demande-devis" element={<DemandeDevis />} />
              
              {/* Blog */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:articleId" element={<BlogArticle />} />
              
              {/* Pages locales SEO - Panneaux Solaires */}
              <Route path="/panneaux-solaires-la-rochelle" element={<PanneauxSolairesLaRochelle />} />
              <Route path="/panneaux-solaires-rochefort" element={<PanneauxSolairesRochefort />} />
              <Route path="/panneaux-solaires-saintes" element={<PanneauxSolairesSaintes />} />
              
              {/* Pages locales SEO - Pompes à Chaleur */}
              <Route path="/pompe-a-chaleur-la-rochelle" element={<PompeChaleurLaRochelle />} />
              <Route path="/pompe-a-chaleur-rochefort" element={<PompeChaleurRochefort />} />
              <Route path="/pompe-a-chaleur-saintes" element={<PompeChaleurSaintes />} />
              
              {/* Mentions Légales */}
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              
              {/* Redirections pour les anciennes URL */}
              <Route path="/présentation-réalisation" element={<Navigate to="/#realisations" replace />} />
              <Route path="/presentation-realisation" element={<Navigate to="/#realisations" replace />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
