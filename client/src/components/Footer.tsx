import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

import { APP_LOGO, CONTACT, SERVICES } from "@shared/const";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* À propos */}
          <div>
            <img src={APP_LOGO} alt="Wattsun Énergie" className="h-12 mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Wattsun Énergie est votre partenaire de confiance pour toutes vos solutions énergétiques durables à La Rochelle. 
              Nous vous accompagnons dans votre transition énergétique avec professionnalisme et expertise.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-gray-400 hover:text-[#fcad0d] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{CONTACT.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-[#fcad0d] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{CONTACT.email}</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>{CONTACT.address}</span>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos Services</h3>
            <div className="space-y-2">
              {SERVICES.map((service: any) => (
                <Link
                  key={service.id}
                  to={service.path}
                  className="block text-gray-400 hover:text-[#fcad0d] transition-colors"
                >
                  {service.title}
                </Link>
              ))}
              <Link
                to="/demande-devis"
                className="block text-gray-400 hover:text-[#fcad0d] transition-colors mt-4"
              >
                Demander un Devis
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Wattsun Énergie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

