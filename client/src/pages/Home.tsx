import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Thermometer, Battery, Zap, Fan, Plug, ChevronDown, Shield, LayoutGrid, DoorOpen, Home as HomeIcon, ClipboardCheck } from "lucide-react";
import { SERVICES } from "../../../shared/const";

import { Button } from "@/components/ui/button";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsMap from "@/components/ProjectsMap";
import TrustBanner from "@/components/TrustBanner";
import GoogleReviews from "@/components/GoogleReviews";

// Map des noms d'icônes aux composants Lucide
const IconMap = {
  Sun: Sun,
  Thermometer: Thermometer,
  Battery: Battery,
  ChargingStation: Plug,
  Plug: Plug,
  Zap: Zap,
  Fan: Fan,
  Shield: Shield,
  LayoutGrid: LayoutGrid,
  DoorOpen: DoorOpen,
  Home: HomeIcon,
  ClipboardCheck: ClipboardCheck,
};

// Composant pour rendre l'icône à partir de son nom (string)
const IconComponent = ({ iconName, size, className }: { iconName: string, size: number, className: string }) => {
  const Icon = IconMap[iconName as keyof typeof IconMap];
  if (!Icon) {
    console.warn(`Icon "${iconName}" not found in IconMap. Available icons:`, Object.keys(IconMap));
    return <Sun size={size} className={className} />; // Fallback icon
  }
  return <Icon size={size} className={className} />;
};

// Map des couleurs pour chaque service
const getServiceColors = (colorClass: string) => {
  const colorMap: { [key: string]: { from: string, to: string } } = {
    'from-yellow-400 to-yellow-600': { from: '#facc15', to: '#ca8a04' },
    'from-blue-400 to-blue-600': { from: '#60a5fa', to: '#2563eb' },
    'from-green-400 to-green-600': { from: '#4ade80', to: '#16a34a' },
    'from-indigo-400 to-indigo-600': { from: '#818cf8', to: '#4f46e5' },
    'from-red-400 to-red-600': { from: '#f87171', to: '#dc2626' },
    'from-teal-400 to-teal-600': { from: '#2dd4bf', to: '#0d9488' },
    'from-orange-400 to-orange-600': { from: '#fb923c', to: '#ea580c' },
    'from-gray-400 to-gray-600': { from: '#9ca3af', to: '#4b5563' },
    'from-amber-400 to-amber-600': { from: '#fbbf24', to: '#d97706' },
    'from-rose-400 to-rose-600': { from: '#fb7185', to: '#e11d48' },
    'from-purple-400 to-purple-600': { from: '#c084fc', to: '#9333ea' },
  };
  return colorMap[colorClass] || { from: '#facc15', to: '#ca8a04' };
};

