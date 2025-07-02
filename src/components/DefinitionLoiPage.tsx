// src/components/DefinitionLoiPage.tsx
import React, { useState, useEffect } from 'react';
//import { Home, Search, Users, FileText, Video, Building, Globe } from 'lucide-react';

// Interface pour les props de la page
interface DefinitionLoiPageProps {
  navigateTo: (page: string, data?: any) => void;
}

// Données pour les articles "À la une" avec des images de remplacement
const featuredArticles = [
  {
    image: "/images/president-AN-transition.jpeg", // Image des Travaux Législatifs
    title: "Travaux : Plusieurs textes législatifs structurants dont celui...",
    link: "#"
  },
  {
    image: "/images/jean-francois-ndoungou.png", // Image d'une Séance Plénière 1
    title: "Travaux : Jean François NDONGOU préside une séance plénière",
    link: "#"
  },
  {
    image: "/images/assembler-nat-vote.webp", // Image d'une Réforme Constitutionnelle
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

const DefinitionLoiPage: React.FC<DefinitionLoiPageProps> = ({ navigateTo }) => {
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
                <span className="text-gray-900">Définition de la loi</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Définition de la loi</h1>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
            <p className="text-gray-700 mb-4">
              La loi désigne une règle, une norme, une prescription ou une obligation qui s'impose à tous et dont le non-respect est sanctionné par la force publique.
            </p>
            <p className="text-gray-700 mb-4">
              Les matières relevant de la loi sont prévues à l'article 47 de la Constitution.
            </p>
            <p className="text-gray-700 mb-4">
              La loi est votée par le Parlement après le dépôt d'un projet de loi initié par le Gouvernement, ou d'une proposition de loi d'un parlementaire.
            </p>
            <p className="text-gray-700 mb-4">
              Après son adoption par le Parlement, elle est promulguée par le Président de la République.
            </p>
            <p className="text-gray-700 mb-6">
              Il existe deux (2) types de texte : le projet de loi et la proposition de loi (article 53 de la Constitution).
              Chacun de ces textes suit un circuit différent.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-300 pb-2">1- Le projet de loi</h2>
            <p className="text-gray-700 mb-4">
              Tout projet de texte législatif est élaboré par les services compétents du Ministère initiateur.
            </p>
            <p className="text-gray-700 mb-4">
              Le projet est soumis à l'examen par le Gouvernement siégeant en Conseil Interministériel puis transmis au Conseil d'Etat pour avis avant adoption par le Conseil des Ministres.
            </p>
            <p className="text-gray-700 mb-6">
              Le projet de texte transmis au Secrétariat Général du Gouvernement est accompagné :
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-6 space-y-2">
              <li>d'une version électronique ;</li>
              <li>d'une note de présentation ;</li>
              <li>d'un exposé de motifs ;</li>
              <li>d'une fiche technique.</li>
            </ul>
            <p className="text-gray-700 mb-8">
              Ce projet de texte peut être, selon le cas, accompagné d'une étude d'impact faisant ressortir notamment les aspects administratifs, financiers et économiques.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-300 pb-2">2- La proposition de loi</h2>
            <p className="text-gray-700 mb-4">
              La proposition de loi est initiée par un député. Elle est déposée au Bureau qui est l'organe exécutif de l'Assemblée nationale et qui se prononce sur la recevabilité de ce texte.
            </p>
            <p className="text-gray-700 mb-4">
              Le Bureau doit observer si la proposition de loi respecte les dispositions de l'article 57 de la Constitution et de l'article 102 du Règlement de l'Assemblée nationale.
            </p>
            <p className="text-gray-700 mb-4">
              Lorsque la proposition de loi est acceptée par le Bureau de l'Assemblée nationale, elle suit son cours dans l'instance de la Conférence des Présidents qui se prononce également.
            </p>
            <p className="text-gray-700 mb-4">
              Validée pendant la Conférence des Présidents, la proposition de loi est transmise à la Commission générale permanente compétente.
            </p>
            <p className="text-gray-700 mb-4">
              La proposition de loi peut être examinée en commission générale ou en commission ad hoc.
            </p>
            <p className="text-gray-700 mb-4">
              À l'issue de ces travaux, la commission élaborera un rapport qui sera examiné et adopté en séance plénière.
            </p>
            <p className="text-gray-700 mb-4">
              En cas d'adoption de la proposition de loi en des termes identiques par les deux Chambres du Parlement, celle-ci est immédiatement transmise au Gouvernement via le Ministère chargé des Relations avec le Parlement.
            </p>
            <p className="text-gray-700 mb-4">
              Le Gouvernement a un délai de soixante jours pour se prononcer.
            </p>
            <p className="text-gray-700">
              Passé ce délai, la proposition de loi est d'office mise en délibération au sein du Parlement conformément aux dispositions de l'article 54 de la Constitution.
            </p>
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

export default DefinitionLoiPage;
