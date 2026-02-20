import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Sun, Thermometer, Battery, Zap, Fan, FileText, Plug, BookOpen, Shield, LayoutGrid, DoorOpen, ClipboardCheck, Layers } from "lucide-react";
// import { PlugZap } from 'lucide-react'; // Remplacé par Plug
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

  // Logique de fermeture du menu au clic en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("burger-menu");
      const button = document.getElementById("burger-button");

      if (menu && button && !menu.contains(event.target as Node) && !button.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
  const iconMap: Record<string, React.ReactElement> = {
    Sun: <Sun className="w-4 h-4" />,
    Thermometer: <Thermometer className="w-4 h-4" />,
    Battery: <Battery className="w-4 h-4" />,
    ChargingStation: <Plug className="w-4 h-4" />,
    Zap: <Zap className="w-4 h-4" />,
    Fan: <Fan className="w-4 h-4" />,
    Shield: <Shield className="w-4 h-4" />,
    LayoutGrid: <LayoutGrid className="w-4 h-4" />,
    DoorOpen: <DoorOpen className="w-4 h-4" />,
    Home: <Home className="w-4 h-4" />,
    ClipboardCheck: <ClipboardCheck className="w-4 h-4" />,
    Layers: <Layers className="w-4 h-4" />,
  };

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center flex-shrink-0 h-16 mr-4">
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

          {/* Spacer pour pousser les éléments à droite */}
          <div className="flex-grow"></div>

          {/* Bouton CTA pour grand écran - déplacé à droite */}
          <Link to="/demande-devis" className="hidden lg:block mr-4">
            <Button
              size="sm"
              className="bg-gradient-to-r from-[#fcad0d] to-[#ffc84d] text-gray-900 hover:from-[#5e8a92] hover:to-[#7ca0a8] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
            >
              Demander un Devis
            </Button>
          </Link>

          {/* Burger Menu Button */}
          <button
            className={`${textClasses} p-2 rounded-lg hover:bg-white/20 transition-colors`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
            id="burger-button"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Burger Compact */}
        {isMobileMenuOpen && (
          <div 
            className="fixed top-20 right-4 w-[420px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl py-4 z-40 border border-gray-100 overflow-y-auto max-h-[calc(100vh-6rem)]"
            id="burger-menu"
          >
            <nav className="flex flex-col">
              {/* Accueil */}
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-gray-800 hover:bg-[#fcad0d]/10 hover:text-[#fcad0d] font-medium transition-colors px-4 py-2 rounded-lg mx-2"
              >
                <Home className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Accueil</span>
              </Link>

              {/* Divider */}
              <div className="my-1.5 border-t border-gray-200 mx-2"></div>

              {/* Titre Services */}
              <div className="px-4 py-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Nos Services</p>
              </div>

              {/* Services en grille 2 colonnes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-1 gap-y-0 px-2">
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    to={service.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-gray-800 hover:bg-[#fcad0d]/10 hover:text-[#fcad0d] transition-colors px-2 py-2 rounded-lg"
                  >
                    <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                      {iconMap[service.Icon] || <Zap className="w-4 h-4" />}
                    </span>
                    <span className="text-xs leading-tight">{service.title}</span>
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="my-1.5 border-t border-gray-200 mx-2"></div>

              {/* Blog */}
              <Link
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-gray-800 hover:bg-[#fcad0d]/10 hover:text-[#fcad0d] font-medium transition-colors px-4 py-2 rounded-lg mx-2"
              >
                <BookOpen className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Blog & Conseils</span>
              </Link>

              {/* Divider */}
              <div className="my-1.5 border-t border-gray-200 mx-2"></div>

              {/* Demander un Devis */}
              <Link
                to="/demande-devis"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#5e8a92] to-[#fcad0d] text-white px-4 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity mx-2 mt-1"
              >
                <FileText className="w-4 h-4" />
                <span className="text-sm">Demander un Devis</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
