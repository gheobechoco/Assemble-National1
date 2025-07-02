// src/components/BureauPage.tsx
import React, { useState, useEffect } from 'react';

// Données pour les articles "À la une" avec des images de remplacement
const featuredArticles = [
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Travaux+Legislatifs", // Image of Legislative Works
    title: "Travaux : Plusieurs textes législatifs structurants dont celui...",
    link: "#"
  },
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Seance+Pleniere+1", // Image of Plenary Session 1
    title: "Travaux : Jean François NDONGOU préside une séance plénière",
    link: "#"
  },
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Seance+Pleniere+2", // Image of Plenary Session 2
    title: "Travaux : Le président de l'Assemblée Nationale de transition",
    link: "#"
  },
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Reforme+Constitutionnelle", // Image of Constitutional Reform
    title: "Réforme constitutionnelle : Les enjeux",
    link: "#"
  },
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Budget+2024", // Image of 2024 Budget
    title: "Budget 2024 : Adoption des mesures",
    link: "#"
  }
];

// URLs des images des présidents (placeholders)
const presidentImages: { [key: string]: string } = {
  "Jean-François NDONGOU": "https://placehold.co/150x150/e0e0e0/333333?text=J.F.+NDONGOU", // Image of Jean-François NDONGOU
  "Faustin BOUKOUBI": "https://placehold.co/150x150/e0e0e0/333333?text=F.+BOUKOUBI", // Image of Faustin Boukoubi
  "Idriss NGARI": "https://placehold.co/150x150/e0e0e0/333333?text=Idriss+NGARI", // Image of Idriss Ngari
  "Albert Richard ROYEMBO": "https://placehold.co/150x150/e0e0e0/333333?text=A.R.+ROYEMBO", // Image of Albert Richard Royembo
  "Lucienne OGOUWALANGA AWORE": "https://placehold.co/150x150/e0e0e0/333333?text=L.O.+AWORE", // Image of Lucienne Ogouwalanga Awore
  "Jonathan IGNOUMBA": "https://placehold.co/150x150/e0e0e0/333333?text=J.+IGNOUMBA", // Image of Jonathan Ignoumba
  "Jean Pierre OUIBA": "https://placehold.co/150x150/e0e0e0/333333?text=J.P.+OUIBA", // Image of Jean Pierre Ouiba
  "Raphaël NGAZOUZE": "https://placehold.co/150x150/e0e0e0/333333?text=R.+NGAZOUZE", // Image of Raphaël Ngazouze
  "Hervé Patrick OPIANGAH": "https://placehold.co/150x150/e0e0e0/333333?text=H.P.+OPIANGAH", // Image of Hervé Patrick Opiangah
  "Philippe NZENGUE MAYILA": "https://placehold.co/150x150/e0e0e0/333333?text=P.N.+MAYILA", // Image of Philippe Nzengue Mayila
  "Barnabé INDOUMOU MAMBOUGOU": "https://placehold.co/150x150/e0e0e0/333333?text=B.I.+MAMBOUGOU", // Image of Barnabé Indoumou Mambougou
  "Malika BONGO ONDIMBA": "https://placehold.co/150x150/e0e0e0/333333?text=M.B.+ONDIMBA", // Image of Malika Bongo Ondimba
  "Frédéric NZUE EDZANG": "https://placehold.co/150x150/e0e0e0/333333?text=F.N.+EDZANG", // Image of Frédéric Nzue Edzang
  "NGABIKOUMOU WADA Mesmin Boris": "https://placehold.co/150x150/e0e0e0/333333?text=N.W.M.+BORIS", // Image of Ngabikoumou Wada Mesmin Boris
  "Albertine MAGANGA MOUSSAVOU": "https://placehold.co/150x150/e0e0e0/333333?text=A.M.+MOUSSAVOU", // Image of Albertine Maganga Moussavou
  "placeholder_member": "https://placehold.co/150x150/e0e0e0/333333?text=Membre" // Generic member image
};


