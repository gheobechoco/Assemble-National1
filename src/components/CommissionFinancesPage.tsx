// src/components/CommissionFinancesPage.tsx
import React, { useState, useEffect } from 'react';

// Données pour les articles "À la une" avec des images de remplacement (réutilisées)
const featuredArticles = [
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Travaux+Legislatifs", // Image des Travaux Législatifs
    title: "Travaux : Plusieurs textes législatifs structurants dont celui...",
    link: "#"
  },
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Seance+Pleniere+1", // Image d'une Séance Plénière 1
    title: "Travaux : Jean François NDONGOU préside une séance plénière",
    link: "#"
  },
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Reforme+Constitutionnelle", // Image d'une Réforme Constitutionnelle
    title: "Réforme constitutionnelle : Les enjeux",
    link: "#"
  },
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Budget+2024", // Image du Budget 2024
    title: "Budget 2024 : Adoption des mesures",
    link: "#"
  }
];

// URLs des images des présidents (placeholders) (réutilisées)
const presidentImages: { [key: string]: string } = {
  "Jean-François NDONGOU": "https://placehold.co/150x150/e0e0e0/333333?text=J.F.+NDONGOU", // Image de Jean-François NDONGOU
  "placeholder_member": "https://placehold.co/150x150/e0e0e0/333333?text=Membre" // Image générique d'un membre
};

// Images spécifiques pour le bureau de la commission des finances (basées sur les captures d'écran)
const commissionFinancesBureauImages: { [key: string]: string } = {
  "Pacôme Rufin ONDZOUNGA": "https://placehold.co/150x150/e0e0e0/333333?text=P.R.+ONDZOUNGA", // Image de Pacôme Rufin ONDZOUNGA
  "MBOUMI NZINZI Jean-Claude": "https://placehold.co/150x150/e0e0e0/333333?text=J.C.+MBOUMI", // Image de MBOUMI NZINZI Jean-Claude
  "EYEGHE Ali": "https://placehold.co/150x150/e0e0e0/333333?text=A.+EYEGHE", // Image de EYEGHE Ali
  "MATSIENDI Roland": "https://placehold.co/150x150/e0e0e0/333333?text=R.+MATSIENDI", // Image de MATSIENDI Roland
  "OGOULIGUENDE Pepeçy": "https://placehold.co/150x150/e0e0e0/333333?text=P.+OGOULIGUENDE", // Image de OGOULIGUENDE Pepeçy
  "LEKOGO Justine Judith": "https://placehold.co/150x150/e0e0e0/333333?text=J.J.+LEKOGO", // Image de LEKOGO Justine Judith
};

// Données des membres du bureau de la commission des finances

// Liste complète des membres de la commission des finances (basée sur les captures d'écran et complétée)
const allCommissionFinancesMembers = [
  "ONDZOUNGA Pacôme Rufin", "NDONGOU Jean François", "MATSIENDI Roland", "BADJINA MOUDOUMA épse ELLA ASSEKO",
  "MBOUMI NZINZI Jean-Claude", "EYEGHE Ali", "OGOULIGUENDE Pepeçy", "LEKOGO Justine Judith",
  "AKENDENGUE Jean de Dieu", "AKOULOU M'BA Jean", "ALLOGHO AKOUE Daniel", "AMBOUROUE Jean Pierre",
  "ASSALY NZE Jean-Marie", "AYENOU Jean-Pierre", "BILIE-BY-NZE Jean-Marie", "BOULINGUI Jean-Pierre",
  "BOUROBOU Jean-Pierre", "BOUSSOUGOU Jean-Pierre", "DOUMBENENY Jean Lucien", "EBANETH Nahalie ep SIMA-EYI",
  "EKOUA SIMA Jean Paulin", "ELLA ENGONGA Leonel", "EYEGHE Ali", "FOUMBOULA LIBEKA M. GEOFFROY",
  "GEY Charles-Henri", "GONDJOUT INDJENDJET Melvin Vincent", "IDODO Jean Lambert", "IMMONGUALT TATANGANI Eudes Régis",
  "ISSEMBE Serge Aimé", "KOUMBA Brigitte", "LEYAMA Jean Valentin", "LIBAMA Marcel",
  "LISSENGUET GOUMBOU Irène", "MABIALA Serge Maurice", "MAGANGA MOUSSAVOU née MALANDOU BOUKA Albertine", "MALLY HODJOUA Gabriel",
  "MANDJOU NGAYOUO Paulin", "MBADINGA MBADINGA Josué", "MBAGOU Jean-Bosco", "MBAGOU Jeanne",
  "MENIE M'YEYI Antoine", "MENGUE EKOMIE Roger", "MOUELE ROMAIN ROMAIN", "MOURI BOUSSOUGOU Dieudonné",
  "MOUSSAVOU Florentin", "NDIMAL BARRY Marcellin", "NDJIMBI Franck", "NDONG OBIANG François",
  "NGABIKOUMOU WADA Mesmin Boris", "NGOUENENI NDZENGOUIMA Joël", "NGUEMA NGUEMA Sosthène", "NGUIENO Dominique Guy-Noël",
  "NTOUTOUME Béatrice", "NTOUTOUME MEBIAME Aurélien", "NZONDO ELOI", "NZUE EDZANG Frédéric",
  "OBAME EYEGUE Jean-Marie", "OGOULIGUENDE née MAVIKANA Pepeçy", "ONA NGUEMA Freddy Fernandez", "ONDJAMBI ONGUIA Gérard",
  "OSSINGA ONANGA Alban Stéphane", "OTANDO Charles", "OVONO MBOUENGOU Jean Placilde", "OWONO NDONG Edgard",
  "POLO ép PANDZOU ODETTE", "ROYEMBO Albert Richard", "SOUGOU LATSIERE Alix", "TRISSAUGUI OGOUILATH Pendi Georges",
  "WAURA Fidèle", "YEMBIT MANGALA Jean de Dieu"
];

