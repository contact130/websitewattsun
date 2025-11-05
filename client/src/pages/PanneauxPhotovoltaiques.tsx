import ServicePage from "@/components/ServicePage";
import { SERVICES } from "../../../shared/const";

export default function PanneauxPhotovoltaiques() {
  const advantages = [
    "Réduction de la facture d'électricité jusqu'à 70%",
    "Production d'énergie propre et renouvelable",
    "Autoconsommation avec possibilité de revente du surplus",
    "Valorisation du bien immobilier",
    "Aides de l'État disponibles (MaPrimeRénov', CEE)",
    "Installation rapide par professionnels certifiés RGE QualiPV",
    "Garantie constructeur 25 ans sur les panneaux",
    "Maintenance minimale",
    "Indépendance énergétique accrue",
    "Contribution à la transition énergétique"
  ];

  const process = [
    {
      step: 1,
      title: "Étude de Faisabilité",
      description: "Analyse de votre toiture, de votre consommation et de vos besoins. Nous étudions l'orientation, l'inclinaison et la surface disponible pour optimiser votre installation."
    },
    {
      step: 2,
      title: "Devis Personnalisé",
      description: "Proposition détaillée avec simulation de production et de rentabilité. Nous vous présentons les différentes options et les aides financières disponibles."
    },
    {
      step: 3,
      title: "Démarches Administratives",
      description: "Nous nous occupons de toutes les formalités : déclaration préalable de travaux, demande de raccordement, dossiers d'aides."
    },
    {
      step: 4,
      title: "Installation",
      description: "Pose des panneaux, onduleur et système de monitoring par nos techniciens certifiés. Installation réalisée dans les règles de l'art."
    },
    {
      step: 5,
      title: "Mise en Service et Suivi",
      description: "Raccordement au réseau, formation à l'utilisation et suivi de production. Nous restons à votre disposition pour toute question."
    }
  ];

  const certifications = [
    {
      logo: "/LogoqualiPVtransparent.png",
      name: "QualiPV"
    }
  ];

  const aides = [
    "MaPrimeRénov'",
    "CEE (Certificats d'Économies d'Énergie)",
    "TVA réduite à 10%",
    "Aides locales"
  ];

  return (
    <ServicePage
      title="Panneaux Photovoltaïques"
      heroImage="panneaux-installation.jpg"
      shortDescription="Produisez votre propre électricité et réduisez votre facture jusqu'à 70%"
      advantages={advantages}
      process={process}
      certifications={certifications}
      seoTitle={SERVICES.find(s => s.id === "photovoltaique")?.seoTitle || "Panneaux Photovoltaïques"}
      seoDescription={SERVICES.find(s => s.id === "photovoltaique")?.seoDescription || "Produisez votre propre électricité verte et réduisez vos factures."}
      aides={aides}
    />
  );
}

