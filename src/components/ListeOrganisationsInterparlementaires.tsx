    // src/components/ListeOrganisationsInterparlementaires.tsx
import React, { useState, useEffect } from 'react';
//import { Home, FileText, Video, Building, Globe } from 'lucide-react';

interface ListeOrganisationsInterparlementairesProps {
  navigateTo: (page: string, data?: any) => void;
}

interface Organisation {
  nom: string;
  description: string;
  lienSite?: string;
}

const organisations: Organisation[] = [
  {
    nom: "Union Interparlementaire (UIP)",
    description: "L'UIP est l'organisation mondiale des parlements. Elle promeut la démocratie parlementaire et travaille pour la paix et la coopération entre les peuples par le dialogue politique et l'action parlementaire.",
    lienSite: "https://www.ipu.org/fr"
  },
  {
    nom: "Assemblée Parlementaire de la Francophonie (APF)",
    description: "L'APF est une assemblée consultative du monde francophone, qui regroupe des parlementaires de pays partageant la langue française. Elle promeut la démocratie, l'État de droit et les droits de l'homme.",
    lienSite: "https://www.apf.parlementaires.org/"
  },
  {
    nom: "Parlement Panafricain (PAP)",
    description: "Le Parlement Panafricain est l'organe législatif de l'Union Africaine. Il vise à assurer la pleine participation des peuples africains au développement et à l'intégration économique du continent.",
    lienSite: "https://www.parliament.gov.za/pap"
  },
  {
    nom: "Parlement de la Communauté Économique des États de l'Afrique Centrale (CEMAC)",
    description: "Le Parlement de la CEMAC est l'organe législatif de la Communauté Économique des États de l'Afrique Centrale. Il a pour mission de contrôler l'action de la Commission de la CEMAC et d'harmoniser les législations des États membres.",
    lienSite: "https://www.cemac.int/institutions/parlement"
  },
  {
    nom: "Assemblée Parlementaire Paritaire ACP-UE",
    description: "L'Assemblée Parlementaire Paritaire (APP) est une institution consultative qui rassemble des parlementaires de l'Union européenne et des États d'Afrique, des Caraïbes et du Pacifique (ACP). Elle promeut le dialogue politique et le développement durable.",
    lienSite: "https://www.europarl.europa.eu/delegations/fr/d-acp/parliamentary-assembly"
  }
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

const ListeOrganisationsInterparlementaires: React.FC<ListeOrganisationsInterparlementairesProps> = ({ navigateTo }) => {
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
                <span className="text-gray-900">Liste des organisations interparlementaires</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Liste des organisations interparlementaires</h1>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              L'Assemblée Nationale du Gabon est membre de plusieurs organisations interparlementaires, contribuant ainsi au dialogue et à la coopération à l'échelle régionale et mondiale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {organisations.map((org, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">{org.nom}</h3>
                  <p className="text-gray-700 mb-4">{org.description}</p>
                  {org.lienSite && (
                    <a
                      href={org.lienSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                      Visiter le site
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  )}
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

export default ListeOrganisationsInterparlementaires;