// Données du slider d'impact
const impactStats = [
  {
    value: "739+",
    label: "installations réalisées en Nouvelle-Aquitaine",
    icon: "🏠"
  },
  {
    value: "12 500+",
    label: "panneaux solaires posés",
    icon: "☀️"
  },
  {
    value: "4.8 GWh",
    label: "d'électricité verte produite par an",
    icon: "⚡"
  },
  {
    value: "1 150 T",
    label: "de CO₂ évitées chaque année",
    icon: "🌍"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    document.title = "Wattsun Énergie - Solutions Photovoltaïques, PAC et Bornes de Recharge";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Wattsun Énergie : Solutions photovoltaïques, pompes à chaleur, bornes de recharge et électricité générale à La Rochelle et ses environs. Devis gratuit et aides financières."
      );
    }
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % impactStats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - Optimisé avec message percutant */}
        <section
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/optimized/wattsun-hero-image.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            {/* Slider d'impact */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-3 mb-6 min-w-[320px] md:min-w-[400px]">
              <span className="text-2xl">{impactStats[currentSlide].icon}</span>
              <div className="flex flex-col items-start">
                <span className="text-lg md:text-xl font-bold text-[#fcad0d]">{impactStats[currentSlide].value}</span>
                <span className="text-xs md:text-sm font-medium text-white/90">{impactStats[currentSlide].label}</span>
              </div>
              {/* Indicateurs de slide */}
              <div className="flex gap-1.5 ml-auto">
                {impactStats.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-[#fcad0d] w-4' : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Titre principal avec accroche forte */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-2xl leading-tight">
              Réduisez votre facture d'énergie<br />
              <span className="text-[#fcad0d]">jusqu'à 70%</span>
            </h1>
            
            {/* Sous-titre avec proposition de valeur */}
            <p className="text-lg md:text-xl mb-2 drop-shadow-lg max-w-2xl mx-auto text-gray-200">
              Panneaux solaires, pompes à chaleur, bornes de recharge
            </p>
            <p className="text-lg md:text-xl mb-4 drop-shadow-lg max-w-2xl mx-auto text-[#fcad0d] font-semibold">
              Maîtrise d'œuvre & Rénovation du bâtiment
            </p>
            
            {/* Points clés */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Devis gratuit sous 48h</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Certifié RGE</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Aides financières</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link to="/demande-devis" onClick={() => window.scrollTo(0, 0)}>
                <Button
                  size="lg"
                  className="flex-1 max-w-xs bg-gradient-to-r from-[#fcad0d] to-[#ffc84d] text-gray-900 hover:from-[#5e8a92] hover:to-[#7ca0a8] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl font-bold text-lg px-10 py-7"
                >
                  Demander un Devis Gratuit
                </Button>
              </Link>
              <a href="tel:0786731033">
                <Button
                  size="lg"
                  className="flex-1 max-w-xs bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-lg px-8 py-6"
                >
                  📞 07 86 73 10 33
                </Button>
              </a>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-white/70" />
          </div>
        </section>

        {/* Bandeau de confiance - Juste après le hero */}
        <TrustBanner />

        {/* Services Section */}
        <section id="services-section" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">Nos Services</h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">Découvrez nos solutions énergétiques innovantes et durables</p>
            <div className="flex flex-wrap justify-center gap-8">
              {SERVICES.map((service, index) => {
                const colorClass = service.color;
		                const hoverColorClass = service.hoverColor;
                const colors = getServiceColors(colorClass);
                return (
                  <Card
                    key={index}
                    className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 rounded-2xl border-none bg-white group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                          <div 
                            className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 transform"
                            style={{ 
                              background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)` 
                            }}
                          >
                            <IconComponent iconName={service.Icon} size={32} className="text-white" />
                          </div>
                        <div>
                          <Link
                            to={service.path}
                            onClick={() => window.scrollTo(0, 0)}
                            className={`text-xl font-bold text-gray-900 group-hover:${hoverColorClass} transition-colors duration-300 hover:underline line-clamp-2`}
                          >
                            {service.title}
                          </Link>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">{service.description}</p>
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

        {/* Section Avis Google */}
        <GoogleReviews />

        {/* Section Réalisations */}
        <section id="realisations" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Nos Réalisations</h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Découvrez tous nos chantiers réalisés dans la région. Cliquez sur les marqueurs pour voir les détails.
            </p>
            <ProjectsMap />
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Nos Certifications et Qualifications</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 mb-8">
              <img src="/optimized/LogoqualiPVtransparent.webp" alt="QualiPV - Certification pour installations photovoltaïques" className="h-24 object-contain hover:scale-110 transition-transform duration-300" />
              <img src="/optimized/LogoQualiPACtransparent.webp" alt="QualiPAC - Certification pour pompes à chaleur" className="h-24 object-contain hover:scale-110 transition-transform duration-300" />
              <img src="/LogoQualibatRGE.png" alt="QUALIBAT RGE - Qualification pour isolation, menuiseries et plâtrerie" className="h-24 object-contain hover:scale-110 transition-transform duration-300" />
              <img src="/LogoIRVE.png" alt="IRVE - Installateur qualifié bornes de recharge" className="h-24 object-contain hover:scale-110 transition-transform duration-300" />
              <img src="/optimized/Logorechargeelec+.webp" alt="Recharge Elec+ - Certification pour bornes de recharge" className="h-24 object-contain hover:scale-110 transition-transform duration-300" />
              <img src="/optimized/Logoventilationtransparent.webp" alt="Ventilation - Certification pour systèmes VMC" className="h-24 object-contain hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-center text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Nos certifications RGE (Reconnu Garant de l'Environnement) garantissent la qualité de nos installations et vous permettent de bénéficier des aides de l'État. Nous respectons les normes les plus strictes pour votre sécurité et votre satisfaction.
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-[#f7b529] to-[#fcad0d]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prêt à réduire votre facture d'énergie ?
            </h2>
            <p className="text-gray-800 text-lg mb-8 max-w-2xl mx-auto">
              Obtenez votre étude personnalisée gratuite et découvrez combien vous pouvez économiser.
            </p>
            <Link to="/demande-devis" onClick={() => window.scrollTo(0, 0)}>
              <Button
                size="lg"
                className="bg-gray-900 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-2xl font-bold text-lg px-10 py-7"
              >
                Demander mon Devis Gratuit
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
