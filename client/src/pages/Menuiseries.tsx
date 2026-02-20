import ServicePage from "@/components/ServicePage";
import { SERVICES } from "../../../shared/const";

export default function Menuiseries() {
  const advantages = [
    "Entreprise qualifiée QUALIBAT RGE pour la pose de menuiseries",
    "Intervention pour les particuliers et les professionnels",
    "Fenêtres, portes-fenêtres et baies vitrées haute performance",
    "Volets roulants et battants (PVC, aluminium, bois)",
    "Portes d'entrée sécurisées et isolantes",
    "Double et triple vitrage pour une isolation optimale",
    "Menuiseries PVC, aluminium et mixtes bois-alu",
    "Réduction des déperditions thermiques jusqu'à 15%",
    "Amélioration de l'isolation acoustique",
    "Garantie décennale et SAV réactif"
  ];

  const process = [
    {
      step: 1,
      title: "Visite Technique et Prise de Mesures",
      description: "Relevé précis de toutes les ouvertures, analyse de l'état des menuiseries existantes, étude des contraintes (PLU, copropriété, bâtiment classé). Conseil sur les matériaux et les performances thermiques."
    },
    {
      step: 2,
      title: "Devis et Choix des Menuiseries",
      description: "Proposition détaillée avec différentes gammes (PVC, aluminium, bois-alu), coloris et options (volets intégrés, oscillo-battant, motorisation). Estimation des aides financières disponibles."
    },
    {
      step: 3,
      title: "Fabrication sur Mesure",
      description: "Commande et fabrication des menuiseries aux dimensions exactes de vos ouvertures. Délai de fabrication de 4 à 6 semaines selon les modèles choisis."
    },
    {
      step: 4,
      title: "Dépose et Pose Professionnelle",
      description: "Dépose soignée des anciennes menuiseries, pose en applique ou en tunnel selon la configuration. Calfeutrement, étanchéité à l'air et à l'eau, réglages fins des ouvrants."
    },
    {
      step: 5,
      title: "Finitions et Remise des Documents",
      description: "Habillage intérieur et extérieur, nettoyage complet. Remise de l'attestation QUALIBAT RGE, des fiches techniques et des documents pour vos dossiers d'aides."
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
      question: "PVC, aluminium ou bois : quel matériau choisir pour ses fenêtres ?",
      answer: "Le PVC offre le meilleur rapport qualité/prix avec d'excellentes performances thermiques et un entretien minimal. L'aluminium est plus fin et moderne, idéal pour les grandes baies vitrées, mais légèrement moins isolant. Le bois-aluminium combine l'esthétique du bois à l'intérieur et la résistance de l'alu à l'extérieur. Nous vous conseillons selon votre budget, votre style et vos exigences thermiques."
    },
    {
      question: "Combien coûte le remplacement de fenêtres ?",
      answer: "Le prix varie selon le matériau et les dimensions : 300-600€ pour une fenêtre PVC standard, 500-900€ pour de l'aluminium, et 700-1 200€ pour du bois-alu. Une baie vitrée coulissante coûte entre 800€ et 2 000€. Des aides financières permettent de réduire significativement le reste à charge. Nous incluons l'estimation des aides dans notre devis gratuit."
    },
    {
      question: "Pourquoi choisir un installateur qualifié QUALIBAT RGE ?",
      answer: "La qualification QUALIBAT RGE garantit que l'entreprise maîtrise les techniques de pose conformes aux normes thermiques. Elle est indispensable pour bénéficier des aides de l'État. Wattsun Énergie est qualifié QUALIBAT RGE pour la pose de menuiseries, ce qui vous assure une installation de qualité et l'accès à toutes les aides disponibles."
    },
    {
      question: "Double ou triple vitrage : que choisir ?",
      answer: "Le double vitrage (Uw ≤ 1,3 W/m².K) est suffisant dans la plupart des cas en Charente-Maritime grâce à notre climat tempéré. Le triple vitrage (Uw ≤ 0,8) est recommandé pour les façades nord très exposées ou dans le cadre d'une maison passive. Le surcoût du triple vitrage (20-30%) n'est pas toujours justifié par les économies supplémentaires dans notre région."
    },
    {
      question: "Combien de temps dure le remplacement des fenêtres ?",
      answer: "Comptez environ 2 à 3 heures par fenêtre standard et une demi-journée pour une baie vitrée. Pour une maison complète (8-10 fenêtres), les travaux durent 2 à 3 jours. Nous protégeons soigneusement vos intérieurs et nettoyons après chaque pose. Votre maison reste habitable pendant toute la durée des travaux."
    },
    {
      question: "Les volets roulants sont-ils inclus dans les aides ?",
      answer: "Les volets roulants isolants peuvent être éligibles aux primes énergie lorsqu'ils sont posés en remplacement de volets existants non isolants. Ils contribuent à l'isolation thermique et au confort d'été. Nous proposons des volets roulants manuels et motorisés (solaires ou filaires) dans différents coloris."
    }
  ];

  return (
    <ServicePage
      title="Menuiseries"
      heroImage="menuiseries-hero.jpg"
      shortDescription="Fenêtres, portes et volets haute performance — Particuliers et professionnels — QUALIBAT RGE"
      advantages={advantages}
      process={process}
      certifications={certifications}
      seoTitle={SERVICES.find(s => s.id === "menuiseries")?.seoTitle || "Menuiseries QUALIBAT RGE : Fenêtres, Portes, Volets | Wattsun Énergie"}
      seoDescription={SERVICES.find(s => s.id === "menuiseries")?.seoDescription || "Installation de menuiseries QUALIBAT RGE en Charente-Maritime. Particuliers et professionnels. Devis gratuit."}
      aides={aides}
      faq={faq}
    />
  );
}
