import LocalLandingPage from "@/components/LocalLandingPage";

export default function PompeChaleurLaRochelle() {
  return (
    <LocalLandingPage
      city="La Rochelle"
      region="Charente-Maritime"
      service="Pompe à Chaleur"
      serviceSlug="pompe-a-chaleur"
      seoTitle="Installation Pompe à Chaleur La Rochelle | Devis Gratuit | Wattsun Énergie"
      seoDescription="Installation de pompe à chaleur air-eau et air-air à La Rochelle. Entreprise RGE QualiPAC, MaPrimeRénov', devis gratuit. Chauffage économique et écologique."
      heroImage="pac-installation.jpg"
      introduction="Wattsun Énergie installe votre pompe à chaleur à La Rochelle et dans toute l'agglomération rochelaise. Certifiés RGE QualiPAC, nous vous proposons des solutions de chauffage économiques et écologiques adaptées au climat océanique de la Charente-Maritime. Le climat doux de La Rochelle (rarement en dessous de 0°C) est idéal pour les pompes à chaleur air-eau, qui offrent un excellent rendement toute l'année. Bénéficiez de MaPrimeRénov' et des CEE pour réduire votre investissement."
      localAdvantages={[
        "Climat océanique idéal pour les PAC (COP élevé toute l'année)",
        "Entreprise locale certifiée RGE QualiPAC",
        "Accompagnement MaPrimeRénov' et CEE (jusqu'à 9 000€ d'aides)",
        "Intervention rapide sur La Rochelle et l'agglomération",
        "Expertise des maisons charentaises et logements collectifs",
        "Contrats d'entretien annuel disponibles",
        "SAV local réactif sous 24-48h",
        "Solutions air-eau, air-air et hybrides"
      ]}
      stats={[
        { value: "90+", label: "PAC installées localement" },
        { value: "70%", label: "Économies chauffage" },
        { value: "9000€", label: "Aides cumulables" },
        { value: "QualiPAC", label: "Certification RGE" }
      ]}
      faq={[
        {
          question: "Quel est le prix d'une pompe à chaleur à La Rochelle ?",
          answer: "À La Rochelle, une pompe à chaleur air-eau coûte entre 10 000€ et 18 000€ pose comprise. Avec MaPrimeRénov' (jusqu'à 5 000€) et les CEE (jusqu'à 4 000€), le reste à charge peut descendre à 4 000-8 000€ selon vos revenus. Nous réalisons un devis gratuit avec simulation des aides."
        },
        {
          question: "Une PAC est-elle adaptée au climat de La Rochelle ?",
          answer: "Absolument ! Le climat océanique de La Rochelle est idéal pour les pompes à chaleur. Les hivers doux (moyenne 7°C) permettent un COP (coefficient de performance) élevé toute l'année. Une PAC air-eau fonctionne parfaitement jusqu'à -15°C, température jamais atteinte à La Rochelle."
        },
        {
          question: "Quelles aides pour une PAC en Charente-Maritime ?",
          answer: "En Charente-Maritime, vous pouvez cumuler MaPrimeRénov' (jusqu'à 5 000€), les CEE (jusqu'à 4 000€), la TVA à 5,5% et l'éco-PTZ (jusqu'à 15 000€ à taux zéro). Selon vos revenus, les aides peuvent couvrir jusqu'à 60% du coût. Nous montons tous vos dossiers gratuitement."
        },
        {
          question: "Combien de temps pour installer une PAC à La Rochelle ?",
          answer: "L'installation d'une pompe à chaleur prend 2-3 jours. Les démarches d'aides (MaPrimeRénov', CEE) nécessitent 2-4 semaines de validation. Au total, comptez 1-2 mois entre le devis et la mise en service. Nous gérons toutes les démarches administratives."
        },
        {
          question: "Proposez-vous l'entretien des pompes à chaleur ?",
          answer: "Oui, nous proposons des contrats d'entretien annuel (obligatoire tous les 2 ans pour les PAC > 4 kW). L'entretien comprend le contrôle du circuit frigorifique, le nettoyage des filtres et la vérification des performances. Notre équipe locale intervient sous 24-48h en cas de panne."
        }
      ]}
      nearbyAreas={[
        "Aytré", "Périgny", "Lagord", "L'Houmeau", "Nieul-sur-Mer",
        "Angoulins", "Châtelaillon-Plage", "Dompierre-sur-Mer",
        "Puilboreau", "Saint-Xandre", "Sainte-Soulle", "La Jarrie"
      ]}
    />
  );
}
