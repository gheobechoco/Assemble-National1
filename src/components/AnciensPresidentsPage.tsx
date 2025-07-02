// src/components/AnciensPresidentsPage.tsx
import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react'; // Importation de l'icône Home

// Interface pour définir la structure d'un président
interface President {
  name: string;
  image: string;
  function: string;
  term: string;
  biography: string; // Ajout du champ biographie
}

// Données pour les articles "À la une" avec des images de remplacement (réutilisées)
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

// URLs des images des présidents
const presidentImages: { [key: string]: string } = {
  "Jean-François NDONGOU": "https://placehold.co/150x150/e0e0e0/333333?text=J.F.+NDONGOU", // Image de Jean-François NDONGOU
  "placeholder_member": "https://placehold.co/150x150/e0e0e0/333333?text=Membre", // Image générique d'un membre
  "BIGMAN Louis Emile": "/images/image_65d03b.jpg", // Chemin vers l'image téléchargée
  "DAMAS ALEKA Georges": "/images/image_65d03b.jpg", // Chemin vers l'image téléchargée
  "INDJENDJET GONDJOUT Paul": "/images/image_65d03b.jpg", // Chemin vers l'image téléchargée
  "BOUMAH Augustin": "/images/image_65d03b.jpg", // Chemin vers l'image téléchargée
  "BOURDES OGOULIGUENDE Jules Aristide": "/images/image_65cd1a.jpg", // Chemin vers l'image téléchargée
  "RAHANDI CHAMBRIER Marcel Eloi": "/images/image_65cd1a.jpg", // Chemin vers l'image téléchargée
  "NZOUBA NDAMA Guy": "/images/image_65cd1a.jpg", // Chemin vers l'image téléchargée
  "ONOUVIET Richard Auguste": "/images/image_65cd1a.jpg", // Chemin vers l'image téléchargée
  "BOUKOUBI Faustin": "/images/image_65ccf6.png", // Chemin vers l'image téléchargée
};

// Liste des anciens présidents avec leurs informations complètes
const anciensPresidents: President[] = [
  {
    name: "BIGMAN Louis Emile",
    image: presidentImages["BIGMAN Louis Emile"],
    function: "Président de l'Assemblée Nationale",
    term: "12 Février 1961 - 12 Avril 1964",
    biography: "Louis Emile Bigman a été le premier président de l'Assemblée Nationale du Gabon après l'indépendance. Il a joué un rôle crucial dans la mise en place des institutions parlementaires du jeune État. Son mandat a été marqué par les défis de la construction nationale et la consolidation de la démocratie naissante."
  },
  {
    name: "DAMAS ALEKA Georges",
    image: presidentImages["DAMAS ALEKA Georges"],
    function: "Président de l'Assemblée Nationale",
    term: "12 Avril 1964 - 12 Avril 1975",
    biography: "Georges Damas Aleka a présidé l'Assemblée Nationale pendant une période de forte croissance économique et de développement des infrastructures au Gabon. Il a contribué à l'élaboration de lois importantes qui ont structuré l'économie et la société gabonaise durant cette décennie."
  },
  {
    name: "INDJENDJET GONDJOUT Paul",
    image: presidentImages["INDJENDJET GONDJOUT Paul"],
    function: "Président de l'Assemblée Nationale",
    term: "12 Avril 1975 - 26 Février 1980",
    biography: "Paul Indjendjet Gondjout est une figure emblématique de la politique gabonaise. Son passage à la tête de l'Assemblée Nationale a été caractérisé par une période de stabilité politique et de renforcement du rôle du parlement dans la vie nationale. Il a également été un acteur majeur dans les relations internationales du Gabon."
  },
  {
    name: "BOUMAH Augustin",
    image: presidentImages["BOUMAH Augustin"],
    function: "Président de l'Assemblée Nationale",
    term: "26 Février 1980 - 20 Novembre 1990",
    biography: "Augustin Boumah a dirigé l'Assemblée Nationale durant une période de transition et de réformes politiques. Son mandat a vu l'introduction de nouvelles lois visant à moderniser le cadre législatif du pays. Il a également œuvré pour une plus grande ouverture du parlement aux préoccupations citoyennes."
  },
  {
    name: "BOURDES OGOULIGUENDE Jules Aristide",
    image: presidentImages["BOURDES OGOULIGUENDE Jules Aristide"],
    function: "Président de l'Assemblée Nationale",
    term: "20 Novembre 1990 - 22 Avril 1993",
    biography: "Jules Aristide Bourdes Ogouliguende a pris la tête de l'Assemblée Nationale à un moment charnière de l'histoire du Gabon, marqué par l'avènement du multipartisme. Il a joué un rôle clé dans les débats et l'adoption des lois qui ont accompagné cette transition démocratique."
  },
  {
    name: "RAHANDI CHAMBRIER Marcel Eloi",
    image: presidentImages["RAHANDI CHAMBRIER Marcel Eloi"],
    function: "Président de l'Assemblée Nationale",
    term: "22 Avril 1993 - 22 Mai 1996",
    biography: "Marcel Eloi Rahandi Chambrier a présidé l'Assemblée Nationale pendant une période de consolidation des acquis démocratiques. Il a mis l'accent sur le renforcement des capacités législatives et le contrôle de l'action gouvernementale, contribuant à l'équilibre des pouvoirs."
  },
  {
    name: "NZOUBA NDAMA Guy",
    image: presidentImages["NZOUBA NDAMA Guy"],
    function: "Président de l'Assemblée Nationale",
    term: "01 Janvier 1997 - 08 Avril 2016",
    biography: "Guy Nzouba Ndama a été l'un des présidents les plus anciens de l'Assemblée Nationale, marquant une longue période de stabilité institutionnelle. Son mandat a été caractérisé par une modernisation des procédures parlementaires et une intensification des relations interparlementaires."
  },
  {
    name: "ONOUVIET Richard Auguste",
    image: presidentImages["ONOUVIET Richard Auguste"],
    function: "Président de l'Assemblée Nationale",
    term: "08 Avril 2016 - 28 Avril 2018",
    biography: "Richard Auguste Onouviét a présidé l'Assemblée Nationale durant une période de défis économiques et sociaux. Il a œuvré pour que le parlement soit à l'écoute des préoccupations des citoyens et pour l'adoption de lois répondant aux besoins du pays."
  },
  {
    name: "BOUKOUBI Faustin",
    image: presidentImages["BOUKOUBI Faustin"],
    function: "Président de l'Assemblée Nationale",
    term: "11 Janvier 2019 - 30 Août 2023",
    biography: "Faustin Boukoubi a été le dernier président de l'Assemblée Nationale avant la transition. Son mandat a été marqué par des débats importants sur les réformes institutionnelles et la préparation des élections à venir. Il a cherché à renforcer la transparence et l'efficacité du travail parlementaire."
  },
];

