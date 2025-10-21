import ServicePage from "@/components/ServicePage";

export default function BatteriesStockage() {
  const advantages = [
    "Maximisation de l'autoconsommation (jusqu'à 80%)",
    "Indépendance énergétique accrue",
    "Utilisation de l'énergie solaire jour et nuit",
    "Réduction de la dépendance au réseau électrique",
    "Alimentation de secours en cas de coupure",
    "Compatible avec installation photovoltaïque existante",
    "Gestion intelligente de l'énergie",
    "Valorisation de la production solaire",
    "Durée de vie longue (10-15 ans)",
    "Technologie lithium-ion performante"
  ];

  const process = [
    {
      step: 1,
      title: "Analyse de Votre Installation",
      description: "Étude de votre installation photovoltaïque existante ou à venir, de votre consommation et de vos objectifs d'autoconsommation."
    },
    {
      step: 2,
      title: "Dimensionnement de la Batterie",
      description: "Calcul de la capacité de stockage optimale en fonction de vos besoins et de votre production solaire."
    },
    {
      step: 3,
      title: "Proposition et Devis",
      description: "Présentation des solutions de stockage adaptées avec simulation de rentabilité et d'autonomie."
    },
    {
      step: 4,
      title: "Installation et Raccordement",
      description: "Pose de la batterie, raccordement à votre installation photovoltaïque et au réseau, configuration du système de gestion."
    },
    {
      step: 5,
      title: "Mise en Service et Monitoring",
      description: "Activation du système, formation à l'application de suivi et optimisation des paramètres de charge/décharge."
    }
  ];

  const aides = [
    "Prime à l'autoconsommation",
    "TVA réduite à 10%",
    "Aides régionales",
    "Crédit d'impôt (selon conditions)"
  ];

  return (
    <ServicePage
      title="Batteries de Stockage"
      heroImage="/assets/361585731_17884931429895076_6551257407481636813_n.jpg"
      shortDescription="Maximisez votre autoconsommation et gagnez en indépendance énergétique"
      advantages={advantages}
      process={process}
      aides={aides}
    />
  );
}

