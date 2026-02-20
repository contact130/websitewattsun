import ServicePage from "@/components/ServicePage";
import { SERVICES } from "../../../shared/const";

export default function Platrerie() {
  const advantages = [
    "Entreprise qualifiée QUALIBAT pour les travaux de plâtrerie",
    "Intervention pour les particuliers et les professionnels",
    "Pose de cloisons en plaques de plâtre (BA13, BA15, Placo phonique)",
    "Création de faux plafonds suspendus et plafonds décoratifs",
    "Doublage de murs pour isolation thermique et acoustique",
    "Enduits de finition et lissage pour un rendu impeccable",
    "Travaux de cloisonnement et redistribution de pièces",
    "Habillage de gaines techniques et coffrage",
    "Matériaux de qualité professionnelle (Placo, Knauf, Siniat)",
    "Garantie décennale sur tous nos travaux"
  ];

  const process = [
    {
      step: 1,
      title: "Étude du Projet",
      description: "Visite sur site pour comprendre vos besoins : redistribution de pièces, création de faux plafond, doublage. Prise de mesures et étude des contraintes techniques (réseaux, porteurs)."
    },
    {
      step: 2,
      title: "Devis et Planification",
      description: "Proposition détaillée avec choix des matériaux adaptés à votre projet (plaques standard, hydrofuges, phoniques, coupe-feu). Planning d'intervention coordonné avec les autres corps de métier."
    },
    {
      step: 3,
      title: "Mise en Place de l'Ossature",
      description: "Installation de l'ossature métallique (rails et montants) selon les plans. Passage des réseaux électriques et de plomberie dans les cloisons avant fermeture."
    },
    {
      step: 4,
      title: "Pose des Plaques et Finitions",
      description: "Fixation des plaques de plâtre, traitement des joints avec bandes et enduit. Ponçage et lissage pour un rendu parfaitement lisse, prêt à peindre."
    },
    {
      step: 5,
      title: "Nettoyage et Réception",
      description: "Nettoyage complet du chantier, vérification de la planéité et de la qualité des finitions. Réception des travaux avec le client et remise des documents de garantie."
    }
  ];

  const certifications = [
    {
      logo: "/LogoQualibat.png",
      name: "QUALIBAT"
    }
  ];

  const aides = [
    "TVA réduite à 10% (logement de plus de 2 ans)",
    "TVA à 5,5% si associé à des travaux d'isolation",
    "Éco-prêt à taux zéro (dans le cadre d'une rénovation globale)"
  ];

  const faq = [
    {
      question: "Quelle est la différence entre BA13 et Placo phonique ?",
      answer: "Le BA13 est la plaque de plâtre standard (12,5 mm d'épaisseur), adaptée à la plupart des usages courants. Le Placo phonique (ou Placo Silence) intègre une couche de matériau amortissant qui réduit les nuisances sonores de 50% par rapport au BA13 standard. Nous recommandons le Placo phonique pour les chambres, bureaux et pièces nécessitant un confort acoustique."
    },
    {
      question: "Combien coûte la pose de cloisons en placo ?",
      answer: "Le prix de pose d'une cloison en placo varie entre 35€ et 65€/m² selon le type de plaque (standard, phonique, hydrofuge), l'épaisseur de la cloison et la complexité du chantier. Un faux plafond suspendu coûte entre 40€ et 80€/m². Ces prix incluent la fourniture et la pose. Nous réalisons un devis gratuit et détaillé pour chaque projet."
    },
    {
      question: "Peut-on accrocher des objets lourds sur du placo ?",
      answer: "Oui, avec les bonnes fixations. Pour les charges légères (cadres, étagères), des chevilles à expansion suffisent. Pour les charges lourdes (meuble TV, radiateur, chauffe-eau), nous intégrons des renforts en bois ou en métal dans l'ossature lors de la pose. Nous anticipons systématiquement vos besoins de fixation pour éviter les mauvaises surprises."
    },
    {
      question: "Combien de temps faut-il pour poser des cloisons ?",
      answer: "La durée dépend de l'ampleur du projet : 1-2 jours pour une cloison simple, 3-5 jours pour le cloisonnement complet d'un étage, et 1-2 semaines pour une redistribution complète avec faux plafonds. Le temps de séchage des enduits (24-48h) est à ajouter avant la mise en peinture."
    },
    {
      question: "Le placo est-il adapté aux pièces humides ?",
      answer: "Oui, à condition d'utiliser des plaques hydrofuges (Placo Marine, reconnaissables à leur couleur verte). Elles résistent à l'humidité et sont indispensables dans les salles de bain, cuisines et buanderies. Nous posons systématiquement des plaques hydrofuges dans les pièces d'eau, conformément aux normes en vigueur."
    }
  ];

  return (
    <ServicePage
      title="Plâtrerie"
      heroImage="platrerie-hero.jpg"
      shortDescription="Cloisons, faux plafonds et finitions par des professionnels qualifiés QUALIBAT — Particuliers et professionnels"
      advantages={advantages}
      process={process}
      certifications={certifications}
      seoTitle={SERVICES.find(s => s.id === "platrerie")?.seoTitle || "Plâtrerie QUALIBAT : Cloisons, Faux Plafonds, Doublage | Wattsun Énergie"}
      seoDescription={SERVICES.find(s => s.id === "platrerie")?.seoDescription || "Travaux de plâtrerie QUALIBAT en Charente-Maritime. Particuliers et professionnels. Devis gratuit."}
      aides={aides}
      faq={faq}
    />
  );
}
