// export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const"; // Removed cyclic import

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "App";

export const APP_LOGO = "/LogoWattsuntransparent.png";

// import { Sun, Thermometer, Battery, ChargingStation, Zap, Fan } from "lucide-react"; // Reverted due to build error in Node.js compilation context

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};


export const SERVICES = [
  {
    id: "maitrise-oeuvre",
    title: "Maîtrise d'Œuvre",
    description: "Rénovation globale clé en main pour particuliers et professionnels — Accompagnement MAR / ANAH.",
    Icon: "ClipboardCheck",
    seoTitle: "Maîtrise d'Œuvre Rénovation Globale | Wattsun Énergie",
    seoDescription: "Rénovation énergétique globale clé en main en Charente-Maritime. Accompagnement MAR, aides MaPrimeRénov' jusqu'à 50 000€. Particuliers et professionnels. Devis gratuit.",
    path: "/maitrise-oeuvre",
    color: "from-purple-400 to-purple-600",
    hoverColor: "text-purple-600",
  },
  {
    id: "photovoltaique",
    title: "Panneaux Photovoltaïques",
    description: "Produisez votre propre électricité verte et réduisez vos factures.",
    Icon: "Sun",
    seoTitle: "Panneaux Photovoltaïques à La Rochelle | Wattsun Énergie",
    seoDescription: "Installation de panneaux solaires RGE QualiPV à La Rochelle. Produisez votre électricité, réduisez vos factures et bénéficiez des aides de l'État. Demandez un devis gratuit.",
    path: "/panneaux-photovoltaiques",
    color: "from-yellow-400 to-yellow-600",
    hoverColor: "text-yellow-600",
  },
  {
    id: "pompes-chaleur",
    title: "Pompes à Chaleur",
    description: "Chauffage et climatisation écologiques pour un confort optimal.",
    Icon: "Thermometer",
    seoTitle: "Pompes à Chaleur RGE QualiPAC à La Rochelle | Wattsun Énergie",
    seoDescription: "Installation et remplacement de pompes à chaleur (Air/Eau, Air/Air) RGE QualiPAC. Économisez jusqu'à 70% sur votre chauffage. Devis et aides financières.",
    path: "/pompes-a-chaleur",
    color: "from-blue-400 to-blue-600", // Bleu pour le chauffage/froid
    hoverColor: "text-blue-600",
  },
  {
    id: "batteries",
    title: "Batteries de Stockage",
    description: "Maximisez votre autoconsommation et gagnez en indépendance énergétique.",
    Icon: "Battery",
    seoTitle: "Batteries de Stockage Solaire | Maximisez votre Autoconsommation",
    seoDescription: "Solutions de batteries de stockage pour panneaux solaires. Augmentez votre autonomie et utilisez votre énergie jour et nuit. Compatible avec toutes installations PV.",
    path: "/batteries-stockage",
    color: "from-green-400 to-green-600", // Vert pour le stockage/énergie
    hoverColor: "text-green-600",
  },
  {
    id: "bornes",
    title: "Bornes de Recharge",
    description: "Rechargez votre véhicule électrique à domicile ou en entreprise — RGE IRVE.",
    Icon: "ChargingStation",
    seoTitle: "Installation Bornes de Recharge RGE IRVE | Wattsun Énergie",
    seoDescription: "Pose de bornes de recharge pour véhicules électriques RGE IRVE à La Rochelle. Particuliers et professionnels. Installation sécurisée, éligible ADVENIR. Devis gratuit.",
    path: "/bornes-recharge",
    color: "from-indigo-400 to-indigo-600",
    hoverColor: "text-indigo-600",
  },
  {
    id: "electricite",
    title: "Électricité Générale",
    description: "Installation et rénovation électrique pour votre habitat.",
    Icon: "Zap",
    seoTitle: "Électricité Générale et Rénovation Électrique | Wattsun Énergie",
    seoDescription: "Travaux d'électricité générale, mise aux normes NF C 15-100, et rénovation électrique complète pour votre habitat. Sécurité et conformité garanties.",
    path: "/electricite-generale",
    color: "from-red-400 to-red-600", // Rouge pour l'électricité/danger
    hoverColor: "text-red-600",
  },
  {
    id: "vmc",
    title: "VMC",
    description: "Améliorez la qualité de l'air intérieur et réduisez votre consommation.",
    Icon: "Fan",
    seoTitle: "Installation VMC (Ventilation Mécanique) | Wattsun Énergie",
    seoDescription: "Améliorez la qualité de l'air de votre intérieur avec une VMC simple ou double flux. Économies d'énergie et confort thermique. Devis gratuit.",
    path: "/vmc",
    color: "from-teal-400 to-teal-600", // Cyan/Teal pour la ventilation/air
    hoverColor: "text-teal-600",
  },
  {
    id: "isolation",
    title: "Isolation",
    description: "Isolation des combles, rampants et murs intérieurs — QUALIBAT RGE.",
    Icon: "Shield",
    seoTitle: "Isolation Thermique QUALIBAT RGE en Charente-Maritime | Wattsun Énergie",
    seoDescription: "Isolation des combles, rampants de toiture et murs intérieurs par un artisan QUALIBAT RGE. Particuliers et professionnels. Devis gratuit en Charente-Maritime.",
    path: "/isolation",
    color: "from-orange-400 to-orange-600",
    hoverColor: "text-orange-600",
  },
  {
    id: "platrerie",
    title: "Plâtrerie",
    description: "Cloisons, faux plafonds et doublage — QUALIBAT.",
    Icon: "LayoutGrid",
    seoTitle: "Plâtrerie QUALIBAT : Cloisons, Faux Plafonds, Doublage | Wattsun Énergie",
    seoDescription: "Travaux de plâtrerie QUALIBAT en Charente-Maritime : cloisons, faux plafonds, doublage et finitions. Particuliers et professionnels. Devis gratuit.",
    path: "/platrerie",
    color: "from-gray-400 to-gray-600",
    hoverColor: "text-gray-600",
  },
  {
    id: "menuiseries",
    title: "Menuiseries",
    description: "Fenêtres, portes et volets haute performance — QUALIBAT RGE.",
    Icon: "DoorOpen",
    seoTitle: "Menuiseries QUALIBAT RGE : Fenêtres, Portes, Volets | Wattsun Énergie",
    seoDescription: "Installation de menuiseries QUALIBAT RGE en Charente-Maritime : fenêtres, portes, volets. Particuliers et professionnels. Devis gratuit.",
    path: "/menuiseries",
    color: "from-amber-400 to-amber-600",
    hoverColor: "text-amber-600",
  },
  {
    id: "couverture",
    title: "Couverture",
    description: "Réfection, réparation et entretien de toiture.",
    Icon: "Home",
    seoTitle: "Couverture et Toiture en Charente-Maritime | Wattsun Énergie",
    seoDescription: "Travaux de couverture, réfection de toiture, zinguerie et réparation de fuites en Charente-Maritime. Devis gratuit et intervention rapide.",
    path: "/couverture",
    color: "from-rose-400 to-rose-600",
    hoverColor: "text-rose-600",
  },

];

