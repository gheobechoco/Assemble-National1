// src/components/CommissionSantePage.tsx
import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react'; // Importation de l'icône Home

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

// Images spécifiques pour le bureau de la commission de la santé (basées sur les captures d'écran)
const commissionSanteBureauImages: { [key: string]: string } = {
  "Angelique NGOMA": "https://placehold.co/150x150/e0e0e0/333333?text=A.+NGOMA", // Image de Angelique NGOMA
  "AKURE DAVAIN Séraphin": "https://placehold.co/150x150/e0e0e0/333333?text=S.+AKURE", // Image de AKURE DAVAIN Séraphin
  "OWONO MBOUENGOU Jean-Placide": "https://placehold.co/150x150/e0e0e0/333333?text=J.P.+OWONO", // Image de OWONO MBOUENGOU Jean-Placide
  "MOUITY MOUNDOUNGA Patrice": "https://placehold.co/150x150/e0e0e0/333333?text=P.+MOUITY", // Image de MOUITY MOUNDOUNGA Patrice
  "DOUFOUNDOU Emerencienne": "https://placehold.co/150x150/e0e0e0/333333?text=E.+DOUFOUNDOU", // Image de DOUFOUNDOU Emerencienne
  "NGOUNDJI Staelle Lidwine": "https://placehold.co/150x150/e0e0e0/333333?text=S.L.+NGOUNDJI", // Image de NGOUNDJI Staelle Lidwine
};

// Données des membres du bureau de la commission de la santé
const commissionSanteBureauMembers = [
  { name: "Angelique NGOMA", role: "Présidente", imageKey: "Angelique NGOMA" },
  { name: "AKURE DAVAIN Séraphin", role: "1er Vice-Président", imageKey: "AKURE DAVAIN Séraphin" },
  { name: "OWONO MBOUENGOU Jean-Placide", role: "2ème Vice-Président", imageKey: "OWONO MBOUENGOU Jean-Placide" },
  { name: "MOUITY MOUNDOUNGA Patrice", role: "1er Rapporteur", imageKey: "MOUITY MOUNDOUNGA Patrice" },
  { name: "DOUFOUNDOU Emerencienne", role: "2ème Rapporteur", imageKey: "DOUFOUNDOU Emerencienne" },
  { name: "NGOUNDJI Staelle Lidwine", role: "3ème Rapporteur", imageKey: "NGOUNDJI Staelle Lidwine" },
];

// Liste complète des membres de la commission de la santé (basée sur les captures d'écran et complétée)
const allCommissionSanteMembers = [
  "NGOMA Angélique", "AKURE DAVAIN Séraphin", "OWONO MBOUENGOU Jean-Placide", "MOUITY MOUNDOUNGA Patrice",
  "DOUFOUNDOU Emerencienne", "NGOUNDJI Staelle Lidwine", "ABIERY WILLY BERTRAND", "ABOUGHE OTSAGHE Charlotte",
  "ADIABENOT-MEPOREWA Flavienne Patricia Hélène", "AKOMEZOCHO FRANCOIS AUGUSTE", "BANDEGA LENDOYE Raphaël", "BECKOPA EPSE Roy Valentin Virginie",
  "BEKA B'OBAME Jean Marie", "BOUANGA MOMBO ep. MAKITA Nicole", "BOUKANDOU Elza Richtuelle", "BOUYOU Tatiana Mireille",
  "DIOUMY MOUBASSANGO Donatien Lhye", "DOUMBENENY Jean Lucien", "EBANETH EP. SIMA EYI NATHALIE", "EKOUA SIMA Jean Paulin",
  "ELLA ENGONGA Leonel", "ELLA NGUEMA Gerard", "EYEGHE Ali", "FOUMBOULA LIBEKA M. GEOFFROY",
  "GEY Charles-Henri", "GONDJOUT INDJENDJET Melvin Vincent", "IDODO Jean Lambert", "IMMONGUALT TATANGANI Eudes Régis",
  "ISSEMBE Serge Aimé", "KOUMBA Brigitte", "LEYAMA Jean Valentin", "LIBAMA Marcel",
  "LISSENGUET GOUMBOU Irène", "MABIALA Serge Maurice", "MAGANGA MOUSSAVOU née MALANDOU BOUKA Albertine", "MALLY HODJOUA Gabriel",
  "MANDJOU NGAYOUO Paulin", "MBADINGA MBADINGA Josué", "MBAGOU Jean-Bosco", "MBAGOU Jeanne",
  "MENIE M'YEYI Antoine", "MENGUE EKOMIE Roger", "MOUELE ROMAIN ROMAIN", "MOURI BOUSSOUGOU Dieudonné",
  "MOUSSAVOU Florentin", "NDIMAL BARRY Marcellin", "NDJIMBI Franck", "NDONG OBIANG François",
  "NGABIKOUMOU WADA Mesmin Boris", "NGOUENENI NDZENGOUIMA Joël", "NGUEMA NGUEMA Sosthène", "NGUIENO Dominique Guy-Noël",
  "NTOUTOUME Béatrice", "NTOUTOUME MEBIAME Aurélien", "NZONDO ELOI", "NZUE EDZANG Frédéric",
  "OBAME EYEGUE Jean-Marie", "OGOULIGUENDE née MAVIKANA Pepeçy", "ONA NGUEMA Freddy Fernandez", "ONDJAMBI ONGUIA Gérard",
  "OSSINGA ONANGA Alban Stéphane", "OTANDO Charles", "POLO ép PANDZOU ODETTE", "ROYEMBO Albert Richard",
  "SOUGOU LATSIERE Alix", "TRISSAUGUI OGOUILATH Pendi Georges", "WAURA Fidèle", "YEMBIT MANGALA Jean de Dieu"
];


