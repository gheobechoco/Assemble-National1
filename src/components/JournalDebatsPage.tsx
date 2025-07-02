// src/components/JournalDebatsPage.tsx
import React from 'react';
import {  BookOpen, ChevronRight } from 'lucide-react'; // Importation des icônes nécessaires

interface JournalDebatsPageProps {
  navigateTo: (page: string, data?: any) => void;
}

const JournalDebatsPage: React.FC<JournalDebatsPageProps> = ({ navigateTo }) => {
  // Données fictives pour les sessions disponibles
  const sessions = [
    { id: 'session-12-2018', label: 'Journal des débats de la 12ème législature_1ère session ordinaire 2018', date: '01/01/2018' },
    { id: 'session-13-2019', label: 'Journal des débats de la 13ème législature_1ère session ordinaire 2019', date: '01/01/2019' },
    { id: 'session-13-2019-2', label: '13ème législature journal des débats_1ère session ordinaire 2019', date: '01/01/2019' },
    { id: 'session-2014', label: 'Deuxième Session Ordinaire 2014', date: '01/01/2014' },
    { id: 'session-2019-prem', label: 'Première Session Ordinaire 2019', date: '01/01/2019' },
    { id: 'session-2017-sec', label: 'Seconde Session Ordinaire 2017', date: '01/01/2017' },
    { id: 'session-2017-prem', label: 'Première Session Ordinaire 2017', date: '01/01/2017' },
    { id: 'session-2016-sec', label: 'Seconde Session Ordinaire 2016', date: '01/01/2016' },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fil d'Ariane */}
        <div className="mb-6">
          <ul className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <a href="#" className="flex items-center hover:text-blue-600 transition-colors" onClick={(e) => { e.preventDefault(); navigateTo('accueil'); }}>
              
                <span className="hidden sm:inline">Accueil</span>
              </a>
            </li>
            <li>&gt;</li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors" onClick={(e) => { e.preventDefault(); navigateTo('travaux'); }}>
                Travaux parlementaires
              </a>
            </li>
            <li>&gt;</li>
            <li className="text-blue-800 font-semibold">
              Journal des débats
            </li>
          </ul>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Journal des Débats</h1>
        <p className="text-gray-700 mb-6">
          Bienvenue sur la page du Journal des Débats. Ici, vous trouverez les comptes rendus intégraux des séances plénières et des travaux parlementaires. Ces documents reflètent fidèlement les discussions, les interventions des députés et les décisions prises au sein de l'Assemblée Nationale.
        </p>
        <p className="text-gray-700 mb-6">
          Le Journal des Débats est une ressource essentielle pour la transparence démocratique, permettant aux citoyens de suivre les activités législatives et de comprendre les positions de leurs représentants.
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sessions Disponibles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sessions.map((session) => (
              <button
                key={session.id}
                onClick={() => navigateTo('session-details', session)}
                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-md border border-gray-200 hover:bg-blue-100 hover:border-blue-300 transition-colors duration-200 text-center"
              >
                <BookOpen className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-blue-700 text-lg mb-1">{session.label}</h3>
                <p className="text-sm text-gray-600">Date: {session.date}</p>
                <span className="text-blue-500 hover:underline text-sm mt-2 block">
                  Consulter la session <ChevronRight className="inline-block w-4 h-4 ml-1" />
                </span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigateTo('accueil')}
          className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-lg"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default JournalDebatsPage;
