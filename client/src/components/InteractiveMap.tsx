import { MapPin } from 'lucide-react';

interface Realisation {
  city: string;
  service: string;
  date: string;
  lat: number;
  lng: number;
}

interface InteractiveMapProps {
  realisations: Realisation[];
}

export default function InteractiveMap({ realisations }: InteractiveMapProps) {
  // Centre de la carte : La Rochelle
  const centerLat = 46.16;
  const centerLng = -1.15;
  
  // Créer les marqueurs pour l'URL Google Maps
  const markers = realisations
    .map((r) => `${r.lat},${r.lng}`)
    .join('|');

  // URL de l'iframe Google Maps avec marqueurs
  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=${centerLat},${centerLng}&zoom=9`;

  return (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="relative w-full h-full min-h-[400px]">
        {/* Carte visuelle avec les villes */}
        <div className="absolute inset-0 p-6 overflow-auto">
          <div className="text-center mb-6">
            <MapPin className="w-12 h-12 text-[#5e8a92] mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Zone d'intervention</h3>
            <p className="text-gray-700 font-medium">La Rochelle et ses environs (Charente-Maritime et Vendée)</p>
          </div>
          
          {/* Grille des réalisations avec effet carte */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {realisations.map((realisation, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-[#fcad0d]"
              >
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#5e8a92] flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-sm truncate">
                      {realisation.city}
                    </p>
                    <p className="text-xs text-gray-600 truncate">
                      {realisation.service}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {realisation.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Information supplémentaire */}
          <div className="mt-8 text-center">
            <div className="inline-block bg-white rounded-full px-6 py-3 shadow-md">
              <p className="text-sm text-gray-700">
                <span className="font-bold text-[#5e8a92]">{realisations.length}</span> projets réalisés
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
