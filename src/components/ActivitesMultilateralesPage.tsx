// src/components/ActivitesMultilateralesPage.tsx
import React, { useState, useEffect } from 'react';
//import { Home, Users, Globe } from 'lucide-react';

interface ActivitesMultilateralesPageProps {
  navigateTo: (page: string, data?: any) => void;
}

interface GroupeAmitie {
  pays: string;
  description: string;
  president?: string; // Nom du président du groupe
  image?: string; // Image du drapeau ou du pays
}

// Données des groupes d'amitié (tirées de l'ancienne ListeGroupes.tsx)
const groupes: GroupeAmitie[] = [
  {
    pays: "Gabon - France",
    description: "Groupe d'amitié parlementaire entre le Gabon et la France, favorisant les échanges bilatéraux.",
    president: "Député Pierre Dupont",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=FR"
  },
  {
    pays: "Gabon - Russie",
    description: "Groupe dédié au renforcement des liens entre les parlements gabonais et russe.",
    president: "Députée Marie Dubois",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=RU"
  },
  {
    pays: "Gabon - Luxembourg",
    description: "Promotion de la coopération parlementaire avec le Luxembourg.",
    president: "Député Jean Martin",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=LU"
  },
  {
    pays: "Gabon - Egypte",
    description: "Échanges et partenariats avec le parlement égyptien.",
    president: "Députée Sophie Leroy",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=EG"
  },
  {
    pays: "Gabon - Italie",
    description: "Développement des relations interparlementaires avec l'Italie.",
    president: "Député Marc Petit",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=IT"
  },
  {
    pays: "Gabon - République Démocratique du Congo",
    description: "Coopération parlementaire avec la RDC.",
    president: "Députée Fatou Diallo",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=RDC"
  },
  {
    pays: "Gabon - Île Maurice",
    description: "Renforcement des liens avec le parlement mauricien.",
    president: "Député Antoine Dubois",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=MU"
  },
  {
    pays: "Gabon - Centrafrique",
    description: "Coopération avec la République Centrafricaine.",
    president: "Députée Amina Traoré",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=RCA"
  },
  {
    pays: "Gabon - Allemagne",
    description: "Échanges avec le parlement allemand.",
    president: "Député Thomas Müller",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=DE"
  },
  {
    pays: "Gabon - Koweït",
    description: "Développement des relations avec le Koweït.",
    president: "Députée Fatima Al-Sabah",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=KW"
  },
  {
    pays: "Gabon - Canada",
    description: "Coopération parlementaire avec le Canada.",
    president: "Député David Tremblay",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=CA"
  },
  {
    pays: "Gabon - Burkina-Faso",
    description: "Renforcement des liens avec le Burkina Faso.",
    president: "Députée Aïcha Ouédraogo",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=BF"
  },
  {
    pays: "Gabon - Belgique",
    description: "Coopération parlementaire avec la Belgique.",
    president: "Député Charles Leclerc",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=BE"
  },
  {
    pays: "Gabon - Maroc",
    description: "Échanges avec le parlement marocain.",
    president: "Député Rachid Benali",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=MA"
  },
  {
    pays: "Gabon - Sénégal",
    description: "Renforcement des liens avec le Sénégal.",
    president: "Députée Khadija Touré",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=SN"
  },
  {
    pays: "Gabon - Cameroun",
    description: "Coopération parlementaire avec le Cameroun.",
    president: "Député Jean-Luc Mbarga",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=CM"
  },
  {
    pays: "Gabon - Japon",
    description: "Développement des relations avec le Japon.",
    president: "Députée Akiko Tanaka",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=JP"
  },
  {
    pays: "Gabon - Chine",
    description: "Échanges avec le parlement chinois.",
    president: "Député Li Wei",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=CN"
  },
  {
    pays: "Gabon - Guinée-Équatoriale",
    description: "Coopération parlementaire avec la Guinée-Équatoriale.",
    president: "Député Obiang Nguema",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=GQ"
  },
  {
    pays: "Gabon - Grande Bretagne",
    description: "Renforcement des liens avec le parlement britannique.",
    president: "Députée Sarah Johnson",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=UK"
  },
  {
    pays: "Gabon - Corée du Sud",
    description: "Développement des relations avec la Corée du Sud.",
    president: "Député Kim Min-jun",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=KR"
  },
  {
    pays: "Gabon - Mali",
    description: "Coopération parlementaire avec le Mali.",
    president: "Député Moussa Konaté",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=ML"
  },
  {
    pays: "Gabon - Bénin",
    description: "Renforcement des liens avec le Bénin.",
    president: "Députée Adja Diallo",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=BJ"
  },
  {
    pays: "Gabon - Congo Brazzaville",
    description: "Coopération parlementaire avec le Congo Brazzaville.",
    president: "Député Jean-Pierre Ngoma",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=CG"
  },
  {
    pays: "Gabon - Togo",
    description: "Renforcement des liens avec le Togo.",
    president: "Députée Ayaovi Mensah",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=TG"
  },
  {
    pays: "Gabon - États-Unis",
    description: "Échanges avec le congrès américain.",
    president: "Député John Smith",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=US"
  },
  {
    pays: "Gabon - Israël",
    description: "Développement des relations avec Israël.",
    president: "Député David Cohen",
    image: "https://placehold.co/100x60/e0e0e0/333333?text=IL"
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

const ActivitesMultilateralesPage: React.FC<ActivitesMultilateralesPageProps> = ({ navigateTo }) => {
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
                <a href="#" onClick={() => navigateTo('relations')} className="text-blue-600 hover:text-blue-800">Relations internationales</a>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-900">Activités multilatérales</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Activités multilatérales</h1>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              L'Assemblée Nationale entretient, au plan bilatéral, des relations de coopération avec plusieurs Parlements étrangers par le biais des groupes d'amitié. Il s'agit des groupes d'amitié suivants :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupes.map((groupe, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 flex items-center space-x-4">
                  {groupe.image && (
                    <img
                      src={groupe.image}
                      alt={`Drapeau de ${groupe.pays}`}
                      className="w-16 h-10 object-cover rounded-md border border-gray-300"
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/100x60/e0e0e0/333333?text=Drapeau"; }}
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-1">{groupe.pays}</h3>
                    <p className="text-gray-700 text-sm">{groupe.description}</p>
                    {groupe.president && (
                      <p className="text-xs text-gray-500 mt-1">Président : {groupe.president}</p>
                    )}
                  </div>
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

export default ActivitesMultilateralesPage;
