// src/components/Legislature10Page.tsx
import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';

// Données fictives pour les articles "À la une" (réutilisées)
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

// URLs des images des présidents (placeholders) (réutilisées)
const presidentImages: { [key: string]: string } = {
  "Jean-François NDONGOU": "https://placehold.co/150x150/e0e0e0/333333?text=J.F.+NDONGOU", // Image de Jean-François NDONGOU
  "placeholder_member": "https://placehold.co/150x150/e0e0e0/333333?text=Membre" // Image générique d'un membre
};

// Liste des députés de la 10ème législature (extraite des images fournies)
const deputes10emeLegislature = [
  { id: 1, nom: "ABOUNA Ismaël", parti: "PDG" },
  { id: 2, nom: "AKELE MBENG-NDONG Germaine", parti: "PDG" },
  { id: 3, nom: "AKEREY RASSAGUIZA Louis Daniel", parti: "PDG" },
  { id: 4, nom: "AKOURE-DAVAIN Séraphin", parti: "PDG" },
  { id: 5, nom: "ANGWE ABOUGHE André", parti: "PDG" },
  { id: 6, nom: "APERANO Marc", parti: "PDG" },
  { id: 7, nom: "ASSOUMOU AKUE Julien Florent", parti: "GDR" },
  { id: 8, nom: "ATOUTOU Jean Louis", parti: "PDG" },
  { id: 9, nom: "AWOMBI Julien", parti: "PDG" },
  { id: 10, nom: "BIDONE OWANGA Jean François", parti: "PDG" },
  { id: 11, nom: "BILE-ALLOGHO Joachim", parti: "PDG" },
  { id: 12, nom: "BILIE-BI-ESSONE Faustin Laurent", parti: "RNB/RPG" },
  { id: 13, nom: "BINGOURE Jean Martin", parti: "PDG" },
  { id: 14, nom: "BIYOGO OBAME Robert", parti: "RNB/RPG" },
  { id: 15, nom: "BONGO ONDIMBA Landry Guy", parti: "PDG" },
  { id: 16, nom: "BOUANDJA N'DJANA Anna", parti: "PDG" },
  { id: 17, nom: "BOUANGA MOUANGA Laurence", parti: "PDG" },
  { id: 18, nom: "BOULAMATARI Simon", parti: "PDG" },
  { id: 19, nom: "BOUSSENGUE Joseph Marie", parti: "PDG" },
  { id: 20, nom: "BOUSSOUGHOU Jean Félicien", parti: "PDG" },
  { id: 21, nom: "BOUTAMBA MBINA Alexis", parti: "PDG" },
  { id: 22, nom: "DIKONGOU Maurice", parti: "PDG" },
  { id: 23, nom: "DOUGANDAGA PAMBOU Jean Blaise", parti: "PDG" },
  { id: 24, nom: "DOUCKAGHA Jean Philippe", parti: "RNB/RPG" },
  { id: 25, nom: "DOUPAMBY MATOKA Marcel", parti: "PDG" },
  { id: 26, nom: "EKOZY KONDONDOH Olivier", parti: "PDG" },
  { id: 27, nom: "EMBO NGONGA Théophile", parti: "PDG" },
  { id: 28, nom: "ENGOHANG-OBIANG Gaston", parti: "PDG" },
  { id: 29, nom: "ENGOHANG ALOGHE Catherine ép. EYOGO EDZANG", parti: "RNB/RPG" },
  { id: 30, nom: "ESSIE EMANE Paul", parti: "GDR" },
  { id: 31, nom: "ESSINGONE AMIENG Paul", parti: "GDR" },
  { id: 32, nom: "GONDJOUT Vincent De Paul", parti: "PDG" },
  { id: 33, nom: "GUEDET MANZELA Simplice", parti: "PDG" },
  { id: 34, nom: "IGNOUMBA Jonathan", parti: "PDG" },
  { id: 35, nom: "IKOBABENDJE Claude Maurice", parti: "PDG" },
  { id: 36, nom: "INDOUMOU-MAMBOUGOU Barnabé", parti: "PDG" },
  { id: 37, nom: "INDZOUNGA Serge Bernard", parti: "PDG" },
  { id: 38, nom: "KAKALA-NGOUSSI Emily", parti: "PDG" },
  { id: 39, nom: "KAKASSA Jules", parti: "PDG" },
  { id: 40, nom: "KAMI Jules", parti: "PDG" },
  { id: 41, nom: "KOHO Paulette née PAIENI", parti: "PDG" },
  { id: 42, nom: "KOUELY KOLINET Georges", parti: "PDG" },
  { id: 43, nom: "KOUMBA Geneviève", parti: "PDG" },
  { id: 44, nom: "LEFLEIM née NKERO MOUGNONKO Charlotte", parti: "PDG" },
  { id: 45, nom: "LEMBA-NGOYE Paul", parti: "PDG" },
  { id: 46, nom: "M'BANZOGHE Odile", parti: "PDG" },
  { id: 47, nom: "MACKAYA TAMANE Louis Marie", parti: "PDG" },
  { id: 48, nom: "MACKOSSO IKAPI Jean Paul", parti: "PDG" },
  { id: 49, nom: "MAKAYA MAKANGA François", parti: "PDG" },
  { id: 50, nom: "MAKAYA Rosalie", parti: "PGP" },
  { id: 51, nom: "MADOUNGOU MOUKAMBALA François", parti: "PDG" },
  { id: 52, nom: "MAGANGA-MOUSSAVOU Albertine", parti: "PSD" },
  { id: 53, nom: "MAMBANA MBOUATY Pierre", parti: "PDG" },
  { id: 54, nom: "MARAT ABILA Luc", parti: "PDG" },
  { id: 55, nom: "MAVOUNGOU Roger", parti: "PDG" },
  { id: 56, nom: "MBINA Simplice Rey", parti: "PDG" },
  { id: 57, nom: "MBOUISSOU Nzambi", parti: "PDG" },
  { id: 58, nom: "MBOUMI NZINZI Jean Claude", parti: "PDG" },
  { id: 59, nom: "MBOURBOU André", parti: "PGP" },
  { id: 60, nom: "MEKOSSANGOUYE Bruno", parti: "PDG" },
  { id: 61, nom: "MENDOME ZE François", parti: "PDG" },
  { id: 62, nom: "MENGA ME NZOGHE Paul", parti: "PDG" },
  { id: 63, nom: "MENGA Michel", parti: "PDG" },
  { id: 64, nom: "MIHINDOU-MI-NGUIMBI Joseph", parti: "PDG" },
  { id: 65, nom: "MINTSA MINANG Grégoire", parti: "PGP" },
  { id: 66, nom: "MOFOUMA-MODUMET Michel", parti: "PDG" },
  { id: 67, nom: "MOMBO Charles", parti: "PDG" },
  { id: 68, nom: "MOUBANDJO MIA MYNTOCKOT Georges", parti: "PDG" },
  { id: 69, nom: "MOULENGUI MOUELE Patrice", parti: "PDG" },
  { id: 70, nom: "MOUNDOUNGA Séraphin", parti: "PDG" },
  { id: 71, nom: "MOUNGUENGUI Louis-Marie", parti: "PDG" },
  { id: 72, nom: "MOUSSA ADAMO Michaël", parti: "PDG" },
  { id: 73, nom: "MPOUHO EPIGAT Ernest", parti: "PDG" },
  { id: 74, nom: "MVE-EBANG Marcellin", parti: "PDG" },
  { id: 75, nom: "MVOUAMBAH Luc", parti: "PDG" },
  { id: 76, nom: "NANG NDONG Paul", parti: "PDG" },
  { id: 77, nom: "NDJAVE-NDJOY Albert", parti: "PDG" },
  { id: 78, nom: "NDONG BIYOGUE Sébastien", parti: "PDG" },
  { id: 79, nom: "NDONG MBA Clément", parti: "RNB/RPG" },
  { id: 80, nom: "NDONG OBIANG Albert", parti: "PDG" },
  { id: 81, nom: "NDZAMBI Pierre", parti: "PDG" },
  { id: 82, nom: "NGAZOUZE Raphaël", parti: "PDG" },
  { id: 83, nom: "NGOMANDA Jean Baptiste", parti: "PDG" },
  { id: 84, nom: "NGOMBI Pierre Célestin", parti: "PDG" },
  { id: 85, nom: "NGOUBOU Benjamin", parti: "GDR" },
  { id: 86, nom: "NKOGHE Jonathan", parti: "PDG" },
  { id: 87, nom: "NTOLO EYA'A Francis", parti: "PDG" },
  { id: 88, nom: "NZAMBA KOUANGA Michel", parti: "PDG" },
  { id: 89, nom: "NZAOU-NZIENGUI Pierre", parti: "PDG" },
  { id: 90, nom: "NZE BIYOGHE Jean Léon", parti: "PDG" },
  { id: 91, nom: "NZE MBA Jean Benoit", parti: "RNB/RPG" },
  { id: 92, nom: "NZE-MOUENDIAMBOU Joséphine", parti: "PDG" },
  { id: 93, nom: "NZE ONA Emile", parti: "RNB/RPG" },
  { id: 94, nom: "NZENGUET MOUELE Pierre", parti: "PDG" },
  { id: 95, nom: "NZOH ELLA Charles", parti: "PDG" },
  { id: 96, nom: "NZONG Eliane Flore", parti: "PDG" },
  { id: 97, nom: "NZOUBA-NDAMA Guy", parti: "PDG" },
  { id: 98, nom: "OBAME-EYI Jean", parti: "PDG" },
  { id: 99, nom: "OBAME NGUEMA Paulin", parti: "PDG" },
  { id: 100, nom: "OBIANG NDONG Placide", parti: "PDG" },
  { id: 101, nom: "OBOUNOU NTOMA Florent", parti: "PDG" },
  { id: 102, nom: "ODDOU MBA Christian", parti: "RNB/RPG" },
  { id: 103, nom: "ONANGA Joseph", parti: "PDG" },
  { id: 104, nom: "ONGUINDA ABEKE Jérôme", parti: "PDG" },
  { id: 105, nom: "ONKEYA Félix", parti: "PDG" },
  { id: 106, nom: "OKILI Jacqueline", parti: "PDG" },
  { id: 107, nom: "OKINDJIA Bernard", parti: "PDG" },
  { id: 108, nom: "OYANE AKAGA Anicet", parti: "PDG" },
  { id: 109, nom: "OYOMBE MAPAPA Christophe", parti: "PDG" },
  { id: 110, nom: "OYOUBI Luc", parti: "PDG" },
  { id: 111, nom: "PECKE Martin Parfait", parti: "PDG" },
  { id: 112, nom: "RAHANDI-CHAMBRIER Marcel Eloi", parti: "PDG" },
  { id: 113, nom: "SIBY Félix", parti: "PDG" },
  { id: 114, nom: "SOSSI Joseph", parti: "PDG" },
  { id: 115, nom: "SYLONG Jean Richard", parti: "PDG" },
  { id: 116, nom: "TSIOUKACKA Anatole", parti: "PDG" },
  { id: 117, nom: "VUMBI-MIHINDOU Jean-Charles", parti: "PGP" },
  { id: 118, nom: "YOMBI Maurice", parti: "PDG" },
  { id: 119, nom: "ZENG EBOME Pierre Claver", parti: "GDR" }
];

