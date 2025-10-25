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
    name: "François Roger",
    date: "Juillet 2025",
    text: "Depuis la réalisation du devis jusqu'à la mise en place des panneaux photovoltaiques, Wattsun Énergie a toujours su repondre présent. Julien et Randy mes 2 interlocuteurs ont su anticiper et montrer un grand sens du service. C’est du sérieux. Je recommande.",
    avatar: null
  }
];

