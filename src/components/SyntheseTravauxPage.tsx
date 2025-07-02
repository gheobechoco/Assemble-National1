// src/components/SyntheseTravauxPage.tsx
import React from 'react';

// Interface pour les props de la page
interface SyntheseTravauxPageProps {
  navigateTo: (page: string, data?: any) => void;
}

// Interface pour un élément de synthèse des travaux
interface SyntheseItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  date: string;
}

// Données fictives pour les synthèses des travaux
const syntheseItems: SyntheseItem[] = [
  {
    id: 'session-1',
    imageUrl: 'https://placehold.co/300x200/cccccc/333333?text=Synth%C3%A8se+1', // Placeholder image
    title: 'Synthèse des travaux de la première session ordinaire',
    description: 'Résumé des discussions et décisions prises lors de la première session ordinaire de l\'Assemblée Nationale.',
    date: '24/03/2023',
  },
  {
    id: 'session-2',
    imageUrl: 'https://placehold.co/300x200/cccccc/333333?text=Synth%C3%A8se+2', // Placeholder image
    title: 'Synthèse des travaux de la deuxième session ordinaire',
    description: 'Compte rendu détaillé des activités parlementaires de la deuxième session ordinaire.',
    date: '15/09/2023',
  },
  {
    id: 'session-extra-1',
    imageUrl: 'https://placehold.co/300x200/cccccc/333333?text=Synth%C3%A8se+3', // Placeholder image
    title: 'Synthèse des travaux de la session extraordinaire du 10/01/2024',
    description: 'Points clés et résolutions de la session extraordinaire consacrée à des sujets urgents.',
    date: '10/01/2024',
  },
  {
    id: 'session-3',
    imageUrl: 'https://placehold.co/300x200/cccccc/333333?text=Synth%C3%A8se+4', // Placeholder image
    title: 'Synthèse des travaux de la troisième session ordinaire',
    description: 'Aperçu des débats législatifs et des travaux en commission de la troisième session.',
    date: '05/03/2024',
  },
];

const SyntheseTravauxPage: React.FC<SyntheseTravauxPageProps> = ({ navigateTo }) => {
  return (
    <div className="py-12 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-gray-900">Synthèse des travaux</span>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Synthèse des travaux</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {syntheseItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
              onClick={() => { /* Optionnel: naviguer vers une page de détails de synthèse si nécessaire */ }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/300x200/cccccc/333333?text=Image+non+disponible'; }} // Fallback image
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Publié le: {item.date}</span>
                  <span className="text-blue-600 hover:text-blue-800">Lire plus &gt;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyntheseTravauxPage;
