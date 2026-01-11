import ServicePage from "@/components/ServicePage";
import { SERVICES } from "../../../shared/const";

export default function VMC() {
  const advantages = [
    "Air sain et renouvelé en permanence",
    "Élimination de l'humidité et des moisissures",
    "Économies d'énergie (récupération de chaleur avec double flux)",
    "Réduction des allergènes et polluants",
    "Confort thermique amélioré",
    "Installation discrète et silencieuse",
    "Entretien simple",
    "Valorisation du bien immobilier",
    "Réduction des problèmes respiratoires",
    "Conformité aux normes de ventilation"
  ];

  const process = [
    {
      step: 1,
      title: "Évaluation des Besoins",
      description: "Analyse de votre habitation, des sources d'humidité et de pollution, détermination du débit d'air nécessaire."
    },
    {
      step: 2,
      title: "Choix du Système",
      description: "Recommandation entre VMC simple flux, hygroréglable ou double flux selon vos besoins et votre budget."
    },
    {
      step: 3,
      title: "Étude de Faisabilité",
      description: "Vérification des possibilités d'installation, tracé des gaines, localisation des entrées et sorties d'air."
    },
    {
      step: 4,
      title: "Installation Professionnelle",
      description: "Pose du groupe VMC, installation des gaines, entrées d'air et sorties, raccordement électrique sécurisé."
    },
    {
      step: 5,
      title: "Mise en Service et Entretien",
      description: "Réglage des débits, test du système, formation à l'entretien et proposition de contrat de maintenance."
    }
  ];

  const certifications = [
    {
      logo: "/Logoventilationtransparent.png",
      name: "Ventilation"
    }
  ];

  const aides = [
    "MaPrimeRénov' (1 500€ à 2 500€ selon revenus)",
    "CEE (Certificats d'Économies d'Énergie)",
    "TVA réduite à 5,5%",
    "Éco-PTZ (jusqu'à 15 000€)"
  ];

  const faq = [
    {
      question: "Quelle différence entre VMC simple flux et double flux ?",
      answer: "La VMC simple flux extrait l'air vicié des pièces humides (cuisine, salle de bain) et l'air neuf entre par des entrées d'air dans les pièces de vie. La VMC double flux récupère la chaleur de l'air extrait pour préchauffer l'air entrant, permettant jusqu'à 90% d'économies sur les pertes de chaleur liées à la ventilation. Elle est plus coûteuse mais très rentable en rénovation énergétique."
    },
    {
      question: "Quel est le prix d'installation d'une VMC ?",
      answer: "Le prix varie selon le type de VMC : 500-1 500€ pour une VMC simple flux autoréglable, 700-2 000€ pour une VMC hygroréglable, et 4 000-8 000€ pour une VMC double flux haut rendement. Ces prix incluent la pose. Avec les aides (MaPrimeRénov' jusqu'à 2 500€, CEE), le reste à charge est significativement réduit."
    },
    {
      question: "La VMC est-elle obligatoire ?",
      answer: "Oui, depuis 1982, tout logement neuf doit être équipé d'un système de ventilation. Pour les logements anciens, ce n'est pas obligatoire mais fortement recommandé pour la santé et la préservation du bâti. Une mauvaise ventilation entraîne humidité, moisissures et problèmes respiratoires."
    },
    {
      question: "Quelles sont les aides pour installer une VMC en 2026 ?",
      answer: "En 2026, vous pouvez bénéficier de MaPrimeRénov' (1 500€ à 2 500€ selon vos revenus pour une VMC double flux), des CEE (200-400€), de la TVA à 5,5% et de l'éco-PTZ. Ces aides sont cumulables et peuvent couvrir jusqu'à 60% du coût d'une VMC double flux. Nous montons tous vos dossiers d'aides."
    },
    {
      question: "Quel entretien pour une VMC ?",
      answer: "L'entretien d'une VMC est simple : nettoyage des bouches d'extraction tous les 3 mois, remplacement des filtres tous les 6 mois à 1 an (VMC double flux), et vérification du groupe moteur tous les 3 ans par un professionnel. Un entretien régulier garantit une bonne qualité d'air et prolonge la durée de vie du système (15-20 ans)."
    },
    {
      question: "La VMC fait-elle du bruit ?",
      answer: "Les VMC modernes sont très silencieuses (25-35 dB pour le groupe moteur). Le bruit peut provenir d'une mauvaise installation, de gaines mal dimensionnées ou d'un manque d'entretien. Nous installons le groupe VMC dans les combles ou un local technique pour minimiser les nuisances sonores dans les pièces de vie."
    }
  ];

  return (
    <ServicePage
      title="VMC - Ventilation Mécanique Contrôlée"
      heroImage="vmc-installation.webp"
      shortDescription="Air sain et renouvelé pour un confort optimal dans votre habitat"
      advantages={advantages}
      process={process}
      certifications={certifications}
      seoTitle={SERVICES.find(s => s.id === "vmc")?.seoTitle || "VMC - Ventilation Mécanique Contrôlée"}
      seoDescription={SERVICES.find(s => s.id === "vmc")?.seoDescription || "Améliorez la qualité de l'air intérieur et réduisez votre consommation."}
      aides={aides}
      faq={faq}
    />
  );
}