// Définition de l'interface pour les props du composant, incluant la fonction navigateTo
interface AnciensPresidentsPageProps {
  navigateTo: (page: string, data?: any) => void;
}

const AnciensPresidentsPage: React.FC<AnciensPresidentsPageProps> = ({ navigateTo }) => {
  // État pour gérer l'index de l'article "À la une" actuellement affiché
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

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
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        {/* Zone de contenu principale */}
        <div className="w-full md:w-9/12 px-4">

          {/* Fil d'Ariane */}
          <div className="mb-6">
            <ul className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <a href="#" className="flex items-center hover:text-blue-600 transition-colors" onClick={() => navigateTo('accueil')}>
                  <Home className="w-4 h-4 mr-1" />
                  <span className="hidden sm:inline">Accueil</span>
                </a>
              </li>
              <li>&gt;</li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors" onClick={() => navigateTo('deputes')}>
                  Députés
                </a>
              </li>
              <li>&gt;</li>
              <li className="text-blue-800 font-semibold">
                Les anciens Présidents
              </li>
            </ul>
          </div>

          {/* Titre de la page */}
          <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">
            Les anciens Présidents de l'Assemblée Nationale
          </h2>

          {/* Grille des anciens présidents */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {anciensPresidents.map((president, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-4">
                {/* Cadre de la photo */}
                <div className="relative w-36 h-48 mb-3 p-2 bg-gray-50 border-2 border-gray-300 shadow-lg rounded-md flex items-center justify-center overflow-hidden">
                  <img
                    src={president.image}
                    alt={president.name}
                    className="w-full h-full object-cover rounded-sm"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x200/e0e0e0/333333?text=Image+Non+Trouvée"; }} // Fallback
                  />
                </div>
                <p className="text-gray-800 font-bold text-base mb-1">{president.name}</p>
                <p className="text-gray-600 text-sm mb-1">{president.function}</p>
                <p className="text-gray-500 text-xs">{president.term}</p>
                {/* Bouton "Voir la biographie" */}
                <button
                  onClick={() => navigateTo('president-biography', president)} // Passe l'objet président complet
                  className="mt-2 text-blue-600 hover:underline text-sm"
                >
                  Voir la biographie
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Barre latérale (colonne de droite) */}
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

export default AnciensPresidentsPage;
