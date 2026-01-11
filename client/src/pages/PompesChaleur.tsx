import ServicePage from "@/components/ServicePage";
import { SERVICES } from "../../../shared/const";

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
      logo: "/LogoQualiPACtransparent.png",
      name: "QualiPAC"
    }
  ];

  const aides = [
    "MaPrimeRénov' (jusqu'à 5 000€)",
    "CEE (jusqu'à 4 200€ en zone H2)",
    "TVA réduite à 5,5%",
    "Éco-PTZ (jusqu'à 15 000€)"
  ];

  const faq = [
    {
      question: "Quel est le prix d'une pompe à chaleur air-eau ?",
      answer: "Le prix d'une pompe à chaleur air-eau varie entre 10 000€ et 18 000€ pose comprise, selon la puissance et le modèle choisi. Avec les aides (MaPrimeRénov' jusqu'à 5 000€, CEE jusqu'à 4 200€), le reste à charge peut descendre à 5 000-8 000€. Nous réalisons un devis gratuit personnalisé selon votre situation."
    },
    {
      question: "Quelle différence entre pompe à chaleur air-air et air-eau ?",
      answer: "La PAC air-air (climatisation réversible) diffuse la chaleur par soufflage d'air via des unités murales. Elle est idéale pour le chauffage d'appoint et la climatisation. La PAC air-eau chauffe un circuit d'eau qui alimente vos radiateurs ou plancher chauffant, et peut aussi produire l'eau chaude sanitaire. Elle remplace totalement votre chaudière."
    },
    {
      question: "Une pompe à chaleur fonctionne-t-elle par grand froid ?",
      answer: "Oui, les pompes à chaleur modernes fonctionnent jusqu'à -15°C voire -25°C pour certains modèles. En Charente-Maritime, où les hivers sont doux (rarement en dessous de -5°C), une PAC air-eau fonctionne parfaitement toute l'année. Le COP (coefficient de performance) diminue par temps froid mais reste avantageux."
    },
    {
      question: "Quelles sont les aides pour installer une pompe à chaleur en 2026 ?",
      answer: "En 2026, vous pouvez bénéficier de MaPrimeRénov' (jusqu'à 5 000€ selon vos revenus), des Certificats d'Économie d'Énergie CEE (jusqu'à 4 200€ en zone H2), de la TVA à 5,5%, et de l'éco-PTZ (prêt à taux zéro jusqu'à 15 000€). Nous nous occupons de monter tous vos dossiers d'aides."
    },
    {
      question: "Combien de temps dure l'installation d'une PAC ?",
      answer: "L'installation d'une pompe à chaleur air-eau prend généralement 2 à 3 jours. Cela comprend la pose de l'unité extérieure, le raccordement au circuit de chauffage existant, les branchements électriques et la mise en service. Pour une PAC air-air, comptez 1 à 2 jours selon le nombre d'unités intérieures."
    },
    {
      question: "Quel entretien pour une pompe à chaleur ?",
      answer: "L'entretien d'une PAC est obligatoire tous les 2 ans pour les appareils de plus de 4 kW. Il comprend le contrôle du circuit frigorifique, le nettoyage des filtres et de l'unité extérieure, la vérification des performances. Nous proposons des contrats d'entretien annuels pour garantir la longévité de votre installation."
    }
  ];

  return (
    <ServicePage
      title="Pompes à Chaleur"
      heroImage="pac-installation.jpg"
      shortDescription="Chauffage écologique et économique pour votre confort toute l'année"
      advantages={advantages}
      process={process}
      certifications={certifications}
      seoTitle={SERVICES.find(s => s.id === "pompes-chaleur")?.seoTitle || "Pompes à Chaleur"}
      seoDescription={SERVICES.find(s => s.id === "pompes-chaleur")?.seoDescription || "Chauffage et climatisation écologiques pour un confort optimal."}
      aides={aides}
      faq={faq}
    />
  );
}
