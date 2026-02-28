import { useEffect, useRef, useState, useCallback } from 'react';
import { MapPin, ChevronRight, RotateCcw } from 'lucide-react';

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
  PV: '#fcd34d',
  PAC: '#93c5fd',
  Batteries: '#6ee7b7',
  Bornes: '#c4b5fd',
  Electricite: '#fca5a5',
  VMC: '#5eead4',
  Isolation: '#fb923c',
  Platrerie: '#9ca3af',
  Menuiseries: '#fbbf24',
  Couverture: '#fb7185',
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

// Centre par défaut : La Rochelle
const DEFAULT_CENTER: [number, number] = [46.1591, -1.1520];
const DEFAULT_ZOOM = 10;

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
        <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-[#fcad0d] to-[#f59e0b] rounded-full flex items-center justify-center shadow-lg">
          <MapPin className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {totalProjects}+ chantiers réalisés
        </h3>
        <p className="text-gray-600 mb-6">
          en Charente-Maritime et Nouvelle-Aquitaine
        </p>

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
  const [mapReady, setMapReady] = useState(false);
  const [showTouchHint, setShowTouchHint] = useState(false);
  const touchHintTimerRef = useRef<any>(null);

  useEffect(() => {
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
    
    return { main: '#fcad0d', light: '#ffc84d', text: '#1f2937' };
  };

  // Charger les scripts Leaflet
  const loadLeafletScripts = async () => {
    // CSS Leaflet
    if (!document.querySelector('link[href*="leaflet.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
      link.crossOrigin = '';
      document.head.appendChild(link);
    }

    // CSS MarkerCluster
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

    // JS Leaflet
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

    // JS MarkerCluster
    if (!(window as any).L.markerClusterGroup) {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js';
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    }
  };

  // Initialiser la carte
  const initMap = useCallback(async () => {
    if (!mapRef.current || projects.length === 0) return;

    await loadLeafletScripts();
    const L = (window as any).L;
    if (!L) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapRef.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
        // Sur mobile : désactiver le drag 1 doigt pour permettre le scroll de la page
        dragging: !isMobile,
        // Garder le zoom par pinch (2 doigts) actif
        touchZoom: true,
        // Désactiver le scroll wheel zoom sur mobile
        scrollWheelZoom: !isMobile,
        // Garder le tap actif pour les popups
        tap: true,
        // Désactiver le double-tap zoom sur mobile (peut gêner)
        doubleClickZoom: true,
        // Garder les boutons +/- pour zoomer
        zoomControl: true,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '\u00a9 OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      mapInstanceRef.current = map;

      // Sur mobile, intercepter le touch pour afficher un hint
      if (isMobile && mapRef.current) {
        mapRef.current.addEventListener('touchstart', (e: TouchEvent) => {
          if (e.touches.length === 1) {
            // Un seul doigt : afficher le hint
            setShowTouchHint(true);
            if (touchHintTimerRef.current) clearTimeout(touchHintTimerRef.current);
            touchHintTimerRef.current = setTimeout(() => setShowTouchHint(false), 1500);
          } else if (e.touches.length >= 2) {
            // Deux doigts : activer temporairement le drag
            setShowTouchHint(false);
            if (touchHintTimerRef.current) clearTimeout(touchHintTimerRef.current);
            map.dragging.enable();
          }
        }, { passive: true });

        mapRef.current.addEventListener('touchend', (e: TouchEvent) => {
          if (e.touches.length < 2) {
            // Quand on relâche à moins de 2 doigts, désactiver le drag
            setTimeout(() => {
              if (mapInstanceRef.current) {
                mapInstanceRef.current.dragging.disable();
              }
            }, 100);
          }
        }, { passive: true });
      }
    }

    updateMarkers();
  }, [projects, isMobile]);

  // Mettre à jour les marqueurs
  const updateMarkers = useCallback(() => {
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
  }, [filteredProjects, selectedTypes]);

  // Recentrer la carte
  const handleRecenter = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView(DEFAULT_CENTER, DEFAULT_ZOOM);
    }
  };

  // Sur bureau : charger la carte automatiquement
  useEffect(() => {
    if (!isMobile && !loading && projects.length > 0) {
      initMap();
    }
  }, [isMobile, loading, projects, initMap]);

  // Mettre à jour les marqueurs quand les filtres changent
  useEffect(() => {
    if (mapInstanceRef.current && (window as any).L) {
      updateMarkers();
    }
  }, [selectedTypes, updateMarkers]);

  // Quand l'utilisateur mobile clique sur "Voir la carte"
  const handleShowMapMobile = () => {
    setShowMapOnMobile(true);
  };

  // Initialiser la carte quand showMapOnMobile passe à true
  useEffect(() => {
    if (showMapOnMobile && projects.length > 0 && !mapInstanceRef.current) {
      // Attendre que le DOM soit prêt
      const timer = setTimeout(async () => {
        if (!mapRef.current) return;
        await initMap();
        // Forcer Leaflet à recalculer la taille
        setTimeout(() => {
          if (mapInstanceRef.current) {
            mapInstanceRef.current.invalidateSize();
            // Recentrer explicitement après invalidateSize
            mapInstanceRef.current.setView(DEFAULT_CENTER, DEFAULT_ZOOM);
          }
          setMapReady(true);
        }, 300);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [showMapOnMobile, projects, initMap]);

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

      {/* Conteneur carte avec overlay */}
      <div className="relative">
        {/* Carte */}
        <div 
          ref={mapRef} 
          className={`w-full ${isMobile ? 'h-[400px]' : 'h-[600px]'} rounded-xl shadow-lg border-2 border-gray-200`}
          style={{ zIndex: 1 }}
        />

        {/* Overlay hint tactile mobile */}
        {isMobile && showTouchHint && (
          <div 
            className="absolute inset-0 flex items-center justify-center rounded-xl pointer-events-none"
            style={{ zIndex: 1000, backgroundColor: 'rgba(0,0,0,0.4)' }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg text-center max-w-[280px]">
              <div className="text-2xl mb-2">👆👆</div>
              <p className="text-sm font-medium text-gray-800">
                Utilisez <strong>deux doigts</strong> pour déplacer la carte
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Ou utilisez les boutons +/- pour zoomer
              </p>
            </div>
          </div>
        )}

        {/* Bouton recentrer (mobile uniquement) */}
        {isMobile && mapReady && (
          <button
            onClick={handleRecenter}
            className="absolute top-3 right-3 bg-white shadow-lg rounded-lg p-2.5 border border-gray-200 hover:bg-gray-50 active:bg-gray-100 transition-colors"
            style={{ zIndex: 1000 }}
            title="Recentrer sur La Rochelle"
          >
            <RotateCcw className="w-5 h-5 text-gray-700" />
          </button>
        )}

        {/* Loading overlay pour mobile */}
        {isMobile && showMapOnMobile && !mapReady && (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl"
            style={{ zIndex: 1001 }}
          >
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#fcad0d] mx-auto mb-4"></div>
              <p className="text-gray-600">Chargement de la carte...</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Compteur */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          <strong>{filteredProjects.length}</strong> chantier{filteredProjects.length > 1 ? 's' : ''} affiché{filteredProjects.length > 1 ? 's' : ''} sur <strong>{projects.length}</strong> au total
        </p>
      </div>
    </div>
  );
}
