import LocalLandingPage from "@/components/LocalLandingPage";

export default function PanneauxSolairesSaintes() {
  return (
    <LocalLandingPage
      city="Saintes"
      region="Charente-Maritime"
      service="Panneaux Solaires"
      serviceSlug="panneaux-solaires"
      seoTitle="Installation Panneaux Solaires Saintes | Devis Gratuit | Wattsun Énergie"
      seoDescription="Installation de panneaux solaires photovoltaïques à Saintes et en Saintonge. Entreprise RGE QualiPV, devis gratuit, accompagnement aides. Intervention rapide."
      heroImage="panneaux-installation.jpg"
      introduction="Wattsun Énergie est votre installateur de panneaux solaires à Saintes et dans toute la Saintonge. Notre équipe certifiée RGE QualiPV intervient de Cognac à Royan pour vos projets photovoltaïques. La région de Saintes offre un excellent potentiel solaire avec plus de 2 000 heures d'ensoleillement par an. Que vous soyez particulier ou professionnel, nous vous accompagnons de l'étude à la mise en service, en passant par toutes les démarches administratives et les demandes d'aides."
      localAdvantages={[
        "Couverture complète de la Saintonge : Saintes, Cognac, Pons, Jonzac",
        "Expertise des toitures charentaises traditionnelles",
        "Certification RGE QualiPV pour toutes les aides",
        "Plus de 2 000 heures d'ensoleillement annuel",
        "Étude gratuite et devis sous 48h",
        "Gestion des démarches mairie et Enedis Saintes",
        "Équipe locale pour SAV et maintenance rapide",
        "Solutions pour particuliers et professionnels (hangars agricoles)"
      ]}
      stats={[
        { value: "30+", label: "Installations en Saintonge" },
        { value: "2050h", label: "Ensoleillement/an" },
        { value: "25 ans", label: "Garantie panneaux" },
        { value: "RGE", label: "Certification QualiPV" }
      ]}
      faq={[
        {
          question: "Quel est le prix d'une installation solaire à Saintes ?",
          answer: "À Saintes, le prix d'une installation photovoltaïque résidentielle varie de 8 500€ à 14 000€ pour 3 à 9 kWc. Les grandes toitures (hangars agricoles, bâtiments professionnels) permettent des installations plus importantes avec des tarifs dégressifs. Nous proposons aussi des solutions de location de toiture pour les agriculteurs."
        },
        {
          question: "Intervenez-vous à Cognac et dans le Cognaçais ?",
          answer: "Oui, nous intervenons à Cognac, Jarnac, Segonzac et dans tout le Cognaçais. Nous avons une bonne connaissance des spécificités locales, notamment pour les installations sur chais et bâtiments viticoles. Nous proposons des solutions adaptées aux professionnels du cognac."
        },
        {
          question: "Peut-on installer des panneaux sur une maison ancienne à Saintes ?",
          answer: "Oui, dans la plupart des cas. Saintes possède un patrimoine architectural riche, mais les installations solaires sont généralement autorisées hors secteur sauvegardé. Nous réalisons une étude de faisabilité gratuite et gérons les demandes auprès de l'ABF si nécessaire. Des solutions d'intégration discrète existent."
        },
        {
          question: "Quelles économies avec le solaire à Saintes ?",
          answer: "À Saintes, une installation de 6 kWc permet d'économiser 800 à 1 200€ par an sur la facture d'électricité. Avec l'autoconsommation et la revente du surplus, le retour sur investissement est de 8-10 ans. Ensuite, vous produisez de l'électricité quasi gratuite pendant 20-25 ans."
        },
        {
          question: "Proposez-vous des installations pour les agriculteurs ?",
          answer: "Oui, nous réalisons des installations photovoltaïques sur hangars agricoles, bâtiments d'élevage et chais. Les grandes surfaces de toiture permettent des installations de 36 à 100+ kWc avec revente totale ou autoconsommation. Nous proposons aussi des solutions de location de toiture sans investissement pour l'agriculteur."
        }
      ]}
      nearbyAreas={[
        "Cognac", "Pons", "Jonzac", "Royan", "Saujon",
        "Saint-Jean-d'Angély", "Chaniers", "Fontcouverte",
        "Bussac-sur-Charente", "Corme-Royal", "Gémozac"
      ]}
    />
  );
}
