import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MentionsLegales() {
  useEffect(() => {
    document.title = "Mentions Légales - Wattsun Énergie";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-800 to-gray-900 pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mentions Légales
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Informations légales relatives au site wattsun-energie.fr
            </p>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10">

              {/* Éditeur du site */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  1. Éditeur du site
                </h2>
                <div className="space-y-2 text-gray-700 leading-relaxed">
                  <p>Le site <strong>wattsun-energie.fr</strong> est édité par :</p>
                  <p><strong>Wattsun Énergie</strong></p>
                  <p>Forme juridique : SASU (Société par Actions Simplifiée Unipersonnelle)</p>
                  <p>Siège social : 21 bis Rue Ampère, 17139 Dompierre-sur-Mer</p>
                  <p>Téléphone : 07 86 73 10 33</p>
                  <p>Email : contact@wattsun-energie.fr</p>
                  <p>Directeur de la publication : Julien Parpaillon</p>
                </div>
              </div>

              {/* Hébergement */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  2. Hébergement
                </h2>
                <div className="space-y-2 text-gray-700 leading-relaxed">
                  <p>Le site est hébergé par :</p>
                  <p><strong>Netlify, Inc.</strong></p>
                  <p>Adresse : 2325 3rd Street, Suite 296, San Francisco, California 94107, États-Unis</p>
                  <p>Site web : <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-[#5e8a92] hover:underline">www.netlify.com</a></p>
                </div>
              </div>

              {/* Propriété intellectuelle */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  3. Propriété intellectuelle
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    L'ensemble du contenu du site wattsun-energie.fr (textes, images, graphismes, logo, icônes, vidéos, etc.) est la propriété exclusive de Wattsun Énergie ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de Wattsun Énergie.
                  </p>
                  <p>
                    Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
                  </p>
                </div>
              </div>

              {/* Protection des données personnelles */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  4. Protection des données personnelles
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                  </p>
                  <p>
                    Les informations recueillies via le formulaire de demande de devis sont destinées exclusivement à Wattsun Énergie pour le traitement de votre demande. Elles ne sont en aucun cas cédées à des tiers.
                  </p>
                  <p>
                    Les données collectées sont les suivantes : nom, prénom, adresse email, numéro de téléphone, adresse postale et informations relatives à votre projet énergétique. Ces données sont conservées pendant une durée maximale de 3 ans à compter de votre dernière interaction avec notre société.
                  </p>
                  <p>
                    Pour exercer vos droits, vous pouvez nous contacter par email à <a href="mailto:contact@wattsun-energie.fr" className="text-[#5e8a92] hover:underline">contact@wattsun-energie.fr</a> ou par courrier à l'adresse du siège social.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  5. Cookies
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    Le site wattsun-energie.fr utilise des cookies pour améliorer l'expérience de navigation et analyser le trafic via Google Analytics. Ces cookies permettent de mesurer l'audience du site de manière anonyme.
                  </p>
                  <p>
                    Vous pouvez à tout moment désactiver les cookies en configurant votre navigateur. Cependant, la désactivation des cookies peut limiter certaines fonctionnalités du site.
                  </p>
                </div>
              </div>

              {/* Limitation de responsabilité */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  6. Limitation de responsabilité
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    Wattsun Énergie s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, la société ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                  </p>
                  <p>
                    Les informations présentes sur le site, notamment les montants des aides financières et les tarifs, sont données à titre indicatif et sont susceptibles d'évoluer. Elles ne sauraient constituer un engagement contractuel de la part de Wattsun Énergie.
                  </p>
                </div>
              </div>

              {/* Liens hypertextes */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  7. Liens hypertextes
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    Le site wattsun-energie.fr peut contenir des liens hypertextes vers d'autres sites. Wattsun Énergie n'exerce aucun contrôle sur le contenu de ces sites tiers et décline toute responsabilité quant à leur contenu.
                  </p>
                </div>
              </div>

              {/* Droit applicable */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  8. Droit applicable
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux de La Rochelle seront seuls compétents.
                  </p>
                  <p className="text-sm text-gray-500 mt-6">
                    Dernière mise à jour : 19 février 2026
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
