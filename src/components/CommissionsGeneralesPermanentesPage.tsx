// src/components/CommissionsGeneralesPermanentesPage.tsx
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react'; // Importation des icônes nécessaires

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


// Définition de l'interface pour les props du composant, incluant la fonction navigateTo
interface CommissionsGeneralesPermanentesPageProps {
  navigateTo: (page: string) => void;
}

const CommissionsGeneralesPermanentesPage: React.FC<CommissionsGeneralesPermanentesPageProps> = ({ navigateTo }) => {
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
              <li className="text-blue-800 font-semibold">
                Les Commissions Générales Permanentes
              </li>
            </ul>
          </div>

          {/* Titre de la page */}
          <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">Liste des Députés par commission</h2>

          {/* Contenu des commissions */}
          <div className="contentArticle text-gray-700 leading-relaxed space-y-4">
            <ul className="list-none pl-0 space-y-2">
              <li className="flex items-center text-blue-800 font-semibold">
                <ChevronRight className="w-5 h-5 mr-2 text-green-600" />
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('commission-lois-details'); }} className="hover:underline">
                  Commission des Lois, des Affaires Administratives et des Droits de l'Homme
                </a>
              </li>
              <li className="flex items-center text-blue-800 font-semibold">
                <ChevronRight className="w-5 h-5 mr-2 text-green-600" />
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('commission-finances-details'); }} className="hover:underline">
                  Commission des Finances, du Budget de la Comptabilité Publique, des Affaires Économiques et de la Production
                </a>
              </li>
              <li className="flex items-center text-blue-800 font-semibold">
                <ChevronRight className="w-5 h-5 mr-2 text-green-600" />
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('commission-affaires-etrangeres-details'); }} className="hover:underline">
                  Commission des Affaires Étrangères, de la Coopération Internationale, de la Défense Nationale et de l'Intégration Régionale
                </a>
              </li>
              <li className="flex items-center text-blue-800 font-semibold">
                <ChevronRight className="w-5 h-5 mr-2 text-green-600" />
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('commission-sante-details'); }} className="hover:underline">
                  Commission de la Santé, de l'Éducation, des Affaires Sociales et Culturelles
                </a>
              </li>
              <li className="flex items-center text-blue-800 font-semibold">
                <ChevronRight className="w-5 h-5 mr-2 text-green-600" />
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('commission-environnement-details'); }} className="hover:underline">
                  Commission de l'Environnement, du Climat, de la Protection de la Nature et du Développement Durable
                </a>
              </li>
              <li className="flex items-center text-blue-800 font-semibold">
                <ChevronRight className="w-5 h-5 mr-2 text-green-600" />
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('commission-planification-details'); }} className="hover:underline">
                  Commission de la Planification, de l'Aménagement du Territoire, des Infrastructures, des Travaux Publics, de la Communication et de l'Innovation
                </a>
              </li>
            </ul>
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

export default CommissionsGeneralesPermanentesPage;
