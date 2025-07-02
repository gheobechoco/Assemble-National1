// src/components/Legislature9Page.tsx
import React from 'react';
import { Home } from 'lucide-react';

// Définition de l'interface pour les props du composant
interface Legislature9PageProps {
  navigateTo: (page: string) => void;
}

// Définition de l'interface pour un député
interface Depute {
  numero: number;
  nom: string;
  parti: string;
}

// Données des députés de la 9ème Législature (basées sur les images fournies)
const deputes9emeLegislature: Depute[] = [
  { numero: 1, nom: "AGONDJO-OKAWE Pierre-Louis", parti: "PGP" },
  { numero: 2, nom: "AKELE MBENG NDONG Germaine", parti: "PDG" },
  { numero: 3, nom: "AKOGHE MBA Emmanuel", parti: "PDG" },
  { numero: 4, nom: "ANGO Antoine Mathurin", parti: "PDG" },
  { numero: 5, nom: "ANTUONI Simone", parti: "PDG" },
  { numero: 6, nom: "ASSELE Jean-Boniface", parti: "CDD" },
  { numero: 7, nom: "BIDONE OWANGA Jean François", parti: "PDG" },
  { numero: 8, nom: "BOMBY-A-NZENGUE David", parti: "PDG" },
  { numero: 9, nom: "BONGUE-BOMA Paul", parti: "PDG" },
  { numero: 10, nom: "BOUANDJA N'DIANA Anna", parti: "PDG" },
  { numero: 11, nom: "BOUANGO Christophe", parti: "PDG" },
  { numero: 12, nom: "BOULAMATARI Simon", parti: "PDG" },
  { numero: 13, nom: "BOULINGUI KOUMBA Emile", parti: "PDG" },
  { numero: 14, nom: "CHAMBRIER RAHANDI Marcel Eloi", parti: "PDG" },
  { numero: 15, nom: "DIGOMBE Lazare", parti: "PDG" },
  { numero: 16, nom: "DIENNO Isidore Célestin", parti: "PDG" },
  { numero: 17, nom: "DOUGANDAGA PAMBOU Jean Blaise", parti: "PDG" },
  { numero: 18, nom: "DOUNGA Justin", parti: "CDD" },
  { numero: 19, nom: "DOUPAMBY MATOKA Marcel", parti: "PDG" },
  { numero: 20, nom: "EKOZY KONDONDOH Etienne Olivier", parti: "PDG" },
  { numero: 21, nom: "ENGOHANG OBIANG Gaston", parti: "PDG" },
  { numero: 22, nom: "ESSIE EMANE Paul", parti: "PDG" },
  { numero: 23, nom: "ETOUGHE-OTSAGHE Joseph", parti: "FDU" },
  { numero: 24, nom: "EYEGHE-EKOMIE Gabriel", parti: "PDG" },
  { numero: 25, nom: "EYEGHE NDONG Jean", parti: "PDG" },
  { numero: 26, nom: "EYONG YONG Roger", parti: "RDP" },
  { numero: 27, nom: "GUEDET-MANZELA Simplice", parti: "PDG" },
  { numero: 28, nom: "IKOBA-BENDIE Claude Maurice", parti: "PDG" },
  { numero: 29, nom: "INDOUMOU-MAMBOUNGOU Barnabé", parti: "PDG" },
  { numero: 30, nom: "KAMI Jules", parti: "PDG" },
  { numero: 31, nom: "KAWANGH Daniel J. Félix", parti: "PDG" },
  { numero: 32, nom: "KOUMBA Jean Baptiste", parti: "PDG" },
  { numero: 33, nom: "LASSENY DUBOZE Victoire", parti: "PDG" },
  { numero: 34, nom: "LEFLEME NKERO Charlotte", parti: "PDG" },
  { numero: 35, nom: "LEMBA NGOYE Paul", parti: "PDG" },
  { numero: 36, nom: "LISSENGUET Paul-Marie", parti: "PDG" },
  { numero: 37, nom: "LOURI Martin", parti: "PDG" },
  { numero: 38, nom: "MACKAYA Sédar Blaise", parti: "FDU" },
  { numero: 39, nom: "MACKAYA MACKANGA François", parti: "PDG" },
  { numero: 40, nom: "MACKAYA TAMANE Louis Marie", parti: "PDG" },
  { numero: 41, nom: "MADOUGOUNGOU BOUDIANGA Jean Pierre", parti: "PDG" },
  { numero: 42, nom: "MAGANGA MOUSSAVOU Albertine", parti: "FDU" },
  { numero: 43, nom: "MAGNAGA Martin Fidèle", parti: "PDG" },
  { numero: 44, nom: "MABANGUI François", parti: "PDG" },
  { numero: 45, nom: "MABOUNDOU Pierre", parti: "FDU" },
  { numero: 46, nom: "MAMFOUMBI MABIKA Antoine", parti: "PDG" },
  { numero: 47, nom: "MANGOUKA Charles", parti: "PDG" },
  { numero: 48, nom: "MARAT-ABYLA Luc", parti: "RNB" },
  { numero: 49, nom: "MAYAGUI Joseph", parti: "PGP" },
  { numero: 50, nom: "MBAH BEKALE Jules", parti: "RNB" },
  { numero: 51, nom: "MBA BEKALE Serge Marcel", parti: "CDD" },
  { numero: 52, nom: "MBADINGA MBADINGA Josué", parti: "PDG" },
  { numero: 53, nom: "MBINA Simplice Rey", parti: "PDG" },
  { numero: 54, nom: "MBOU-YEMBI Léon", parti: "FDU" },
  { numero: 55, nom: "MBOUMBA MBADINGA Hélène", parti: "CDD" },
  { numero: 56, nom: "MBOURURU André", parti: "PGP" },
  { numero: 57, nom: "MBOURURU Joseph John", parti: "PDG" },
  { numero: 58, nom: "MEMIAGHE Joseph Aimé", parti: "PDG" },
  { numero: 59, nom: "METIMBE FADY Colette", parti: "RNB" },
  { numero: 60, nom: "MENGA Michel", parti: "PDG" },
  { numero: 61, nom: "MENGA ME NZOCHE Paul", parti: "PDG" },
  { numero: 62, nom: "MINTSA MI ZE Célestin", parti: "CDD" },
  { numero: 63, nom: "MOMBO NZIGOU", parti: "CDD" },
  { numero: 64, nom: "MOUKAMBO NDOMBY Alphonse", parti: "PDG" },
  { numero: 65, nom: "MOUKANDJA Félix-Anicet", parti: "PDG" },
  { numero: 66, nom: "MOUKAYI Bernard", parti: "PDG" },
  { numero: 67, nom: "MOUKOUMBY Joseph", parti: "PDG" },
  { numero: 68, nom: "MOUITY NZAMBA Benoît Joseph", parti: "PGP" },
  { numero: 69, nom: "MOULENGUI-MOUELE Patrice", parti: "PDG" },
  { numero: 70, nom: "MOULOUPOU MAGANDZI Jean Olivier", parti: "PDG" },
  { numero: 71, nom: "MOUNDANGA Jean Baptiste", parti: "PDG" },
  { numero: 72, nom: "MOUNDOUNGA Séraphin", parti: "PDG" },
  { numero: 73, nom: "MOUNGUENGUI Fidèle", parti: "FDU" },
  { numero: 74, nom: "MOUSSAVOU MAGANGA Jean-Blaise", parti: "PGP" },
  { numero: 75, nom: "MOUSSAVOU MOUNDZIEGOU Emile", parti: "CDD" },
  { numero: 76, nom: "MVE OBAME Christophe", parti: "RNB" },
  { numero: 77, nom: "MYOUAMBAH Luc", parti: "PDG" },
  { numero: 78, nom: "MYBOTO Zacharie", parti: "PDG" },
  { numero: 79, nom: "NDEMEZO'O OBIANG René", parti: "PDG" },
  { numero: 80, nom: "N'DIAMBE Jules", parti: "PDG" },
  { numero: 81, nom: "NDIASSY Simon Pierre", parti: "PDG" },
  { numero: 82, nom: "NDJAVE NDJOY Albert", parti: "PDG" },
  { numero: 83, nom: "NDONG ESSANGUI", parti: "CDD" },
  { numero: 84, nom: "NDONG NGOUA Christophe", parti: "FDU" },
  { numero: 85, nom: "NDONG NGUEMA Danyel", parti: "RNB" },
  { numero: 86, nom: "NDONG NGUEMA Edouard", parti: "PDG" },
  { numero: 87, nom: "NDONG OBIANG Albert", parti: "PDG" },
  { numero: 88, nom: "NDONG OVONO Jean De Dieu", parti: "PDG" },
  { numero: 89, nom: "NDZAMBI Pierre", parti: "PDG" },
  { numero: 90, nom: "NGAZOUZE Raphaël", parti: "PDG" },
  { numero: 91, nom: "NGOMO OBIANG Jean Baptiste", parti: "PDG" },
  { numero: 92, nom: "NGOYE-MALOUBI Jean-Bernard", parti: "PDG" },
  { numero: 93, nom: "NGUEMA OBIANG André", parti: "PDG" },
  { numero: 94, nom: "NGOUBY MBOUGA Jean-Christophe", parti: "PDG" },
  { numero: 95, nom: "NGUEMA OYAME Célestin", parti: "RNB" },
  { numero: 96, nom: "N'KIET Emmanuel", parti: "PGP" },
  { numero: 97, nom: "NKOMA Georges", parti: "PDG" },
  { numero: 98, nom: "NTOLO EYA'A Francis", parti: "PDG" },
  { numero: 99, nom: "NZAOU Jean Michel", parti: "PDG" },
  { numero: 100, nom: "NZOGHE NGUEMA Jean Pierre", parti: "PGP" },
  { numero: 101, nom: "NZOUBA NDAMA Guy", parti: "PDG" },
  { numero: 102, nom: "NZONG Eliane Flore", parti: "PDG" },
  { numero: 103, nom: "OBAME-ABESSOLE Jean-Louis", parti: "RNB" },
  { numero: 104, nom: "OBAME-NGUEMA Paulin", parti: "PDG" },
  { numero: 105, nom: "ONANGA Joseph", parti: "PDG" },
  { numero: 106, nom: "ONKEYA Félix", parti: "PDG" },
  { numero: 107, nom: "OKILI née MVOU Jacqueline", parti: "PDG" },
  { numero: 108, nom: "OKINDJA Bernard", parti: "PDG" },
  { numero: 109, nom: "OWELE Edouard", parti: "PDG" },
  { numero: 110, nom: "OYOMBET MAPAGA Christophe", parti: "PDG" },
  { numero: 111, nom: "OYOUMBOU Patrice", parti: "PDG" },
  { numero: 112, nom: "PAMBOU-MBOURURU Pierre", parti: "PDG" },
  { numero: 113, nom: "TOUCK ADIGAW Fidèle", parti: "PDG" },
  { numero: 114, nom: "TSIOUKACKA Anatole", parti: "PDG" },
  { numero: 115, nom: "TSIOICKELA Marcel", parti: "PDG" },
  { numero: 116, nom: "WORA YI NDENGUINO Jean Paul", parti: "PDG" },
  { numero: 117, nom: "YEYET-PRADINES Delphine", parti: "PDG" },
  { numero: 118, nom: "VUMBI-MIHINDOU Jean Charles", parti: "PGP" },
  { numero: 119, nom: "ZE MEMINI Martin", parti: "FDU" },
  { numero: 120, nom: "ZENG EBOME Pierre Claver", parti: "CDD" },
];

