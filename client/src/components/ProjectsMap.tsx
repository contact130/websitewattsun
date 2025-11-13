import { useEffect, useRef, useState } from 'react';

interface Project {
  nom: string;
  ville: string;
  date: string;
  puissance: string;
  lat: number;
  lon: number;
}

export default function ProjectsMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Charger les données des chantiers
    fetch('/chantiers.json')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erreur lors du chargement des chantiers:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!mapRef.current || loading || projects.length === 0 || mapInstanceRef.current) return;

    // Charger Leaflet dynamiquement
    const loadLeaflet = async () => {
      // Ajouter le CSS de Leaflet
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
        link.crossOrigin = '';
        document.head.appendChild(link);
      }

      // Ajouter le CSS de MarkerCluster
      if (!document.querySelector('link[href*="MarkerCluster.css"]')) {
        const link1 = document.createElement('link');
        link1.rel = 'stylesheet';
        link1.href = 'https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css';
        document.head.appendChild(link1);

        const link2 = document.createElement('link');
        link2.rel = 'stylesheet';
        link2.href = 'https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css';
        document.head.appendChild(link2);
      }

      // Charger le script Leaflet
      if (!(window as any).L) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
          script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
          script.crossOrigin = '';
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      }

      // Charger le script MarkerCluster
      if (!(window as any).L.markerClusterGroup) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js';
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      }

      const L = (window as any).L;

      // Créer la carte centrée sur La Rochelle
      const map = L.map(mapRef.current).setView([46.1591, -1.1520], 10);

      // Ajouter la couche de tuiles OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      // Créer une icône personnalisée
      const customIcon = L.icon({
        iconUrl: 'data:image/svg+xml;base64,' + btoa(`
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fcad0d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3" fill="#fcad0d"/>
          </svg>
        `),
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      // Créer un groupe de clusters avec style personnalisé
      const markers = L.markerClusterGroup({
        maxClusterRadius: 50, // Distance de regroupement
        spiderfyOnMaxZoom: true, // Déployer les marqueurs au zoom max
        showCoverageOnHover: false, // Ne pas montrer la zone de couverture
        zoomToBoundsOnClick: true, // Zoomer sur le cluster au clic
        iconCreateFunction: function(cluster: any) {
          const count = cluster.getChildCount();
          let size = 'small';
          
          if (count > 20) {
            size = 'large';
          } else if (count > 10) {
            size = 'medium';
          }
          
          return L.divIcon({
            html: `<div style="
              background: linear-gradient(135deg, #fcad0d 0%, #ffc84d 100%);
              color: #1f2937;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 700;
              font-size: ${size === 'large' ? '16px' : size === 'medium' ? '14px' : '12px'};
              width: 100%;
              height: 100%;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              border: 3px solid white;
            ">${count}</div>`,
            className: 'custom-cluster-icon',
            iconSize: L.point(
              size === 'large' ? 50 : size === 'medium' ? 42 : 36,
              size === 'large' ? 50 : size === 'medium' ? 42 : 36
            ),
          });
        }
      });

      // Ajouter les marqueurs au groupe de clusters
      projects.forEach(project => {
        const marker = L.marker([project.lat, project.lon], { icon: customIcon });
        
        const popupContent = `
          <div style="font-family: system-ui, -apple-system, sans-serif; min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #1f2937;">
              ${project.ville}
            </h3>
            <div style="font-size: 14px; color: #6b7280; line-height: 1.6;">
              <p style="margin: 4px 0;"><strong>Client:</strong> ${project.nom}</p>
              <p style="margin: 4px 0;"><strong>Date:</strong> ${project.date}</p>
              <p style="margin: 4px 0;"><strong>Puissance:</strong> ${project.puissance}</p>
            </div>
          </div>
        `;
        
        marker.bindPopup(popupContent);
        markers.addLayer(marker);
      });

      // Ajouter le groupe de clusters à la carte
      map.addLayer(markers);

      // Ajuster la vue pour afficher tous les marqueurs
      const bounds = L.latLngBounds(projects.map(p => [p.lat, p.lon]));
      map.fitBounds(bounds, { padding: [50, 50] });

      mapInstanceRef.current = map;
    };

    loadLeaflet();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [loading, projects]);

  if (loading) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center bg-gray-100 rounded-xl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#fcad0d] mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de la carte...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div 
        ref={mapRef} 
        className="w-full h-[600px] rounded-xl shadow-lg border-2 border-gray-200"
        style={{ zIndex: 1 }}
      />
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          <strong>{projects.length}</strong> chantiers photovoltaïques réalisés
        </p>
      </div>
    </div>
  );
}
