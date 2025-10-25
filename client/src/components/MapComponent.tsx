import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default Leaflet icon not showing
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';



interface Realisation {
  city: string;
  service: string;
  date: string;
  lat: number;
  lng: number;
}

interface MapComponentProps {
  realisations: Realisation[];
}

const MapComponent: React.FC<MapComponentProps> = ({ realisations }) => {
  // Coordonnées pour centrer la carte (La Rochelle, Charente-Maritime)
  const center: [number, number] = [46.1603, -1.1511];

  React.useEffect(() => {
    // Configuration des icônes Leaflet
    // Cette configuration est essentielle pour que les marqueurs s'affichent correctement en production
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetina,
        iconUrl: icon,
        shadowUrl: shadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
    });
  }, []);

  return (
    <div className="rounded-xl shadow-lg min-h-[400px] overflow-hidden">
      <MapContainer center={center} zoom={9} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {realisations.map((realisation, index) => (
          <Marker key={index} position={[realisation.lat, realisation.lng]}>
            <Popup>
              <div className="font-semibold">{realisation.city}</div>
              <div>{realisation.service}</div>
              <div className="text-sm text-gray-500">Réalisé en {realisation.date}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;

