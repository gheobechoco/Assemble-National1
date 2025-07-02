// src/components/MissionsPage.tsx
import React, { useState, useEffect } from 'react'; // Import useState and useEffect for sidebar functionality
import { Home } from 'lucide-react'; // Import Home and FileText icons from Lucide React

// Données pour les articles "À la une" avec des images de remplacement (copied from BureauPage)
const featuredArticles = [
  {
    image: "/images/president-AN-transition.jpeg", // Image of Legislative Works
    title: "Travaux : Plusieurs textes législatifs structurants dont celui...",
    link: "#"
  },
  {
    image: "public/images/cloture-solennelle-premiere=session.jpeg", // Image of Plenary Session 1
    title: "Travaux : Jean François NDONGOU préside une séance plénière",
    link: "#"
  },
  {
    image: "/images/assembler-nat-vote.webp", // Image of Constitutional Reform
    title: "Réforme constitutionnelle : Les enjeux",
    link: "#"
  },
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Budget+2024", // Image of 2024 Budget
    title: "Budget 2024 : Adoption des mesures",
    link: "#"
  }
];

// URLs des images des présidents (placeholders) (copied from BureauPage)
const presidentImages: { [key: string]: string } = {
  "Jean-François NDONGOU": "/images/jean-francois-ndoungou.png", // Image of Jean-François NDONGOU
  "placeholder_member": "https://placehold.co/150x150/e0e0e0/333333?text=Membre" // Generic member image
};

const MissionsPage: React.FC = () => {
  // État pour gérer l'index de l'article "À la une" actuellement affiché (copied from BureauPage)
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  // Effet pour le défilement automatique des articles "À la une" (copied from BureauPage)
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
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        {/* Main Content Area - Adjusted width to accommodate sidebar */}
        <div className="w-full md:w-9/12 px-4">

          {/* Breadcrumb */}
          <div className="mb-6">
            <ul className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <a href="#" className="flex items-center hover:text-blue-600 transition-colors" onClick={(e) => e.preventDefault()}>
                  <Home className="w-4 h-4 mr-1" />
                  <span className="hidden sm:inline">Accueil</span>
                </a>
              </li>
              <li>&gt;</li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors" onClick={(e) => e.preventDefault()}>
                  Présentation
                </a>
              </li>
              <li>&gt;</li>
              <li className="text-blue-800 font-semibold">
                Les missions
              </li>
            </ul>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">Les missions de l'Assemblée Nationale</h2>

          {/* Article Content */}
          <div className="contentArticle text-gray-700 leading-relaxed space-y-4">
            <p className="text-justify">
              L'Assemblée Nationale du Gabon, en tant qu'institution législative, a pour principales missions de représenter le peuple gabonais, de voter les lois et de contrôler l'action du Gouvernement.
            </p>
            <h3 className="text-2xl font-bold mt-8 mb-4">1. La fonction législative</h3>
            <p className="text-justify">
              La mission première de l'Assemblée Nationale est de débattre et de voter les projets de loi présentés par le Gouvernement, ainsi que les propositions de loi émanant des députés. Ce processus garantit que les lois adoptées reflètent les besoins et les aspirations de la population.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Examen des projets et propositions de loi en commission.</li>
              <li>Débat en séance plénière et adoption des textes.</li>
              <li>Vote du budget de l'État.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. La fonction de contrôle de l'action du Gouvernement</h3>
            <p className="text-justify">
              L'Assemblée Nationale exerce un contrôle rigoureux sur l'action du Gouvernement. Ce contrôle s'effectue par divers mécanismes afin de s'assurer de la bonne application des lois et de la gestion des affaires publiques.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Questions orales et écrites aux ministres.</li>
              <li>Commissions d'enquête parlementaires.</li>
              <li>Motions de censure et de confiance.</li>
              <li>Auditions des membres du Gouvernement.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. La fonction de représentation</h3>
            <p className="text-justify">
              Chaque député est le représentant de la Nation toute entière. Ils sont les porte-voix des citoyens et veillent à la prise en compte de leurs préoccupations dans le processus législatif et de contrôle.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Interaction avec les électeurs et les organisations de la société civile.</li>
              <li>Participation aux débats nationaux.</li>
              <li>Promotion des intérêts du Gabon sur la scène internationale.</li>
            </ul>
            <p className="text-justify">
              Ces missions sont essentielles pour le bon fonctionnement de la démocratie gabonaise et pour garantir la transparence et la responsabilité des institutions.
            </p>
          </div>
        </div>

        {/* Sidebar (Right Column) - Copied from BureauPage.tsx */}
        <div className="w-full md:w-3/12 px-4 mt-8 md:mt-0">
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

export default MissionsPage;
