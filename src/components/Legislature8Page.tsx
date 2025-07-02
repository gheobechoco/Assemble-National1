// src/components/Legislature8Page.tsx
import React, { useState, useEffect } from 'react';


// Définition de l'interface pour les props du composant
interface Legislature8PageProps {
  navigateTo: (page: string) => void;
}

// Données des députés pour la 8ème Législature, organisées par province
const deputes8emeLegislature = {
  "Estuaire": [
    "Victoire LASSENI-DUBOZE", "Joseph LOUEMBE", "Laurent Thierry ESSONE-NDONG",
    "Gaubert F. Xavier OBIANG-NDONG", "Delphine YEYET PRADINES", "Jean-Boniface ASSELE",
    "Marcel-Eloi CHAMBRIER-RAHANDI", "Gabriel Désiré ANGUILE", "Thomas MOUELE-MADOUGOUNG",
    "Amand ENDAMNE MBA", "Edouard NDONG-NGUEMA", "Paul BIYOGHE-MBA",
    "Adrien NKOGHE-ESSINGONE", "Benoit NZOGHE-MBA", "Jean-Baptiste OBIANG-EKOMI",
    "Michel NGUEMA-TOME", "Gabriel EYEGHE-EKOMI", "Jean-Louis OBAME-ABESSOLO"
  ],
  "Haut-Ogooué": [
    "Julien ANKAMBI", "Léonard ANDJEMBE", "Jean-Baptiste YAMA-LEGNONGO",
    "Luc OKENKALI", "Faustin ODOUGA", "Georges ONGOUORI", "Sidoine NEMBE",
    "Jules KAMI", "Jean-Marie AKEYI", "Paul BONGUE-BOMA",
    "Delmond N'GAYIS-OTOUNGA TCHIEME", "Luc MARAT-ABYLA", "Fabien OMBOUIMA",
    "Antoine AYATSOU", "Ludovic NGONDIGA", "Ali Ben BONGO ONDIMBA",
    "Jérôme-René KOUPANGOYE"
  ],
  "Moyen-Ogooué": [
    "Emmanuel RANOZINAULT-ATOKA", "Madeleine NDINGA née NGOLET",
    "Hervé OSSAMANE-AUNOVIET", "J. Bernard M'PANINGANI-N'GOWET",
    "Jean-Marie MBEKOUET", "André-Richard MOUSSOUNDA-MIKALA",
    "Emmanuel AKOGHE-MBA", "Pierre Joachim EKOMI", "Joseph ETOUGHE-OTSAGHE",
    "Hilaire NTOUGHE", "Thomas ABESSOLO EMANE"
  ],
  "Ngounié": [
    "Jean Bernard SAULNEROND-MAPANGOU", "Jean De-Dieu MINGONGUE-BOUKA",
    "Lazare DIGOMBE", "Albertine MAGANGA-MOUSSAVOU", "Léon MBOU-YEMBI",
    "Victor MAPANGOU MUCANI MUETSA", "Théophile BOMBA-NGOUMBOU",
    "Bernard NGOYE-MALOUMBI", "Patrice MOULENGUI-MOUELE",
    "F. Alban LECHIOMBEKA", "Raymond MONDJO-BOUSSIENGUI", "Joseph MONDJO",
    "Maurice-Thierry DIANGATEBE", "Ismaël M'PIRA", "Mathias MAGASSY",
    "Frédéric MBOUMBA-MOUYOLI", "Etienne ONDO-ATOMBY", "Théodore KWAOU",
    "Joseph MOUANGA ZELE", "Joachim BIGNOUMBA"
  ],
  "Nyanga": [
    "Noël BOROBO EPEMBIA", "Anselime Cisset IBINGA-NZIENGUI",
    "Fidèle MOUNDOUNGA", "Pierre PAMBOU-MBOUROU",
    "Jean-Baptiste MAVOUNGOU-LOEMBET", "Dieudonné PAMBO",
    "Dieudonné NGAKA-NSAFU", "Pierre-André KOMBILA",
    "Séraphin MOUNDOUNGA", "Antoine MANFOUMBI", "Jean Léger Clément MBOUMBA"
  ],
  "Ogooué-Ivindo": [
    "Sylver OBAME-ANGUERE", "Pépin MONGOCKODJI", "Justin DOUNGA",
    "Jean MINDUMBI", "Marc MOMBO", "Henri NKOUENNE-NDUME",
    "Mathieu NTO-NZE", "Marcel ZEMBI", "Dieudonné DIEKO", "Fidèle TOUCK ADIGAW"
  ],
  "Ogooué-Lolo": [
    "Edouard MVOUENDI", "Guy NZOUBA-NDAMA", "Paul-Marie LISSENGUET",
    "Barnabé INDOUMOU-BOUNGOU", "Michel BARROT IVOLOT",
    "Etienne-Guy MOUVAGHA-TCHIOBA", "Simplice GUEDET-MANZELA",
    "Felix-Anicet MOUKANDJA", "Jacques KOUMBA", "Jean-Baptiste KOUMBA"
  ],
  "Ogooué-Maritime": [
    "Marie-Augustine HOUAGNI-AMBOUROUE", "Anaclet BISSIELO",
    "Pierre-Louis AGONDJO", "Pierre-Olivier GAMBO",
    "Jules BOURDES-OGOULIGUENDE", "Augustine FAESSEL née REKOUNDOUA",
    "Pierre BOUSSOUGOU", "Marc ZIZAT", "Armand MACKAGHAT",
    "Raphaël PAMBO", "Hubert MACKAYA DE CETTE CAMA", "Raphaël MOULGUIAMA",
    "Simon-Pierre MALONGA", "Ernest MBOYI"
  ],
  "Woleu-Ntem": [
    "Bon Jean-François ONDO", "Jean-Richard EDOU-ABESSOLO",
    "Simon MENGOME-ATOME", "Pauline-Claire NSEGUE-BIVEGHE",
    "Adrien NGUEMAH-ONDO", "Thomas EHYA-OBIANG",
    "Basile BILOUNGA-BI-ASSEMBA", "Alexis MENGUE-MOYE",
    "Michel ESSIMA-OSSE", "OYONO ABA'A", "Alexandre EDZO-MEDZO",
    "Mathieu NDONG-OTO'O", "Yvon-Lucien NZE-AKOU", "Joseph OBIANG-MBA",
    "Louis-Marie EKABANE-OBAME", "Jean-Hilaire OBAME-NGUEME",
    "Daniel ASSOUMOU NDONG"
  ]
};

