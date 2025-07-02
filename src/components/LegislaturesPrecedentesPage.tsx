// src/components/LegislaturesPrecedentesPage.tsx
import React from 'react';
import { Home } from 'lucide-react';

// Définition de l'interface pour les props du composant
interface LegislaturesPrecedentesPageProps {
  navigateTo: (page: string) => void;
}

const LegislaturesPrecedentesPage: React.FC<LegislaturesPrecedentesPageProps> = ({ navigateTo }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Fil d'Ariane */}
      <div className="mb-6">
        <ul className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <a href="/" className="flex items-center hover:text-blue-600 transition-colors" onClick={(e) => { e.preventDefault(); navigateTo('accueil'); }}>
              <Home className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Accueil</span>
            </a>
          </li>
          <li>&gt;</li>
          <li>
            <a href="#" className="hover:text-blue-600 transition-colors" onClick={(e) => { e.preventDefault(); navigateTo('deputes'); }}>
              Députés
            </a>
          </li>
          <li>&gt;</li>
          <li className="text-blue-800 font-semibold">
            Les législatures précédentes
          </li>
        </ul>
      </div>

      {/* Titre de la page */}
      <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">
        Les législatures précédentes
      </h2>

      {/* Contenu des législatures précédentes */}
      <div className="contentArticle text-gray-700 leading-relaxed space-y-6">
        <p>
          Cette section présente un aperçu des législatures précédentes de l'Assemblée Nationale du Gabon,
          mettant en lumière les périodes clés et les contributions de chaque mandature au développement législatif du pays.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Carte pour la 13ème Législature */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-700 mb-3">13ème Législature</h3>
            <p className="text-gray-600 mb-4">
              Informations détaillées sur la composition et les travaux de la 13ème Législature.
            </p>
            <button
              onClick={() => navigateTo('legislature-13')}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Voir les détails
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </button>
          </div>

          {/* Carte pour la 12ème Législature */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-700 mb-3">12ème Législature</h3>
            <p className="text-gray-600 mb-4">
              Informations détaillées sur la composition et les travaux de la 12ème Législature.
            </p>
            <button
              onClick={() => navigateTo('legislature-12')}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Voir les détails
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </button>
          </div>

          {/* Carte pour la 11ème Législature */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-700 mb-3">11ème Législature</h3>
            <p className="text-gray-600 mb-4">
              Informations détaillées sur la composition et les travaux de la 11ème Législature.
            </p>
            <button
              onClick={() => navigateTo('legislature-11')}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Voir les détails
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </button>
          </div>

          {/* Carte pour la 10ème Législature */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-700 mb-3">10ème Législature</h3>
            <p className="text-gray-600 mb-4">
              Informations détaillées sur la composition et les travaux de la 10ème Législature.
            </p>
            <button
              onClick={() => navigateTo('legislature-10')}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Voir les détails
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </button>
          </div>

          {/* Carte pour la 9ème Législature */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-700 mb-3">9ème Législature</h3>
            <p className="text-gray-600 mb-4">
              Informations détaillées sur la composition et les travaux de la 9ème Législature.
            </p>
            <button
              onClick={() => navigateTo('legislature-9')}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Voir les détails
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </button>
          </div>

          {/* Carte pour la 8ème Législature */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-700 mb-3">8ème Législature</h3>
            <p className="text-gray-600 mb-4">
              Informations détaillées sur la composition et les travaux de la 8ème Législature.
            </p>
            <button
              onClick={() => navigateTo('legislature-8')}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Voir les détails
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </button>
          </div>

          {/* Vous pouvez ajouter d'autres législatures ici si nécessaire */}
        </div>
      </div>
    </div>
  );
};

export default LegislaturesPrecedentesPage;
