// src/components/QuestionsEcritesPage.tsx
import React from 'react';

// Interface pour les props de la page
interface QuestionsEcritesPageProps {
  navigateTo: (page: string, data?: any) => void;
}

// Interface pour une question écrite
interface QuestionEcriteItem {
  id: string;
  numero: string;
  intitule: string;
  destinataire: string;
  deputeAuteur: string;
}

// Données fictives pour les questions écrites
const questionsEcrites: QuestionEcriteItem[] = [
  {
    id: 'qe1',
    numero: '01',
    intitule: "La cession des actions partielles ou totales dans certaines entreprises dont l'Etat est actionnaire",
    destinataire: "Le Ministre de l'Économie, de la Prospective et de la Programmation du développement, Monsieur Roger OWONO MBA",
    deputeAuteur: "Honorable Adrien NKOGHE ESSINGONE, Député du département du Komo Ocean",
  },
  {
    id: 'qe2',
    numero: '02',
    intitule: "La problématique du franc CFA",
    destinataire: "Le Premier Ministre, Chef du Gouvernement, Monsieur Julien NKOGHE BEKALE",
    deputeAuteur: "Honorable Barnabé INDOUMOU MAMBOUNGOU, Député du 3e siège du département de la Lolo Bouenguidi",
  },
  {
    id: 'qe3',
    numero: '03',
    intitule: "La délocalisation du Ministère de l'Intérieur",
    destinataire: "Le Premier Ministre, Chef du Gouvernement, Monsieur Julien NKOGHE BEKALE",
    deputeAuteur: "Honorable Jonathan IGNOUMBA, Député du siège unique du département de Mongo et de la commune de Moulengui-Binza",
  },
  {
    id: 'qe4',
    numero: '04',
    intitule: "L'entretien de l'axe routier Oyenano-Moringo village dans le 2e siège du département de Tsamba-Magotsi",
    destinataire: "Le Ministre de l'Equipement, des Infrastructures et des Travaux publics, Monsieur Calixte ENGANDJI ALANDJI",
    deputeAuteur: "Honorable David LABAYE, Député du 2e siège du département de Tsamba-Magotsi",
  },
  {
    id: 'qe5',
    numero: '05',
    intitule: "La reconnaissance du mariage coutumier et religieux",
    destinataire: "Le Ministre de la Justice et des Droits humains, Garde des Sceaux, Monsieur Edgar Anicet MBOUMBOU MIYAKOU",
    deputeAuteur: "Honorable Jules Esdras MOUHOULOUOU, Député du 3e siège du département de la Boumi-Louétsi, District de Nzenzele",
  },
  {
    id: 'qe6',
    numero: '06',
    intitule: "Les mesures portant sur les journées citoyennes, de fermeture de bars et de la consommation de stupéfiants par les jeunes",
    destinataire: "Le Ministre d'Etat, Ministre de l'Intérieur, de l'Administration du territoire, des Collectivités locales, de la Décentralisation, chargé de la Citoyenneté et de l'Immigration, Monsieur Noël Lambert MATHA",
    deputeAuteur: "Honorable Jules Esdras MOUHOULOUOU, Député du 3e siège du département de la Boumi-Louétsi, District de Nzenzele",
  },
  {
    id: 'qe7',
    numero: '07',
    intitule: "La situation des contrôles interpellés des forces de sécurité sur nos routes et surtout dans la capitale gabonaise",
    destinataire: "Le Ministre d'Etat, Ministre de l'Intérieur, de la Justice et des Droits humains, Monsieur Noël Lambert MATHA",
    deputeAuteur: "Honorable Rodrigue ABOUROU OTOGO, Député du 3e siège du département du Woleu",
  },
  {
    id: 'qe8',
    numero: '08',
    intitule: "La situation de l'école des officiers de Mandilou dans la NGOUNIE",
    destinataire: "Le Ministre d'Etat, Ministre de l'Intérieur, de l'Administration du territoire, des Collectivités locales, de la Décentralisation, chargé de la Citoyenneté et de l'Immigration, Monsieur Noël Lambert MATHA",
    deputeAuteur: "Honorable Jules Esdras MOUHOULOUOU, Député du 3e siège du département de la Boumi-Louétsi, District de Nzenzele",
  },
  {
    id: 'qe9',
    numero: '09',
    intitule: "L'exploitation par des sociétés forestières de l'espace réservé aux populations locales dans le cadre des forêts communautaires",
    destinataire: "Le Ministre de la Forêt, de la Mer, de l'environnement, chargé du Plan climat, Monsieur Lee WHITE",
    deputeAuteur: "Honorable David LABAYE, Député du 2e siège du département de Tsamba-Magotsi",
  },
  {
    id: 'qe10',
    numero: '10',
    intitule: "Le risque de pollution de la rivière MPIVIE par la Société PERENCO",
    destinataire: "Le Ministre de la Forêt, de la Mer, de l'environnement, chargé du Plan climat, Monsieur Lee WHITE",
    deputeAuteur: "Honorable André Jules RETENO Y'OMBENONTORY, Député du 2e siège du département d'Etimbué",
  },
  {
    id: 'qe11',
    numero: '11',
    intitule: "L'affaire de la disparition des 353 conteneurs",
    destinataire: "Le Premier Ministre, Chef du Gouvernement, Monsieur Julien NKOGHE BEKALE",
    deputeAuteur: "Honorable Mesmin Boris NGABIKOUMOU WADA, Député du siège unique du département de Lékoko, Bakoumba",
  },
  {
    id: 'qe12',
    numero: '12',
    intitule: "L'inexistence du Projet GRAINE dans la province de l'Ogooué-Maritime",
    destinataire: "Le Ministre de l'Agriculture, de l'Elevage, de la Pêche et de l'Alimentation, Monsieur Biendi MAGANGA MOUSSAVOU",
    deputeAuteur: "Honorable André Jules RETENO Y'OMBENONTORY, Député du 2e siège du département d'Etimbué",
  },
];

const QuestionsEcritesPage: React.FC<QuestionsEcritesPageProps> = ({ navigateTo }) => {
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
              <span className="text-gray-900">Questions écrites</span>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Questions écrites</h1>

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
                    Destinataire
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Député auteur de la question
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {questionsEcrites.map((question) => (
                  <tr key={question.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {question.numero}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {question.intitule}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {question.destinataire}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {question.deputeAuteur}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-8 text-gray-600 text-sm">
          <span className="font-semibold">TREIZIEME LEGISLATURE</span><br />
          Seconde session ordinaire<br />
          Année 2019
        </p>
        <p className="mt-2 text-gray-600 text-sm">
          ENVOYEES AU GOUVERNEMENT LE 20 SEPTEMBRE 2019
        </p>
      </div>
    </div>
  );
};

export default QuestionsEcritesPage;
