import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Sun, Thermometer, Battery, Plug, Zap, Wind, FileText } from "lucide-react";
import { APP_LOGO, APP_LOGO_WHITE } from "@shared/const";
import { SERVICES } from "@shared/const";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isServicePage = SERVICES.some(service => service.path === location.pathname);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu lors du changement de page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || (!isHomePage && !isServicePage)
      ? "bg-white shadow-md"
      : "bg-transparent"
  }`;

  const logoClasses = `h-16 transition-all duration-300 w-auto`;

  const textClasses = `transition-colors duration-300 ${
   isScrolled || (!isHomePage && !isServicePage) ? "text-gray-800" : "text-white"
  }`;

  // Mapping des icônes pour les services
  const iconMap: Record<string, any> = {
    Sun: <Sun className="w-5 h-5" />,
    Thermometer: <Thermometer className="w-5 h-5" />,
    Battery: <Battery className="w-5 h-5" />,
    Plug: <Plug className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
    Wind: <Wind className="w-5 h-5" />,
  };

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
<Link to="/" className="flex items-center flex-shrink-0 h-16">
            <img 
              src={((!isScrolled && isHomePage) || (!isScrolled && isServicePage)) ? APP_LOGO : APP_LOGO_WHITE} 
              alt="Wattsun Énergie" 
              className="h-full w-auto transition-opacity duration-300" 
              style={{ 
                maxWidth: '200px',
                objectFit: 'contain',
              }} 
              key={((!isScrolled && isHomePage) || (!isScrolled && isServicePage)) ? 'logo-transparent' : 'logo-white'}
            />
          </Link>

          {/* Spacer pour pousser le menu burger à droite */}
          <div className="flex-1"></div>

          {/* Burger Menu Button */}
          <button
            className={`${textClasses} p-2 rounded-lg hover:bg-white/20 transition-colors`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Burger Raffiné */}
        {isMobileMenuOpen && (
          <div className="fixed top-20 right-4 w-80 bg-white rounded-2xl shadow-2xl py-6 z-40 border border-gray-100">
            <nav className="flex flex-col space-y-1">
              {/* Accueil */}
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-gray-800 hover:bg-[#fcad0d]/10 hover:text-[#fcad0d] font-medium transition-colors px-6 py-3 rounded-lg mx-2"
              >
                <Home className="w-5 h-5 flex-shrink-0" />
                <span>Accueil</span>
              </Link>

              {/* Divider */}
              <div className="my-2 border-t border-gray-200 mx-2"></div>

              {/* Titre Services */}
              <div className="px-6 py-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Services</p>
              </div>

              {/* Services avec icônes */}
              {SERVICES.map((service) => (
                <Link
                  key={service.id}
                  to={service.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-gray-800 hover:bg-[#fcad0d]/10 hover:text-[#fcad0d] transition-colors px-6 py-3 rounded-lg mx-2"
                >
                  <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                    {iconMap[service.icon] || <Zap className="w-5 h-5" />}
                  </span>
                  <span className="text-sm">{service.title}</span>
                </Link>
              ))}

              {/* Divider */}
              <div className="my-2 border-t border-gray-200 mx-2"></div>

              {/* Demander un Devis */}
              <Link
                to="/demande-devis"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#5e8a92] to-[#fcad0d] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity mx-2 mt-2"
              >
                <FileText className="w-5 h-5" />
                <span>Demander un Devis</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

