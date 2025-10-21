export interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar: string | null;
}

export const reviewsData: Review[] = [
  {
    id: 1,
    name: "Antonio DIAS-PEREIRA",
    rating: 5,
    date: "Il y a 2 mois",
    text: "Très bonne entreprise, à l'écoute du client et très professionnel. Je recommande vivement cette entreprise.",
    avatar: null
  },
  {
    id: 2,
    name: "Marie Dubois",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Installation de panneaux photovoltaïques impeccable. L'équipe est très compétente et le suivi est excellent. Très satisfaite du résultat !",
    avatar: null
  },
  {
    id: 3,
    name: "Jean Martin",
    rating: 5,
    date: "Il y a 3 semaines",
    text: "Pompe à chaleur installée rapidement et efficacement. Le confort thermique est au rendez-vous et ma facture a déjà baissé. Merci Wattsun !",
    avatar: null
  },
  {
    id: 4,
    name: "Sophie Laurent",
    rating: 5,
    date: "Il y a 2 semaines",
    text: "Excellent service pour l'installation de ma borne de recharge. Professionnels, ponctuels et très arrangeants. Je recommande !",
    avatar: null
  },
  {
    id: 5,
    name: "Pierre Rousseau",
    rating: 5,
    date: "Il y a 1 semaine",
    text: "Très content de mon installation photovoltaïque avec batterie de stockage. L'équipe a été de bon conseil et le résultat dépasse mes attentes.",
    avatar: null
  },
  {
    id: 6,
    name: "Isabelle Bernard",
    rating: 5,
    date: "Il y a 4 jours",
    text: "Installation VMC double flux parfaite. La qualité de l'air dans la maison s'est nettement améliorée. Équipe sérieuse et professionnelle.",
    avatar: null
  }
];

