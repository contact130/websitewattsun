import { useEffect, useRef, useState } from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

interface Project {
  nom: string;
  ville: string;
  date: string;
  puissance?: string;
  lat: number;
  lon: number;
  type: 'PV' | 'PAC' | 'Batteries' | 'Bornes' | 'Electricite' | 'VMC' | 'Isolation' | 'Platrerie' | 'Menuiseries' | 'Couverture';
}

// Configuration des couleurs par type (cohérentes avec les icônes de services)
const TYPE_COLORS = {
  PV: '#f59e0b',           // Jaune (soleil)
  PAC: '#3b82f6',          // Bleu (thermomètre)
  Batteries: '#10b981',    // Vert (batterie)
  Bornes: '#8b5cf6',       // Violet (prise)
  Electricite: '#ef4444',  // Rouge (éclair)
  VMC: '#14b8a6',          // Turquoise (ventilateur)
  Isolation: '#ea580c',    // Orange (isolation)
  Platrerie: '#4b5563',    // Gris (plâtrerie)
  Menuiseries: '#d97706',  // Ambre (menuiseries)
  Couverture: '#e11d48',   // Rose (couverture)
};

// Couleurs claires pour le dégradé des clusters
const TYPE_COLORS_LIGHT = {
  PV: '#fcd34d',           // Jaune clair
  PAC: '#93c5fd',          // Bleu clair
  Batteries: '#6ee7b7',    // Vert clair
  Bornes: '#c4b5fd',       // Violet clair
  Electricite: '#fca5a5',  // Rouge clair
  VMC: '#5eead4',          // Turquoise clair
  Isolation: '#fb923c',    // Orange clair
  Platrerie: '#9ca3af',    // Gris clair
  Menuiseries: '#fbbf24',  // Ambre clair
  Couverture: '#fb7185',   // Rose clair
};

const TYPE_LABELS = {
  PV: 'Panneaux Photovoltaïques',
  PAC: 'Pompes à Chaleur',
  Batteries: 'Batteries de Stockage',
  Bornes: 'Bornes de Recharge',
  Electricite: 'Électricité Générale',
  VMC: 'VMC',
  Isolation: 'Isolation',
  Platrerie: 'Plâtrerie',
  Menuiseries: 'Menuiseries',
  Couverture: 'Couverture',
};

// Hook pour détecter mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

