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
    id: "photovoltaique",
    title: "Panneaux Photovoltaïques",
    description: "Produisez votre propre électricité verte et réduisez vos factures.",
    Icon: "Sun",
    path: "/panneaux-photovoltaiques",
  },
  {
    id: "pompes-chaleur",
    title: "Pompes à Chaleur",
    description: "Chauffage et climatisation écologiques pour un confort optimal.",
    Icon: "Thermometer",
    path: "/pompes-a-chaleur",
  },
  {
    id: "batteries",
    title: "Batteries de Stockage",
    description: "Maximisez votre autoconsommation et gagnez en indépendance énergétique.",
    Icon: "Battery",
    path: "/batteries-stockage",
  },
  {
    id: "bornes",
    title: "Bornes de Recharge",
    description: "Rechargez votre véhicule électrique à domicile en toute sécurité.",
    Icon: "ChargingStation",
    path: "/bornes-recharge",
  },
  {
    id: "electricite",
    title: "Électricité Générale",
    description: "Installation et rénovation électrique pour votre habitat.",
    Icon: "Zap",
    path: "/electricite-generale",
  },
  {
    id: "vmc",
    title: "VMC",
    description: "Améliorez la qualité de l'air intérieur et réduisez votre consommation.",
    Icon: "Fan",
    path: "/vmc",
  },
];

export const CONTACT = {
  phone: "06 08 75 00 51",
  email: "contact@wattsun-energie.fr",
  address: "21 bis Rue Ampère 17139 Dompierre sur mer"
};


export const APP_LOGO_WHITE = "/LogoWattsun_blanc.png";
