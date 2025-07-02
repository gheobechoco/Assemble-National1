// src/components/EvenementsPage.tsx
import React, { useState, useEffect } from 'react';
import { Calendar} from 'lucide-react';

interface EvenementsPageProps {
  navigateTo: (page: string, data?: any) => void;
}

interface Evenement {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
}

// Données fictives pour les événements
const evenements: Evenement[] = [
  {
    image: "https://placehold.co/200x120/e0e0e0/333333?text=Reunion+Bureau", // Image de la réunion du bureau
    title: "Réunion du bureau de l'Assemblée parlementaire de la Francophonie",
    excerpt: "Discours d'ouverture de M. Faustin BOUKOUBI, Président de...",
    date: "01/02/2023",
    link: "#"
  },
  {
    image: "https://placehold.co/200x120/e0e0e0/333333?text=Conference+APF", // Image de la Conférence APF
    title: "Assemblée parlementaire de la Francophonie",
    excerpt: "DISCOURS DE L'HONORABLE ISSAKA SIDIBE, À la 8ème ...",
    date: "17/03/2016",
    link: "#"
  },
  {
    image: "https://placehold.co/200x120/e0e0e0/333333?text=Discours+President+1", // Image du discours du président 1
    title: "Discours du président de l'Assemblée nationale du Gabon",
    excerpt: "Monsieur le Président de l'Assemblée nationale du Gabon ...",
    date: "17/03/2016",
    link: "#"
  },
  {
    image: "https://placehold.co/200x120/e0e0e0/333333?text=Discours+President+2", // Image du discours du président 2
    title: "Discours du président de l'APF, Mesdames et Messieurs...",
    excerpt: "Monsieur le Président de l'APF, Mesdames et Messieurs...",
    date: "17/03/2016",
    link: "#"
  },
  {
    image: "https://placehold.co/200x120/e0e0e0/333333?text=Discours+Premier+Ministre", // Image du discours du Premier Ministre
    title: "Discours d'ouverture du Premier Ministre",
    excerpt: "Monsieur le Premier Ministre, Alors qu'elle entreprend...",
    date: "02/03/2016",
    link: "#"
  },
  {
    image: "https://placehold.co/200x120/e0e0e0/333333?text=Oraison+Funebre", // Image de l'oraison funèbre
    title: "Discours du président de l'Assemblée nationale",
    excerpt: "Oraison Funèbre de l'Honorable Luc MARAT ABYLA...",
    date: "22/01/2016",
    link: "#"
  },
  {
    image: "https://placehold.co/200x120/e0e0e0/333333?text=Journee+Internationale", // Image de la Journée Internationale
    title: "Programme de la Journée Internationale de la Démocratie",
    excerpt: "Programme de la Journée Internationale de la Démocratie...",
    date: "06/09/2015",
    link: "#"
  },
  {
    image: "https://placehold.co/200x120/e0e0e0/333333?text=Discours+Ouverture+2", // Image du discours d'ouverture 2
    title: "Discours d'ouverture du Premier Ministre, Gouvernement",
    excerpt: "Monsieur le Premier Ministre, Gouvernement Madame la...",
    date: "08/09/2015",
    link: "#"
  }
];

// URLs des images des présidents (placeholders)
const presidentImages: { [key: string]: string } = {
  "Jean-François NDONGOU": "https://placehold.co/150x150/e0e0e0/333333?text=J.F.+NDONGOU", // Image de Jean-François NDONGOU
  "placeholder_member": "https://placehold.co/150x150/e0e0e0/333333?text=Membre" // Image générique d'un membre
};

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

const EvenementsPage: React.FC<EvenementsPageProps> = ({ navigateTo }) => {
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
                <a href="#" onClick={() => navigateTo('actualites')} className="text-blue-600 hover:text-blue-800">Actualités</a>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-900">Événements</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Événements</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evenements.map((evenement, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <img
                  src={evenement.image}
                  alt={evenement.title}
                  className="w-full h-40 object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/200x120/e0e0e0/333333?text=Image+Evenement"; }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-700 mb-2 hover:underline cursor-pointer" onClick={() => window.open(evenement.link, '_blank')}>
                    {evenement.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">{evenement.excerpt}</p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{evenement.date}</span>
                  </div>
                </div>
              </div>
            ))}
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

export default EvenementsPage;
