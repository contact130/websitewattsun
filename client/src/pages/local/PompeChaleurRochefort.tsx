import LocalLandingPage from "@/components/LocalLandingPage";

export default function PompeChaleurRochefort() {
  return (
    <LocalLandingPage
      city="Rochefort"
      region="Charente-Maritime"
      service="Pompe à Chaleur"
      serviceSlug="pompe-a-chaleur"
      seoTitle="Installation Pompe à Chaleur Rochefort | Devis Gratuit | Wattsun Énergie"
      seoDescription="Installation de pompe à chaleur à Rochefort et Pays Rochefortais. Entreprise RGE QualiPAC, aides MaPrimeRénov' et CEE. Chauffage économique garanti."
      heroImage="pac-installation.jpg"
      introduction="Wattsun Énergie installe votre pompe à chaleur à Rochefort et dans tout le Pays Rochefortais. Notre équipe certifiée RGE QualiPAC vous propose des solutions de chauffage adaptées aux maisons rochefortaises, qu'elles soient anciennes ou récentes. Le climat tempéré de Rochefort permet aux pompes à chaleur de fonctionner avec un excellent rendement toute l'année. Profitez des aides MaPrimeRénov' et CEE pour remplacer votre vieille chaudière par une PAC performante."
      localAdvantages={[
        "Expertise des maisons anciennes du centre de Rochefort",
        "Certification RGE QualiPAC pour toutes les aides",
        "Intervention sur Rochefort, Tonnay-Charente, Fouras, Île d'Oléron",
        "Solutions adaptées : air-eau, air-air, hybride",
        "Accompagnement complet MaPrimeRénov' et CEE",
        "Devis gratuit sous 48h avec simulation d'économies",
        "Contrat d'entretien et SAV local",
        "Remplacement de chaudière fioul ou gaz"
      ]}
      stats={[
        { value: "40+", label: "PAC à Rochefort" },
        { value: "5000€", label: "MaPrimeRénov' max" },
        { value: "2-3j", label: "Durée installation" },
        { value: "15 ans", label: "Durée de vie PAC" }
      ]}
      faq={[
        {
          question: "Peut-on installer une PAC dans une maison ancienne à Rochefort ?",
          answer: "Oui, les pompes à chaleur s'adaptent très bien aux maisons anciennes de Rochefort. La PAC air-eau se raccorde à vos radiateurs existants ou à un plancher chauffant. Pour les maisons sans circuit de chauffage central, nous proposons des PAC air-air (climatisation réversible) ou des solutions hybrides."
        },
        {
          question: "Quel est le coût d'une PAC à Rochefort ?",
          answer: "Une pompe à chaleur air-eau à Rochefort coûte entre 10 000€ et 16 000€ selon la puissance et le modèle. Avec les aides (MaPrimeRénov' + CEE + TVA 5,5%), le reste à charge peut être réduit de 40 à 60%. Nous établissons un devis gratuit avec le calcul précis de vos aides."
        },
        {
          question: "La PAC remplace-t-elle ma chaudière fioul ?",
          answer: "Oui, la pompe à chaleur air-eau remplace parfaitement une chaudière fioul ou gaz. Elle se raccorde au même circuit de chauffage (radiateurs, plancher chauffant). Le remplacement d'une chaudière fioul par une PAC est particulièrement aidé : jusqu'à 9 000€ d'aides cumulées."
        },
        {
          question: "Intervenez-vous sur l'Île d'Oléron pour les PAC ?",
          answer: "Oui, nous installons des pompes à chaleur sur l'Île d'Oléron. Les résidences secondaires comme principales peuvent bénéficier de nos services. Nous connaissons les spécificités de l'île (humidité, air salin) et proposons des modèles adaptés avec traitement anti-corrosion."
        },
        {
          question: "Quel entretien pour une PAC à Rochefort ?",
          answer: "L'entretien d'une PAC est obligatoire tous les 2 ans. Il comprend le contrôle du circuit frigorifique, le nettoyage des filtres et de l'unité extérieure. Nous proposons des contrats d'entretien annuel à partir de 150€/an avec intervention prioritaire en cas de panne."
        }
      ]}
      nearbyAreas={[
        "Tonnay-Charente", "Fouras", "Échillais", "Soubise", "Saint-Agnant",
        "Île d'Oléron", "Marennes", "Brouage", "Port-des-Barques",
        "Yves", "Châtelaillon-Plage", "Saint-Laurent-de-la-Prée"
      ]}
    />
  );
}
