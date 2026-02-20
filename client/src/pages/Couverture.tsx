import ServicePage from "@/components/ServicePage";
import { SERVICES } from "../../../shared/const";

export default function Couverture() {
  const advantages = [
    "Intervention pour les particuliers et les professionnels",
    "Réfection complète ou partielle de toiture",
    "Pose et remplacement de tuiles (terre cuite, béton, ardoise)",
    "Travaux de zinguerie (gouttières, chéneaux, noues, faîtages)",
    "Réparation de fuites et infiltrations",
    "Traitement de charpente et remplacement de bois abîmés",
    "Pose d'écrans sous-toiture pour une étanchéité renforcée",
    "Création et habillage de lucarnes et fenêtres de toit (Velux)",
    "Démoussage et nettoyage de toiture",
    "Intervention rapide en cas d'urgence (tempête, dégâts)",
    "Garantie décennale sur tous nos travaux de couverture"
  ];

  const process = [
    {
      step: 1,
      title: "Inspection de la Toiture",
      description: "Montée en toiture pour un diagnostic complet : état des tuiles, de la charpente, de la zinguerie et de l'étanchéité. Identification des zones à risque et des réparations nécessaires."
    },
    {
      step: 2,
      title: "Devis Détaillé",
      description: "Proposition chiffrée précise avec descriptif des travaux, choix des matériaux (type de tuiles, zinc ou alu pour la zinguerie) et planning d'intervention. Photos du diagnostic à l'appui."
    },
    {
      step: 3,
      title: "Installation de l'Échafaudage",
      description: "Mise en place de l'échafaudage et des protections de sécurité. Bâchage si nécessaire pour protéger votre intérieur pendant les travaux. Respect strict des normes de sécurité en hauteur."
    },
    {
      step: 4,
      title: "Travaux de Couverture",
      description: "Dépose des éléments abîmés, réparation ou remplacement de la charpente si nécessaire, pose de l'écran sous-toiture, mise en place des tuiles neuves et de la zinguerie."
    },
    {
      step: 5,
      title: "Contrôle d'Étanchéité et Nettoyage",
      description: "Vérification complète de l'étanchéité, test d'écoulement des eaux pluviales, nettoyage du chantier et évacuation des gravats. Remise des documents de garantie."
    }
  ];

  const aides = [
    "TVA réduite à 10% (logement de plus de 2 ans)",
    "TVA à 5,5% si associé à des travaux d'isolation",
    "Aides à la rénovation énergétique (si rénovation globale)",
    "Éco-prêt à taux zéro"
  ];

  const faq = [
    {
      question: "Quand faut-il refaire sa toiture ?",
      answer: "Une toiture en tuiles terre cuite dure 30 à 50 ans, en ardoise 70 à 100 ans. Les signes d'alerte sont : tuiles cassées ou déplacées, mousse excessive, traces d'humidité dans les combles, gouttières qui débordent, ou une facture de chauffage en hausse (déperditions par le toit). Nous proposons un diagnostic gratuit pour évaluer l'état de votre toiture."
    },
    {
      question: "Combien coûte une réfection de toiture ?",
      answer: "Le prix varie selon l'ampleur des travaux : 40-80€/m² pour un remplacement de tuiles, 80-150€/m² pour une réfection complète avec écran sous-toiture, et 15-30€/ml pour la zinguerie. Pour une maison de 100 m² au sol (environ 120 m² de toiture), comptez entre 10 000€ et 18 000€ pour une réfection complète. Le devis est gratuit et sans engagement."
    },
    {
      question: "Quels types de tuiles posez-vous ?",
      answer: "Nous posons tous types de tuiles adaptés à la région Charente-Maritime : tuiles canal (typiques du Sud-Ouest), tuiles romanes, tuiles plates, et tuiles mécaniques à emboîtement. Nous travaillons avec les grandes marques (Monier, Terreal, Imerys) et respectons les prescriptions du PLU de votre commune pour les coloris et les formes."
    },
    {
      question: "Intervenez-vous en urgence pour les fuites ?",
      answer: "Oui, nous intervenons rapidement en cas de fuite ou de dégâts suite à une tempête. Nous réalisons un bâchage d'urgence pour protéger votre intérieur, puis planifions la réparation définitive. Pensez à contacter votre assurance habitation qui peut couvrir les dégâts liés aux intempéries."
    },
    {
      question: "Le démoussage de toiture est-il nécessaire ?",
      answer: "Oui, la mousse et les lichens retiennent l'humidité, ce qui fragilise les tuiles et peut provoquer des infiltrations. Un démoussage tous les 5 à 10 ans prolonge la durée de vie de votre toiture. Nous proposons un traitement complet : nettoyage haute pression adapté, application d'un traitement anti-mousse et d'un hydrofuge pour une protection durable."
    },
    {
      question: "Peut-on refaire la toiture et isoler en même temps ?",
      answer: "Absolument, et c'est même recommandé ! Profiter d'une réfection de toiture pour isoler par l'extérieur (sarking) ou poser un écran sous-toiture et isoler les rampants est la solution la plus efficace. Cela permet de bénéficier de la TVA à 5,5% sur l'ensemble des travaux et d'optimiser les aides MaPrimeRénov'. C'est notre spécialité chez Wattsun Énergie."
    }
  ];

  return (
    <ServicePage
      title="Couverture"
      heroImage="couverture-hero.jpg"
      shortDescription="Réfection, réparation et entretien de toiture — Particuliers et professionnels"
      advantages={advantages}
      process={process}
      seoTitle={SERVICES.find(s => s.id === "couverture")?.seoTitle || "Couverture et Toiture en Charente-Maritime | Wattsun Énergie"}
      seoDescription={SERVICES.find(s => s.id === "couverture")?.seoDescription || "Travaux de couverture, réfection de toiture et zinguerie en Charente-Maritime. Devis gratuit."}
      aides={aides}
      faq={faq}
    />
  );
}
