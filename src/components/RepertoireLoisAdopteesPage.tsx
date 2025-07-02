// src/components/RepertoireLoisAdopteesPage.tsx
import React, { useState, useEffect } from 'react';


// Interface pour les props de la page
interface RepertoireLoisAdopteesPageProps {
  navigateTo: (page: string, data?: any) => void;
}

// Définition du type pour une loi
interface Loi {
  numero: number;
  intitule: string;
  datePublicationJO: string;
  numeroJO: string;
  lienJO?: string; // Lien optionnel vers le Journal Officiel
}

// Données fictives pour le tableau des lois adoptées
const loisAdoptees: Loi[] = [
  {
    numero: 1,
    intitule: "Proposition de résolution portant modification du Règlement de l'Assemblée Nationale",
    datePublicationJO: "26/02/2019",
    numeroJO: "Adopté le",
  },
  {
    numero: 2,
    intitule: "Projet de loi portant réglementation du secteur des Hydrocarbures en République Gabonaise.",
    datePublicationJO: "03/05/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/2507-007-jo-2019/"
  },
  {
    numero: 3,
    intitule: "Projet de loi autorisant l'État Gabonais à contracter un emprunt de cent soixante-quinze millions neuf cent mille (175.900.000) euros auprès de la Banque Internationale pour la Reconstruction et le Développement (BIRD).",
    datePublicationJO: "03/05/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/6401-001-2019-/"
  },
  {
    numero: 4,
    intitule: "Projet de loi portant Code des Eaux et Forêts en République Gabonaise.",
    datePublicationJO: "03/05/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/3676-15-2010/"
  },
  {
    numero: 5,
    intitule: "Projet de loi portant réglementation du secteur Tourisme en République Gabonaise.",
    datePublicationJO: "Adopté le",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/5546-00120-jo-mr-/"
  },
  {
    numero: 6,
    intitule: "Projet de loi autorisant la ratification du Compromis portant saisine de la Cour Internationale de Justice sur le différend frontalier sur l'île Mbanié entre la République Gabonaise et la République de Guinée Équatoriale.",
    datePublicationJO: "24/06/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/5580-004-2019-/"
  },
  {
    numero: 7,
    intitule: "Projet de loi autorisant la ratification de l'Accord portant création de la Zone de Libre Échange Commerciale Africaine adopté le 21 mars 2018 à Kigali.",
    datePublicationJO: "24/06/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/4807-325-cc-/"
  },
  {
    numero: 8,
    intitule: "Projet de loi organique portant organisation de la Justice.",
    datePublicationJO: "12/06/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/2754-043-cc-/"
  },
  {
    numero: 9,
    intitule: "Projet de loi organique fixant l'organisation, la composition, la compétence et le fonctionnement des juridictions de l'ordre judiciaire.",
    datePublicationJO: "12/06/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/5160-008-2019-/"
  },
  {
    numero: 10,
    intitule: "Projet de loi organique fixant l'organisation, la composition, la compétence, les règles de fonctionnement et la procédure applicable devant la Cour de Justice de la République.",
    datePublicationJO: "12/06/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/4961-327-cc-/"
  },
  {
    numero: 11,
    intitule: "Projet de loi portant organisation de l'état-civil en République Gabonaise.",
    datePublicationJO: "12/06/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/1713-004-2015/"
  },
  {
    numero: 12,
    intitule: "Proposition de loi portant protection et organisation du patrimoine national.",
    datePublicationJO: "26/06/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/17522-00182-pr-mefpncpat-/"
  },
  {
    numero: 13,
    intitule: "Projet de loi portant organisation et fonctionnement des régimes de Sécurité Sociale en République Gabonaise.",
    datePublicationJO: "26/06/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/5359-000137-pe-mfpssn-/"
  },
  {
    numero: 14,
    intitule: "Projet de loi portant suppression de certains services publics.",
    datePublicationJO: "26/06/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/4745-015-cc-/"
  },
  {
    numero: 15,
    intitule: "Projet de loi portant ratification de l'ordonnance n° 00001/PR/2019 du 01/01/2019 autorisant l'État Gabonais à contracter un emprunt de cent millions (100.000.000) euros auprès de la Banque Africaine de Développement (BAD).",
    datePublicationJO: "12/06/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/5603-00163-pc-/"
  },
  {
    numero: 16,
    intitule: "Projet de loi portant ratification de l'ordonnance n° 00002/PR/2019 du 01/01/2019 autorisant l'État Gabonais à contracter un emprunt de soixante-deux millions sept cent quarante mille neuf cent (62.740.900) euros, soit quarante et un milliards cent cinquante-cinq millions trois cent trente-trois mille cinq cent quarante et un (41.155.333.541) FCFA auprès de la Banque Africaine de Développement (BAD).",
    datePublicationJO: "12/06/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/5606-00164-pc-/"
  },
  {
    numero: 17,
    intitule: "Projet de loi instituant la contribution de solidarité sur les hauts revenus.",
    datePublicationJO: "12/06/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/5439-00097-pr-mdfpssn-/"
  },
  {
    numero: 18,
    intitule: "Projet de loi portant modification de certaines dispositions de la loi n°13/96 du 15 avril 1996 portant création du Conseil National de la Démocratie modifiée par loi n°004/2015 du 08 septembre 2015.",
    datePublicationJO: "12/06/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/3871-004-2015-/"
  },
  {
    numero: 19,
    intitule: "Projet de loi autorisant l'État Gabonais à contracter un emprunt quarante et deux millions (42.000.000) d'Euros soit vingt-sept milliards cinq cent cinquante millions cent quarante-quatre mille (27.550.144.000) FCFA auprès de la Banque Africaine de Développement (BAD) agissant en qualité d'administrateur de Fonds Spécial Africa Growing Together Fund (AGTF).",
    datePublicationJO: "26/06/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/5600-010-2019-/"
  },
  {
    numero: 20,
    intitule: "Projet de loi autorisant l'État Gabonais à contracter un emprunt de soixante-quinze millions quatre cent mille (75.400.000) Euros soit quarante-neuf milliards cent cinquante-neuf millions trois cent trente millions cent cinquante-sept mille huit cent (49.459.330.157.800) FCFA auprès de la Banque Africaine de Développement (BAD).",
    datePublicationJO: "26/06/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/5601-011-2019-/"
  },
  {
    numero: 21,
    intitule: "Projet de loi portant création, attribution et organisation de l'Office National de Développement du Sport et de la Culture.",
    datePublicationJO: "26/06/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/12076-085-cc-/"
  },
  {
    numero: 22,
    intitule: "Projet de loi autorisant le Président de la République à légiférer par ordonnances pendant l'intersession parlementaire.",
    datePublicationJO: "26/06/2019",
    numeroJO: "Adopté le",
    lienJO: "http://journal-officiel.ga/10611-11-89/"
  },
  {
    numero: 23,
    intitule: "Projet de loi de Finances exercice 2020.",
    datePublicationJO: "23 JANVIER 2020",
    numeroJO: "N°51 BIS SPECIAL",
  },
  {
    numero: 24,
    intitule: "Proposition de loi modifiant et complétant certaines dispositions de la loi n°13/2014 du 07 janvier 2015 fixant le cadre d'exercice de la profession d'Avocat en République Gabonaise.",
    datePublicationJO: "16 au 23 AOÛT 2020",
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

const RepertoireLoisAdopteesPage: React.FC<RepertoireLoisAdopteesPageProps> = ({ navigateTo }) => {
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
                <span className="text-gray-900">Répertoire des lois adoptées</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Les lois adoptées</h1>

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
                  {loisAdoptees.map((loi) => (
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

export default RepertoireLoisAdopteesPage;