// (navigateTo prop removed because it is unused)

interface CommissionFinancesPageProps {
  navigateTo: (page: string, data?: any) => void;
}

const CommissionFinancesPage: React.FC<CommissionFinancesPageProps> = () => {
  // État pour gérer l'index de l'article "À la une" actuellement affiché
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  // Effet pour le défilement automatique des articles "À la une"
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArticleIndex((prevIndex) =>
        (prevIndex + 1) % featuredArticles.length
      );
    }, 4000); // Change toutes les 4 secondes

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        {/* Zone de contenu principale */}
        <div className="w-full md:w-9/12 px-4">

          {/* Fil d'Ariane */}
          <div className="mb-6">
            <ul className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <a href="/" className="flex items-center hover:text-blue-600 transition-colors">
                
                  <span className="hidden sm:inline">Accueil</span>
                </a>
              </li>
              <li>&gt;</li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors" onClick={(e) => e.preventDefault()}>
                  Organes
                </a>
              </li>
              <li>&gt;</li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors" onClick={(e) => e.preventDefault()}>
                  Les Commissions Générales Permanentes
                </a>
              </li>
              <li>&gt;</li>
              <li className="text-blue-800 font-semibold">
                Commission des Finances, du Budget de la Comptabilité Publique, des Affaires Économiques et de la Production
              </li>
            </ul>
          </div>

          {/* Titre de la page */}
          <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">
            Le Bureau de la Commission des Finances, du Budget et de la Comptabilité Publique
          </h2>

          {/* Bureau de la Commission */}
          <div className="flex flex-col items-center justify-center space-y-8 mb-12">
            {/* Président */}
            <div className="text-center">
              <img
                src={commissionFinancesBureauImages["Pacôme Rufin ONDZOUNGA"]}
                alt="Pacôme Rufin ONDZOUNGA"
                className="rounded-full mx-auto mb-2 w-32 h-32 object-cover border-2 border-blue-500 shadow-lg"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=President"; }}
              />
              <p className="text-gray-800 font-semibold text-lg">Pacôme Rufin ONDZOUNGA</p>
              <p className="text-gray-600 text-sm">Président</p>
            </div>

            {/* Vice-Présidents */}
            <div className="flex flex-wrap justify-center gap-8 w-full">
              <div className="text-center w-48">
                <img
                  src={commissionFinancesBureauImages["MBOUMI NZINZI Jean-Claude"]}
                  alt="MBOUMI NZINZI Jean-Claude"
                  className="rounded-full mx-auto mb-2 w-28 h-28 object-cover border-2 border-blue-500 shadow-lg"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=1er+VP"; }}
                />
                <p className="text-gray-800 font-semibold text-base">MBOUMI NZINZI Jean-Claude</p>
                <p className="text-gray-600 text-xs">1er Vice-Président</p>
              </div>
              <div className="text-center w-48">
                <img
                  src={commissionFinancesBureauImages["EYEGHE Ali"]}
                  alt="EYEGHE Ali"
                  className="rounded-full mx-auto mb-2 w-28 h-28 object-cover border-2 border-blue-500 shadow-lg"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=2eme+VP"; }}
                />
                <p className="text-gray-800 font-semibold text-base">EYEGHE Ali</p>
                <p className="text-gray-600 text-xs">2ème Vice-Président</p>
              </div>
            </div>

            {/* Rapporteurs */}
            <div className="flex flex-wrap justify-center gap-8 w-full">
              <div className="text-center w-48">
                <img
                  src={commissionFinancesBureauImages["MATSIENDI Roland"]}
                  alt="MATSIENDI Roland"
                  className="rounded-full mx-auto mb-2 w-28 h-28 object-cover border-2 border-blue-500 shadow-lg"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=1er+Rapporteur"; }}
                />
                <p className="text-gray-800 font-semibold text-base">MATSIENDI Roland</p>
                <p className="text-gray-600 text-xs">1er Rapporteur</p>
              </div>
              <div className="text-center w-48">
                <img
                  src={commissionFinancesBureauImages["OGOULIGUENDE Pepeçy"]}
                  alt="OGOULIGUENDE Pepeçy"
                  className="rounded-full mx-auto mb-2 w-28 h-28 object-cover border-2 border-blue-500 shadow-lg"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=2eme+Rapporteur"; }}
                />
                <p className="text-gray-800 font-semibold text-base">OGOULIGUENDE Pepeçy</p>
                <p className="text-gray-600 text-xs">2ème Rapporteur</p>
              </div>
              <div className="text-center w-48">
                <img
                  src={commissionFinancesBureauImages["LEKOGO Justine Judith"]}
                  alt="LEKOGO Justine Judith"
                  className="rounded-full mx-auto mb-2 w-28 h-28 object-cover border-2 border-blue-500 shadow-lg"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=3eme+Rapporteur"; }}
                />
                <p className="text-gray-800 font-semibold text-base">LEKOGO Justine Judith</p>
                <p className="text-gray-600 text-xs">3ème Rapporteur</p>
              </div>
            </div>
            <p className="text-red-600 text-sm font-semibold mt-4">NB: Tous les députés de l'Assemblée Nationale sont membres de cette commission</p>
          </div>

          {/* Liste des membres de la commission */}
          <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">
            Les membres de la Commission des Finances, du Budget de la Comptabilité Publique, des Affaires Économiques et de la Production
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-2 gap-x-4 text-gray-700">
            {allCommissionFinancesMembers.map((member, index) => (
              <p key={index} className="text-sm">{member}</p>
            ))}
          </div>
        </div>

        {/* Barre latérale (colonne de droite) */}
        <div className="w-full md:w-3/12 px-4 mt-8 md:mt-0">
          {/* Section Président */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Jean-François NDONGOU</h3>
            <div className="text-center mb-4">
              <img
                src={presidentImages["Jean-François NDONGOU"]}
                alt="Jean-François NDONGOU"
                className="rounded-full mx-auto mb-2 w-28 h-28 object-cover border-2 border-blue-500 shadow-lg"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=President"; }} // Fallback
              />
              <p className="text-gray-600 text-sm font-semibold">Président de l'Assemblée Nationale de la Transition</p>
            </div>
          </div>

          {/* Section "À la une" avec défilement automatique */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 overflow-hidden relative h-64">
            <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">À la une</h3>
            <div className="relative w-full h-48"> {/* Hauteur fixe pour le contenu du carousel */}
              {featuredArticles.map((article, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out
                              ${index === currentArticleIndex ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`}
                >
                  <a href={article.link} className="block text-center w-full">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-32 object-cover rounded-md mb-2 shadow-sm"
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/270x186/e0e0e0/333333?text=Article"; }} // Fallback
                    />
                    <p className="text-sm font-semibold text-blue-600 hover:underline px-2">{article.title}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Section Editorial */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Editorial</h3>
            <ul className="space-y-2 text-blue-600">
              <li><a href="#" className="hover:underline">Edito</a></li>
            </ul>
          </div>

          {/* Section Publications */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Publications</h3>
            <ul className="space-y-2 text-blue-600">
              <li><a href="#" className="hover:underline">Audition du Ministre de la Santé et de la Prévoyance Sociale</a></li>
              <li><a href="#" className="hover:underline">Répertoire des Lois votées en 2013</a></li>
              <li><a href="#" className="hover:underline">Bilan des travaux législatifs</a></li>
              <li><a href="#" className="hover:underline">Le Travail collaboratif dans les assemblées parlementaires</a></li>
              <li><a href="#" className="hover:underline">Lois de finances 2011</a></li>
              <li><a href="#" className="hover:underline">Toutes les publications</a></li>
            </ul>
          </div>

          {/* Section Textes de référence */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Textes de référence</h3>
            <ul className="space-y-2 text-blue-600">
              <li><a href="#" className="hover:underline">Règlement du parlement</a></li>
              <li><a href="#" className="hover:underline">La Constitution</a></li>
              <li><a href="#" className="hover:underline">Tous les textes</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommissionFinancesPage;
