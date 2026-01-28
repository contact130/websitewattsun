import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

// Articles du blog
const articles = [
  {
    id: "aides-panneaux-solaires-2026",
    title: "Aides Panneaux Solaires 2026 : Le Guide Complet pour la Charente-Maritime",
    excerpt: "Prime à l'autoconsommation, tarifs de rachat EDF OA, TVA réduite à 5,5%... Découvrez toutes les aides disponibles en 2026 pour financer votre installation photovoltaïque.",
    date: "15 janvier 2026",
    readTime: "12 min",
    category: "Aides Financières",
    image: "/optimized/wattsun-hero-image.jpg",
    content: `
## Installer des panneaux solaires en 2026 : un investissement rentable

L'année 2026 marque un tournant pour le photovoltaïque en France. Avec la hausse continue des prix de l'électricité et les objectifs nationaux ambitieux de 75 à 100 GW de puissance photovoltaïque d'ici 2035, l'État maintient des aides attractives pour encourager les particuliers à s'équiper. En Charente-Maritime, région particulièrement ensoleillée, le retour sur investissement est d'autant plus intéressant.

## La prime à l'autoconsommation : jusqu'à 720 € pour votre installation

La prime à l'autoconsommation constitue l'aide principale pour les installations photovoltaïques en autoconsommation avec vente du surplus. Depuis le 1er trimestre 2026, les montants sont les suivants :

| Puissance de l'installation | Prime par kWc | Exemple de prime totale |
|----------------------------|---------------|------------------------|
| Jusqu'à 9 kWc | 80 €/kWc | 720 € pour 9 kWc |
| De 9 à 36 kWc | 140 €/kWc | 3 780 € pour 36 kWc |
| De 36 à 100 kWc | 70 €/kWc | 4 480 € pour 100 kWc |

Cette prime est versée en une seule fois lors de la première facturation du surplus par EDF OA, généralement au premier anniversaire de l'installation. Pour en bénéficier, votre installation doit être réalisée par un professionnel certifié RGE comme Wattsun Énergie.

## Les tarifs de rachat EDF OA : un revenu garanti pendant 20 ans

Le mécanisme d'obligation d'achat permet de vendre votre surplus d'électricité à EDF OA à un tarif garanti pendant 20 ans. Les tarifs applicables au 1er trimestre 2026 sont :

Pour la vente du surplus (autoconsommation), le tarif s'établit à 0,04 €/kWh pour les installations jusqu'à 9 kWc. Pour les installations plus importantes, entre 9 et 36 kWc, le tarif atteint 0,0536 €/kWh.

Pour la vente totale (réservée aux installations de plus de 9 kWc), les tarifs sont plus avantageux : 0,0911 €/kWh pour les installations de 9 à 36 kWc.

Ces tarifs sont fixés au moment de la Demande Complète de Raccordement (DCR) et restent inchangés pendant toute la durée du contrat de 20 ans, offrant une visibilité financière appréciable.

## La TVA réduite à 5,5% : une nouveauté 2026

Depuis le 1er octobre 2025, les installations photovoltaïques jusqu'à 9 kWc bénéficient d'un taux de TVA réduit à 5,5%, contre 10% auparavant pour les installations de moins de 3 kWc. Cette évolution représente une économie significative sur le coût total de votre projet.

Pour une installation de 6 kWc à 10 000 € HT, la TVA à 5,5% représente 550 € contre 2 000 € à 20%, soit une économie de 1 450 €.

## Combien coûte une installation photovoltaïque en 2026 ?

Le prix d'une installation photovoltaïque varie selon la puissance et la qualité des équipements choisis. Voici les fourchettes de prix constatées en 2026 :

| Puissance | Fourchette de prix |
|-----------|-------------------|
| 3 kWc | 6 000 € à 9 000 € |
| 6 kWc | 9 500 € à 14 000 € |
| 9 kWc | 12 000 € à 17 000 € |

Ces prix incluent généralement les panneaux, l'onduleur, la pose et les démarches administratives. En moyenne, 1 kWc produit environ 1 100 kWh par an en France, et davantage en Charente-Maritime grâce à l'ensoleillement favorable.

## Les démarches pour bénéficier des aides

Pour obtenir toutes les aides disponibles, une condition est essentielle : faire appel à un installateur certifié RGE (Reconnu Garant de l'Environnement). Chez Wattsun Énergie, nous sommes certifiés QualiPV et nous prenons en charge l'intégralité des démarches administratives : déclaration préalable de travaux, demande de raccordement Enedis, contrat EDF OA et demande de prime.

Contactez-nous pour une étude personnalisée gratuite et découvrez le montant exact des aides auxquelles vous avez droit.
    `
  },
  {
    id: "pompe-chaleur-ou-chaudiere-gaz",
    title: "Pompe à Chaleur ou Chaudière Gaz : Le Comparatif Complet 2026",
    excerpt: "Investissement, consommation, aides financières, impact environnemental... Analyse détaillée pour vous aider à choisir le système de chauffage le plus adapté à votre logement.",
    date: "10 janvier 2026",
    readTime: "10 min",
    category: "Pompes à Chaleur",
    image: "/optimized/wattsun-hero-image.jpg",
    content: `
## Le chauffage en 2026 : un choix stratégique

Avec la hausse des prix de l'énergie et les nouvelles réglementations environnementales, le choix du système de chauffage devient crucial. La pompe à chaleur s'impose progressivement comme la solution d'avenir, mais la chaudière gaz reste présente dans de nombreux foyers. Voici un comparatif objectif pour vous aider à faire le bon choix.

## Comparatif des coûts sur 15 ans

Pour une maison de 120 m² avec une isolation moyenne, voici les coûts comparés entre une pompe à chaleur air-eau et une chaudière gaz à condensation :

| Critère | Chaudière gaz | Pompe à chaleur air-eau |
|---------|---------------|------------------------|
| Prix d'achat et installation | 3 900 € | 12 500 € |
| Aides financières disponibles | 0 € | 6 000 € à 8 000 € |
| Coût après déduction des aides | 3 900 € | 4 500 € à 6 500 € |
| Consommation annuelle | 1 500 €/an | 950 €/an |
| Entretien annuel | 150 €/an | 110 €/an (tous les 2 ans) |
| Coût total sur 15 ans | 28 650 € | 22 290 € à 25 290 € |

Le constat est clair : malgré un investissement initial plus élevé, la pompe à chaleur devient plus économique sur la durée grâce à ses faibles coûts de fonctionnement et aux aides financières disponibles.

## La consommation énergétique : un écart significatif

La différence de consommation entre ces deux systèmes est considérable. Pour chauffer la même surface, une pompe à chaleur consomme environ 4 100 kWh par an, tandis qu'une chaudière gaz nécessite près de 15 000 kWh. Cette différence s'explique par le coefficient de performance (COP) de la pompe à chaleur, qui produit 3 à 4 kWh de chaleur pour 1 kWh d'électricité consommé.

## Les aides financières en 2026

La pompe à chaleur bénéficie d'un soutien financier important de l'État, contrairement à la chaudière gaz qui n'est plus éligible aux aides depuis plusieurs années.

Pour l'installation d'une pompe à chaleur air-eau, vous pouvez cumuler MaPrimeRénov' (jusqu'à 5 000 € selon vos revenus) et la prime CEE Coup de Pouce (environ 3 000 € à 5 800 €). Au total, les aides peuvent atteindre 10 800 € pour les ménages aux revenus modestes.

## Le climat de la Charente-Maritime : idéal pour la PAC

Le climat océanique de notre région, avec des hivers doux (rarement en dessous de 0°C), est particulièrement favorable aux pompes à chaleur air-eau. Ces équipements offrent un excellent rendement même par températures fraîches, et leur performance reste optimale tout au long de l'année.

De plus, la pompe à chaleur peut également assurer le rafraîchissement de votre logement en été, un avantage non négligeable avec les épisodes de canicule de plus en plus fréquents.

## Notre recommandation

Pour les logements ayant accès au gaz de ville, le choix n'est plus aussi évident qu'auparavant. La pompe à chaleur s'impose désormais comme la solution la plus économique sur le long terme, la plus écologique et la plus aidée financièrement.

Chez Wattsun Énergie, nous sommes certifiés QualiPAC et nous vous accompagnons dans le dimensionnement et l'installation de votre pompe à chaleur. Contactez-nous pour une étude thermique gratuite de votre logement.
    `
  },
  {
    id: "autoconsommation-solaire-guide",
    title: "Autoconsommation Solaire : Tout Comprendre pour Maximiser vos Économies",
    excerpt: "Fonctionnement, rentabilité, dimensionnement, batteries de stockage... Le guide complet pour réussir votre projet d'autoconsommation photovoltaïque en Charente-Maritime.",
    date: "5 janvier 2026",
    readTime: "15 min",
    category: "Photovoltaïque",
    image: "/optimized/wattsun-hero-image.jpg",
    content: `
## L'autoconsommation solaire : le principe

L'autoconsommation solaire consiste à consommer directement l'électricité produite par vos panneaux photovoltaïques. Plutôt que de revendre toute votre production au réseau, vous utilisez en priorité l'énergie que vous produisez, réduisant ainsi votre facture d'électricité et votre dépendance au réseau.

En 2026, avec un prix de l'électricité dépassant les 0,25 €/kWh, chaque kilowattheure autoconsommé représente une économie directe et immédiate. C'est pourquoi l'autoconsommation est devenue le mode de fonctionnement privilégié des installations photovoltaïques résidentielles.

## Comment fonctionne l'autoconsommation avec vente du surplus ?

Le fonctionnement est simple et automatique. Pendant la journée, vos panneaux produisent de l'électricité. Cette électricité alimente en priorité les appareils en fonctionnement dans votre maison. Si la production dépasse votre consommation instantanée, le surplus est injecté dans le réseau et racheté par EDF OA à un tarif garanti.

Un compteur Linky bidirectionnel mesure les flux d'électricité dans les deux sens : ce que vous consommez du réseau et ce que vous y injectez. Vous recevez une facture annuelle d'EDF OA pour le rachat de votre surplus, à laquelle s'ajoute la prime à l'autoconsommation la première année.

## Quelle rentabilité attendre en Charente-Maritime ?

La Charente-Maritime bénéficie d'un ensoleillement supérieur à la moyenne nationale, avec environ 2 000 heures de soleil par an. Pour une installation de 6 kWc orientée plein sud avec une inclinaison de 30°, vous pouvez espérer produire entre 7 000 et 7 500 kWh par an.

Voici un exemple de rentabilité pour une installation de 6 kWc :

| Paramètre | Valeur |
|-----------|--------|
| Production annuelle | 7 200 kWh |
| Taux d'autoconsommation (sans batterie) | 35% |
| Électricité autoconsommée | 2 520 kWh |
| Économies sur la facture (à 0,25 €/kWh) | 630 €/an |
| Surplus vendu (4 680 kWh à 0,04 €/kWh) | 187 €/an |
| Gain annuel total | 817 €/an |
| Coût de l'installation (après aides) | 8 000 € |
| Retour sur investissement | 9,8 ans |

Avec une durée de vie des panneaux de 25 à 30 ans, l'installation génère des économies pendant plus de 15 ans après le retour sur investissement.

## Comment maximiser votre taux d'autoconsommation ?

Le taux d'autoconsommation représente la part de votre production que vous consommez directement. Plus ce taux est élevé, plus votre installation est rentable. Voici les leviers pour l'optimiser :

Adapter vos habitudes de consommation constitue le premier levier, sans aucun investissement supplémentaire. Programmez vos appareils énergivores (lave-linge, lave-vaisselle, four) pour qu'ils fonctionnent en journée, pendant les heures de production solaire.

Installer un chauffe-eau thermodynamique permet de stocker l'énergie solaire sous forme d'eau chaude. Le ballon se remplit pendant la journée et vous disposez d'eau chaude le soir et le matin.

Ajouter une batterie de stockage permet d'atteindre des taux d'autoconsommation de 70 à 80%. L'électricité produite en excès pendant la journée est stockée pour être utilisée le soir et la nuit. Le coût des batteries a considérablement baissé ces dernières années, rendant cette option de plus en plus attractive.

Recharger votre véhicule électrique pendant la journée est une excellente façon d'utiliser votre surplus de production. Une borne de recharge intelligente peut même adapter la puissance de charge en fonction de la production solaire disponible.

## Le dimensionnement : clé de la réussite

Un dimensionnement adapté à votre consommation est essentiel pour optimiser la rentabilité de votre installation. Une installation trop petite ne couvrira pas suffisamment vos besoins, tandis qu'une installation trop grande générera un surplus important vendu à un tarif moins avantageux que l'électricité économisée.

Chez Wattsun Énergie, nous analysons vos factures d'électricité et vos habitudes de consommation pour vous proposer le dimensionnement optimal. Contactez-nous pour une étude personnalisée gratuite.
    `
  },
  {
    id: "borne-recharge-maison",
    title: "Borne de Recharge à Domicile : Le Guide Complet pour 2026",
    excerpt: "Puissance, prix, aides financières, installation... Tout ce qu'il faut savoir pour équiper votre maison d'une borne de recharge pour véhicule électrique.",
    date: "1er janvier 2026",
    readTime: "10 min",
    category: "Bornes de Recharge",
    image: "/optimized/wattsun-hero-image.jpg",
    content: `
## Pourquoi installer une borne de recharge à domicile ?

Avec l'essor des véhicules électriques, la borne de recharge à domicile devient un équipement incontournable. Elle offre un confort d'utilisation incomparable : vous branchez votre véhicule le soir et le retrouvez chargé le matin, sans avoir à vous soucier des bornes publiques.

Au-delà du confort, la recharge à domicile est aussi la plus économique. En utilisant les heures creuses (généralement entre 22h et 6h), le coût de recharge tombe à environ 2 à 3 € pour 100 km, contre 8 à 10 € pour un véhicule essence équivalent.

## Quelle puissance choisir pour votre borne ?

Le choix de la puissance dépend de votre usage quotidien et de votre installation électrique. Voici les options disponibles :

| Puissance | Autonomie récupérée par heure | Type d'installation | Usage recommandé |
|-----------|------------------------------|---------------------|------------------|
| 3,7 kW | 20 km/h | Monophasé | Petits trajets quotidiens |
| 7,4 kW | 40 km/h | Monophasé | Usage quotidien standard |
| 11 kW | 75 km/h | Triphasé | Gros rouleurs |
| 22 kW | 150 km/h | Triphasé | Usage intensif |

Pour la plupart des utilisateurs, une borne de 7,4 kW est suffisante. Elle permet de récupérer environ 300 km d'autonomie pendant une nuit de charge (8 heures), ce qui couvre largement les besoins quotidiens de la majorité des conducteurs.

Si vous disposez d'un compteur triphasé et que vous parcourez de longues distances régulièrement, une borne de 11 kW offre plus de flexibilité. La borne de 22 kW est rarement nécessaire pour un usage domestique, d'autant que de nombreux véhicules ne peuvent pas charger à cette puissance.

## Quel budget prévoir pour l'installation ?

Le coût d'une installation de borne de recharge varie selon la puissance choisie et la complexité de l'installation électrique existante. Voici les fourchettes de prix constatées en 2026 :

Une prise renforcée (type Green'Up) représente l'option la plus économique, entre 450 et 550 € installation comprise. Elle permet de charger à 3,7 kW en toute sécurité, ce qui peut suffire pour un usage occasionnel.

Une borne de 7,4 kW coûte entre 1 200 et 1 800 € installation comprise. C'est le meilleur rapport qualité-prix pour un usage quotidien.

Une borne de 11 kW nécessite un budget de 1 500 à 2 200 €, auquel peut s'ajouter le coût du passage en triphasé si votre installation est en monophasé.

## Les aides financières disponibles

Jusqu'en 2025, le crédit d'impôt pour l'installation de bornes de recharge (CIBRE) permettait de bénéficier d'une aide couvrant 75% des dépenses, dans la limite de 500 € par borne. En 2026, ce dispositif pourrait évoluer. Nous vous conseillons de nous contacter pour connaître les aides actuellement disponibles.

La TVA réduite à 5,5% s'applique pour les logements de plus de 2 ans, ce qui représente une économie significative sur le coût total.

Certaines collectivités locales proposent également des aides complémentaires. Renseignez-vous auprès de votre mairie ou de la Région Nouvelle-Aquitaine.

## L'installation par un professionnel IRVE : une obligation

Pour les bornes de plus de 3,7 kW, l'installation doit obligatoirement être réalisée par un électricien certifié IRVE (Infrastructure de Recharge de Véhicule Électrique). Cette certification garantit une installation conforme aux normes de sécurité et vous permet de bénéficier des aides financières.

Chez Wattsun Énergie, nous sommes certifiés IRVE et nous vous accompagnons dans le choix et l'installation de votre borne de recharge. Nous réalisons également le diagnostic de votre installation électrique pour vérifier sa compatibilité.

## Coupler borne de recharge et panneaux solaires

L'association d'une borne de recharge et de panneaux photovoltaïques est particulièrement pertinente. En rechargeant votre véhicule pendant la journée avec l'électricité produite par vos panneaux, vous maximisez votre autoconsommation et roulez littéralement à l'énergie solaire.

Certaines bornes intelligentes peuvent même moduler la puissance de charge en fonction de la production solaire disponible, optimisant ainsi l'utilisation de votre installation photovoltaïque.

Contactez Wattsun Énergie pour une étude complète de votre projet : panneaux solaires et borne de recharge, une combinaison gagnante pour votre portefeuille et pour l'environnement.
    `
  }
];

