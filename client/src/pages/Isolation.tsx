import ServicePage from "@/components/ServicePage";
import { SERVICES } from "../../../shared/const";

export default function Isolation() {
  const advantages = [
    "Entreprise qualifiée QUALIBAT RGE pour l'isolation des combles, rampants et murs intérieurs",
    "Intervention pour les particuliers et les professionnels",
    "Réduction de jusqu'à 30% de vos factures de chauffage",
    "Confort thermique été comme hiver",
    "Suppression des ponts thermiques et courants d'air",
    "Isolation des combles perdus et aménageables",
    "Isolation des rampants de toiture sous chevrons",
    "Isolation des murs par l'intérieur (ITI)",
    "Matériaux performants et certifiés (laine de verre, laine de roche, ouate de cellulose)",
    "Garantie décennale sur tous nos travaux d'isolation"
  ];

  const process = [
    {
      step: 1,
      title: "Diagnostic Thermique",
      description: "Visite technique de votre habitation pour identifier les déperditions thermiques, mesurer les surfaces à isoler et déterminer la solution la plus adaptée à votre logement."
    },
    {
      step: 2,
      title: "Préconisation et Devis",
      description: "Recommandation du type d'isolant et de la technique la plus adaptée (soufflage, panneaux, rouleaux). Devis détaillé avec estimation des aides financières auxquelles vous avez droit."
    },
    {
      step: 3,
      title: "Préparation du Chantier",
      description: "Protection des espaces de vie, mise en place des accès aux combles ou aux murs, vérification de l'état de la charpente et de la ventilation existante."
    },
    {
      step: 4,
      title: "Pose de l'Isolation",
      description: "Installation professionnelle de l'isolant selon les règles de l'art : pose de pare-vapeur, isolation continue sans ponts thermiques, respect des épaisseurs réglementaires (R ≥ 7 en combles)."
    },
    {
      step: 5,
      title: "Contrôle et Remise des Documents",
      description: "Vérification de la qualité de pose, contrôle de l'épaisseur et de la continuité de l'isolation. Remise de l'attestation et des documents pour vos dossiers d'aides."
    }
  ];

  const certifications = [
    {
      logo: "/LogoQualibat.png",
      name: "QUALIBAT RGE"
    }
  ];

  const aides = [
    "Aides à la rénovation énergétique",
    "Primes énergie (CEE)",
    "TVA réduite à 5,5%",
    "Éco-prêt à taux zéro"
  ];

  const faq = [
    {
      question: "Quelle est la meilleure isolation pour les combles ?",
      answer: "Pour les combles perdus, le soufflage de laine de verre ou de ouate de cellulose est la solution la plus efficace et économique (R ≥ 7 m².K/W). Pour les combles aménageables, nous recommandons des panneaux semi-rigides de laine de roche entre et sous chevrons. Le choix dépend de votre configuration : nous réalisons un diagnostic gratuit pour vous conseiller la meilleure solution."
    },
    {
      question: "Combien coûte l'isolation des combles ?",
      answer: "L'isolation des combles perdus par soufflage coûte entre 20€ et 35€/m², et l'isolation des rampants entre 40€ et 80€/m² selon l'isolant choisi. Pour une maison de 100 m², comptez entre 2 000€ et 3 500€ pour les combles perdus. Des aides financières permettent de réduire significativement le reste à charge. Nous estimons vos aides dans notre devis gratuit."
    },
    {
      question: "Pourquoi choisir un artisan qualifié QUALIBAT RGE pour l'isolation ?",
      answer: "La qualification QUALIBAT RGE garantit que l'entreprise a été formée et contrôlée sur la qualité de ses travaux d'isolation. Elle est indispensable pour que vos travaux soient éligibles aux aides de l'État. Wattsun Énergie est qualifié QUALIBAT RGE pour l'isolation des combles, des rampants de toiture et des murs intérieurs."
    },
    {
      question: "Quelle épaisseur d'isolant faut-il poser ?",
      answer: "La réglementation thermique impose une résistance thermique minimale : R ≥ 7 m².K/W en combles (soit environ 30 cm de laine de verre), R ≥ 6 en rampants, et R ≥ 3,7 pour les murs intérieurs. Nous respectons systématiquement ces seuils, voire les dépassons pour un confort optimal et une meilleure performance énergétique."
    },
    {
      question: "L'isolation des murs par l'intérieur réduit-elle la surface habitable ?",
      answer: "L'isolation des murs par l'intérieur (ITI) réduit légèrement la surface habitable (environ 5 à 10 cm par mur isolé). Cependant, les gains en confort thermique et en économies d'énergie compensent largement cette perte. De plus, les techniques modernes (isolants minces haute performance, doublage collé) permettent de minimiser l'épaisseur tout en atteignant les performances requises."
    },
    {
      question: "Combien de temps durent les travaux d'isolation ?",
      answer: "L'isolation des combles perdus par soufflage se réalise en une demi-journée à une journée. L'isolation des rampants prend 2 à 3 jours selon la surface. L'isolation des murs intérieurs nécessite 3 à 5 jours pour une maison complète. Nous travaillons proprement et protégeons vos espaces de vie pendant toute la durée du chantier."
    }
  ];

  return (
    <ServicePage
      title="Isolation Thermique"
      heroImage="isolation-hero.jpg"
      shortDescription="Isolez votre habitat pour un confort optimal et des économies durables — Particuliers et professionnels — QUALIBAT RGE"
      advantages={advantages}
      process={process}
      certifications={certifications}
      seoTitle={SERVICES.find(s => s.id === "isolation")?.seoTitle || "Isolation Thermique QUALIBAT RGE | Wattsun Énergie"}
      seoDescription={SERVICES.find(s => s.id === "isolation")?.seoDescription || "Isolation des combles, rampants et murs intérieurs par un artisan QUALIBAT RGE en Charente-Maritime. Particuliers et professionnels."}
      aides={aides}
      faq={faq}
    />
  );
}
