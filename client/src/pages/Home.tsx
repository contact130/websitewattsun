
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Thermometer, Battery, Zap, Fan, Plug, MapPin } from "lucide-react";
import { SERVICES, REALISATIONS } from "../../../shared/const";



import { Button } from "@/components/ui/button";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveMap from "@/components/InteractiveMap";

// Map des noms d'icônes aux composants Lucide
const IconMap = {
  Sun: Sun,
  Thermometer: Thermometer,
  Battery: Battery,
  ChargingStation: Plug,
  Plug: Plug,
  Zap: Zap,
  Fan: Fan,
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

export default function Home() {
	  
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
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center text-white h-screen"
          style={{ backgroundImage: "url('/optimized/homepage-hero.webp')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10 text-center flex flex-col justify-center h-full" >
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              Solutions énergétiques durables pour votre habitat
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Solutions photovoltaïques, pompes à chaleur, et plus encore. Nous concevons votre avenir énergétique.
            </p>
<div className="flex justify-center space-x-4">
	              {/* Bouton 1: Demander un Devis (avec dégradé) */}
	              <Link to="/demande-devis" className="flex-1 max-w-xs">
	                <Button
	                  size="lg"
	                  className="w-full bg-gradient-to-r from-[#fcad0d] to-[#ffc84d] text-gray-900 hover:from-[#5e8a92] hover:to-[#7ca0a8] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
	                >
	                  Demander un Devis
	                </Button>
	              </Link>
	              {/* Bouton 2: Découvrir nos services (style contrasté) */}
	              <Button
	                size="lg"
	                variant="outline"
	                onClick={() => {
	                  const servicesSection = document.getElementById('services-section');
	                  if (servicesSection) {
	                    servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
	                  }
	                }}
	                className="flex-1 max-w-xs bg-white text-[#5e8a92] border-2 border-[#5e8a92] hover:bg-[#5e8a92] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold cursor-pointer"
	              >
	                Découvrir nos services
	              </Button>
	            </div>
	          </div>
	        </section>
	
	        {/* Services Section */}
	        <section id="services-section" className="py-20">
	          <div className="container mx-auto px-4">
	            <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">Nos Services</h2>
	            <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">Découvrez nos solutions énergétiques innovantes et durables</p>
	            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
	              {SERVICES.map((service, index) => {
	                const colorClass = service.color;
		                const hoverColorClass = service.hoverColor;
	                return (
	                  <Card
	                    key={index}
	                    className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 rounded-2xl border-none bg-white group relative"
	                  >
	                    <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
	                    
	                    <CardContent className="p-8 relative z-10">
	                      <div className="flex items-start gap-4 mb-6">
	                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 transform`}>
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
	
	        {/* Section Réalisations */}
	        <section className="py-20 bg-white">
	          <div className="container mx-auto px-4">
	            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Nos Réalisations Locales</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="rounded-xl shadow-lg min-h-[400px]">
                <InteractiveMap realisations={REALISATIONS} />
              </div>
	              {/* Colonne Liste des Réalisations */}
	              <div>
	                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Derniers Projets Récents</h3>
	                <ul className="space-y-4">
	                  {REALISATIONS.map((realisation, index) => (
	                    <li key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
	                      <MapPin className="w-5 h-5 flex-shrink-0 text-[#5e8a92] mt-1" />
	                      <div>
	                        <p className="text-lg font-medium text-gray-900">
	                          {realisation.city} - <span className="font-normal text-gray-600">{realisation.service}</span>
	                        </p>
	                        <p className="text-sm text-gray-500">Réalisé en {realisation.date}</p>
	                      </div>
	                    </li>
	                  ))}
	                </ul>
	              </div>
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
	              <img src="/optimized/LogoqualiPVtransparent.webp" alt="QualiPV" className="h-28 object-contain" />
	              <img src="/optimized/LogoQualiPACtransparent.webp" alt="QualiPAC" className="h-28 object-contain" />
	              <img src="/optimized/Logorechargeelec+.webp" alt="Recharge Elec+" className="h-28 object-contain" />
	              <img src="/optimized/Logoventilationtransparent.webp" alt="Ventilation" className="h-28 object-contain" />
	            </div>
	
	            <p className="text-center text-gray-700 max-w-3xl mx-auto text-lg">
	              Nos certifications RGE (Reconnu Garant de l'Environnement) garantissent la qualité de nos installations et vous permettent de bénéficier des aides de l'État.
	              Nous respectons les normes les plus strictes pour votre sécurité et votre satisfaction.
	            </p>
	          </div>
	        </section>
	      </main>
	      <Footer />
	    </div>
	  );
	}