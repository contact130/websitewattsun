// export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const"; // Removed cyclic import

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "App";

export const APP_LOGO =
  "/attached_assets/LogoWattsuntransparent.png";

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
    id: 1,
    title: "Panneaux Photovoltaïques",
    shortDescription: "Produisez votre propre électricité verte et réduisez vos factures.",
    icon: "Sun",
    path: "/panneaux-photovoltaiques",
  },
  {
    id: 2,
    title: "Pompes à Chaleur",
    shortDescription: "Chauffage et climatisation écologiques pour un confort optimal.",
    icon: "Thermometer",
    path: "/pompes-a-chaleur",
  },
  {
    id: 3,
    title: "Batteries de Stockage",
    shortDescription: "Maximisez votre autoconsommation et gagnez en indépendance énergétique.",
    icon: "Battery",
    path: "/batteries-stockage",
  },
  {
    id: 4,
    title: "Bornes de Recharge",
    shortDescription: "Rechargez votre véhicule électrique à domicile en toute sécurité.",
    icon: "Plug",
    path: "/bornes-recharge",
  },
  {
    id: 5,
    title: "Électricité Générale",
    shortDescription: "Installation et rénovation électrique pour votre habitat.",
    icon: "Zap",
    path: "/electricite-generale",
  },
  {
    id: 6,
    title: "VMC (Ventilation Mécanique Contrôlée)",
    shortDescription: "Améliorez la qualité de l'air intérieur et réduisez votre consommation.",
    icon: "Wind",
    path: "/vmc",
  },
];

export const CONTACT = {
  phone: "05 46 00 00 00",
  email: "contact@wattsun-energie.fr",
  address: "123 Rue de l'Énergie, 17000 La Rochelle",
};