export default function Blog() {
  useEffect(() => {
    document.title = "Blog - Conseils Énergie Solaire et Pompes à Chaleur | Wattsun Énergie";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Conseils et guides sur les panneaux solaires, pompes à chaleur, bornes de recharge et aides financières en Charente-Maritime. Blog Wattsun Énergie."
      );
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#5e8a92] to-[#7ca0a8] py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog Wattsun Énergie
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Conseils, guides et actualités sur les énergies renouvelables en Charente-Maritime
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl border-none bg-white group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#fcad0d] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{article.readTime} de lecture</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5e8a92] transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${article.id}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="inline-flex items-center gap-2 text-[#fcad0d] font-semibold hover:text-[#5e8a92] transition-colors"
                    >
                      Lire l'article
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#f7b529] to-[#fcad0d]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prêt à passer à l'action ?
            </h2>
            <p className="text-gray-800 text-lg mb-8 max-w-2xl mx-auto">
              Obtenez votre étude personnalisée gratuite et découvrez combien vous pouvez économiser.
            </p>
            <Link to="/demande-devis" onClick={() => window.scrollTo(0, 0)}>
              <Button
                size="lg"
                className="bg-gray-900 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-2xl font-bold text-lg px-10 py-7"
              >
                Demander mon Devis Gratuit
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Export des articles pour les pages individuelles
export { articles };
