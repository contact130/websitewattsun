
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Thermometer, Battery, PlugZap, Zap, Fan } from "lucide-react";
import { SERVICES } from "../../../shared/const";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Map des noms d'icônes aux composants Lucide
const IconMap = {
  Sun: Sun,
  Thermometer: Thermometer,
  Battery: Battery,
  ChargingStation: PlugZap,
  Zap: Zap,
  Fan: Fan,
};

// Composant pour rendre l'icône à partir de son nom (string)
const IconComponent = ({ iconName, size, className }: { iconName: keyof typeof IconMap, size: number, className: string }) => {
  const Icon = IconMap[iconName];
  if (!Icon) return null;
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
          className="relative bg-cover bg-center text-white min-h-[75vh] py-20"
          ststyle={{ backgroundImage: "url('/optimized/homepage-hero.webp')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              Solutions énergétiques durables pour votre habitat
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Solutions photovoltaïques, pompes à chaleur, et plus encore. Nous concevons votre avenir énergétique.
            </p>
            <Link to="/demande-devis">
              <Button
                size="lg"
                className="bg-[#fcad0d] text-gray-900 hover:bg-[#5e8a92] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Demander un Devis Gratuit
              </Button>
            </Link>
	          </div>
	        </section>
	
	        {/* Services Section */}
	        <section className="py-20">
	          <div className="container mx-auto px-4">
	            <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">Nos Services</h2>
	            <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">Découvrez nos solutions énergétiques innovantes et durables</p>
	            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
	              {SERVICES.map((service, index) => {
	                const colorClass = service.color;
	                return (
	                  <Card
	                    key={index}
	                    className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 rounded-2xl border-none bg-white group relative"
	                  >
	                    <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
	                    
	                    <CardContent className="p-8 relative z-10">
	                      <div className="flex items-start gap-4 mb-6">
	                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 transform`}>
{/* Icons were previously not showing because the service object only contained the icon name as a string. */}
			                            <IconComponent iconName={service.Icon as keyof typeof IconMap} size={32} className="text-white" />
	                          </div>
	                        <div>
	                          <Link
	                            to={service.path}
	                            onClick={() => window.scrollTo(0, 0)}
	                            className="text-xl font-bold text-gray-900 group-hover:text-[#5e8a92] transition-colors duration-300 hover:underline line-clamp-2"
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