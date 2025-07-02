// src/components/PresidentBiographyPage.tsx
import React from 'react';
import { Home } from 'lucide-react'; // Importation de l'icône Home

// Interface pour définir la structure des données d'un président pour la page de biographie
interface President {
  name: string;
  image: string;
  function: string;
  term: string;
  biography: string; // Ajout du champ biographie
}

// Props pour le composant PresidentBiographyPage
interface PresidentBiographyPageProps {
  president: President; // Le président dont on affiche la biographie
  navigateTo: (page: string) => void; // Fonction de navigation pour le fil d'Ariane
}

const PresidentBiographyPage: React.FC<PresidentBiographyPageProps> = ({ president, navigateTo }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Fil d'Ariane */}
      <div className="mb-6">
        <ul className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <a href="#" onClick={() => navigateTo('accueil')} className="flex items-center hover:text-blue-600 transition-colors">
              <Home className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Accueil</span>
            </a>
          </li>
          <li>&gt;</li>
          <li>
            <a href="#" onClick={() => navigateTo('deputes')} className="hover:text-blue-600 transition-colors">
              Députés
            </a>
          </li>
          <li>&gt;</li>
          <li>
            <a href="#" onClick={() => navigateTo('anciens-presidents')} className="hover:text-blue-600 transition-colors">
              Les anciens Présidents
            </a>
          </li>
          <li>&gt;</li>
          <li className="text-blue-800 font-semibold">
            Biographie de {president.name}
          </li>
        </ul>
      </div>

      {/* Contenu de la biographie */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          {/* Cadre de l'image avec un style approximatif de l'image fournie */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <div className="relative w-48 h-64 border-2 border-gray-300 rounded-md overflow-hidden"
                 style={{
                   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                   padding: '6px', // Simule le cadre intérieur
                   backgroundColor: '#f0f0f0', // Couleur de fond du cadre
                 }}>
              <img
                src={president.image}
                alt={president.name}
                className="w-full h-full object-cover rounded-sm" // Légèrement arrondi à l'intérieur
                onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/192x256/e0e0e0/333333?text=Image+Non+Trouvée"; }} // Fallback
              />
            </div>
          </div>

          {/* Informations du président */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">{president.name}</h2>
            <p className="text-xl text-gray-700 mb-1">{president.function}</p>
            <p className="text-lg text-gray-600 mb-4">{president.term}</p>
          </div>
        </div>

        {/* Texte de la biographie */}
        <div className="mt-8 text-gray-800 leading-relaxed text-justify">
          {president.biography.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Bouton de retour */}
      <div className="text-center">
        <button
          onClick={() => navigateTo('anciens-presidents')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-200"
        >
          Retour à la liste des anciens Présidents
        </button>
      </div>
    </div>
  );
};

export default PresidentBiographyPage;
