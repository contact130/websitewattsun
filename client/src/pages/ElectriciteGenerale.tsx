import ServicePage from "@/components/ServicePage";
import { SERVICES } from "../../../shared/const";

export default function ElectriciteGenerale() {
  const advantages = [
    "Tous travaux d'électricité par des professionnels certifiés",
    "Mise aux normes NF C 15-100",
    "Dépannage rapide et efficace",
    "Installation et rénovation complète",
    "Sécurité et conformité garanties",
    "Devis gratuit et détaillé",
    "Intervention rapide",
    "Garantie décennale",
    "Respect des délais",
    "Matériel de qualité professionnelle"
  ];

  const process = [
    {
      step: 1,
      title: "Diagnostic et Évaluation",
      description: "Analyse de votre installation électrique actuelle, identification des besoins et des non-conformités éventuelles."
    },
    {
      step: 2,
      title: "Devis Détaillé",
      description: "Proposition chiffrée précise avec descriptif des travaux, matériel utilisé et planning d'intervention."
    },
    {
      step: 3,
      title: "Planification des Travaux",
      description: "Organisation du chantier en fonction de vos contraintes et disponibilités, commande du matériel."
    },
    {
      step: 4,
      title: "Réalisation",
      description: "Exécution des travaux dans les règles de l'art : câblage, tableaux électriques, prises, éclairage, domotique."
    },
    {
      step: 5,
      title: "Contrôle et Certification",
      description: "Vérification complète de l'installation, tests de sécurité, remise du certificat de conformité Consuel si nécessaire."
    }
  ];

  const aides = [
    "TVA réduite à 10%",
    "Crédit d'impôt (selon travaux)",
    "Aides ANAH",
    "Prêt à taux zéro (selon conditions)"
  ];

  return (
    <ServicePage
      title="Électricité Générale"
      heroImage="/optimized/elec-generale.jpg"
      shortDescription="Tous vos travaux d'électricité par des professionnels certifiés"
      advantages={advantages}
      process={process}
      aides={aides}
      seoTitle={SERVICES.find(s => s.id === "electricite")?.seoTitle || "Électricité Générale"}
      seoDescription={SERVICES.find(s => s.id === "electricite")?.seoDescription || "Installation et rénovation électrique pour votre habitat."}
    />
  );
}

