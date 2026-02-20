import ServicePage from "@/components/ServicePage";
import { SERVICES } from "../../../shared/const";

export default function IsolationCombles() {
  const advantages = [
    "Entreprise qualifiée QUALIBAT RGE — spécialiste de l'isolation des combles perdus et aménageables",
    "Intervention pour les particuliers et les professionnels en Charente-Maritime et départements limitrophes",
    "Jusqu'à 30% de réduction sur vos factures de chauffage dès le premier hiver",
    "Technique de soufflage mécanique pour combles perdus : rapide, efficace et sans découpe",
    "Isolation sous rampants pour combles aménageables : panneaux semi-rigides haute performance",
    "Matériaux certifiés : laine de verre, laine de roche, ouate de cellulose — résistance thermique R ≥ 7 m².K/W",
    "Éligible aux aides financières : Certificats d'Économies d'Énergie (CEE), Éco-PTZ, TVA à 5,5%",
    "Intégrable dans un projet de rénovation globale MaPrimeRénov' Parcours Accompagné (jusqu'à 50 000€ d'aides)",
    "Traitement des ponts thermiques et mise en place du pare-vapeur pour une isolation durable",
    "Garantie décennale sur tous nos travaux — suivi et accompagnement après chantier"
  ];

  const process = [
    {
      step: 1,
      title: "Visite Technique Gratuite",
      description: "Un technicien se déplace chez vous pour inspecter vos combles : état de la charpente, ventilation existante, accessibilité, surface à isoler. Il identifie les déperditions thermiques et vous conseille sur la meilleure technique d'isolation adaptée à votre configuration."
    },
    {
      step: 2,
      title: "Devis Détaillé et Estimation des Aides",
      description: "Nous vous remettons un devis complet avec le choix de l'isolant, l'épaisseur préconisée et le coût total. Nous estimons les aides auxquelles vous avez droit (CEE, TVA 5,5%, Éco-PTZ) et vous accompagnons dans le montage des dossiers."
    },
    {
      step: 3,
      title: "Préparation du Chantier",
      description: "Protection de vos espaces de vie, mise en place des accès sécurisés aux combles, vérification de l'état de la charpente et du système de ventilation. Repérage des gaines électriques et des spots encastrés pour garantir la sécurité de l'installation."
    },
    {
      step: 4,
      title: "Pose de l'Isolation",
      description: "Installation professionnelle selon la technique adaptée : soufflage mécanique de laine pour les combles perdus, ou pose de panneaux semi-rigides entre et sous chevrons pour les rampants. Mise en place du pare-vapeur, traitement des jonctions et des points singuliers pour une isolation continue sans ponts thermiques."
    },
    {
      step: 5,
      title: "Contrôle Qualité et Remise des Documents",
      description: "Vérification de l'épaisseur posée, contrôle de la continuité de l'isolation et de l'étanchéité à l'air. Remise de l'attestation de fin de travaux, du certificat de résistance thermique et de tous les documents nécessaires pour vos dossiers d'aides financières."
    }
  ];

  const certifications = [
    {
      logo: "/LogoQualibat.png",
      name: "QUALIBAT RGE"
    }
  ];

  const aides = [
    "Certificats d'Économies d'Énergie (CEE) : de 800€ à 2 500€ selon la surface et la zone climatique",
    "TVA réduite à 5,5% sur le matériel et la main d'œuvre (économie d'environ 15%)",
    "Éco-prêt à taux zéro : jusqu'à 15 000€ à 0% d'intérêts, remboursable sur 15 ans",
    "MaPrimeRénov' Parcours Accompagné : jusqu'à 50 000€ dans le cadre d'une rénovation globale"
  ];

  const faq = [
    {
      question: "Quelle différence entre isolation des combles perdus et des combles aménageables ?",
      answer: "Les combles perdus sont des espaces non habitables sous la toiture. On les isole par soufflage de laine (verre ou roche) directement sur le plancher, c'est la technique la plus rapide et économique (20 à 35€/m²). Les combles aménageables sont des espaces habitables : on isole sous les rampants avec des panneaux semi-rigides entre et sous chevrons (40 à 80€/m²). Dans les deux cas, la résistance thermique minimale doit atteindre R ≥ 7 m².K/W pour être éligible aux aides."
    },
    {
      question: "Quelles aides financières pour l'isolation des combles en 2026 ?",
      answer: "En 2026, l'isolation des combles est éligible aux Certificats d'Économies d'Énergie (CEE) versés par les fournisseurs d'énergie (800€ à 2 500€), à la TVA réduite à 5,5% appliquée automatiquement, et à l'Éco-prêt à taux zéro (jusqu'à 15 000€). Dans le cadre d'une rénovation globale avec le Parcours Accompagné MaPrimeRénov', les aides peuvent atteindre jusqu'à 50 000€. La condition : faire appel à un artisan RGE comme Wattsun Énergie."
    },
    {
      question: "Combien de temps durent les travaux d'isolation des combles ?",
      answer: "L'isolation des combles perdus par soufflage est très rapide : une demi-journée à une journée suffit pour une maison standard de 100 m². L'isolation sous rampants pour des combles aménageables prend 2 à 3 jours selon la surface et la complexité de la charpente. Nous travaillons proprement et protégeons vos espaces de vie pendant toute la durée du chantier."
    },
    {
      question: "Quelle épaisseur d'isolant faut-il poser dans les combles ?",
      answer: "Pour être éligible aux aides et garantir une bonne performance thermique, l'isolant doit atteindre une résistance thermique R ≥ 7 m².K/W en combles. Cela correspond à environ 30 cm de laine de verre ou 25 cm de laine de roche. Nous respectons systématiquement ces seuils et les dépassons souvent pour un confort optimal. L'épaisseur exacte dépend du type d'isolant choisi et de sa conductivité thermique (lambda)."
    },
    {
      question: "L'isolation des combles est-elle rentable ?",
      answer: "Oui, c'est même le geste de rénovation énergétique le plus rentable. La toiture représente 25 à 30% des déperditions thermiques d'une maison mal isolée. Avec un coût moyen de 2 000€ à 3 500€ pour des combles perdus (avant aides), et des économies de chauffage de 300€ à 600€ par an, le retour sur investissement se fait en 3 à 5 ans. Avec les aides CEE et la TVA réduite, le reste à charge est encore plus faible."
    },
    {
      question: "Faut-il un artisan RGE pour isoler ses combles ?",
      answer: "Oui, la qualification RGE (Reconnu Garant de l'Environnement) est obligatoire pour bénéficier des aides financières de l'État. Wattsun Énergie est qualifié QUALIBAT RGE pour l'isolation des combles, des rampants de toiture et des murs intérieurs. Cette qualification garantit la qualité de nos travaux et vous ouvre droit aux CEE, à la TVA à 5,5% et à l'Éco-PTZ."
    }
  ];

  return (
    <ServicePage
      title="Isolation des Combles"
      heroImage="isolation-combles-hero.jpg"
      shortDescription="Isolez vos combles perdus ou aménageables pour réduire jusqu'à 30% vos factures de chauffage — Particuliers et professionnels — QUALIBAT RGE"
      advantages={advantages}
      process={process}
      certifications={certifications}
      seoTitle={SERVICES.find(s => s.id === "isolation-combles")?.seoTitle || "Isolation des Combles QUALIBAT RGE en Charente-Maritime | Wattsun Énergie"}
      seoDescription={SERVICES.find(s => s.id === "isolation-combles")?.seoDescription || "Isolation des combles perdus et aménageables par un artisan QUALIBAT RGE. CEE, TVA 5,5%, Éco-PTZ. Particuliers et professionnels en Charente-Maritime."}
      aides={aides}
      faq={faq}
    />
  );
}
