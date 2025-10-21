import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ServicePageProps {
  title: string;
  heroImage: string;
  shortDescription: string;
  advantages: string[];
  process: { step: number; title: string; description: string }[];
  certifications?: { logo: string; name: string }[];
  aides: string[];
}

export default function ServicePage({
  title,
  heroImage,
  shortDescription,
  advantages,
  process,
  certifications,
  aides,
}: ServicePageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-white mt-20"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {shortDescription}
          </p>
          <Link to="/demande-devis">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#5e8a92] to-[#fcad0d] text-white px-8 py-6 text-lg hover:opacity-90 transition-opacity"
            >
              Demander un Devis Gratuit
            </Button>
          </Link>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Pourquoi Choisir Ce Service ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#5e8a92] to-[#fcad0d] flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-lg">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Processus */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Notre Processus d'Installation
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((step) => (
              <Card key={step.step} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#5e8a92] to-[#fcad0d] flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Certifications */}
      {certifications && certifications.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Nos Certifications
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              {certifications.map((cert, index) => (
                <img
                  key={index}
                  src={cert.logo}
                  alt={cert.name}
                  className="h-24 object-contain"
                />
              ))}
            </div>

            <p className="text-center text-gray-700 max-w-3xl mx-auto text-lg">
              Nos certifications garantissent la qualité de nos installations et vous permettent de bénéficier des aides de l'État. 
              Nous respectons les normes les plus strictes pour votre sécurité et votre satisfaction.
            </p>
          </div>
        </section>
      )}

      {/* Section Aides et Financements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Aides et Financements Disponibles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {aides.map((aide, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#5e8a92] to-[#fcad0d] flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{aide}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-gray-700 max-w-3xl mx-auto mt-8 text-lg">
            Nous vous accompagnons dans vos démarches pour obtenir toutes les aides auxquelles vous avez droit. 
            Profitez de financements avantageux pour réduire le coût de votre installation.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#5e8a92] to-[#fcad0d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à Passer à l'Action ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Demandez votre devis gratuit et personnalisé. Notre équipe vous recontactera dans les plus brefs délais.
          </p>
          <Link to="/demande-devis">
            <Button
              size="lg"
              className="bg-white text-[#5e8a92] px-8 py-6 text-lg hover:bg-gray-100 transition-colors"
            >
              Demander Votre Devis Gratuit
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

