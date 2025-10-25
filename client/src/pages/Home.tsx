
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES } from "../../../shared/const";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center text-white py-40"
          style={{ backgroundImage: "url(\'/Image-de-toit-de-maison-avec-panneaux-solaires.jpg\')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              Votre Partenaire Énergétique de Confiance
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
	                            {/* Icons are handled in Header.tsx and DemandeDevis.tsx */}
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
	      </main>
	      <Footer />
	    </div>
	  );
	}