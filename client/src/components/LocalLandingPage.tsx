import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Check, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { CONTACT } from "../../../shared/const";

interface FAQItem {
  question: string;
  answer: string;
}

interface LocalLandingPageProps {
  city: string;
  region: string;
  service: string;
  serviceSlug: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  introduction: string;
  localAdvantages: string[];
  stats: { label: string; value: string }[];
  faq: FAQItem[];
  nearbyAreas: string[];
}

export default function LocalLandingPage({
  city,
  region,
  service,
  serviceSlug,
  seoTitle,
  seoDescription,
  heroImage,
  introduction,
  localAdvantages,
  stats,
  faq,
  nearbyAreas,
}: LocalLandingPageProps) {
  useEffect(() => {
    document.title = seoTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", seoDescription);
    }
    
    // Ajouter les données structurées LocalBusiness
    const existingScript = document.querySelector('script[data-local-seo]');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-local-seo', 'true');
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Wattsun Énergie - ${service} ${city}`,
      "description": seoDescription,
      "url": `https://wattsun-energie.fr/${serviceSlug}-${city.toLowerCase().replace(/\s+/g, '-')}`,
      "telephone": CONTACT.phone,
      "email": CONTACT.email,
      "areaServed": {
        "@type": "City",
        "name": city
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CONTACT.address.street,
        "addressLocality": CONTACT.address.city,
        "postalCode": CONTACT.address.zip,
        "addressCountry": "FR"
      }
    });
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.querySelector('script[data-local-seo]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [seoTitle, seoDescription, city, service, serviceSlug]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex flex-col justify-center text-white"
        style={{
          backgroundImage: `url('/optimized/${heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-[#fcad0d]" />
            <span className="text-xl text-[#fcad0d] font-semibold">{city} et environs</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {service} à {city}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Votre expert en {service.toLowerCase()} en {region}. Installation, maintenance et conseil par des professionnels certifiés RGE.
          </p>
          <Link to="/demande-devis">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#fcad0d] to-[#ffc84d] text-gray-900 hover:from-[#5e8a92] hover:to-[#7ca0a8] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl font-semibold text-lg px-8 py-6"
            >
              Devis Gratuit à {city}
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-[#5e8a92] to-[#7ca0a8]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
              {service} à {city} : Votre Partenaire Local
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {introduction}
            </p>
            
            {/* Contact rapide */}
            <div className="bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#5e8a92] to-[#fcad0d] flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Appelez-nous</p>
                  <p className="text-xl font-bold text-gray-900">{CONTACT.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#5e8a92] to-[#fcad0d] flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Intervention rapide</p>
                  <p className="text-xl font-bold text-gray-900">Sous 48h</p>
                </div>
              </div>
              <Link to="/demande-devis">
                <Button className="bg-[#fcad0d] hover:bg-[#e09d0c] text-gray-900 font-semibold px-6">
                  Demander un Devis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages locaux */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Pourquoi Choisir Wattsun Énergie à {city} ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {localAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#5e8a92] to-[#fcad0d] flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={faq} title={`Questions Fréquentes - ${service} à ${city}`} />

      {/* Zones d'intervention */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Nous Intervenons Aussi à Proximité de {city}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {nearbyAreas.map((area, index) => (
              <span
                key={index}
                className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm border border-gray-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#5e8a92] to-[#fcad0d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt pour Votre Projet {service} à {city} ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Obtenez un devis gratuit et personnalisé sous 24h. Nos experts locaux vous accompagnent de A à Z.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demande-devis">
              <Button
                size="lg"
                className="bg-white text-[#5e8a92] px-8 py-6 text-lg hover:bg-gray-100 transition-colors"
              >
                Demander un Devis Gratuit
              </Button>
            </Link>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#5e8a92] px-8 py-6 text-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                {CONTACT.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
