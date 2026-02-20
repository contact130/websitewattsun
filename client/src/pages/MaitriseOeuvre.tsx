import ServicePage from "@/components/ServicePage";
import { SERVICES } from "../../../shared/const";

export default function MaitriseOeuvre() {
  const advantages = [
    "Accompagnement complet pour vos projets de rénovation globale — particuliers et professionnels",
    "Partenaire MAR (Mon Accompagnateur Rénov') agréé par l'ANAH",
    "Un seul interlocuteur pour coordonner tous les corps de métier",
    "Audit énergétique complet de votre logement (DPE projeté)",
    "Montage intégral de vos dossiers d'aides financières",
    "Accès aux subventions disponibles : jusqu'à 50 000€",
    "Suivi de chantier rigoureux avec planning et réunions régulières",
    "Gain de 2 classes énergétiques minimum (ex : F → D ou E → C)",
    "Coordination isolation, menuiseries, chauffage, ventilation et couverture",
    "Garantie de résultat sur la performance énergétique atteinte"
  ];

  const process = [
    {
      step: 1,
      title: "Audit Énergétique Initial",
      description: "Réalisation d'un audit énergétique complet de votre logement : analyse des déperditions thermiques, étude du bâti, des équipements de chauffage et de ventilation. Détermination de votre classe DPE actuelle."
    },
    {
      step: 2,
      title: "Scénarios de Rénovation",
      description: "Élaboration de plusieurs scénarios de travaux avec estimation des gains énergétiques, du budget et des aides mobilisables. Présentation du DPE projeté après travaux et du reste à charge pour chaque scénario."
    },
    {
      step: 3,
      title: "Montage des Dossiers d'Aides",
      description: "Constitution complète de vos dossiers de financement auprès des organismes compétents. Mobilisation de toutes les aides disponibles. Nous gérons toute la partie administrative pour vous."
    },
    {
      step: 4,
      title: "Coordination et Suivi de Chantier",
      description: "Planification et coordination de tous les corps de métier (isolation, menuiseries, chauffage, ventilation, couverture, plâtrerie, électricité). Réunions de chantier régulières et reporting au maître d'ouvrage."
    },
    {
      step: 5,
      title: "Réception et Validation",
      description: "Contrôle qualité de l'ensemble des travaux, réalisation du DPE final pour vérifier l'atteinte des objectifs. Remise du dossier complet de fin de travaux et accompagnement pour le versement des aides."
    }
  ];

  const aides = [
    "Aides à la rénovation globale (jusqu'à 50 000€)",
    "Primes énergie (CEE)",
    "Éco-prêt à taux zéro",
    "Aides locales (Région, Département, Communes)"
  ];

  const faq = [
    {
      question: "Qu'est-ce que la maîtrise d'œuvre en rénovation énergétique ?",
      answer: "La maîtrise d'œuvre consiste à piloter l'ensemble de votre projet de rénovation : de l'audit énergétique initial à la réception des travaux. Le maître d'œuvre conçoit le projet, coordonne les différents artisans, suit le chantier et garantit la qualité et le respect du budget. Chez Wattsun Énergie, nous réalisons nous-mêmes la majorité des travaux (isolation, menuiseries, chauffage, électricité, ventilation), ce qui simplifie la coordination."
    },
    {
      question: "Qu'est-ce que Mon Accompagnateur Rénov' (MAR) ?",
      answer: "Mon Accompagnateur Rénov' est un dispositif de l'ANAH qui accompagne les ménages dans leurs projets de rénovation énergétique globale. Le MAR réalise l'audit énergétique, propose les scénarios de travaux, monte les dossiers d'aides et suit le chantier. Le recours à un MAR est obligatoire pour bénéficier des aides à la rénovation globale. Wattsun Énergie travaille en partenariat avec des MAR agréés pour vous offrir un accompagnement complet."
    },
    {
      question: "Quel montant d'aides peut-on obtenir pour une rénovation globale ?",
      answer: "Les aides à la rénovation globale peuvent atteindre jusqu'à 50 000€ selon vos revenus et l'ampleur des travaux. Le taux de prise en charge varie selon votre profil : jusqu'à 80% pour les ménages très modestes, 60% pour les ménages modestes, et 45% pour les revenus intermédiaires. Ces aides sont cumulables avec les primes énergie et l'éco-prêt à taux zéro."
    },
    {
      question: "Quels travaux sont inclus dans une rénovation globale ?",
      answer: "Une rénovation globale combine plusieurs postes de travaux pour atteindre un gain énergétique significatif (minimum 2 classes DPE) : isolation des combles et des murs, remplacement des menuiseries, installation d'un système de chauffage performant (pompe à chaleur), mise en place d'une ventilation (VMC), et éventuellement réfection de la couverture. Wattsun Énergie maîtrise l'ensemble de ces corps de métier."
    },
    {
      question: "Combien de temps dure un projet de rénovation globale ?",
      answer: "Un projet de rénovation globale dure en moyenne 3 à 6 mois du premier contact à la fin des travaux : 1 mois pour l'audit et le montage du dossier, 1-2 mois pour l'instruction des aides et la préparation, et 1-3 mois de travaux selon l'ampleur. Nous établissons un planning détaillé dès le départ pour que vous ayez une visibilité complète sur le déroulement du projet."
    },
    {
      question: "Pourquoi choisir Wattsun Énergie pour une rénovation globale ?",
      answer: "Wattsun Énergie est un acteur unique qui maîtrise l'ensemble des corps de métier de la rénovation énergétique : isolation (QUALIBAT RGE), menuiseries (QUALIBAT RGE), pompes à chaleur (QualiPAC), panneaux solaires (QualiPV), bornes de recharge (RGE IRVE), VMC, électricité et couverture. Un seul interlocuteur, une coordination simplifiée, et la garantie d'un résultat cohérent. Nous travaillons avec les MAR de l'ANAH pour vous garantir l'accès aux meilleures aides."
    }
  ];

  return (
    <ServicePage
      title="Maîtrise d'Œuvre"
      heroImage="maitrise-oeuvre-hero.jpg"
      shortDescription="Rénovation globale clé en main pour particuliers et professionnels — Accompagnement MAR et aides jusqu'à 50 000€"
      advantages={advantages}
      process={process}
      seoTitle={SERVICES.find(s => s.id === "maitrise-oeuvre")?.seoTitle || "Maîtrise d'Œuvre Rénovation Globale | Wattsun Énergie"}
      seoDescription={SERVICES.find(s => s.id === "maitrise-oeuvre")?.seoDescription || "Rénovation énergétique globale clé en main en Charente-Maritime. Accompagnement MAR, aides jusqu'à 50 000€. Devis gratuit."}
      aides={aides}
      faq={faq}
    />
  );
}
