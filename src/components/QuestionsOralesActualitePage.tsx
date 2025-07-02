// src/components/QuestionsOralesActualitePage.tsx
import React from 'react';

// Interface pour les props de la page
interface QuestionsOralesActualitePageProps {
  navigateTo: (page: string, data?: any) => void;
}

// Interface pour une question orale d'actualité
interface QuestionOraleActualiteItem {
  id: string;
  numero: string;
  intitule: string;
  membreGouvernement: string;
  deputeAuteur: string;
  session: string; // Pour indiquer la session plénière
}

// Données fictives pour les questions orales d'actualité basées sur les images fournies
const questionsOralesActualite: QuestionOraleActualiteItem[] = [
  {
    id: 'qoa1',
    numero: '01',
    intitule: "L'état actuel de la route sur les axes Libreville-Kango, Ovan-Makokou et Moanda-Bakoumba",
    membreGouvernement: "Le Ministre de l'Équipement, des Infrastructures et des Travaux publics, Monsieur Arnaud Calixte ENGANDJI ALANDJI",
    deputeAuteur: "Honorable Séraphin AKURE, Député du 2e arrondissement de la commune de Lambaréné",
    session: "SÉANCE PLÉNIÈRE DU 22 MAI 2019",
  },
  {
    id: 'qoa2',
    numero: '02',
    intitule: "L'aménagement du bassin versant de Nzeng-Ayong",
    membreGouvernement: "Le Ministre de l'Équipement, des Infrastructures et des Travaux publics, Monsieur Arnaud Calixte ENGANDJI ALANDJI",
    deputeAuteur: "Honorable Jean-Robert GOULONGANA, Député du 3e siège du département de l'Ogooué et Lacs, district d'Ashuka",
    session: "SÉANCE PLÉNIÈRE DU 22 MAI 2019",
  },
  {
    id: 'qoa3',
    numero: '03',
    intitule: "La date des élections législatives partielles",
    membreGouvernement: "Le Ministre d'Etat, Ministre de l'Intérieur, de l'Administration du territoire, des Collectivités locales, de la Décentralisation chargé de la Citoyenneté, Monsieur Lambert Noël MATHA",
    deputeAuteur: "Honorable Jean-Robert GOULONGANA, Député du 3e siège du département de l'Ogooué et Lacs, district d'Ashuka",
    session: "SÉANCE PLÉNIÈRE DU 22 MAI 2019",
  },
  {
    id: 'qoa4',
    numero: '04',
    intitule: "La mesure portant paiement trimestriel des pensions de vieillesse par la CNSS",
    membreGouvernement: "Le Ministre d'Etat, Ministre de la Santé, de la Protection sociale et de la Solidarité nationale, Madame Denise, MEKAM'NE EDZIDZIE épouse TATY",
    deputeAuteur: "Honorable Jean-Robert GOULONGANA, Député du 3e siège du département de l'Ogooué et Lacs, district d'Ashuka",
    session: "SÉANCE PLÉNIÈRE DU 22 MAI 2019",
  },
  {
    id: 'qoa5',
    numero: '05',
    intitule: "La protection du Kévazingo",
    membreGouvernement: "Le Ministre délégué auprès du Ministre d'Etat, Ministre des Forêts et de l'Environnement, chargé du Plan climat, Monsieur Franck NGUEMA, en lieu et place du Ministre (remaniement du gouvernement)",
    deputeAuteur: "Honorable Jean-Robert GOULONGANA, Député du 3e siège du département de l'Ogooué et Lacs, district d'Ashuka",
    session: "SÉANCE PLÉNIÈRE DU 22 MAI 2019",
  },
  {
    id: 'qoa6',
    numero: '06',
    intitule: "L'opération déguerpissement des marchés informels",
    membreGouvernement: "Le Ministre d'Etat, Ministre de l'Intérieur, de l'Administration, de la Décentralisation, chargé de la Citoyenneté, Monsieur Lambert Noël MATHA",
    deputeAuteur: "Honorable Serge NDONG OBAME, Député du 5e siège du département du Woleu",
    session: "SÉANCE PLÉNIÈRE DU 29 MAI 2019",
  },
  {
    id: 'qoa7',
    numero: '07',
    intitule: "Le paiement par l'Etat, des arriérés des frais de scolarité des élèves orientés dans les établissements privés",
    membreGouvernement: "Le Ministre d'Etat, Ministre de l'Éducation nationale, chargé de la Formation civique, Monsieur Michel MENGA M'ESSONE",
    deputeAuteur: "Honorable Anatole TSIOUCKACKA, Député du 2e siège du département de Mulundu",
    session: "SÉANCE PLÉNIÈRE DU 29 MAI 2019",
  },
  {
    id: 'qoa8',
    numero: '08',
    intitule: "L'avancement des concertations avec les partenaires sociaux sur la réforme des modalités d'attribution des bourses d'études",
    membreGouvernement: "Le Ministre d'Etat, Ministre de l'Éducation nationale, chargé de la Formation civique, Monsieur Michel MENGA M'ESSONE",
    deputeAuteur: "Honorable Germain BIAHODJOW, Député du 2e siège du département de l'Ivindo, district de M'Vadhy",
    session: "SÉANCE PLÉNIÈRE DU 29 MAI 2019",
  },
  {
    id: 'qoa9',
    numero: '09',
    intitule: "La violence en milieu scolaire",
    membreGouvernement: "Le Ministre d'Etat, Ministre de l'Éducation nationale, chargé de la Formation civique, Monsieur Michel MENGA M'ESSONE",
    deputeAuteur: "Honorable Germain BIAHODJOW, Député du 2e siège du département de l'Ivindo, district de M'Vadhy",
    session: "SÉANCE PLÉNIÈRE DU 29 MAI 2019",
  },
  {
    id: 'qoa10',
    numero: '10',
    intitule: "Les risques de pollution de l'eau en amont du fleuve Ivindo",
    membreGouvernement: "Le Ministre de l'Énergie, de la Valorisation et de l'Industrialisation des ressources minières, Monsieur Norbert Emmanuel Tony ONDO MBA",
    deputeAuteur: "Honorable Germain BIAHODJOW, Député du 2e siège du département de l'Ivindo, district de M'Vadhy",
    session: "SÉANCE PLÉNIÈRE DU 29 MAI 2019",
  },
  {
    id: 'qoa11',
    numero: '11',
    intitule: "Les difficultés des populations à rallier l'intérieur du pays",
    membreGouvernement: "Le Ministre des Transports et de la Logistique, Monsieur Justin MOUNGUENGUI NDOUNDANGOYE",
    deputeAuteur: "Honorable Guy-François KOUMBA, Député du 1er siège du 5e arrondissement de la commune de Libreville",
    session: "SÉANCE PLÉNIÈRE DU 05 JUIN 2019",
  },
  {
    id: 'qoa12',
    numero: '12',
    intitule: "La livraison du pont de Nzeng-Ayong sur l'avenue Jean Léon MENGUIRE ME MBA",
    membreGouvernement: "Le Ministre de l'Équipement, des Infrastructures et des Travaux publics, Monsieur Arnaud Calixte ENGANDJI ALANDJI",
    deputeAuteur: "Honorable Elie Colin AKOUE, Député du 2e siège du département du Ntem",
    session: "SÉANCE PLÉNIÈRE DU 26 JUIN 2019",
  },
  {
    id: 'qoa13',
    numero: '13',
    intitule: "Les critères de désignation de Patrice NEVEU au poste de sélectionneur de l'Equipe nationale",
    membreGouvernement: "Le Ministre de la Culture, des sports, Chargé de la Jeunesse et de la Vie associative, Monsieur Franck NGUEMA",
    deputeAuteur: "Honorable Elie Colin AKOUE, Député du 2e siège du département du Ntem",
    session: "SÉANCE PLÉNIÈRE DU 26 JUIN 2019",
  },
  {
    id: 'qoa14',
    numero: '14',
    intitule: "Le mouvement de protestations des étudiants à l'Université Omar BONGO",
    membreGouvernement: "Le Ministre de l'Enseignement Supérieur, de la Recherche scientifique et du transfert des technologies, Monsieur Jean Dieu MOUKAGNI IWANGOU",
    deputeAuteur: "Honorable Gabriel MALONGA MOUELET, Député du 1er arrondissement de la commune de Libreville",
    session: "SÉANCE PLÉNIÈRE DU 26 JUIN 2019",
  },
  {
    id: 'qoa15',
    numero: '15',
    intitule: "L'augmentation des prix du carburant",
    membreGouvernement: "Le Ministre de l'Économie, des Finances et de la Solidarité Nationale, Monsieur Roger OWONO MBA",
    deputeAuteur: "Honorable Landry NDONG NGUEMA, Député du 2e siège du département Ogooué et Lacs",
    session: "SÉANCE PLÉNIÈRE DU 26 JUIN 2019",
  },
  {
    id: 'qoa16',
    numero: '16',
    intitule: "La problématique de l'approvisionnement des médicaments dans les pharmacies",
    membreGouvernement: "Le Ministre de la Santé, Monsieur Max LIMOUKOU",
    deputeAuteur: "Honorable Fidèle MOMOMBA, Député du 2e siège du département de la Douya-Onoye, Mouila",
    session: "SÉANCE PLÉNIÈRE DU 26 JUIN 2019",
  },
];

const QuestionsOralesActualitePage: React.FC<QuestionsOralesActualitePageProps> = ({ navigateTo }) => {
  // Regrouper les questions par session
  const groupedQuestions = questionsOralesActualite.reduce((acc, question) => {
    (acc[question.session] = acc[question.session] || []).push(question);
    return acc;
  }, {} as Record<string, QuestionOraleActualiteItem[]>);

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
              <span className="text-gray-900">Questions orales d'actualité</span>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Questions orales d'actualité</h1>

        <p className="mb-4 text-gray-600 text-sm">
          <span className="font-semibold">TREIZIEME LEGISLATURE</span><br />
          Première session ordinaire<br />
          Année 2019
        </p>

        {Object.entries(groupedQuestions).map(([session, questions]) => (
          <div key={session} className="mb-10">
            <h2 className="text-xl font-bold text-blue-800 mb-4 bg-blue-100 p-3 rounded-md">{session}</h2>
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
                          {question.membreGouvernement}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsOralesActualitePage;
