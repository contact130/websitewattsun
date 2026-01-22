import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "François Roger",
    rating: 5,
    date: "Juillet 2025",
    text: "Depuis la réalisation du devis jusqu'à la mise en place des panneaux photovoltaïques, Wattsun Énergie a toujours su répondre présent. Julien et Randy, mes deux contacts, ont su anticiper et faire preuve d'un grand sens du service. Ils sont professionnels. Je les recommande vivement.",
    service: "Panneaux Photovoltaïques"
  },
  {
    name: "Nicolas Viollier",
    rating: 5,
    date: "Janvier 2024",
    text: "Une entreprise réactive et professionnelle. Nicolas a fourni des conseils précieux et précis, et le devis était exact et compétitif. Xavier et Randy ont réalisé l'installation avec minutie. Du début à la fin, ils ont été à l'écoute.",
    service: "Panneaux Photovoltaïques"
  },
  {
    name: "Antonio Dias-Pereira",
    rating: 5,
    date: "Juillet 2024",
    text: "Pour une installation de panneaux photovoltaïques de 3 kWc, j'ai choisi WATTSUN, qui propose des produits de qualité tels que les panneaux solaires DUALSUN et les micro-onduleurs HOYMILES. Xavier et Randy, qui ont installé les panneaux, étaient très professionnels.",
    service: "Panneaux Photovoltaïques 3 kWc"
  },
  {
    name: "Marteau Sofy",
    rating: 5,
    date: "Décembre 2023",
    text: "Installation de panneaux photovoltaïques terminée fin 2023. Nous sommes très satisfaits du travail effectué. Au top ! On a rarement vu une entreprise aussi fiable, réactive et très professionnelle.",
    service: "Panneaux Photovoltaïques"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

export default function GoogleReviews() {
  const averageRating = 5.0;
  const totalReviews = 27;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header avec note globale */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que nos clients disent de nous
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={28}
                  className={i < Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">{averageRating}</span>
          </div>
          <p className="text-gray-600">
            Basé sur <span className="font-semibold">{totalReviews} avis</span> Google
          </p>
        </div>

        {/* Grille des avis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote 
                size={32} 
                className="absolute top-4 right-4 text-gray-100" 
              />
              
              <div className="mb-3">
                <StarRating rating={review.rating} />
              </div>
              
              <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                "{review.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{review.name}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {review.service} • {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA vers Google */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/WATTSUN+ENERGIE/@46.170925,-1.068921,17z/data=!4m8!3m7!1s0x48014dfc9ae14d3d:0x27177488183ba809!8m2!3d46.170925!4d-1.068921!9m1!1b1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#5e8a92] hover:text-[#fcad0d] font-semibold transition-colors duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Voir tous nos avis Google
          </a>
        </div>
      </div>
    </section>
  );
}
