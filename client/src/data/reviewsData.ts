// Real Google reviews for Wattsun Énergie
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
    name: "Nicolas Viollier",
    rating: 5,
    date: "Il y a un an",
    text: "Entreprise réactive et professionnelle. Des conseils précieux et précis de Nicolas, un devis précis et compétitif. Une pose soignée de Xavier et Randy. Avec du début jusqu'à la fin une écoute, un suivi du dossier et des réponses précises à nos questions. Laissez vous guider par ces professionnels qui vous proposent un chantier clé en main soigné de A à Z!",
    avatar: null
  },
  {
    id: 2,
    name: "H SAUTJEAU",
    rating: 5,
    date: "Il y a 6 mois",
    text: "À la recherche d'un installateur de panneaux photovoltaïques, j'ai suivi le démarrage de commerciaux seulement intéressé par ma signature au bas du devis (ils se jouent sur l'ambiguïté créé par la PRIME RENOVE et ils vous proposent des installations à des prix de 10 000 € (le record à plus de 18 000 €) pour 3 KWc! J'ai enfin rencontré Mr DEGOUY Nicolas qui a été le seul à vraiment se pencher sur mon installation électrique et à me faire une proposition détaillée et cohérente. De plus, il m'a fourni toutes les certifications et assurances. La partie administrative a été gérée efficacement, la mise en place a été rapide et réalisée avec soins (Une équipe d'installateurs très professionnelle et à votre écoute). L'installation a été validée par la visite du Consul sur site. Aujourd'hui, il est rare de trouver une entreprise aussi sérieuse et investie dans la satisfaction de ses clients. Je remercie Nicolas et toute son équipe. Je recommande sans hésitation WATTSUN ENERGIE.",
    avatar: null
  },
  {
    id: 3,
    name: "Romain GIRARD",
    rating: 5,
    date: "Il y a un an",
    text: "Un petit avis pour une entreprise qui a le mérite de se faire connaître ! Une première prise de contact via un fournisseur de panneaux photovoltaïques français. Après un premier rendez-vous très professionnel et technique fin août Nous avons signé avec Wattsun Energie début septembre. Il gère tout de A à Z. Déclaration de travaux, Conseil, contrat de revente auprès du fournisseur d'énergie. Installation faite mi octobre juste après l'acceptation à la mairie. Une installation claire, propre et très bien réalisée. Nous ne regrettons en rien notre choix. Nous recommandons cette entreprise les yeux fermés. Une entreprise jeune et dynamique qui sait s'adapter et satisfaire ses clients. Encore merci à vous trois pour cette installation. Et au plaisir de vous revoir. Cordialement",
    avatar: null
  },
  {
    id: 4,
    name: "Antonio DIAS-PEREIRA",
    rating: 5,
    date: "Il y a un an",
    text: "Pour une installation de panneaux photovoltaïques de 3 kWc, j'ai choisi de faire appel à WATTSUN, qui propose des produits de qualité comme les panneaux solaires DUALSUN et les micro onduleurs HOYMILES avec passerelle pour la visualisation (Bourneois). Xavier et Randy, qui ont installé les panneaux, ont fait preuve d'une grande écoute pour réaliser une installation soignée, bien intégrée dans mon tableau pour harmoniser le tout, en maintenant les mêmes modules de rangement et une fonction du modèle SCHNEIDER. Après avoir comparé plusieurs devis, j'ai opté pour WATTSUN en raison de leur rapidité d'exécution, de l'efficacité de leurs démarches administratives grâce à un prestataire compétent, et de la visite du consul effectuée juste après la fin du chantier. La seule réserve que j'avais concernait le paiement échelonné avec un premier acompte à la commande. En discutant avec Nicolas, nous avons convenu que le premier acompte serait versé dès l'obtention de la déclaration préalable par la mairie, ce qui m'a rassuré quant à leur professionnalisme.",
    avatar: null
  },
  {
    id: 5,
    name: "François Roger",
    rating: 5,
    date: "Il y a 2 mois",
    text: "Depuis la réalisation du devis jusqu'à la mise en place des panneaux photovoltaïques, Wattsun Energie a toujours su répondre présent. Julien et Randy mes 2 interlocuteurs ont su anticiper et montrer un grand sens du service. C'est du sérieux. Je recommande. François",
    avatar: null
  }
];