// Composant teasing mobile
function MobileTeaser({ totalProjects, typeCounts, onShowMap }: { totalProjects: number; typeCounts: Record<string, number>; onShowMap: () => void }) {
  const topTypes = Object.entries(typeCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <div className="relative overflow-hidden rounded-xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white shadow-lg">
      {/* Fond décoratif avec points simulant une carte */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1.5" fill="#fcad0d" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative p-6 text-center">
        {/* Icône carte */}
        <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-[#fcad0d] to-[#f59e0b] rounded-full flex items-center justify-center shadow-lg">
          <MapPin className="w-8 h-8 text-white" />
        </div>

        {/* Titre */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {totalProjects}+ chantiers réalisés
        </h3>
        <p className="text-gray-600 mb-6">
          en Charente-Maritime et Nouvelle-Aquitaine
        </p>

        {/* Résumé des types */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {topTypes.map(([type, count]) => {
            const color = TYPE_COLORS[type as keyof typeof TYPE_COLORS];
            const label = TYPE_LABELS[type as keyof typeof TYPE_LABELS];
            return (
              <div
                key={type}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm border border-gray-100"
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="text-xs font-medium text-gray-700">{label}</span>
                <span className="text-xs text-gray-400">{count}</span>
              </div>
            );
          })}
        </div>

        {/* Bouton CTA */}
        <button
          onClick={onShowMap}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#fcad0d] to-[#f59e0b] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          <MapPin className="w-5 h-5" />
          Voir la carte interactive
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function ProjectsMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set(['PV', 'PAC', 'Batteries', 'Bornes', 'Electricite', 'VMC', 'Isolation', 'Platrerie', 'Menuiseries', 'Couverture']));
  const mapInstanceRef = useRef<any>(null);
  const markersGroupRef = useRef<any>(null);
  const isMobile = useIsMobile();
  const [showMapOnMobile, setShowMapOnMobile] = useState(false);
  const [mapLoading, setMapLoading] = useState(false);

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

  // Déterminer la couleur dominante des clusters
  const getClusterColor = () => {
    const activeTypes = Array.from(selectedTypes);
    
    if (activeTypes.length === 1) {
      const type = activeTypes[0] as keyof typeof TYPE_COLORS;
      return {
        main: TYPE_COLORS[type],
        light: TYPE_COLORS_LIGHT[type],
        text: type === 'PV' ? '#1f2937' : '#ffffff'
      };
    }
    
    if (activeTypes.length > 1 && activeTypes.length < 6) {
      const typeCounts = filteredProjects.reduce((acc, p) => {
        acc[p.type] = (acc[p.type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      
      const dominantType = Object.entries(typeCounts)
        .sort((a, b) => b[1] - a[1])[0]?.[0] as keyof typeof TYPE_COLORS;
      
      if (dominantType) {
        return {
          main: TYPE_COLORS[dominantType],
          light: TYPE_COLORS_LIGHT[dominantType],
          text: dominantType === 'PV' ? '#1f2937' : '#ffffff'
        };
      }
    }
    
    return {
      main: '#fcad0d',
      light: '#ffc84d',
      text: '#1f2937'
    };
  };

  // Charger et initialiser la carte Leaflet
  const initMap = async () => {
    if (!mapRef.current || projects.length === 0) return;

    // Charger Leaflet dynamiquement
    if (!document.querySelector('link[href*="leaflet.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
      link.crossOrigin = '';
      document.head.appendChild(link);
    }

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

    if (!mapInstanceRef.current) {
      const map = L.map(mapRef.current).setView([46.1591, -1.1520], 10);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);
      mapInstanceRef.current = map;
    }

    updateMarkers();
  };

  // Mettre à jour les marqueurs
  const updateMarkers = () => {
    if (!mapInstanceRef.current) return;
    const L = (window as any).L;
    if (!L) return;

    if (markersGroupRef.current) {
      mapInstanceRef.current.removeLayer(markersGroupRef.current);
    }

    const clusterColors = getClusterColor();

    const markers = L.markerClusterGroup({
      maxClusterRadius: 50,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true,
      iconCreateFunction: function(cluster: any) {
        const count = cluster.getChildCount();
        let size = 'small';
        if (count > 20) size = 'large';
        else if (count > 10) size = 'medium';
        
        return L.divIcon({
          html: `<div style="
            background: linear-gradient(135deg, ${clusterColors.main} 0%, ${clusterColors.light} 100%);
            color: ${clusterColors.text};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: ${size === 'large' ? '16px' : size === 'medium' ? '14px' : '12px'};
            width: 100%;
            height: 100%;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
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

    filteredProjects.forEach(project => {
      const color = TYPE_COLORS[project.type];
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

    mapInstanceRef.current.addLayer(markers);
    markersGroupRef.current = markers;
  };

  // Sur bureau : charger la carte automatiquement
  useEffect(() => {
    if (!isMobile && !loading && projects.length > 0) {
      initMap();
    }
  }, [isMobile, loading, projects]);

  // Mettre à jour les marqueurs quand les filtres changent (bureau ou carte mobile ouverte)
  useEffect(() => {
    if (mapInstanceRef.current && (window as any).L) {
      updateMarkers();
    }
  }, [selectedTypes, filteredProjects]);

  // Quand l'utilisateur mobile clique sur "Voir la carte"
  const handleShowMapMobile = () => {
    setShowMapOnMobile(true);
    setMapLoading(true);
  };

  // Initialiser la carte quand showMapOnMobile passe à true et que le DOM est prêt
  useEffect(() => {
    if (showMapOnMobile && projects.length > 0 && !mapInstanceRef.current) {
      // Attendre que le DOM soit prêt avec le ref
      const timer = setTimeout(async () => {
        if (!mapRef.current) return;
        await initMap();
        // Forcer Leaflet à recalculer la taille du conteneur après rendu
        setTimeout(() => {
          if (mapInstanceRef.current) {
            mapInstanceRef.current.invalidateSize();
          }
          setMapLoading(false);
        }, 200);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [showMapOnMobile, projects]);

  if (loading) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center bg-gray-100 rounded-xl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#fcad0d] mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  // Compter les projets par type
  const typeCounts = projects.reduce((acc, p) => {
    acc[p.type] = (acc[p.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Mobile : afficher le teaser ou la carte
  if (isMobile && !showMapOnMobile) {
    return (
      <MobileTeaser
        totalProjects={projects.length}
        typeCounts={typeCounts}
        onShowMap={handleShowMapMobile}
      />
    );
  }

  return (
    <div className="relative">
      {/* Filtres */}
      <div className={`mb-4 md:mb-6 ${isMobile ? 'grid grid-cols-2 gap-2' : 'flex flex-wrap gap-3'}`}>
        {Object.entries(TYPE_LABELS).map(([type, label]) => {
          const count = typeCounts[type] || 0;
          if (count === 0) return null;
          
          const isSelected = selectedTypes.has(type);
          const color = TYPE_COLORS[type as keyof typeof TYPE_COLORS];
          
          return (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className={`flex items-center gap-1.5 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 rounded-lg font-medium transition-all text-left ${
                isSelected
                  ? 'bg-white shadow-md'
                  : 'bg-gray-100 opacity-50 hover:opacity-75'
              }`}
              style={{
                borderLeft: `3px solid ${color}`,
              }}
            >
              <div
                className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: color }}
              />
              <span className="text-xs md:text-sm text-gray-700 truncate">{label}</span>
              <span className="text-[10px] md:text-xs bg-gray-200 px-1.5 md:px-2 py-0.5 rounded-full text-gray-600 flex-shrink-0">
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Carte */}
      {mapLoading && (
        <div className="w-full h-[500px] flex items-center justify-center bg-gray-100 rounded-xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#fcad0d] mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement de la carte...</p>
          </div>
        </div>
      )}
      <div 
        ref={mapRef} 
        className={`w-full ${isMobile ? 'h-[500px]' : 'h-[600px]'} rounded-xl shadow-lg border-2 border-gray-200`}
        style={{ 
          zIndex: 1, 
          ...(mapLoading ? { height: '1px', overflow: 'hidden', opacity: 0, position: 'absolute' as const } : {})
        }}
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