const Legislature9Page: React.FC<Legislature9PageProps> = ({ navigateTo }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
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
            9ème Législature
          </li>
        </ul>
      </div>

      {/* Titre de la page */}
      <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">
        9ème Législature
      </h2>

      {/* Contenu de la 9ème Législature */}
      <div className="contentArticle text-gray-700 leading-relaxed space-y-6">
        <p>
          La 9ème Législature de l'Assemblée Nationale du Gabon a joué un rôle crucial dans le paysage politique du pays.
          Cette section présente la liste des députés qui ont siégé durant cette période, ainsi que des informations clés
          sur leur composition et leurs affiliations politiques.
        </p>

        {/* Image de la 9ème Législature */}
        <div className="flex justify-center my-8">
          <img
            src="https://placehold.co/800x400/E0F2F7/000000?text=Armoiries+du+Gabon" // Placeholder, remplacer par l'URL réelle si disponible
            alt="Armoiries du Gabon"
            className="rounded-lg shadow-lg max-w-full h-auto"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://placehold.co/800x400/E0F2F7/000000?text=Image+non+disponible";
            }}
          />
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
                  </p>

        <h3 className="text-2xl font-bold text-blue-700 mb-4 mt-8">
          Liste des Députés de la 9ème Législature
        </h3>

        {/* Tableau des députés */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  N°
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  NOMS & PRÉNOMS
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  PARTI POLITIQUE
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {deputes9emeLegislature.map((depute) => (
                <tr key={depute.numero} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {depute.numero}.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {depute.nom}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {depute.parti}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8">
          Pour plus d'informations sur les travaux et les réalisations de la 9ème Législature,
          veuillez consulter les archives parlementaires ou contacter l'administration de l'Assemblée Nationale.
        </p>

        {/* Bouton de retour */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigateTo('legislatures-precedentes')}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-base font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-lg"
          >
            Retour aux législatures précédentes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Legislature9Page;