// Définition de l'interface pour les props du composant, incluant la fonction navigateTo
interface Legislature10PageProps {
  navigateTo: (page: string) => void;
}

const Legislature10Page: React.FC<Legislature10PageProps> = ({ navigateTo }) => {
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
                  <Home className="w-4 h-4 mr-1" />
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
                La 10ème Législature
              </li>
            </ul>
          </div>

          {/* Titre de la page */}
          <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">
            La 10ème Législature
          </h2>

          {/* Contenu de la 10ème Législature */}
          <div className="contentArticle text-gray-700 leading-relaxed space-y-4">
            <p className="mb-4">
              La 10ème Législature de l'Assemblée Nationale du Gabon a été une période significative,
              marquée par des travaux législatifs importants et des contributions au développement du pays.
            </p>

            <h3 className="text-2xl font-bold text-blue-700 mb-4">Liste des Députés de la 10ème Législature</h3>
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-800 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">N°</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">NOMS & PRÉNOMS</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">PARTI POLITIQUE</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {deputes10emeLegislature.map((depute) => (
                    <tr key={depute.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{depute.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{depute.nom}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{depute.parti}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6">
              Cette liste représente les membres qui ont siégé au cours de la 10ème législature, contribuant aux travaux parlementaires et à l'élaboration des politiques publiques.
            </p>
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

export default Legislature10Page;
