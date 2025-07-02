// src/components/InformationsCommissionsPage.tsx
import React, { useState, useEffect } from 'react';
import { Home, Search, Users, FileText, Video, Building, Globe } from 'lucide-react';

// Interface pour les props de la page
interface InformationsCommissionsPageProps {
  navigateTo: (page: string, data?: any) => void;
}

// Interface pour une information de commission
interface CommissionInfoItem {
  id: string;
  numero: string;
  objet: string;
  deputesMembres: string[];
  administration: string[];
  legislature: string;
  session: string;
  annee: string;
}

// Données fictives pour les informations des commissions basées sur l'image fournie
const commissionsInfo: CommissionInfoItem[] = [
  {
    id: 'ci01',
    numero: '01',
    objet: 'La gestion des bourses d’études en République Gabonaise',
    deputesMembres: [
      'Madame Angélique NGOMA',
      'Monsieur Henri BEKALLE AKWE',
      'Monsieur Jean KOUBANGOYE Boniface',
      'Madame Gladys MOULENGUI',
      'Monsieur Anatole TSIOUKACKA',
      'Monsieur Apollinaire Adonis MOUDOUMA',
      'Monsieur MAMBOUNDOU MOUNDZIEGOU Hyacinthe',
      'Monsieur BOKAMBA-NDOMBI ATABI Franck Ulrich',
      'Monsieur NDONG OBAME Serge',
      'Monsieur GOULONGANA Jean Robert',
    ],
    administration: [
      'Madame Marie-Paulette AVOMO OKOUE GOMEZ, Chef de Service des Informations et des Enquêtes',
      'Monsieur TOUNG ONDO Jean Luc, Administrateur',
      'Monsieur MOUNDOUNGOU Marcelin, Administrateur',
      'Madame TCHIBINDA ELLA Sandrine, Secrétaire de Direction',
    ],
    legislature: 'TREIZIEME LEGISLATURE',
    session: 'Seconde session ordinaire',
    annee: '2020',
  },
  // Ajoutez d'autres informations de commission si nécessaire
];

// Données pour les articles "À la une" avec des images de remplacement
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

// URLs des images des présidents (placeholders)
const presidentImages: { [key: string]: string } = {
  "Jean-François NDONGOU": "https://placehold.co/150x150/e0e0e0/333333?text=J.F.+NDONGOU", // Image de Jean-François NDONGOU
  "placeholder_member": "https://placehold.co/150x150/e0e0e0/333333?text=Membre" // Image générique d'un membre
};

const InformationsCommissionsPage: React.FC<InformationsCommissionsPageProps> = ({ navigateTo }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCommissions, setFilteredCommissions] = useState(commissionsInfo);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0); // Pour la sidebar "À la une"

  useEffect(() => {
    const current = commissionsInfo.filter(commission =>
      commission.objet.toLowerCase().includes(searchTerm.toLowerCase()) ||
      commission.deputesMembres.some(member => member.toLowerCase().includes(searchTerm.toLowerCase())) ||
      commission.annee.includes(searchTerm)
    );
    setFilteredCommissions(current);
  }, [searchTerm]);

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
    <div className="py-12 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap -mx-4">
        {/* Contenu principal */}
        <div className="w-full lg:w-9/12 px-4">
          {/* Fil d'Ariane */}
          <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <a href="#" onClick={() => navigateTo('accueil')} className="text-blue-600 hover:text-blue-800">Accueil</a>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <a href="#" onClick={() => navigateTo('travaux')} className="text-blue-600 hover:text-blue-800">Travaux parlementaires</a>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <a href="#" onClick={() => navigateTo('controle-parlementaire')} className="text-blue-600 hover:text-blue-800">Contrôle parlementaire</a>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-900">Informations des commissions</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Information des commissions</h1>

          <p className="mb-4 text-gray-600 text-sm">
            <span className="font-semibold">TREIZIEME LEGISLATURE</span><br />
            Seconde session ordinaire<br />
            Année 2020
          </p>

          {/* Search Bar */}
          <div className="mb-8 flex items-center border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="text"
              placeholder="Rechercher une information par objet, membre ou année..."
              className="flex-grow px-4 py-3 text-gray-700 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="p-3 bg-gray-100 border-l border-gray-300">
              <Search className="w-5 h-5 text-gray-500" />
            </div>
          </div>

          {filteredCommissions.length > 0 ? (
            filteredCommissions.map((commission) => (
              <div key={commission.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-8 border border-gray-200">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-blue-800 mb-4">{commission.objet}</h2>
                  <p className="text-gray-600 text-sm mb-2">
                    <span className="font-semibold">Session:</span> {commission.session}, <span className="font-semibold">Année:</span> {commission.annee}
                  </p>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Députés Membres:</h3>
                    <ul className="list-disc list-inside text-gray-700 pl-4">
                      {commission.deputesMembres.map((member, idx) => (
                        <li key={idx}>{member}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Administration:</h3>
                    <ul className="list-disc list-inside text-gray-700 pl-4">
                      {commission.administration.map((admin, idx) => (
                        <li key={idx}>{admin}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-600">
              Aucune information de commission trouvée pour les critères de recherche.
            </div>
          )}
        </div>

        {/* Sidebar (Colonne de droite) */}
        <div className="w-full lg:w-3/12 px-4 mt-8 lg:mt-0">
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

export default InformationsCommissionsPage;
