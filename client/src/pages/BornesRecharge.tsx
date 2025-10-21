import ServicePage from "@/components/ServicePage";

export default function BornesRecharge() {
  const advantages = [
    "Recharge rapide et sécurisée à domicile",
    "Économies par rapport aux stations publiques",
    "Installation conforme aux normes électriques",
    "Gestion intelligente de la recharge",
    "Compatible avec tous les véhicules électriques",
    "Possibilité de recharge solaire (couplage avec panneaux)",
    "Aides financières disponibles (programme ADVENIR)",
    "Valorisation du bien immobilier",
    "Puissance adaptable (7kW à 22kW)",
    "Application de pilotage à distance"
  ];

  const process = [
    {
      step: 1,
      title: "Diagnostic Électrique",
      description: "Vérification de votre installation électrique, de la puissance disponible et du lieu d'installation souhaité."
    },
    {
      step: 2,
      title: "Choix de la Borne",
      description: "Sélection de la borne adaptée à votre véhicule et à vos besoins (puissance, fonctionnalités intelligentes)."
    },
    {
      step: 3,
      title: "Dossier ADVENIR",
      description: "Constitution de votre dossier pour bénéficier de la prime ADVENIR (jusqu'à 960€ de prise en charge)."
    },
    {
      step: 4,
      title: "Installation Certifiée",
      description: "Pose de la borne, raccordement électrique sécurisé, mise aux normes et protection différentielle."
    },
    {
      step: 5,
      title: "Configuration et Test",
      description: "Paramétrage de la borne, connexion à l'application mobile, test de recharge et formation à l'utilisation."
    }
  ];

  const certifications = [
    {
      logo: "/assets/Logorechargeelec+.png",
      name: "Recharge Elec+"
    }
  ];

  const aides = [
    "Programme ADVENIR",
    "Crédit d'impôt 75% (plafonné)",
    "TVA réduite à 5,5%",
    "Prime à la conversion"
  ];

  return (
    <ServicePage
      title="Bornes de Recharge"
      heroImage="/bornes-recharge-hero.jpg"
      shortDescription="Rechargez votre véhicule électrique rapidement et en toute sécurité"
      advantages={advantages}
      process={process}
      certifications={certifications}
      aides={aides}
    />
  );
}

