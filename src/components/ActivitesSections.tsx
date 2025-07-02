// src/components/ActivitesSections.tsx
import React, { useState, useEffect } from 'react';

interface ActivitesSectionsProps {
  navigateTo: (page: string, data?: any) => void;
}

interface Activite {
  titre: string;
  description: string;
  date: string;
  image?: string;
}

const activites: Activite[] = [
  {
    titre: "Participation à la 148ème Assemblée de l'UIP",
    description: "La délégation gabonaise a pris part aux débats sur la coopération internationale pour la paix et la sécurité.",
    date: "Mars 2024",
    image: "https://placehold.co/400x200/e0e0e0/333333?text=UIP+Assemblee"
  },
  {
    titre: "Séminaire de l'APF sur la législation climatique",
    description: "Les parlementaires francophones ont échangé sur les meilleures pratiques en matière de législation environnementale.",
    date: "Février 2024",
    image: "https://placehold.co/400x200/e0e0e0/333333?text=APF+Climat"
  },
  {
    titre: "Réunion du Bureau du Parlement Panafricain",
    description: "Le Gabon a participé à la préparation de la prochaine session plénière du PAP, axée sur l'intégration africaine.",
    date: "Janvier 2024",
    image: "https://placehold.co/400x200/e0e0e0/333333?text=PAP+Bureau"
  },
];

const presidentImages: { [key: string]: string } = {
  "Jean-François NDONGOU": "https://placehold.co/150x150/e0e0e0/333333?text=J.F.+NDONGOU",
  "placeholder_member": "https://placehold.co/150x150/e0e0e0/333333?text=Membre"
};

const featuredArticles = [
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Travaux+Legislatifs",
    title: "Travaux : Plusieurs textes législatifs structurants dont celui...",
    link: "#"
  },
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Seance+Pleniere+1",
    title: "Travaux : Jean François NDONGOU préside une séance plénière",
    link: "#"
  },
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Reforme+Constitutionnelle",
    title: "Réforme constitutionnelle : Les enjeux",
    link: "#"
  },
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Budget+2024",
    title: "Budget 2024 : Adoption des mesures",
    link: "#"
  }
];

const ActivitesSections: React.FC<ActivitesSectionsProps> = ({ navigateTo }) => {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArticleIndex((prevIndex) =>
        (prevIndex + 1) % featuredArticles.length
      );
    }, 4000);

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
                <a href="#" onClick={() => navigateTo('relations')} className="text-blue-600 hover:text-blue-800">Relations internationales</a>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <a href="#" onClick={() => navigateTo('activites-multilaterales')} className="text-blue-600 hover:text-blue-800">Activités multilatérales</a>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-900">Activités des Sections</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Activités des Sections</h1>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Découvrez les dernières activités et participations de l'Assemblée Nationale du Gabon au sein des différentes sections des organisations interparlementaires.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activites.map((activite, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  {activite.image && (
                    <img
                      src={activite.image}
                      alt={activite.titre}
                      className="w-full h-48 object-cover rounded-md mb-4"
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x200/e0e0e0/333333?text=Image+Activite"; }}
                    />
                  )}
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">{activite.titre}</h3>
                  <p className="text-gray-700 mb-4">{activite.description}</p>
                  <p className="text-sm text-gray-500">Date : {activite.date}</p>
                </div>
              ))}
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
                onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=President"; }}
              />
              <p className="text-gray-600 text-sm font-semibold">Président de l'Assemblée Nationale de la Transition</p>
            </div>
          </div>

          {/* Section "À la une" avec défilement automatique */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 overflow-hidden relative h-64">
            <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">À la une</h3>
            <div className="relative w-full h-48">
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
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/270x186/e0e0e0/333333?text=Article"; }}
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

export default ActivitesSections;