// Données pour les articles "À la une" (réutilisées)
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

// URLs des images des présidents (placeholders) (réutilisées)
const presidentImages: { [key: string]: string } = {
  "Jean-François NDONGOU": "https://placehold.co/150x150/e0e0e0/333333?text=J.F.+NDONGOU",
};

const Legislature8Page: React.FC<Legislature8PageProps> = ({ navigateTo }) => {
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
                <a href="/" className="flex items-center hover:text-blue-600 transition-colors" onClick={(e) => { e.preventDefault(); navigateTo('accueil'); }}>
          
                  <span className="hidden sm:inline">Accueil</span>
                </a>
              </li>
              <li>&gt;</li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors" onClick={(e) => { e.preventDefault(); navigateTo('deputes'); }}>
                  Députés
                </a>
              </li>
              <li>&gt;</li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors" onClick={(e) => { e.preventDefault(); navigateTo('legislatures-precedentes'); }}>
                  Les législatures précédentes
                </a>
              </li>
              <li>&gt;</li>
              <li className="text-blue-800 font-semibold">
                La 8ème Législature
              </li>
            </ul>
          </div>

          {/* Titre de la page */}
          <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">
            La 8ème Législature
          </h2>

          <div className="contentArticle text-gray-700 leading-relaxed space-y-6">
            <p className="text-justify">
              Cette page présente la liste des députés de la 8ème Législature, qui a marqué une période importante dans l'histoire parlementaire du Gabon.
              Les députés sont listés par province pour une meilleure visibilité de la représentation géographique.
            </p>

            {/* Section pour l'emblème (image_58405b.jpg) */}
            <div className="flex justify-center my-8">
              <img
                src="https://placehold.co/600x400/e0e0e0/333333?text=Embl%C3%A8me+8%C3%A8me+L%C3%A9gislature" // Placeholder for the emblem image
                alt="Emblème de la 8ème Législature"
                className="max-w-full h-auto rounded-lg shadow-lg"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/600x400/e0e0e0/333333?text=Embl%C3%A8me+8%C3%A8me+L%C3%A9gislature"; }}
              />
            </div>

            <h3 className="text-2xl font-bold text-blue-700 mb-4">Les premiers députés du renouveau démocratique de l'Assemblée nationale du Gabon</h3>
            <p className="text-lg font-semibold text-gray-800 mb-6">LÉGISLATURE HUITIÈME</p>

            {/* Liste des députés par province */}
            {Object.entries(deputes8emeLegislature).map(([province, deputes], index) => (
              <div key={index} className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-bold text-blue-600 mb-4 border-b border-blue-300 pb-2">{province}</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 list-disc pl-5">
                  {deputes.map((depute, idx) => (
                    <li key={idx} className="text-gray-700">{depute}</li>
                  ))}
                </ul>
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

export default Legislature8Page;
