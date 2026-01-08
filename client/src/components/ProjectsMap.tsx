import { useEffect, useRef, useState } from 'react';

interface Project {
  nom: string;
  ville: string;
  date: string;
  puissance?: string;
  lat: number;
  lon: number;
  type: 'PV' | 'PAC' | 'Batteries' | 'Bornes' | 'Electricite' | 'VMC';
}

// Configuration des couleurs par type (cohérentes avec les icônes de services)
const TYPE_COLORS = {
  PV: '#f59e0b',           // Jaune (soleil)
  PAC: '#3b82f6',          // Bleu (thermomètre)
  Batteries: '#10b981',    // Vert (batterie)
  Bornes: '#8b5cf6',       // Violet (prise)
  Electricite: '#ef4444',  // Rouge (éclair)
  VMC: '#14b8a6',          // Turquoise (ventilateur)
};

const TYPE_LABELS = {
  PV: 'Panneaux Photovoltaïques',
  PAC: 'Pompes à Chaleur',
  Batteries: 'Batteries de Stockage',
  Bornes: 'Bornes de Recharge',
  Electricite: 'Électricité Générale',
  VMC: 'VMC',
};

export default function ProjectsMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set(['PV', 'PAC', 'Batteries', 'Bornes', 'Electricite', 'VMC']));
  const mapInstanceRef = useRef<any>(null);
  const markersGroupRef = useRef<any>(null);

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

  const toggleType = (type: string) => {
    setSelectedTypes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(type)) {
        newSet.delete(type);
      } else {
        newSet.add(type);
      }
      return newSet;
    });
  };

  const filteredProjects = projects.filter(p => selectedTypes.has(p.type));

  useEffect(() => {
    if (!mapRef.current || loading || projects.length === 0) return;

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

      // Créer la carte si elle n'existe pas
      if (!mapInstanceRef.current) {
        const map = L.map(mapRef.current).setView([46.1591, -1.1520], 10);

        // Ajouter la couche de tuiles OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 19,
        }).addTo(map);

        mapInstanceRef.current = map;
      }

      // Supprimer l'ancien groupe de marqueurs
      if (markersGroupRef.current) {
        mapInstanceRef.current.removeLayer(markersGroupRef.current);
      }

      // Créer un groupe de clusters
      const markers = L.markerClusterGroup({
        maxClusterRadius: 50,
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: false,
        zoomToBoundsOnClick: true,
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

      // Ajouter les marqueurs filtrés
      filteredProjects.forEach(project => {
        const color = TYPE_COLORS[project.type];
        
        // Créer une icône avec la couleur du type
        const customIcon = L.icon({
          iconUrl: 'data:image/svg+xml;base64,' + btoa(`
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3" fill="${color}"/>
            </svg>
          `),
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        });

        const marker = L.marker([project.lat, project.lon], { icon: customIcon });
        
        const popupContent = `
          <div style="font-family: system-ui, -apple-system, sans-serif; min-width: 200px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <div style="width: 12px; height: 12px; border-radius: 50%; background: ${color};"></div>
              <span style="font-size: 12px; color: #6b7280; font-weight: 600;">${TYPE_LABELS[project.type]}</span>
            </div>
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #1f2937;">
              ${project.ville}
            </h3>
            <div style="font-size: 14px; color: #6b7280; line-height: 1.6;">
              <p style="margin: 4px 0;"><strong>Date:</strong> ${project.date}</p>
              ${project.puissance ? `<p style="margin: 4px 0;"><strong>Puissance:</strong> ${project.puissance}</p>` : ''}
            </div>
          </div>
        `;
        
        marker.bindPopup(popupContent);
        markers.addLayer(marker);
      });

      // Ajouter le groupe de clusters à la carte
      mapInstanceRef.current.addLayer(markers);
      markersGroupRef.current = markers;

      // Ajuster la vue si des projets sont visibles
      if (filteredProjects.length > 0) {
        const bounds = L.latLngBounds(filteredProjects.map(p => [p.lat, p.lon]));
        mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50] });
      }
    };

    loadLeaflet();
  }, [filteredProjects, loading, projects]);

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

  // Compter les projets par type
  const typeCounts = projects.reduce((acc, p) => {
    acc[p.type] = (acc[p.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="relative">
      {/* Filtres */}
      <div className="mb-6 flex flex-wrap gap-3">
        {Object.entries(TYPE_LABELS).map(([type, label]) => {
          const count = typeCounts[type] || 0;
          if (count === 0) return null;
          
          const isSelected = selectedTypes.has(type);
          const color = TYPE_COLORS[type as keyof typeof TYPE_COLORS];
          
          return (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                isSelected
                  ? 'bg-white shadow-md scale-105'
                  : 'bg-gray-100 opacity-50 hover:opacity-75'
              }`}
              style={{
                borderLeft: `4px solid ${color}`,
              }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-sm text-gray-700">{label}</span>
              <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full text-gray-600">
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Carte */}
      <div 
        ref={mapRef} 
        className="w-full h-[600px] rounded-xl shadow-lg border-2 border-gray-200"
        style={{ zIndex: 1 }}
      />
      
      {/* Compteur */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          <strong>{filteredProjects.length}</strong> chantier{filteredProjects.length > 1 ? 's' : ''} affiché{filteredProjects.length > 1 ? 's' : ''} sur <strong>{projects.length}</strong> au total
        </p>
      </div>
    </div>
  );
}