const CommissionSantePage: React.FC = () => {
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
                  <Home className="w-4 h-4 mr-1" />
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
                Commission de la Santé, de l'Éducation, des Affaires Sociales et Culturelles
              </li>
            </ul>
          </div>

          {/* Titre de la page */}
          <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">
            Le Bureau de la Commission de la Santé, de l'Éducation, des Affaires Sociales et Culturelles
          </h2>

          {/* Bureau de la Commission */}
          <div className="flex flex-col items-center justify-center space-y-8 mb-12">
            {/* Présidente */}
            <div className="text-center">
              <img
                src={commissionSanteBureauImages["Angelique NGOMA"]}
                alt="Angelique NGOMA"
                className="rounded-full mx-auto mb-2 w-32 h-32 object-cover border-2 border-blue-500 shadow-lg"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=Presidente"; }}
              />
              <p className="text-gray-800 font-semibold text-lg">Angelique NGOMA</p>
              <p className="text-gray-600 text-sm">Présidente</p>
            </div>

            {/* Vice-Présidents */}
            <div className="flex flex-wrap justify-center gap-8 w-full">
              <div className="text-center w-48">
                <img
                  src={commissionSanteBureauImages["AKURE DAVAIN Séraphin"]}
                  alt="AKURE DAVAIN Séraphin"
                  className="rounded-full mx-auto mb-2 w-28 h-28 object-cover border-2 border-blue-500 shadow-lg"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=1er+VP"; }}
                />
                <p className="text-gray-800 font-semibold text-base">AKURE DAVAIN Séraphin</p>
                <p className="text-gray-600 text-xs">1er Vice-Président</p>
              </div>
              <div className="text-center w-48">
                <img
                  src={commissionSanteBureauImages["OWONO MBOUENGOU Jean-Placide"]}
                  alt="OWONO MBOUENGOU Jean-Placide"
                  className="rounded-full mx-auto mb-2 w-28 h-28 object-cover border-2 border-blue-500 shadow-lg"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=2eme+VP"; }}
                />
                <p className="text-gray-800 font-semibold text-base">OWONO MBOUENGOU Jean-Placide</p>
                <p className="text-gray-600 text-xs">2ème Vice-Président</p>
              </div>
            </div>

            {/* Rapporteurs */}
            <div className="flex flex-wrap justify-center gap-8 w-full">
              <div className="text-center w-48">
                <img
                  src={commissionSanteBureauImages["MOUITY MOUNDOUNGA Patrice"]}
                  alt="MOUITY MOUNDOUNGA Patrice"
                  className="rounded-full mx-auto mb-2 w-28 h-28 object-cover border-2 border-blue-500 shadow-lg"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=1er+Rapporteur"; }}
                />
                <p className="text-gray-800 font-semibold text-base">MOUITY MOUNDOUNGA Patrice</p>
                <p className="text-gray-600 text-xs">1er Rapporteur</p>
              </div>
              <div className="text-center w-48">
                <img
                  src={commissionSanteBureauImages["DOUFOUNDOU Emerencienne"]}
                  alt="DOUFOUNDOU Emerencienne"
                  className="rounded-full mx-auto mb-2 w-28 h-28 object-cover border-2 border-blue-500 shadow-lg"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=2eme+Rapporteur"; }}
                />
                <p className="text-gray-800 font-semibold text-base">DOUFOUNDOU Emerencienne</p>
                <p className="text-gray-600 text-xs">2ème Rapporteur</p>
              </div>
              <div className="text-center w-48">
                <img
                  src={commissionSanteBureauImages["NGOUNDJI Staelle Lidwine"]}
                  alt="NGOUNDJI Staelle Lidwine"
                  className="rounded-full mx-auto mb-2 w-28 h-28 object-cover border-2 border-blue-500 shadow-lg"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=3eme+Rapporteur"; }}
                />
                <p className="text-gray-800 font-semibold text-base">NGOUNDJI Staelle Lidwine</p>
                <p className="text-gray-600 text-xs">3ème Rapporteur</p>
              </div>
            </div>
            <p className="text-red-600 text-sm font-semibold mt-4">NB: Tous les députés de l'Assemblée Nationale sont membres de cette commission</p>
          </div>

          {/* Liste des membres de la commission */}
          <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">
            Les membres de la Commission de la Santé, de l'Éducation, des Affaires Sociales et Culturelles
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-2 gap-x-4 text-gray-700">
            {allCommissionSanteMembers.map((member, index) => (
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

export default CommissionSantePage;
