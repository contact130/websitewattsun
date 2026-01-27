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
    title: "Aides Panneaux Solaires 2026 : MaPrimeRénov', Prime Autoconsommation et CEE",
    excerpt: "Découvrez toutes les aides financières disponibles en 2026 pour installer des panneaux solaires en Charente-Maritime : MaPrimeRénov', prime à l'autoconsommation, CEE et aides locales.",
    date: "15 janvier 2026",
    readTime: "8 min",
    category: "Aides Financières",
    image: "/optimized/wattsun-hero-image.jpg",
    content: `
## Les aides pour installer des panneaux solaires en 2026

L'installation de panneaux photovoltaïques représente un investissement rentable, d'autant plus avec les nombreuses aides disponibles. Voici le guide complet des aides en Charente-Maritime.

### 1. La Prime à l'Autoconsommation

La prime à l'autoconsommation est versée par EDF OA sur 5 ans :
- **Installations ≤ 3 kWc** : 370€/kWc
- **Installations de 3 à 9 kWc** : 280€/kWc
- **Installations de 9 à 36 kWc** : 200€/kWc

**Exemple** : Pour une installation de 6 kWc, vous recevez 1 680€ sur 5 ans.

### 2. Le Tarif de Rachat Garanti

EDF Obligation d'Achat rachète votre surplus d'électricité à un tarif garanti pendant 20 ans :
- **Vente du surplus** : environ 0,13€/kWh
- **Vente totale** : environ 0,17€/kWh

### 3. La TVA Réduite à 10%

Pour les installations ≤ 3 kWc sur des logements de plus de 2 ans, vous bénéficiez d'une TVA à 10% au lieu de 20%.

### 4. Les Aides Locales en Nouvelle-Aquitaine

La Région Nouvelle-Aquitaine et certaines communes proposent des aides complémentaires. Contactez-nous pour connaître les aides disponibles dans votre commune.

### Comment bénéficier de ces aides ?

**Condition essentielle** : faire appel à un installateur certifié RGE comme Wattsun Énergie. Nous nous occupons de toutes les démarches administratives gratuitement.
    `
  },
  {
    id: "pompe-chaleur-ou-chaudiere-gaz",
    title: "Pompe à Chaleur ou Chaudière Gaz : Quel Choix en 2026 ?",
    excerpt: "Comparatif complet entre pompe à chaleur et chaudière gaz : coûts, économies, aides financières et impact environnemental. Guide pour faire le bon choix à La Rochelle.",
    date: "10 janvier 2026",
    readTime: "6 min",
    category: "Pompes à Chaleur",
    image: "/optimized/wattsun-hero-image.jpg",
    content: `
## Pompe à Chaleur vs Chaudière Gaz : Le Comparatif

Avec l'interdiction progressive des chaudières gaz dans le neuf et la hausse des prix de l'énergie, la pompe à chaleur s'impose comme la solution d'avenir.

### Comparatif des Coûts

| Critère | Pompe à Chaleur | Chaudière Gaz |
|---------|-----------------|---------------|
| Prix installation | 10 000 - 15 000€ | 3 000 - 6 000€ |
| Coût annuel chauffage | 600 - 900€ | 1 200 - 1 800€ |
| Aides disponibles | Jusqu'à 5 000€ | Aucune |
| Durée de vie | 15-20 ans | 15 ans |

### Les Avantages de la Pompe à Chaleur

1. **Économies** : Divisez votre facture de chauffage par 3
2. **Écologie** : Pas d'émissions de CO2 directes
3. **Confort** : Chauffage ET climatisation en été
4. **Aides** : MaPrimeRénov' jusqu'à 5 000€

### Le Climat de La Rochelle : Idéal pour la PAC

Le climat océanique de la Charente-Maritime (rarement sous 0°C) est parfait pour les pompes à chaleur air-eau, qui offrent un excellent rendement toute l'année.
    `
  },
  {
    id: "autoconsommation-solaire-guide",
    title: "Autoconsommation Solaire : Le Guide Complet pour Débutants",
    excerpt: "Tout comprendre sur l'autoconsommation solaire : fonctionnement, rentabilité, dimensionnement et conseils pratiques pour maximiser vos économies d'énergie.",
    date: "5 janvier 2026",
    readTime: "10 min",
    category: "Photovoltaïque",
    image: "/optimized/wattsun-hero-image.jpg",
    content: `
## Qu'est-ce que l'Autoconsommation Solaire ?

L'autoconsommation consiste à consommer directement l'électricité produite par vos panneaux solaires. C'est la solution la plus rentable en 2026.

### Comment ça Fonctionne ?

1. Vos panneaux produisent de l'électricité le jour
2. Vous consommez cette électricité en priorité
3. Le surplus est vendu à EDF ou stocké dans une batterie

### Quelle Rentabilité Attendre ?

Pour une installation de 6 kWc à La Rochelle :
- **Production annuelle** : ~7 200 kWh
- **Taux d'autoconsommation** : 30-40% sans batterie, 70-80% avec batterie
- **Économies annuelles** : 800 - 1 200€
- **Retour sur investissement** : 8-10 ans

### Comment Maximiser l'Autoconsommation ?

- Programmez vos appareils énergivores en journée (lave-linge, lave-vaisselle)
- Installez un chauffe-eau thermodynamique
- Ajoutez une batterie de stockage
- Rechargez votre véhicule électrique le jour
    `
  },
  {
    id: "borne-recharge-maison",
    title: "Installer une Borne de Recharge à la Maison : Prix, Aides et Conseils",
    excerpt: "Guide complet pour installer une borne de recharge pour véhicule électrique chez vous : choix de la puissance, coûts, aides financières et réglementation.",
    date: "1er janvier 2026",
    readTime: "7 min",
    category: "Bornes de Recharge",
    image: "/optimized/wattsun-hero-image.jpg",
    content: `
## Pourquoi Installer une Borne de Recharge à Domicile ?

Avec l'essor des véhicules électriques, la borne de recharge à domicile devient indispensable. Elle offre confort, économies et sécurité.

### Quelle Puissance Choisir ?

| Puissance | Temps de charge (batterie 50 kWh) | Usage recommandé |
|-----------|-----------------------------------|------------------|
| 3,7 kW | 14 heures | Usage occasionnel |
| 7,4 kW | 7 heures | Usage quotidien |
| 11 kW | 5 heures | Gros rouleurs |
| 22 kW | 2,5 heures | Usage intensif |

### Quel Prix pour une Installation ?

- **Borne 7,4 kW** : 1 200 - 1 800€ installée
- **Borne 11 kW** : 1 500 - 2 200€ installée
- **Borne 22 kW** : 2 000 - 3 000€ installée

### Les Aides Disponibles

- **Crédit d'impôt** : 300€ (75% du prix, plafonné)
- **Prime Advenir** : Jusqu'à 960€ pour les copropriétés
- **TVA réduite** : 5,5% pour les logements de plus de 2 ans

### Pourquoi Faire Appel à un Installateur IRVE ?

L'installation par un électricien certifié IRVE (comme Wattsun Énergie) est obligatoire pour les bornes > 3,7 kW et pour bénéficier des aides.
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
