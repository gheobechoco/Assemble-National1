// src/components/QuestionsOralesAvecDebatPage.tsx
import React from 'react';

// Interface pour les props de la page
interface QuestionsOralesAvecDebatPageProps {
  navigateTo: (page: string, data?: any) => void;
}

// Interface pour une question orale avec débat
interface QuestionItem {
  id: string;
  numero: string;
  intitule: string;
  membreGouvernementInterpelle: string;
  deputeAuteur: string;
  seancePleniereDate: string;
}

// Données fictives pour les questions orales avec débat
const questions: QuestionItem[] = [
  {
    id: 'q1',
    numero: '01',
    intitule: "L'appel à la manifestation de candidatures pour les postes publics",
    membreGouvernementInterpelle: "Le Ministre du Budget et des Comptes, Monsieur Christian MAGNAGNA",
    deputeAuteur: "Honorable Jonathan IGNOUMBA, Député du siège unique du département de Mongo et de la commune de Moulengui-Binza",
    seancePleniereDate: "5 MAI 2015",
  },
  {
    id: 'q2',
    numero: '02',
    intitule: "L'état de la conjoncture économique et financière que traverse notre pays",
    membreGouvernementInterpelle: "Le Premier Ministre, Chef du Gouvernement, Monsieur Daniel ONA ONDO",
    deputeAuteur: "Honorable Michel MBOUMI, Député du 3ème Siège du département d'Elimboué-Omboué",
    seancePleniereDate: "5 MAI 2015",
  },
  {
    id: 'q3',
    numero: '03',
    intitule: "L'organisation de la Coupe d'Afrique des Nations (CAN) 2017 dans notre pays",
    membreGouvernementInterpelle: "Le Ministre de la Jeunesse et des Sports, Monsieur Blaise LOEMBE",
    deputeAuteur: "Honorable YOUBANGGOYE MBILA Alexandre, Député du 1er Siège du département de la Lébombi-Léyou",
    seancePleniereDate: "26 JUIN 2015",
  },
  {
    id: 'q4',
    numero: '04',
    intitule: "La cherté du prix du poisson et l'activité illicite des chalutiers",
    membreGouvernementInterpelle: "Le Ministre de l'Agriculture, de la pêche et du développement durable, Monsieur Luc OYOUBI",
    deputeAuteur: "Honorable NYINGONE ANDA Marie-Madeleine, Député du 2ème siège du département de la Mvoung",
    seancePleniereDate: "26 JUIN 2015",
  },
];

const QuestionsOralesAvecDebatPage: React.FC<QuestionsOralesAvecDebatPageProps> = ({ navigateTo }) => {
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
              <span className="text-gray-900">Questions orales avec débat</span>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Questions orales avec débat</h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    N°
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Intitulé de la question
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Membre du Gouvernement interpellé
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Député auteur de la question
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Séance plénière
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {questions.map((question) => (
                  <tr key={question.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {question.numero}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {question.intitule}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {question.membreGouvernementInterpelle}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {question.deputeAuteur}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {question.seancePleniereDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-8 text-gray-600 text-sm">
          <span className="font-semibold">DOUZIEME LEGISLATURE</span><br />
          Première session ordinaire<br />
          Année 2015
        </p>
      </div>
    </div>
  );
};

export default QuestionsOralesAvecDebatPage;
