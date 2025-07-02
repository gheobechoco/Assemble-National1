// src/components/RepertoireLoisPromulgueesPage.tsx
import React, { useState, useEffect } from 'react';
// import { Home, FileText, Video, Building, Globe } from 'lucide-react';

// Interface pour les props de la page
interface RepertoireLoisPromulgueesPageProps {
  navigateTo: (page: string, data?: any) => void;
}

// Définition du type pour une loi promulguée
interface LoiPromulguee {
  numero: number;
  intitule: string;
  datePublicationJO: string;
  numeroJO: string;
  lienJO?: string; // Lien optionnel vers le Journal Officiel
}

// Données fictives pour le tableau des lois promulguées
const loisPromulguees: LoiPromulguee[] = [
  {
    numero: 1,
    intitule: "Loi n°014/2020 du 22 janvier 2020 déterminant les ressources et les charges de l’Etat pour l’année 2020",
    datePublicationJO: "23 JANVIER 2020",
    numeroJO: "53 BIS Spécial",
  },
  {
    numero: 2,
    intitule: "Loi n°014/2019 du 22 janvier 2020 portant ratification de l’ordonnance n°00003/PR/2019 du 1er août 2019 autorisant l’Etat Gabonais à contracter un emprunt d’un montant de quarante deux millions huit cent quatre-vingt-quinze mille six cent soixante-treize virgule treize centimes (42.895.673,13) Euros auprès de la Banque Banco Santander, S.A et l’Agence de crédit UK Export Finance (UKEF)",
    datePublicationJO: "7 FEVRIER 2020",
    numeroJO: "53 BIS",
  },
  {
    numero: 3,
    intitule: "Loi n°017/2019 du 22 janvier 2020 autorisant le Président de la République à légiférer par ordonnances pendant l’intersession parlementaire",
    datePublicationJO: "7 FEVRIER 2020",
    numeroJO: "53 BIS",
  },
  {
    numero: 4,
    intitule: "Loi n°013/2019 du 22 janvier 2020 autorisant l’Etat Gabonais à contracter un emprunt d’un montant de cinq millions quatre cent trente et un mille (5.431.000) Euros auprès du Fonds International de Développement Agricole (FIDA)",
    datePublicationJO: "24 AU 29 FEVRIER 2020",
    numeroJO: "56",
  },
  {
    numero: 5,
    intitule: "Loi n°001/2020 du 25 avril 2020 modifiant et complétant certaines dispositions de la loi n°11/90 du 16 novembre 1990 relative à l’état d’urgence",
    datePublicationJO: "24 AU 30 AVRIL 2020",
    numeroJO: "64",
  },
  {
    numero: 6,
    intitule: "Loi n°002/2020 du 25 avril 2020 portant prorogation de la durée de l’état d’urgence",
    datePublicationJO: "24 AU 30 AVRIL 2020",
    numeroJO: "64",
  },
  {
    numero: 7,
    intitule: "Loi n°028/2018 du 21 avril 2020 portant modification de certaines dispositions de la loi n°13/2016 du 05 septembre 2016 relative à la simplification de la création des sociétés à responsabilité limitée en République Gabonaise",
    datePublicationJO: "1er AU 7 MAI 2020",
    numeroJO: "65",
  },
  {
    numero: 8,
    intitule: "Loi n°003/2020 du 11 mai 2020 fixant les mesures de prévention, de lutte et de riposte contre les catastrophes sanitaires",
    datePublicationJO: "11 MAI 2020",
    numeroJO: "66",
  },
  {
    numero: 9,
    intitule: "Loi n°006/2020 du 30 juin 2020 portant modification de la loi n°042/2019 du 05 juillet 2019 portant Code Pénal de la République Gabonaise",
    datePublicationJO: "30 JUIN 2020",
    numeroJO: "72 Bis Spécial",
  },
  {
    numero: 10,
    intitule: "Loi n°018/2020 du 30 juin 2020 autorisant l’Etat Gabonais à contracter un emprunt d’un montant de huit millions trois cent mille (8.300.000) Euros auprès de la Banque Internationale pour la Reconstruction et le Développement (BIRD)",
    datePublicationJO: "22 JUILLET 2020",
    numeroJO: "75 BIS",
  },
  {
    numero: 11,
    intitule: "Loi n°021/2020 du 30 juin 2020 autorisant le Président de la République à légiférer par ordonnances pendant l’intersession parlementaire",
    datePublicationJO: "16 AU 23 JUILLET 2020",
    numeroJO: "75",
  },
  {
    numero: 12,
    intitule: "Loi n°016/2020 du 17 juillet 2020 portant règlement du budget de l’Etat pour la gestion de l’année 2018",
    datePublicationJO: "21 AOÛT 2020",
    numeroJO: "75 Quater Spécial",
  },
  {
    numero: 13,
    intitule: "Loi n°019/2020 du 17 juillet 2020 portant modification de certaines dispositions de la loi n°014/2019 du 22 janvier 2020 déterminant les ressources et les charges de l’Etat pour l’année 2020",
    datePublicationJO: "20 JUILLET 2020",
    numeroJO: "75 Ter Spécial",
  },
  {
    numero: 14,
    intitule: "Loi organique n°017/2020 du 17 juillet 2020 modifiant et complétant certaines dispositions de la loi organique n°20/2014 du 21 mai 2015 relative aux lois de finances et à l’exécution du budget",
    datePublicationJO: "6 AU 15 AOÛT 2020",
    numeroJO: "78",
  },
  {
    numero: 15,
    intitule: "Loi n°015/2020 du 17 juillet 2020 portant suppression du Fonds National pour le Développement du Sport",
    datePublicationJO: "16 AU 23 AOÛT 2020",
    numeroJO: "79",
  },
  {
    numero: 16,
    intitule: "Loi n°022/2020 du 17 juillet 2020 modifiant et complétant certaines dispositions de la loi n°13/2014 du 07 janvier 2015 fixant le cadre d’exercice de la profession d’Avocat en République Gabonaise",
    datePublicationJO: "16 AU 23 AOÛT 2020",
    numeroJO: "79",
  },
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

const RepertoireLoisPromulgueesPage: React.FC<RepertoireLoisPromulgueesPageProps> = ({ navigateTo }) => {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0); // Pour la sidebar "À la une"

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
                <a href="#" onClick={() => navigateTo('lois')} className="text-blue-600 hover:text-blue-800">Les lois</a>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-900">Répertoire des lois promulguées</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Les lois promulguées</h1>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-800 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tl-lg">
                      N°
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Intitulé de la loi
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Date de publication du JO
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tr-lg">
                      Numéro du JO
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {loisPromulguees.map((loi) => (
                    <tr key={loi.numero} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {loi.numero}
                      </td>
                      <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">
                        {loi.intitule}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {loi.datePublicationJO}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline">
                        {loi.lienJO ? (
                          <a href={loi.lienJO} target="_blank" rel="noopener noreferrer">
                            {loi.numeroJO}
                          </a>
                        ) : (
                          loi.numeroJO
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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

export default RepertoireLoisPromulgueesPage;
