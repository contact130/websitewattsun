import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MentionsLegales() {
  useEffect(() => {
    document.title = "Mentions Légales - Wattsun Énergie | Informations juridiques";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Mentions légales du site wattsun-energie.fr. Informations sur l'éditeur, l'hébergeur, la protection des données personnelles (RGPD), les cookies et la propriété intellectuelle.");
    }
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
              Informations légales et réglementaires relatives au site wattsun-energie.fr, conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).
            </p>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10">

              {/* 1. Éditeur du site */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  1. Éditeur du site
                </h2>
                <div className="space-y-2 text-gray-700 leading-relaxed">
                  <p>
                    Le site internet accessible à l'adresse <strong>wattsun-energie.fr</strong> (ci-après « le Site ») est édité par la société :
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mt-3">
                    <p className="font-semibold text-lg text-gray-900 mb-3">WATTSUN ÉNERGIE</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                      <p><span className="text-gray-500">Forme juridique :</span> SAS (Société par Actions Simplifiée)</p>
                      <p><span className="text-gray-500">Capital social :</span> 5 000,00 €</p>
                      <p><span className="text-gray-500">SIREN :</span> 922 433 289</p>
                      <p><span className="text-gray-500">SIRET (siège) :</span> 922 433 289 00027</p>
                      <p><span className="text-gray-500">RCS :</span> 922 433 289 R.C.S. La Rochelle</p>
                      <p><span className="text-gray-500">Code APE/NAF :</span> 43.21A — Travaux d'installation électrique</p>
                      <p><span className="text-gray-500">N° TVA intracommunautaire :</span> FR71922433289</p>
                      <p><span className="text-gray-500">Date d'immatriculation :</span> 26 décembre 2022</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-200 space-y-2 text-sm">
                      <p><span className="text-gray-500">Siège social :</span> 21 bis Rue Ampère, 17139 Dompierre-sur-Mer, France</p>
                      <p><span className="text-gray-500">Téléphone :</span> <a href="tel:+33786731033" className="text-[#5e8a92] hover:underline">07 86 73 10 33</a></p>
                      <p><span className="text-gray-500">Email :</span> <a href="mailto:contact@wattsun-energie.fr" className="text-[#5e8a92] hover:underline">contact@wattsun-energie.fr</a></p>
                      <p><span className="text-gray-500">Directeur de la publication :</span> Julien Bénard, en qualité de représentant légal</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Qualifications et certifications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  2. Qualifications et certifications professionnelles
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    Wattsun Énergie est une entreprise artisanale réglementée, inscrite au Répertoire National des Entreprises (RNE) depuis le 26 décembre 2022. L'entreprise est titulaire des qualifications et certifications suivantes :
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#fcad0d] font-bold mt-0.5">✓</span>
                        <span><strong>RGE QualiPV</strong> — Installation de panneaux photovoltaïques (Qualit'EnR)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#fcad0d] font-bold mt-0.5">✓</span>
                        <span><strong>RGE QualiPAC</strong> — Installation de pompes à chaleur (Qualit'EnR)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#fcad0d] font-bold mt-0.5">✓</span>
                        <span><strong>RGE QUALIBAT</strong> — Qualification bâtiment pour l'isolation, la menuiserie et la couverture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#fcad0d] font-bold mt-0.5">✓</span>
                        <span><strong>IRVE</strong> — Installateur qualifié de bornes de recharge pour véhicules électriques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#fcad0d] font-bold mt-0.5">✓</span>
                        <span><strong>Recharge Elec+</strong> — Qualification complémentaire bornes de recharge (Qualit'EnR)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#fcad0d] font-bold mt-0.5">✓</span>
                        <span><strong>Ventilation+</strong> — Qualification ventilation mécanique contrôlée (Qualit'EnR)</span>
                      </li>
                    </ul>
                  </div>
                  <p>
                    Ces qualifications RGE (Reconnu Garant de l'Environnement) permettent à nos clients de bénéficier des aides financières de l'État (MaPrimeRénov', Certificats d'Économies d'Énergie, Éco-PTZ, TVA réduite à 5,5 %).
                  </p>
                </div>
              </div>

              {/* 3. Assurances professionnelles */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  3. Assurances professionnelles
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    Conformément à la réglementation en vigueur, Wattsun Énergie est couverte par une assurance de responsabilité civile professionnelle et une garantie décennale pour l'ensemble de ses activités de travaux. Les attestations d'assurance sont disponibles sur simple demande auprès de notre service client.
                  </p>
                  <p>
                    La garantie décennale couvre les dommages qui compromettent la solidité de l'ouvrage ou le rendent impropre à sa destination, conformément aux articles 1792 et suivants du Code civil.
                  </p>
                </div>
              </div>

              {/* 4. Hébergement */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  4. Hébergement
                </h2>
                <div className="space-y-2 text-gray-700 leading-relaxed">
                  <p>Le Site est hébergé par :</p>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="font-semibold text-gray-900 mb-2">Netlify, Inc.</p>
                    <div className="space-y-1 text-sm">
                      <p><span className="text-gray-500">Adresse :</span> 2325 3rd Street, Suite 296, San Francisco, California 94107, États-Unis</p>
                      <p><span className="text-gray-500">Site web :</span> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-[#5e8a92] hover:underline">www.netlify.com</a></p>
                      <p><span className="text-gray-500">Contact :</span> <a href="mailto:support@netlify.com" className="text-[#5e8a92] hover:underline">support@netlify.com</a></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Propriété intellectuelle */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  5. Propriété intellectuelle
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    L'ensemble du contenu du Site wattsun-energie.fr, incluant de façon non limitative les textes, images, photographies, graphismes, logos, icônes, vidéos, sons, logiciels, bases de données et mise en page, est la propriété exclusive de Wattsun Énergie ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                  </p>
                  <p>
                    La marque « Wattsun Énergie », le logo associé et l'ensemble des marques figuratives ou non figuratives présentes sur le Site sont des marques déposées. Toute reproduction totale ou partielle de ces marques sans autorisation expresse est prohibée, au sens de l'article L.713-2 du Code de la propriété intellectuelle.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de Wattsun Énergie. Toute exploitation non autorisée sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
                  </p>
                </div>
              </div>

              {/* 6. Protection des données personnelles (RGPD) */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  6. Protection des données personnelles (RGPD)
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">6.1. Responsable du traitement</h3>
                  <p>
                    Le responsable du traitement des données personnelles collectées sur le Site est la société Wattsun Énergie, représentée par son directeur de la publication, Julien Bénard, joignable à l'adresse <a href="mailto:contact@wattsun-energie.fr" className="text-[#5e8a92] hover:underline">contact@wattsun-energie.fr</a>.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-800 mt-4">6.2. Données collectées et finalités</h3>
                  <p>
                    Les données personnelles collectées via les formulaires du Site (demande de devis, formulaire de contact) sont les suivantes : nom, prénom, adresse email, numéro de téléphone, adresse postale, code postal, ville, et informations relatives à votre projet énergétique (type de logement, surface, travaux souhaités).
                  </p>
                  <p>
                    Ces données sont collectées pour les finalités suivantes :
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Traitement de votre demande de devis ou de contact</li>
                    <li>Réalisation d'études techniques préalables aux travaux</li>
                    <li>Suivi de la relation commerciale et du service après-vente</li>
                    <li>Envoi d'informations relatives à nos services, sous réserve de votre consentement</li>
                    <li>Respect de nos obligations légales et réglementaires</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mt-4">6.3. Base juridique du traitement</h3>
                  <p>
                    Le traitement de vos données repose sur votre consentement (article 6.1.a du RGPD) lorsque vous remplissez un formulaire, sur l'exécution d'un contrat ou de mesures précontractuelles (article 6.1.b) dans le cadre d'une demande de devis, et sur notre intérêt légitime (article 6.1.f) pour l'amélioration de nos services.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-800 mt-4">6.4. Destinataires des données</h3>
                  <p>
                    Les données collectées sont destinées exclusivement aux équipes internes de Wattsun Énergie. Elles ne sont en aucun cas cédées, vendues ou louées à des tiers. Toutefois, elles peuvent être transmises à nos sous-traitants techniques (hébergement, outils CRM) dans le strict cadre de l'exécution de leurs prestations, et sous réserve de garanties de confidentialité appropriées.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-800 mt-4">6.5. Durée de conservation</h3>
                  <p>
                    Les données personnelles sont conservées pendant une durée maximale de 3 ans à compter de votre dernière interaction avec notre société. Au-delà de cette période, les données sont supprimées ou anonymisées. Les données nécessaires au respect d'obligations légales (facturation, garanties) sont conservées pendant la durée requise par la loi.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-800 mt-4">6.6. Vos droits</h3>
                  <p>
                    Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez des droits suivants sur vos données personnelles :
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li><strong>Droit d'accès</strong> (article 15 du RGPD) : obtenir la confirmation que vos données sont traitées et en recevoir une copie</li>
                    <li><strong>Droit de rectification</strong> (article 16) : faire corriger des données inexactes ou incomplètes</li>
                    <li><strong>Droit à l'effacement</strong> (article 17) : demander la suppression de vos données</li>
                    <li><strong>Droit à la limitation du traitement</strong> (article 18) : demander la suspension du traitement</li>
                    <li><strong>Droit à la portabilité</strong> (article 20) : recevoir vos données dans un format structuré et lisible</li>
                    <li><strong>Droit d'opposition</strong> (article 21) : vous opposer au traitement de vos données</li>
                  </ul>
                  <p>
                    Pour exercer ces droits, vous pouvez nous contacter par email à <a href="mailto:contact@wattsun-energie.fr" className="text-[#5e8a92] hover:underline">contact@wattsun-energie.fr</a> ou par courrier à l'adresse du siège social. Nous nous engageons à répondre dans un délai d'un mois. En cas de désaccord, vous pouvez introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#5e8a92] hover:underline">www.cnil.fr</a>).
                  </p>
                </div>
              </div>

              {/* 7. Cookies et traceurs */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  7. Cookies et traceurs
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <h3 className="text-lg font-semibold text-gray-800 mt-2">7.1. Qu'est-ce qu'un cookie ?</h3>
                  <p>
                    Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site internet. Il permet au site de mémoriser des informations relatives à votre navigation (pages consultées, date et heure de la visite, etc.).
                  </p>

                  <h3 className="text-lg font-semibold text-gray-800 mt-4">7.2. Cookies utilisés sur le Site</h3>
                  <p>Le Site wattsun-energie.fr utilise les catégories de cookies suivantes :</p>
                  <div className="bg-gray-50 rounded-xl p-6 mt-2">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap mt-0.5">Essentiels</span>
                        <span>Cookies nécessaires au fonctionnement du Site (navigation, sécurité, préférences d'affichage). Ces cookies ne requièrent pas votre consentement.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap mt-0.5">Analytiques</span>
                        <span>Cookies Google Analytics permettant de mesurer l'audience du Site de manière anonyme (nombre de visiteurs, pages consultées, durée des visites). Ces données nous aident à améliorer le Site.</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mt-4">7.3. Gestion des cookies</h3>
                  <p>
                    Vous pouvez à tout moment gérer vos préférences en matière de cookies en configurant votre navigateur internet. La plupart des navigateurs acceptent les cookies par défaut, mais vous pouvez modifier ces paramètres pour bloquer ou supprimer les cookies. La désactivation de certains cookies peut toutefois limiter l'accès à certaines fonctionnalités du Site.
                  </p>
                </div>
              </div>

              {/* 8. Limitation de responsabilité */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  8. Limitation de responsabilité
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    Wattsun Énergie s'efforce de fournir sur le Site des informations aussi précises et actualisées que possible. Toutefois, la société ne saurait garantir l'exactitude, la complétude et l'actualité des informations diffusées. En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
                  </p>
                  <p>
                    Les informations présentes sur le Site, notamment les montants des aides financières (MaPrimeRénov', CEE, Éco-PTZ), les tarifs indicatifs et les performances techniques des équipements, sont données à titre informatif et sont susceptibles d'évoluer. Elles ne sauraient constituer un engagement contractuel de la part de Wattsun Énergie. Seul le devis signé par les deux parties fait foi.
                  </p>
                  <p>
                    Wattsun Énergie ne pourra être tenue responsable des dommages directs ou indirects résultant de l'accès au Site, de l'impossibilité d'y accéder, de l'utilisation du Site ou du crédit accordé à une information provenant directement ou indirectement du Site.
                  </p>
                </div>
              </div>

              {/* 9. Liens hypertextes */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  9. Liens hypertextes
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    Le Site wattsun-energie.fr peut contenir des liens hypertextes renvoyant vers des sites internet tiers (organismes publics, partenaires, fournisseurs). Ces liens sont fournis à titre informatif. Wattsun Énergie n'exerce aucun contrôle sur le contenu de ces sites tiers et décline toute responsabilité quant à leur contenu, leurs pratiques en matière de protection des données ou leur disponibilité.
                  </p>
                  <p>
                    La mise en place de liens hypertextes vers le Site wattsun-energie.fr est autorisée sans accord préalable, sous réserve de ne pas utiliser la technique du « framing » ou toute autre technique susceptible de porter atteinte à l'image de Wattsun Énergie.
                  </p>
                </div>
              </div>

              {/* 10. Médiation et règlement des litiges */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  10. Médiation et règlement des litiges
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, Wattsun Énergie propose un dispositif de médiation de la consommation. En cas de litige non résolu à l'amiable, le consommateur peut recourir gratuitement au service de médiation. Le médiateur tentera, en toute indépendance et impartialité, de rapprocher les parties en vue d'aboutir à une solution amiable.
                  </p>
                  <p>
                    Le consommateur peut également recourir à la plateforme européenne de règlement en ligne des litiges (RLL) accessible à l'adresse : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#5e8a92] hover:underline">https://ec.europa.eu/consumers/odr</a>.
                  </p>
                </div>
              </div>

              {/* 11. Droit applicable et juridiction compétente */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  11. Droit applicable et juridiction compétente
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    Les présentes mentions légales sont régies par le droit français. En cas de litige relatif à l'interprétation ou à l'exécution des présentes, et à défaut de résolution amiable, les tribunaux compétents du ressort de La Rochelle seront seuls compétents.
                  </p>
                </div>
              </div>

              {/* 12. Crédits */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fcad0d]">
                  12. Crédits
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Conception et développement du site :</strong> Wattsun Énergie
                  </p>
                  <p>
                    <strong>Photographies et illustrations :</strong> Wattsun Énergie et banques d'images sous licence. Les logos des certifications RGE (QualiPV, QualiPAC, QUALIBAT, IRVE, Recharge Elec+, Ventilation+) sont la propriété de leurs organismes respectifs (Qualit'EnR, QUALIBAT).
                  </p>
                  <p>
                    <strong>Cartographie :</strong> Les cartes interactives utilisent les données © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="text-[#5e8a92] hover:underline">OpenStreetMap</a> contributors, affichées via la bibliothèque <a href="https://leafletjs.com" target="_blank" rel="noopener noreferrer" className="text-[#5e8a92] hover:underline">Leaflet</a>.
                  </p>
                </div>
              </div>

              {/* Date de mise à jour */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  Dernière mise à jour des mentions légales : 28 février 2026
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
