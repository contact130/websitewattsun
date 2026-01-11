import LocalLandingPage from "@/components/LocalLandingPage";

export default function PanneauxSolairesLaRochelle() {
  return (
    <LocalLandingPage
      city="La Rochelle"
      region="Charente-Maritime"
      service="Panneaux Solaires"
      serviceSlug="panneaux-solaires"
      seoTitle="Installation Panneaux Solaires La Rochelle | Devis Gratuit | Wattsun Énergie"
      seoDescription="Installation de panneaux solaires photovoltaïques à La Rochelle et en Charente-Maritime. Entreprise RGE QualiPV, devis gratuit, aides financières. Plus de 200 installations réalisées."
      heroImage="panneaux-installation.jpg"
      introduction="Wattsun Énergie est votre installateur de panneaux solaires de référence à La Rochelle et dans toute la Charente-Maritime. Avec plus de 200 installations réalisées dans la région et une équipe certifiée RGE QualiPV, nous vous accompagnons dans votre projet d'autoconsommation solaire. La Rochelle bénéficie d'un excellent ensoleillement (2 100 heures par an), ce qui en fait une zone idéale pour le photovoltaïque. Nos techniciens locaux interviennent rapidement pour l'étude, l'installation et le suivi de votre projet."
      localAdvantages={[
        "Entreprise locale basée à Dompierre-sur-Mer, à 10 min de La Rochelle",
        "Plus de 200 installations photovoltaïques réalisées en Charente-Maritime",
        "Certification RGE QualiPV pour bénéficier de toutes les aides",
        "2 100 heures d'ensoleillement par an à La Rochelle",
        "Intervention rapide sous 48h pour l'étude technique",
        "Accompagnement complet : démarches administratives, aides, raccordement",
        "Garantie 25 ans sur les panneaux, 10 ans sur l'installation",
        "Suivi de production via application mobile"
      ]}
      stats={[
        { value: "200+", label: "Installations en Charente-Maritime" },
        { value: "2100h", label: "Ensoleillement/an à La Rochelle" },
        { value: "70%", label: "Économies sur la facture" },
        { value: "25 ans", label: "Garantie panneaux" }
      ]}
      faq={[
        {
          question: "Quel est le prix d'une installation solaire à La Rochelle ?",
          answer: "À La Rochelle, le prix d'une installation photovoltaïque varie entre 8 000€ et 15 000€ pour une puissance de 3 à 9 kWc. Avec les aides (prime à l'autoconsommation de 80€/kWc, TVA 5,5%), le reste à charge est réduit de 20-30%. Nous réalisons un devis gratuit personnalisé avec simulation de rentabilité basée sur l'ensoleillement local."
        },
        {
          question: "Combien produisent des panneaux solaires à La Rochelle ?",
          answer: "À La Rochelle, avec 2 100 heures d'ensoleillement par an, une installation de 6 kWc produit environ 7 200 kWh/an, soit l'équivalent de la consommation d'un foyer de 4 personnes. C'est 10-15% de plus que la moyenne nationale grâce au climat favorable de la côte atlantique."
        },
        {
          question: "Quelles sont les aides pour le solaire en Charente-Maritime ?",
          answer: "En Charente-Maritime, vous bénéficiez de la prime à l'autoconsommation (80€/kWc), de la TVA à 5,5% pour les installations < 9 kWc, du tarif de rachat garanti 20 ans, et potentiellement d'aides de la Région Nouvelle-Aquitaine. Notre équipe monte tous vos dossiers d'aides gratuitement."
        },
        {
          question: "Intervenez-vous sur l'Île de Ré ?",
          answer: "Oui, nous intervenons sur l'Île de Ré et toutes les communes de l'agglomération rochelaise. Nous avons réalisé de nombreuses installations sur l'île, en respectant les contraintes architecturales spécifiques (zone protégée). Nos équipes connaissent parfaitement les réglementations locales."
        },
        {
          question: "Combien de temps pour installer des panneaux solaires à La Rochelle ?",
          answer: "L'installation des panneaux prend 1-2 jours. Les démarches préalables (déclaration de travaux en mairie de La Rochelle, demande de raccordement Enedis) nécessitent 2-3 mois. Au total, comptez 3-4 mois entre le devis et la mise en service. Nous gérons toutes les démarches administratives."
        }
      ]}
      nearbyAreas={[
        "Aytré", "Périgny", "Lagord", "L'Houmeau", "Nieul-sur-Mer",
        "Angoulins", "Châtelaillon-Plage", "Île de Ré", "Saint-Martin-de-Ré",
        "La Flotte", "Dompierre-sur-Mer", "Puilboreau", "Saint-Xandre"
      ]}
    />
  );
}
