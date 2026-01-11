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
    "Prime à l'autoconsommation (80€/kWc)",
    "TVA réduite à 5,5% (installations < 9 kWc)",
    "Tarif de rachat garanti 20 ans",
    "Aides locales et régionales"
  ];

  const faq = [
    {
      question: "Combien coûte une installation de panneaux photovoltaïques ?",
      answer: "Le coût d'une installation photovoltaïque varie entre 8 000€ et 15 000€ pour une puissance de 3 à 9 kWc, avant déduction des aides. Ce prix inclut les panneaux, l'onduleur, la pose et le raccordement. Avec les aides (prime à l'autoconsommation, TVA réduite), le reste à charge peut être réduit de 20 à 30%."
    },
    {
      question: "Quelle puissance de panneaux solaires pour ma maison ?",
      answer: "La puissance idéale dépend de votre consommation électrique annuelle. En moyenne, une installation de 3 kWc (8 panneaux) convient pour un foyer de 2-3 personnes, 6 kWc (16 panneaux) pour 4-5 personnes, et 9 kWc (24 panneaux) pour une grande maison ou avec véhicule électrique. Nous réalisons une étude personnalisée gratuite pour déterminer la puissance optimale."
    },
    {
      question: "Quelles sont les aides disponibles en Charente-Maritime ?",
      answer: "En Charente-Maritime, vous pouvez bénéficier de la prime à l'autoconsommation (80€/kWc), de la TVA à 5,5% pour les installations inférieures à 9 kWc, du tarif de rachat garanti sur 20 ans, et potentiellement d'aides locales de la Région Nouvelle-Aquitaine. Notre équipe vous accompagne dans toutes les démarches administratives."
    },
    {
      question: "Combien de temps dure l'installation ?",
      answer: "L'installation des panneaux photovoltaïques prend généralement 1 à 2 jours pour une maison individuelle. Les démarches administratives préalables (déclaration de travaux, demande de raccordement) nécessitent environ 2 à 3 mois. Au total, comptez 3 à 4 mois entre la signature du devis et la mise en service."
    },
    {
      question: "Les panneaux solaires fonctionnent-ils par temps nuageux ?",
      answer: "Oui, les panneaux photovoltaïques produisent de l'électricité même par temps nuageux, bien que le rendement soit réduit (environ 10-25% de la production optimale). La Charente-Maritime bénéficie d'un excellent ensoleillement avec environ 2 100 heures de soleil par an, ce qui en fait une région très favorable au photovoltaïque."
    },
    {
      question: "Quelle est la durée de vie des panneaux solaires ?",
      answer: "Les panneaux photovoltaïques ont une durée de vie de 30 à 40 ans. Ils sont garantis 25 ans par les fabricants avec un rendement minimum de 80% à 25 ans. L'onduleur, quant à lui, a une durée de vie de 10 à 15 ans et devra être remplacé une fois pendant la vie de l'installation."
    }
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
      faq={faq}
    />
  );
}