const BureauPage: React.FC = () => {
  // État pour gérer l'index de l'article "À la une" actuellement affiché
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  // États pour la navigation PDF (simulée)
  const [pdfCurrentPage, setPdfCurrentPage] = useState(1);
  const pdfTotalPages = 5; // Total de pages du PDF (fixé pour la simulation)

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

  // Gestionnaires pour la navigation PDF (simulée)
  const handlePdfPrev = () => {
    setPdfCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handlePdfNext = () => {
    setPdfCurrentPage((prevPage) => Math.min(pdfTotalPages, prevPage + 1));
  };

  // Données des membres du bureau (tirées de votre PDF)
  const members = [
    { order: '01', name: 'Faustin BOUKOUBI', function: 'Président', party: 'PDG', image: presidentImages["Faustin BOUKOUBI"] },
    { order: '02', name: 'Idriss NGARI', function: '1er Vice-Président', party: 'PDG', image: presidentImages["Idriss NGARI"] },
    { order: '03', name: 'Albert Richard ROYEMBO', function: '2ème Vice-Président', party: 'PDG', image: presidentImages["Albert Richard ROYEMBO"] },
    { order: '04', name: 'Lucienne OGOUWALANGA AWORE', function: '3ème Vice-Président', party: 'PDG', image: presidentImages["Lucienne OGOUWALANGA AWORE"] },
    { order: '05', name: 'Jonathan IGNOUMBA', function: '4ème Vice-Président', party: 'LD', image: presidentImages["Jonathan IGNOUMBA"] },
    { order: '06', name: 'Jean Pierre OUIBA', function: '5ème Vice-Président', party: 'PDG', image: presidentImages["Jean Pierre OUIBA"] },
    { order: '07', name: 'Raphaël NGAZOUZE', function: '6ème Vice-Président', party: 'PDG', image: presidentImages["Raphaël NGAZOUZE"] },
    { order: '08', name: 'Hervé Patrick OPIANGAH', function: '1er Questeur', party: 'PDG', image: presidentImages["Hervé Patrick OPIANGAH"] },
    { order: '09', name: 'Philippe NZENGUE MAYILA', function: '2ème Questeur', party: 'LD', image: presidentImages["Philippe NZENGUE MAYILA"] },
    { order: '10', name: 'Barnabé INDOUMOU MAMBOUGOU', function: '1er Secrétaire', party: 'PDG', image: presidentImages["Barnabé INDOUMOU MAMBOUGOU"] },
    { order: '11', name: 'Malika BONGO ONDIMBA', function: '2ème Secrétaire', party: 'PDG', image: presidentImages["Malika BONGO ONDIMBA"] },
    { order: '12', name: 'Frédéric NZUE EDZANG', function: '3ème Secrétaire', party: 'RV', image: presidentImages["Frédéric NZUE EDZANG"] },
    { order: '13', name: 'NGABIKOUMOU WADA Mesmin Boris', function: '4ème Secrétaire', party: 'LD', image: presidentImages["NGABIKOUMOU WADA Mesmin Boris"] },
    { order: '14', name: '', function: '5ème Secrétaire', party: 'PDG', image: presidentImages["placeholder_member"] }, // Nom vide comme dans le PDF
    { order: '15', name: 'Albertine MAGANGA MOUSSAVOU', function: '6ème Secrétaire', party: 'PSD', image: presidentImages["Albertine MAGANGA MOUSSAVOU"] },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        {/* Zone de contenu principal */}
        <div className="w-full md:w-9/12 px-4">

          {/* Fil d'Ariane */}
          <div className="mb-6">
            <ul className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <a href="#" className="flex items-center hover:text-blue-600 transition-colors" onClick={(e) => e.preventDefault()}>
                  
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
              <li className="text-blue-800 font-semibold">
                Le Bureau
              </li>
            </ul>
          </div>

          {/* Titre */}
          <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">Membres et fonctions du Bureau</h2>

          {/* Section PDF Viewer (simulée) */}
          <div id="pdf-main-container" className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div id="pdf-buttons" className="flex justify-center space-x-4 mb-4">
              <button
                id="pdf-prev"
                onClick={handlePdfPrev}
                disabled={pdfCurrentPage === 1}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Précédent
              </button>
              <button
                id="pdf-next"
                onClick={handlePdfNext}
                disabled={pdfCurrentPage === pdfTotalPages}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Suivant
              </button>
            </div>
            <div id="page-count-container" className="text-center text-gray-700 mb-4">
              Page <span id="pdf-current-page">{pdfCurrentPage}</span> de <span id="pdf-total-pages">{pdfTotalPages}</span>
            </div>
            {/* Canvas où le PDF serait rendu. Le rendu réel nécessite pdf.js et plus de logique */}
            <canvas id="pdf-canvas" height="595" width="841" className="bg-gray-100 border border-gray-300 w-full max-w-full h-auto mx-auto"></canvas>
            <div className="text-center mt-6">
              <a
                href="/Membres et fonctions du Bureau.pdf" // Remplacez par le chemin réel de votre PDF
                download="Membres et fonctions du Bureau.pdf"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
              >
            
      
              </a>
            </div>
          </div>

          {/* Tableau des membres */}
          <div className="overflow-x-auto my-6 bg-white rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">N° D'ORDRE</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">NOMS ET PRENOMS</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">FONCTIONS</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">PARTI POLITIQUE</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">IMAGE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {members.map((member, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.order}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{member.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{member.function}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{member.party}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {member.image && (
                        <img
                          src={member.image}
                          alt={member.name || 'Membre du Bureau'}
                          className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-sm"
                          onError={(e) => { (e.target as HTMLImageElement).src = presidentImages["placeholder_member"]; }} // Fallback image
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default BureauPage;
