import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Sun, Thermometer, Battery, Zap, Star, ChevronLeft, ChevronRight, Fan } from "lucide-react";
import { PlugZap } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES } from "@shared/const";
import { reviewsData } from "@/data/reviewsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const reviewsPerPage = 3;

  const iconMap: Record<string, React.ComponentType<{ className: string }>> = {
    Sun,
    Thermometer,
    Battery,
    ChargingStation: PlugZap,
    Zap,
    Fan,
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
        className="relative h-screen flex flex-col justify-between text-white"
        style={{
        backgroundImage: "url(\'/homepage-hero.jpg\')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Contenu */}
        <div className="relative z-10 container mx-auto px-4 text-center flex-grow flex flex-col justify-center">
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
        </div>

        {/* Icône de scroll */}
        <div className="relative z-10 w-full flex justify-center pb-8">
          <ChevronDown size={40} className="animate-bounce" />
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 animate-fade-in">
            Nos Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez nos solutions énergétiques innovantes et durables
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
            {SERVICES.map((service: any, index: number) => {
              const Icon = iconMap[service.Icon];
              const colors = [
                'from-blue-500 to-cyan-400',
                'from-orange-500 to-red-400',
                'from-green-500 to-emerald-400',
                'from-purple-500 to-pink-400',
                'from-yellow-500 to-orange-400',
                'from-indigo-500 to-blue-400',
              ];
              const colorClass = colors[index % colors.length];
              
              // Tous les services prennent 1 colonne pour tenir sur un écran
              const cardClassName = "lg:col-span-1";
              
              return (
                <Card
                  key={service.id}
                  className={`relative overflow-hidden hover:shadow-2xl hover:scale-105 hover:-translate-y-3 transition-all duration-500 cursor-pointer group border-0 bg-white ${cardClassName}`}
                  style={{
                    animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      {Icon && (
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 transform`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      )}
                      <Link
                        to={service.path}
                        onClick={() => window.scrollTo(0, 0)}
                        className="text-xl font-bold text-gray-900 group-hover:text-[#5e8a92] transition-colors duration-300 hover:underline line-clamp-2"
                      >
                        {service.title}
                      </Link>
                    </div>
                    <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">{service.shortDescription}</p>
                    <Link
                      to={service.path}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-[#fcad0d] font-bold hover:underline inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300 group-hover:text-[#5e8a92]"
                    >
                      En savoir plus
                      <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Nos Certifications et Qualifications
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <img src="/LogoqualiPVtransparent.png" alt="QualiPV" className="h-28 object-contain" />
            <img src="/LogoQualiPACtransparent.png" alt="QualiPAC" className="h-28 object-contain" />
            <img src="/Logorechargeelec+.png" alt="Recharge Elec+" className="h-28 object-contain" />
            <img src="/Logoventilationtransparent.png" alt="Ventilation" className="h-28 object-contain" />
          </div>

          <p className="text-center text-gray-700 max-w-3xl mx-auto text-lg">
            Nos certifications RGE (Reconnu Garant de l'Environnement) garantissent la qualité de nos installations et vous permettent de bénéficier des aides de l'État. 
            Nous respectons les normes les plus strictes pour votre sécurité et votre satisfaction.
          </p>
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

