import ServicePage from "@/components/ServicePage";
import { SERVICES } from "../../../shared/const";

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
      logo: "/Logorechargeelec+.png",
      name: "Recharge Elec+"
    }
  ];

  const aides = [
    "Programme ADVENIR (copropriétés)",
    "TVA réduite à 5,5%",
    "Aides locales et régionales"
  ];

  const faq = [
    {
      question: "Quel est le prix d'installation d'une borne de recharge ?",
      answer: "Le prix d'une borne de recharge à domicile varie entre 1 200€ et 2 500€ pose comprise, selon la puissance (7 kW ou 22 kW) et la distance au tableau électrique. Avec la prime ADVENIR (jusqu'à 960€ pour les copropriétés), le reste à charge peut être significativement réduit. Nous réalisons un devis gratuit après diagnostic de votre installation."
    },
    {
      question: "Quelle puissance de borne choisir : 7 kW ou 22 kW ?",
      answer: "Une borne 7 kW (monophasée) suffit pour la plupart des usages : elle recharge une batterie de 50 kWh en environ 7 heures, idéal pour une recharge nocturne. Une borne 22 kW (triphasée) est recommandée si vous avez de gros besoins de recharge ou un véhicule compatible. Attention, la borne 22 kW nécessite un abonnement électrique triphasé."
    },
    {
      question: "Peut-on recharger sa voiture avec ses panneaux solaires ?",
      answer: "Oui, c'est même l'idéal ! En couplant votre borne de recharge avec une installation photovoltaïque, vous pouvez recharger votre véhicule gratuitement avec l'énergie du soleil. Certaines bornes intelligentes permettent de programmer la recharge aux heures de production solaire maximale. C'est une solution que nous proposons régulièrement."
    },
    {
      question: "Faut-il augmenter la puissance de son compteur électrique ?",
      answer: "Pas forcément. Une borne 7 kW peut fonctionner avec un abonnement 9 kVA standard, à condition de ne pas utiliser d'autres gros appareils pendant la recharge. Les bornes intelligentes peuvent aussi limiter la puissance de charge pour éviter de dépasser votre abonnement. Nous vérifions votre installation lors du diagnostic gratuit."
    },
    {
      question: "Combien de temps pour recharger une voiture électrique ?",
      answer: "Le temps de recharge dépend de la capacité de la batterie et de la puissance de la borne. Avec une borne 7 kW : environ 7h pour une batterie de 50 kWh (autonomie ~300 km). Avec une borne 22 kW : environ 2h30 pour la même batterie. Sur une prise domestique standard (2,3 kW), comptez plus de 20 heures."
    },
    {
      question: "L'installation d'une borne est-elle obligatoire ?",
      answer: "Non, mais fortement recommandée. Vous pouvez recharger sur une prise domestique renforcée (Green'Up), mais c'est lent et moins sécurisé. Une borne Wallbox offre une recharge 3 à 10 fois plus rapide, une meilleure protection électrique, et des fonctionnalités intelligentes (programmation, suivi de consommation). De plus, l'installation par un professionnel certifié IRVE est obligatoire pour bénéficier des aides."
    }
  ];

  return (
    <ServicePage
      title="Bornes de Recharge"
      heroImage="borne-recharge-wallbox.webp"
      shortDescription="Rechargez votre véhicule électrique rapidement et en toute sécurité"
      advantages={advantages}
      process={process}
      certifications={certifications}
      seoTitle={SERVICES.find(s => s.id === "bornes")?.seoTitle || "Bornes de Recharge"}
      seoDescription={SERVICES.find(s => s.id === "bornes")?.seoDescription || "Rechargez votre véhicule électrique à domicile en toute sécurité."}
      aides={aides}
      faq={faq}
    />
  );
}
