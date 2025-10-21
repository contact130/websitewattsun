import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Sun, Thermometer, Battery, Plug, Zap, Wind, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES } from "@shared/const";
import { reviewsData } from "@/data/reviewsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const reviewsPerPage = 3;

  const iconMap: Record<string, any> = {
    Sun,
    Thermometer,
    Battery,
    Plug,
    Zap,
    Wind,
  };

  const nextReviews = () => {
    setCurrentReviewIndex(
      (prev) =>
        (prev + reviewsPerPage) % reviewsData.length
    );
  };

  const prevReviews = () => {
    setCurrentReviewIndex(
      (prev) =>
        (prev - reviewsPerPage + reviewsData.length) % reviewsData.length
    );
  };

  const visibleReviews = [
    ...reviewsData.slice(currentReviewIndex),
    ...reviewsData.slice(0, currentReviewIndex),
  ].slice(0, reviewsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white"
        style={{
        backgroundImage: "url(\'/homepage-hero.jpg\')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Contenu */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Solutions Énergétiques Durables
            <br />
            pour Votre Habitat
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Réduisez votre facture d'électricité et améliorez le rendement énergétique de votre logement avec Wattsun Énergie
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demande-devis">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#5e8a92] to-[#fcad0d] text-white px-8 py-6 text-lg hover:opacity-90 transition-opacity"
              >
                Demander un Devis Gratuit
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white px-8 py-6 text-lg hover:bg-white hover:text-gray-900 transition-all"
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Découvrir Nos Services
            </Button>
          </div>

          {/* Icône de scroll */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={40} />
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Nos Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service: any) => {
              const Icon = iconMap[service.icon];
              return (
                <Card
                  key={service.id}
                  className="hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      {Icon && (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#5e8a92] to-[#fcad0d] flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      )}
                      <h3 className="text-xl font-bold bg-gradient-to-r from-[#5e8a92] to-[#fcad0d] bg-clip-text text-transparent">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                    <Link
                      to={service.path}
                      className="text-[#fcad0d] font-medium hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      En savoir plus →
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Avis Clients */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Avis de Nos Clients
          </h2>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {visibleReviews.map((review: any) => (
              <Card key={review.id} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#5e8a92] to-[#fcad0d] flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#fcad0d] text-[#fcad0d]" />
                    ))}
                  </div>

                  <p className="text-gray-700 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
            </div>

            {/* Boutons de navigation du carrousel */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prevReviews}
                className="p-2 rounded-full border-2 border-[#fcad0d] text-[#fcad0d] hover:bg-[#fcad0d] hover:text-white transition-all"
                aria-label="Avis précédents"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextReviews}
                className="p-2 rounded-full border-2 border-[#fcad0d] text-[#fcad0d] hover:bg-[#fcad0d] hover:text-white transition-all"
                aria-label="Avis suivants"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

