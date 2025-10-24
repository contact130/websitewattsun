// Real Google reviews for Wattsun Énergie
export interface Review {
  id: number;
  name: string;
  date: string;
  text: string;
  avatar: string | null;
}

export const reviewsData: Review[] = [
  {
    id: 1,
    name: "Antonio DIAS-PEREIRA",
    date: "Juillet 2024",
    text: "Pour une installation de panneaux photovoltaïques de 3 kWc, j'ai choisi de faire appel à WATTSUN, qui propose des produits de qualité comme les panneaux solaires DUALSUN et les micro onduleurs HOYMILES avec passerelle pour la visualisation (Bourneois). Xavier et Randy, qui ont installé les panneaux, ont fait preuve d'une grande écoute pour réaliser une installation soignée, bien intégrée dans mon tableau pour harmoniser le tout, en maintenant les mêmes modules de rangement et une fonction du modèle SCHNEIDER. Après avoir comparé plusieurs devis, j'ai opté pour WATTSUN en raison de leur rapidité d'exécution, de l'efficacité de leurs démarches administratives grâce à un prestataire compétent, et de la visite du Consuel effectuée juste après la fin du chantier. La seule réserve que j'avais concernait le paiement échelonné avec un premier acompte à la commande. En discutant avec Nicolas, nous avons convenu que le premier acompte serait versé dès l'obtention de la déclaration préalable par la mairie, ce qui m'a rassuré quant à leur professionnalisme.",
    avatar: null
  },
  {
    id: 2,
    name: "Michel B",
    date: "Août 2024",
    text: "Équipe très professionnelle. Du devis à l'installation des panneaux photovoltaïques, tout a été parfait. Je recommande vivement WATTSUN ÉNERGIE.",
    avatar: null
  },
  {
    id: 3,
    name: "Jean-Philippe C",
    date: "Août 2024",
    text: "Excellent service. Très bons conseils et installation très professionnelle. Je recommande Wattsun Énergie.",
    avatar: null
  },
  {
    id: 4,
    name: "Pierre L",
    date: "Juillet 2024",
    text: "Très bon contact avec l'équipe Wattsun. Très bons conseils et installation très rapide. Je recommande vivement.",
    avatar: null
  },
  {
    id: 5,
    name: "Thierry D",
    date: "Juin 2024",
    text: "Installation d'une pompe à chaleur. Équipe très professionnelle et sympathique. Très satisfait de la prestation. Je recommande.",
    avatar: null
  },
  {
    id: 6,
    name: "Antoine M",
    date: "Mai 2024",
    text: "Très bons conseils et installation très professionnelle. Je recommande Wattsun Énergie.",
    avatar: null
  },
  {
    id: 7,
    name: "François Roger",
    date: "Juillet 2025",
    text: "Depuis la réalisation du devis jusqu'à la mise en place des panneaux photovoltaiques, Wattsun Énergie a toujours su repondre présent. Julien et Randy mes 2 interlocuteurs ont su anticiper et montrer un grand sens du service. C’est du sérieux. Je recommande.",
    avatar: null
  }
];