export const APP_LOGO_WHITE = "/LogoWattsun_blanc.png";

export const REALISATIONS = [
  { city: "Châtelaillon-Plage", service: "Pompes à chaleur", date: "Décembre 2023", lat: 46.072, lng: -1.089 },
  { city: "Nieul-sur-Mer", service: "Panneaux photovoltaïques", date: "Janvier 2024", lat: 46.207, lng: -1.163 },
  { city: "Dompierre-sur-Mer", service: "Panneaux photovoltaïques", date: "Février 2024", lat: 46.188, lng: -1.063 },
  { city: "Talmont-Saint-Hilaire", service: "Panneaux photovoltaïques", date: "Mars 2024", lat: 46.466, lng: -1.618 },
  { city: "Fouras", service: "Panneaux photovoltaïques", date: "Avril 2024", lat: 45.988, lng: -1.093 },
  { city: "Puyravault", service: "Panneaux photovoltaïques", date: "Mai 2024", lat: 46.138, lng: -0.818 },
  { city: "Vérines", service: "Panneaux photovoltaïques", date: "Juin 2024", lat: 46.194, lng: -0.967 },
  { city: "Rochefort", service: "Panneaux photovoltaïques", date: "Juillet 2024", lat: 45.942, lng: -0.958 },
  { city: "Saint-Gilles-Croix-de-Vie", service: "Panneaux photovoltaïques", date: "Août 2024", lat: 46.697, lng: -1.945 },
  { city: "Surgères", service: "Panneaux photovoltaïques", date: "Septembre 2024", lat: 46.108, lng: -0.801 },
  { city: "La Flotte-en-Ré", service: "Panneaux photovoltaïques", date: "Octobre 2024", lat: 46.187, lng: -1.333 }
];

export const CONTACT = {
  phone: "07 86 73 10 33",
  email: "contact@wattsun-energie.fr",
  address: "21 bis Rue Ampère 17139 Dompierre sur mer",
  formspreeUrl: "https://formspree.io/f/mzzjvrje"
};
