import LocalLandingPage from "@/components/LocalLandingPage";

export default function PanneauxSolairesRochefort() {
  return (
    <LocalLandingPage
      city="Rochefort"
      region="Charente-Maritime"
      service="Panneaux Solaires"
      serviceSlug="panneaux-solaires"
      seoTitle="Installation Panneaux Solaires Rochefort | Devis Gratuit | Wattsun Énergie"
      seoDescription="Installation de panneaux solaires photovoltaïques à Rochefort et environs. Entreprise RGE QualiPV locale, devis gratuit sous 48h, accompagnement aides financières."
      heroImage="panneaux-installation.jpg"
      introduction="Wattsun Énergie installe vos panneaux solaires à Rochefort et dans tout le Pays Rochefortais. Notre équipe certifiée RGE QualiPV intervient rapidement pour transformer votre toiture en source d'énergie verte. Rochefort et ses environs bénéficient d'un ensoleillement exceptionnel, idéal pour le photovoltaïque. Que vous habitiez le centre-ville, Tonnay-Charente, Fouras ou l'Île d'Oléron, nous vous proposons une étude gratuite et un accompagnement complet pour votre projet solaire."
      localAdvantages={[
        "Intervention rapide à Rochefort et dans le Pays Rochefortais",
        "Nombreuses références locales : Tonnay-Charente, Fouras, Île d'Oléron",
        "Certification RGE QualiPV pour maximiser vos aides",
        "Connaissance des spécificités locales (zones protégées, PLU)",
        "Étude de faisabilité gratuite sous 48h",
        "Accompagnement démarches mairie de Rochefort et Enedis",
        "Installation en 1-2 jours par équipe locale",
        "SAV et maintenance assurés localement"
      ]}
      stats={[
        { value: "50+", label: "Installations à Rochefort" },
        { value: "2000h", label: "Ensoleillement/an" },
        { value: "8-10 ans", label: "Retour sur investissement" },
        { value: "48h", label: "Délai d'intervention" }
      ]}
      faq={[
        {
          question: "Combien coûte une installation solaire à Rochefort ?",
          answer: "À Rochefort, une installation photovoltaïque de 6 kWc (16 panneaux) coûte entre 9 000€ et 12 000€ pose comprise. Avec la prime à l'autoconsommation et la TVA réduite, le reste à charge descend à 7 000-9 000€. Le retour sur investissement est de 8-10 ans grâce à l'excellent ensoleillement local."
        },
        {
          question: "Peut-on installer des panneaux solaires en zone protégée à Rochefort ?",
          answer: "Oui, mais avec des contraintes. Le centre historique de Rochefort est en zone ABF (Architecte des Bâtiments de France). Nous connaissons les règles locales et proposons des solutions adaptées : panneaux intégrés au bâti, couleurs spécifiques. Nous gérons les demandes d'autorisation auprès de l'ABF."
        },
        {
          question: "Intervenez-vous sur l'Île d'Oléron ?",
          answer: "Oui, nous intervenons régulièrement sur l'Île d'Oléron. Nous avons réalisé de nombreuses installations à Saint-Pierre-d'Oléron, Le Château-d'Oléron, Dolus et Saint-Georges. Nous connaissons les contraintes spécifiques de l'île (zones naturelles, réglementations locales)."
        },
        {
          question: "Quelle production solaire espérer à Rochefort ?",
          answer: "À Rochefort, une installation de 6 kWc produit environ 7 000 kWh par an. C'est suffisant pour couvrir 60-70% de la consommation d'un foyer moyen. Avec une batterie de stockage, vous pouvez atteindre 80% d'autoconsommation et réduire drastiquement votre facture EDF."
        },
        {
          question: "Quels sont les délais d'installation à Rochefort ?",
          answer: "Nous intervenons sous 48h pour l'étude technique gratuite. Les démarches administratives (mairie, Enedis) prennent 2-3 mois. L'installation elle-même dure 1-2 jours. Au total, votre projet est opérationnel en 3-4 mois. Nous gérons toute la paperasse pour vous."
        }
      ]}
      nearbyAreas={[
        "Tonnay-Charente", "Fouras", "Échillais", "Soubise", "Saint-Agnant",
        "Île d'Oléron", "Saint-Pierre-d'Oléron", "Le Château-d'Oléron",
        "Marennes", "Brouage", "Port-des-Barques", "Yves"
      ]}
    />
  );
}
