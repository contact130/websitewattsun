import ServicePage from "@/components/ServicePage";

export default function PompesChaleur() {
  const advantages = [
    "Réduction de la facture de chauffage jusqu'à 70%",
    "Solution écologique et respectueuse de l'environnement",
    "Confort thermique optimal en toutes saisons (chauffage et climatisation)",
    "Éligible aux aides de l'État (MaPrimeRénov', CEE)",
    "Installation rapide et discrète par professionnels certifiés RGE QualiPAC",
    "Valorisation du bien immobilier",
    "Faible entretien et longue durée de vie",
    "Chauffage et eau chaude sanitaire avec une seule installation",
    "Coefficient de performance (COP) élevé",
    "Indépendance vis-à-vis des énergies fossiles"
  ];

  const process = [
    {
      step: 1,
      title: "Diagnostic Thermique",
      description: "Analyse de votre habitation, de vos besoins en chauffage et de votre système actuel. Nous déterminons la puissance nécessaire et le type de PAC adapté."
    },
    {
      step: 2,
      title: "Proposition Technique",
      description: "Présentation des solutions adaptées (air-air, air-eau, géothermique) avec simulation d'économies et calcul de rentabilité."
    },
    {
      step: 3,
      title: "Montage des Dossiers d'Aides",
      description: "Constitution de votre dossier MaPrimeRénov' et CEE pour maximiser vos aides financières."
    },
    {
      step: 4,
      title: "Installation Professionnelle",
      description: "Pose de l'unité extérieure et intérieure, raccordement hydraulique et électrique, mise en service par nos techniciens certifiés."
    },
    {
      step: 5,
      title: "Réglages et Formation",
      description: "Optimisation des paramètres, formation à l'utilisation et remise des documents de garantie. Contrat d'entretien disponible."
    }
  ];

  const certifications = [
    {
      logo: "/assets/LogoQualiPACtransparent.png",
      name: "QualiPAC"
    }
  ];

  const aides = [
    "MaPrimeRénov'",
    "CEE (Certificats d'Économies d'Énergie)",
    "TVA réduite à 5,5%",
    "Éco-PTZ"
  ];

  return (
    <ServicePage
      title="Pompes à Chaleur"
      heroImage="/pompe-a-chaleur-hero.jpg"
      shortDescription="Chauffage écologique et économique pour votre confort toute l'année"
      advantages={advantages}
      process={process}
      certifications={certifications}
      aides={aides}
    />
  );
}

