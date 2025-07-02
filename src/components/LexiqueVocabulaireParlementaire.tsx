// src/components/LexiqueVocabulaireParlementaire.tsx
import React, { useState, useEffect } from 'react';
import {  Search} from 'lucide-react';

// Interface pour les props de la page
interface LexiqueVocabulaireParlementaireProps {
  navigateTo: (page: string, data?: any) => void;
}

// Interface pour un terme du lexique
interface LexiqueTerm {
  term: string;
  definition: string;
}

// Données fictives pour le lexique basées sur les images fournies
const lexiqueData: LexiqueTerm[] = [
  {
    term: "AMENDEMENT",
    definition: "Modification d'un texte de loi (projet ou d'une proposition)."
  },
  {
    term: "AUDITIONS",
    definition: "Procédure par laquelle une instance parlementaire, le plus souvent une commission, entend des personnes ou des représentants de groupe de pression sur des sujets d'intérêt public."
  },
  {
    term: "ARTICLES",
    definition: "Parties d'un texte de loi correspondant à ses diverses dispositions. Les articles sont numérotés dans l'ordre et eux-mêmes divisés, le cas échéant, en alinéas. Le nombre d'articles que contient une loi est très variable : d'un seul à plusieurs centaines. Les Assemblée votent sur chaque article."
  },
  {
    term: "BICAMERISME OU BICAMERALISME",
    definition: "Mode d'organisation d'un parlement consistant en sa division en deux assemblées dont les membres sont désignés distinctement. Au Gabon, le parlement se compose de l'Assemblée Nationale et du Sénat."
  },
  {
    term: "BUREAU DE L'ASSEMBLÉE NATIONALE",
    definition: "Le Bureau est l'organe directeur de l'Assemblée. Il comprend 15 membres : un président, et six vice-présidents, deux questeurs et six secrétaire. Il est l'organe collectif de direction chargé de la préparation des travaux et des délibérations de l'Assemblée nationale, ainsi que de l'organisation des services. Le bureau est composé de 15 députés (compris le président) élus par leurs pairs. Il est dirigé par le Président de l'Assemblée nationale, assisté dans sa tâche par : - Six vice-présidents, qui assistent le Président dans l'exercice des attributions qui lui sont dévolues et le suppléent en cas d'absence ou d'empêchement selon l'ordre de leur rang. - Deux Questeurs, qui sont chargé sous l'autorité du Président de l'Assemblée nationale, de la coordination et du contrôle de la gestion des services sociaux et financiers de l'Institution. - Six Secrétaires qui surveillent la rédaction des Procès-verbaux (P.V.) de séance. Ils inscrivent les députés qui demandent la parole, contrôlent les appels nominaux, constatent les votes à mains levées ou par assis - debout et dépouillent les scrutins."
  },
  {
    term: "COMMISSIONS",
    definition: "Les Commissions sont des formations restreintes de travail. Elles sont spécialisées, chacune selon leur compétence, d'instruire l'examen des affaires soumises à l'Assemblée : - Les commissions permanentes ; - Les commissions d'enquête et de contrôle ; - Les commissions ad hoc."
  },
  {
    term: "COMMISSIONS PERMANENTES",
    definition: "Elles ont pour objet d'examiner les textes de lois et les questions relevant de leur domaine de compétence, avant leur examen et adoption en séance publique. On distingue six commissions permanentes : - La commission des Lois, des Affaires administratives et des Droits de l'Homme ; - La commission des Affaires étrangères, de la Coopération internationale et de la Défense nationale ; - La commission de la Planification, de l'Aménagement du Territoire, de l'Equipement et de l'Environnement ; - La commission des Finances, du Budget et de la Comptabilité publique ; - La commission des Affaires économiques, de la Production et du Développement ; - La commission des Affaires culturelles, sociales et de la Communication."
  },
  {
    term: "COMMISSION D'ENQUÊTE ET DE CONTRÔLE",
    definition: "Ce sont des formations temporaires que l'Assemblée nationale crée pour recueillir des informations sur des faits résolus ou appréciés au sujet de la gestion d'un service public, d'une entreprise publique ou para-publique. Leur existence prend fin après le dépôt du rapport de mission."
  },
  {
    term: "COMMISSIONS AD HOC",
    definition: "Ce sont aussi, au même titre que les commissions d'enquête et de contrôle, des formations temporaires que les deux Chambres du Parlement peuvent créer pour trouver la réponse à des questions individuelles, par exemple : statuer sur une requête de levée d'immunité parlementaire ou examiner une demande de mise en accusation du Président de la République devant la Haute Cour de Justice."
  },
  {
    term: "CONFÉRENCE DES PRÉSIDENTS",
    definition: "La Conférence des Présidents est chargée de confectionner le programme de travail de l'Assemblée nationale. Ce programme, sorte d'ordre du jour, comporte d'une part l'examen des projets et propositions de loi et, d'autre par, les questions écrites ou orales, les interpellations et les questions relatives au bon déroulement du travail parlementaire. La Conférence des Présidents est composée du Président de l'Assemblée nationale, des six vice-présidents, des Présidents des groupes politiques, des Présidents et vice-présidents des commissions permanentes. Les secrétaires du Bureau de l'Assemblée nationale ainsi que les Questeur prennent part à la Conférence, sans voix délibérative. La Conférence des Présidents est convoquée par le Président de l'Assemblée nationale au début de chaque session et chaque fois qu'il l'estime nécessaire."
  },
  {
    term: "CONGRÈS DU PARLEMENT",
    definition: "Réunion extraordinaire qui rassemble à moment d'une mandature les parlementaires et le Président de la République pour se prononcer sur des orientations politiques de la nation."
  },
  {
    term: "DÉPÔT D'UN TEXTE DE LOI",
    definition: "C'est le fait pour le gouvernement, un parlementaire, ou un ensemble de parlementaire de transmettre son texte de loi au Parlement, sous réserve de sa recevabilité prononcée par le Bureau de la chambre après avis conforme de la conférence des présidents."
  },
  {
    term: "EXPOSÉ DES MOTIFS",
    definition: "C'est un des éléments, avec le décret ou la lettre de transmission, qui accompagnent le texte de loi. Il indique les raisons lesquelles le texte est soumis au Parlement, l'esprit dont il procède et les objectifs qu'il se fixe."
  },
  {
    term: "GROUPE PARLEMENTAIRE",
    definition: "C'est un organe de l'Assemblée nationale dans lequel les députés se regroupent par affinité politique. Les groupes parlementaires sont mis en place au début de la législature. Chaque groupe parlementaire comprend au moins 6 députés soit 5% du nombre total (120)."
  },
  {
    term: "HEMICYCLE",
    definition: "Salle en forme de demi-cercle où se réunissent les députés lors des séances plénières. Elles peuvent être publiques ou à huis clos."
  },
  {
    term: "IMMUNITÉ PARLEMENTAIRE",
    definition: "C'est un régime juridique dont bénéficie les parlementaires afin de pouvoir exercer leur mandat en toute indépendance."
  },
  {
    term: "INCOMPATIBILITÉ",
    definition: "Interdiction faite aux parlementaires de cumuler leur mandat avec d'autres fonctions publiques ou privées."
  },
  {
    term: "INTERSESSION PARLEMENTAIRE",
    definition: "Période de vacances des députés. Elle dure 2 mois et leur permet d'aller au contact de leurs électeurs pour un compte rendu des travaux effectués au cour de la session écoulée."
  },
  {
    term: "JOURNAL OFFICIEL",
    definition: "C'est un organe de la République, chargé de la publication de tous les textes de loi et certains textes administratifs."
  },
  {
    term: "LECTURE",
    definition: "Phase d'examen d'un texte de loi dépose devant une Assemblée. Cet examen peut se poursuivre en deuxième, troisième, voire quatrième lecture (si le gouvernement ne décide pas de réunir une commission mixte paritaire) tant que les articles n'ont pas été adoptés en termes identique par les deux chambres."
  },
  {
    term: "LOIS (OU TEXTE LÉGISLATIF)",
    definition: "On peut définir la Loi comme un ensemble de règles applicables à tous, définissant les droits et les devoirs de chaque citoyen. C'est la loi qui structure le fonctionnement de notre société. Sans loi, c'est l'anarchie qui régnerait. On distingue trois sortes de lois : la loi ordinaire, la loi organique et la loi de finances ou budget de l'Etat."
  }
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


const LexiqueVocabulaireParlementaire: React.FC<LexiqueVocabulaireParlementaireProps> = ({ navigateTo }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLexique, setFilteredLexique] = useState(lexiqueData);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0); // Pour la sidebar "À la une"

  useEffect(() => {
    const current = lexiqueData.filter(term =>
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLexique(current);
  }, [searchTerm]);

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

  // Fonction pour regrouper les termes par initiale
  const groupLexiqueByInitial = (data: LexiqueTerm[]) => {
    return data.reduce((acc, item) => {
      const initial = item.term.charAt(0).toUpperCase();
      if (!acc[initial]) {
        acc[initial] = [];
      }
      acc[initial].push(item);
      return acc;
    }, {} as { [key: string]: LexiqueTerm[] });
  };

  const groupedLexique = groupLexiqueByInitial(filteredLexique);
  const sortedInitials = Object.keys(groupedLexique).sort();

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
                <a href="#" onClick={() => navigateTo('travaux')} className="text-blue-600 hover:text-blue-800">Travaux parlementaires</a>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-900">Lexique Vocabulaire Parlementaire</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Lexique Vocabulaire Parlementaire</h1>

          {/* Search Bar */}
          <div className="mb-8 flex items-center border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="text"
              placeholder="Rechercher un terme..."
              className="flex-grow px-4 py-3 text-gray-700 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="p-3 bg-gray-100 border-l border-gray-300">
              <Search className="w-5 h-5 text-gray-500" />
            </div>
          </div>

          {sortedInitials.length > 0 ? (
            sortedInitials.map((initial) => (
              <div key={initial} className="mb-8">
                <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-300 pb-2">{initial}</h2>
                <div className="space-y-6">
                  {groupedLexique[initial].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.term}</h3>
                      <p className="text-gray-700">{item.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-600">
              Aucun terme trouvé pour les critères de recherche.
            </div>
          )}
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

export default LexiqueVocabulaireParlementaire;
