import ServicePage from "@/components/ServicePage";

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
      logo: "/assets/Logoventilationtransparent.png",
      name: "Ventilation"
    }
  ];

  const aides = [
    "TVA réduite à 10%",
    "MaPrimeRénov'",
    "CEE (Certificats d'Économies d'Énergie)",
    "Éco-PTZ"
  ];

  return (
    <ServicePage
      title="VMC - Ventilation Mécanique Contrôlée"
      heroImage="/vmc-hero.png"
      shortDescription="Air sain et renouvelé pour un confort optimal dans votre habitat"
      advantages={advantages}
      process={process}
      certifications={certifications}
      aides={aides}
    />
  );
}

