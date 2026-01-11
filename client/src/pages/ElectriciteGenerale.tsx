import ServicePage from "@/components/ServicePage";
import { SERVICES } from "../../../shared/const";

export default function ElectriciteGenerale() {
  const advantages = [
    "Tous travaux d'électricité par des professionnels certifiés",
    "Mise aux normes NF C 15-100",
    "Dépannage rapide et efficace",
    "Installation et rénovation complète",
    "Sécurité et conformité garanties",
    "Devis gratuit et détaillé",
    "Intervention rapide",
    "Garantie décennale",
    "Respect des délais",
    "Matériel de qualité professionnelle"
  ];

  const process = [
    {
      step: 1,
      title: "Diagnostic et Évaluation",
      description: "Analyse de votre installation électrique actuelle, identification des besoins et des non-conformités éventuelles."
    },
    {
      step: 2,
      title: "Devis Détaillé",
      description: "Proposition chiffrée précise avec descriptif des travaux, matériel utilisé et planning d'intervention."
    },
    {
      step: 3,
      title: "Planification des Travaux",
      description: "Organisation du chantier en fonction de vos contraintes et disponibilités, commande du matériel."
    },
    {
      step: 4,
      title: "Réalisation",
      description: "Exécution des travaux dans les règles de l'art : câblage, tableaux électriques, prises, éclairage, domotique."
    },
    {
      step: 5,
      title: "Contrôle et Certification",
      description: "Vérification complète de l'installation, tests de sécurité, remise du certificat de conformité Consuel si nécessaire."
    }
  ];

  const aides = [
    "TVA réduite à 10% (logement > 2 ans)",
    "Aides ANAH (rénovation énergétique)",
    "Éco-PTZ (si rénovation globale)"
  ];

  const faq = [
    {
      question: "Quel est le prix d'une rénovation électrique complète ?",
      answer: "Le prix d'une rénovation électrique complète varie entre 80€ et 120€ par m² selon l'état de l'installation existante et les prestations souhaitées. Pour une maison de 100 m², comptez entre 8 000€ et 12 000€. Ce prix inclut le tableau électrique, le câblage, les prises, interrupteurs et la mise en conformité. Nous réalisons un devis gratuit détaillé après diagnostic."
    },
    {
      question: "Comment savoir si mon installation électrique est aux normes ?",
      answer: "Plusieurs signes indiquent une installation vétuste : tableau avec fusibles au lieu de disjoncteurs, prises sans terre, fils apparents ou gainés tissu, absence de différentiel 30mA, disjonctions fréquentes. Un diagnostic électrique (obligatoire pour la vente) révèle les non-conformités. Nous proposons un diagnostic gratuit de votre installation."
    },
    {
      question: "Qu'est-ce que la norme NF C 15-100 ?",
      answer: "La norme NF C 15-100 est la réglementation française qui définit les règles de conception et de réalisation des installations électriques basses tension. Elle impose notamment : un nombre minimum de prises par pièce, la protection différentielle 30mA, des circuits dédiés pour les gros appareils, et des règles de sécurité dans les salles d'eau. Toutes nos installations respectent cette norme."
    },
    {
      question: "Faut-il un certificat Consuel pour une rénovation électrique ?",
      answer: "Le certificat Consuel est obligatoire pour une installation neuve ou une rénovation complète avec nouveau branchement. Pour une rénovation partielle sans modification du branchement, il n'est pas obligatoire mais nous délivrons une attestation de conformité. Le Consuel coûte environ 150€ et valide la conformité de l'installation."
    },
    {
      question: "Combien de temps dure une rénovation électrique ?",
      answer: "La durée dépend de l'ampleur des travaux : 2-3 jours pour un tableau électrique et quelques circuits, 1 semaine pour une rénovation partielle, 2-3 semaines pour une rénovation complète d'une maison. Nous travaillons en coordination avec les autres corps de métier si nécessaire et minimisons les coupures de courant."
    },
    {
      question: "Proposez-vous des solutions domotique ?",
      answer: "Oui, nous installons des systèmes domotiques pour le contrôle de l'éclairage, du chauffage, des volets roulants et de la sécurité. Les solutions vont du simple interrupteur connecté à l'installation complète avec centrale domotique. La domotique permet de réaliser jusqu'à 30% d'économies d'énergie en optimisant la gestion de votre habitat."
    }
  ];

  return (
    <ServicePage
      title="Électricité Générale"
      heroImage="electricite-cablage.jpg"
      shortDescription="Tous vos travaux d'électricité par des professionnels certifiés"
      advantages={advantages}
      process={process}
      aides={aides}
      seoTitle={SERVICES.find(s => s.id === "electricite")?.seoTitle || "Électricité Générale"}
      seoDescription={SERVICES.find(s => s.id === "electricite")?.seoDescription || "Installation et rénovation électrique pour votre habitat."}
      faq={faq}
    />
  );
}
