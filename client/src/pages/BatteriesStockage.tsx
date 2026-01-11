import ServicePage from "@/components/ServicePage";
import { SERVICES } from "../../../shared/const";

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
    "Prime à l'autoconsommation (couplée au PV)",
    "TVA réduite à 5,5% (avec PV < 9 kWc)",
    "Aides locales et régionales"
  ];

  const faq = [
    {
      question: "Quel est le prix d'une batterie de stockage solaire ?",
      answer: "Le prix d'une batterie de stockage varie entre 4 000€ et 10 000€ selon la capacité (5 à 15 kWh). Une batterie de 10 kWh, la plus courante pour une maison, coûte environ 6 000-8 000€ pose comprise. L'investissement est rentabilisé en 8-12 ans grâce aux économies sur la facture d'électricité."
    },
    {
      question: "Quelle capacité de batterie pour ma maison ?",
      answer: "La capacité idéale dépend de votre consommation nocturne et de votre production solaire. En moyenne, une batterie de 5 kWh suffit pour un petit foyer, 10 kWh pour une famille de 4 personnes, et 15 kWh ou plus pour une grande maison avec véhicule électrique. Nous analysons votre consommation pour vous conseiller la capacité optimale."
    },
    {
      question: "Peut-on ajouter une batterie à des panneaux solaires existants ?",
      answer: "Oui, il est tout à fait possible d'ajouter une batterie de stockage à une installation photovoltaïque existante. La batterie se raccorde entre les panneaux et le réseau, via un onduleur hybride ou un système de stockage AC. Nous vérifions la compatibilité de votre installation lors de notre visite technique gratuite."
    },
    {
      question: "Quelle est la durée de vie d'une batterie solaire ?",
      answer: "Les batteries lithium-ion actuelles ont une durée de vie de 10 à 15 ans, soit environ 6 000 à 10 000 cycles de charge/décharge. La plupart des fabricants garantissent 70-80% de capacité après 10 ans. La durée de vie dépend aussi de l'utilisation et de la température ambiante."
    },
    {
      question: "La batterie fonctionne-t-elle en cas de coupure de courant ?",
      answer: "Cela dépend du type d'installation. Avec un système de backup (secours), la batterie peut alimenter votre maison en cas de coupure réseau. Sans cette fonction, la batterie se déconnecte par sécurité lors d'une coupure. Nous proposons des solutions avec ou sans backup selon vos besoins."
    },
    {
      question: "Quelles économies avec une batterie de stockage ?",
      answer: "Une batterie permet d'augmenter votre taux d'autoconsommation de 30-40% à 70-80%. Concrètement, pour une installation de 6 kWc avec batterie de 10 kWh, vous pouvez économiser 400 à 600€ supplémentaires par an sur votre facture d'électricité, en plus des économies déjà réalisées avec les panneaux seuls."
    }
  ];

  return (
    <ServicePage
      title="Batteries de Stockage"
      heroImage="batterie-wondrwall.jpg"
      shortDescription="Maximisez votre autoconsommation et gagnez en indépendance énergétique"
      advantages={advantages}
      process={process}
      aides={aides}
      seoTitle={SERVICES.find(s => s.id === "batteries")?.seoTitle || "Batteries de Stockage"}
      seoDescription={SERVICES.find(s => s.id === "batteries")?.seoDescription || "Maximisez votre autoconsommation et gagnez en indépendance énergétique."}
      faq={faq}
    />
  );
}
