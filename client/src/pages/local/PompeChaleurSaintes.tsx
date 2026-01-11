import LocalLandingPage from "@/components/LocalLandingPage";

export default function PompeChaleurSaintes() {
  return (
    <LocalLandingPage
      city="Saintes"
      region="Charente-Maritime"
      service="Pompe à Chaleur"
      serviceSlug="pompe-a-chaleur"
      seoTitle="Installation Pompe à Chaleur Saintes | Devis Gratuit | Wattsun Énergie"
      seoDescription="Installation de pompe à chaleur à Saintes et en Saintonge. Entreprise RGE QualiPAC, MaPrimeRénov', CEE. Remplacement chaudière fioul, chauffage économique."
      heroImage="pac-installation.jpg"
      introduction="Wattsun Énergie installe votre pompe à chaleur à Saintes et dans toute la Saintonge, de Cognac à Royan. Notre certification RGE QualiPAC vous garantit une installation de qualité et l'accès à toutes les aides financières. Le climat de la Saintonge, avec des hivers doux et des étés chauds, est parfaitement adapté aux pompes à chaleur réversibles qui assurent chauffage et climatisation. Remplacez votre vieille chaudière et divisez votre facture de chauffage par 3."
      localAdvantages={[
        "Couverture Saintonge : Saintes, Cognac, Pons, Jonzac, Royan",
        "Certification RGE QualiPAC pour maximiser vos aides",
        "Spécialiste remplacement chaudière fioul (aides majorées)",
        "Solutions chauffage + climatisation réversible",
        "Accompagnement MaPrimeRénov' et CEE complet",
        "Devis gratuit avec simulation d'économies",
        "Installation en 2-3 jours",
        "SAV et entretien local"
      ]}
      stats={[
        { value: "25+", label: "PAC en Saintonge" },
        { value: "÷3", label: "Facture chauffage" },
        { value: "9000€", label: "Aides max cumulées" },
        { value: "48h", label: "Délai devis" }
      ]}
      faq={[
        {
          question: "Combien coûte une PAC à Saintes avec les aides ?",
          answer: "À Saintes, une pompe à chaleur air-eau coûte 10 000-16 000€. Avec MaPrimeRénov' (jusqu'à 5 000€), les CEE (jusqu'à 4 000€) et la TVA 5,5%, le reste à charge peut descendre à 3 000-7 000€ selon vos revenus. Le remplacement d'une chaudière fioul bénéficie d'aides majorées."
        },
        {
          question: "Intervenez-vous à Cognac pour les pompes à chaleur ?",
          answer: "Oui, nous intervenons à Cognac, Jarnac, Segonzac et dans tout le Cognaçais. Nous avons l'habitude des grandes maisons charentaises et des chais qui nécessitent des solutions de chauffage adaptées. Nous proposons aussi des PAC pour les locaux professionnels."
        },
        {
          question: "PAC air-eau ou air-air pour ma maison à Saintes ?",
          answer: "La PAC air-eau est idéale si vous avez des radiateurs ou un plancher chauffant : elle remplace votre chaudière et peut produire l'eau chaude. La PAC air-air (climatisation réversible) convient aux maisons sans chauffage central ou en complément. Nous vous conseillons la meilleure solution selon votre logement."
        },
        {
          question: "Peut-on coupler PAC et panneaux solaires ?",
          answer: "Oui, c'est même une excellente combinaison ! Les panneaux solaires produisent l'électricité qui alimente la PAC, réduisant encore votre facture. En été, le surplus solaire alimente la climatisation. Nous proposons des offres couplées PAC + photovoltaïque avec des tarifs avantageux."
        },
        {
          question: "Quels délais pour installer une PAC à Saintes ?",
          answer: "Nous réalisons le devis sous 48h après visite technique. Les démarches d'aides prennent 2-4 semaines. L'installation dure 2-3 jours. Au total, comptez 1-2 mois entre votre demande et la mise en service de votre pompe à chaleur."
        }
      ]}
      nearbyAreas={[
        "Cognac", "Pons", "Jonzac", "Royan", "Saujon",
        "Saint-Jean-d'Angély", "Chaniers", "Fontcouverte",
        "Gémozac", "Cozes", "Mirambeau", "Archiac"
      ]}
    />
  );
}
