// src/components/Legislature11Page.tsx
import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

// Données des députés de la 11ème législature (extraites des images fournies)
const deputes11emeLegislature = [
  { no: 1, name: "ADIAHENOT Jacques", party: "PDG" },
  { no: 2, name: "ANGWE ABOUGHE André", party: "PDG" },
  { no: 3, name: "ANGOUE MEVIANE Samuel", party: "Indépendant" },
  { no: 4, name: "ANGOUE NGUEMA Jean", party: "RPG" },
  { no: 5, name: "ANOUMBA Jules", party: "PDG" },
  { no: 6, name: "ASSENGONE OBAME Françoise", party: "Indépendant" },
  { no: 7, name: "ASSOUME MBA Michel", party: "PDG" },
  { no: 8, name: "BARRO CHAMBRIER Alexandre Hugues", party: "PDG" },
  { no: 9, name: "BAYOGA NEMBE Célestin", party: "PDG" },
  { no: 10, name: "BERRE André Dieudonné", party: "PDG" },
  { no: 11, name: "BILIE BI ESSONE Faustin Laurent", party: "RPG" },
  { no: 12, name: "BILIE BI NZE Alain Claude", party: "RPG" },
  { no: 13, name: "BIYOGHE MBA Paul", party: "PDG" },
  { no: 14, name: "BONGO ONDIMBA Ali", party: "PDG" },
  { no: 15, name: "BOUAMBA Maurice", party: "UGDD" },
  { no: 16, name: "BOUKOUBI Faustin", party: "PDG" },
  { no: 17, name: "BOURDES OGOULIGUENDE Jules Aristide", party: "CDJ" },
  { no: 18, name: "BOUROBOU KOUMBA Bernadette ép. TCHIBINDA", party: "UPG" },
  { no: 19, name: "BOUTAMBA MBINA Alexis", party: "PDG" },
  { no: 20, name: "DOUMBA Emile", party: "PDG" },
  { no: 21, name: "DOUPAMBY MATOKA Marcel", party: "PDG" },
  { no: 22, name: "EDZIDZI-NNA Antoine Francis", party: "PDG" },
  { no: 23, name: "EYANG NTOUTOUME Gisèle Laure", party: "PDG" },
  { no: 24, name: "EYEGHE NDONG Jean", party: "PDG" },
  { no: 25, name: "ENGOHANG OBIANG Gaston", party: "PDG" },
  { no: 26, name: "ESSIE EMANE Paul", party: "PDG" },
  { no: 27, name: "GUEDET MANZELA Simplice", party: "PDG" },
  { no: 28, name: "GONDJOUT Vincent de Paul", party: "PDG" },
  { no: 29, name: "IGNOUMBA Jonathan", party: "PDG" },
  { no: 30, name: "INDOUMOU MAMBOUGOU Barnabé", party: "PDG" },
  { no: 31, name: "IVALA Christian Clotaire", party: "Indépendant" },
  { no: 32, name: "KAMI Jules", party: "PDG" },
  { no: 33, name: "KOHO Paulette née PAJENI", party: "PDG" },
  { no: 34, name: "KOMBE LEKAMBO Daniel", party: "UGDD" },
  { no: 35, name: "KOMBILA Pierre André", party: "RNB" },
  { no: 36, name: "LATE Emmanuel", party: "PDG" },
  { no: 37, name: "LEYAMA Jean Valentin", party: "UGDD" },
  { no: 38, name: "MABALA Martin", party: "PDG" },
  { no: 39, name: "MACHIMA Hilaire", party: "PDG" },
  { no: 40, name: "MAGANGA MOUSSAVOU Pierre-Claver", party: "PSD" },
  { no: 41, name: "MAKAYA Rosalie", party: "PGP" },
  { no: 42, name: "MAMBOUNDOU MAMBOUNDOU Pierre", party: "UPG" },
  { no: 43, name: "MARAT ABYLA Luc", party: "PDG" },
  { no: 44, name: "MASSIMA Jean", party: "PDG" },
  { no: 45, name: "MANFOUMBI MAPAGA Honoré", party: "ADERE" },
  { no: 46, name: "MAVOUNGOU BOUYOU Vincent", party: "PDG" },
  { no: 47, name: "MBA OBAME André", party: "PDG" },
  { no: 48, name: "MBIGUIDI Jean Christophe", party: "UPG" },
  { no: 49, name: "MBOU YEMBI Léon", party: "FAR" },
  { no: 50, name: "MBOUMBA Joseph", party: "PDG" },
  { no: 51, name: "MBOUMBOU MIYAKOU Edgard Anicet", party: "PDG" },
  { no: 52, name: "MBOUMI NZINZI Jean Claude", party: "RDR" },
  { no: 53, name: "MEBALE OBAME Max", party: "PDG" },
  { no: 54, name: "MEKAM'NE Denise", party: "PDG" },
  { no: 55, name: "MENGA M'ESSONE Michel", party: "CLR" },
  { no: 56, name: "MINDOUGANI Gaston", party: "PDG" },
  { no: 57, name: "MISSAMBO Paulette", party: "PDG" },
  { no: 58, name: "MISSOULOUKAGNE Marie", party: "PDG" },
  { no: 59, name: "MOMAOADJAMBO Sylvain", party: "PDG" },
  { no: 60, name: "MOULENGUI MABENDE Martin", party: "PDG" },
  { no: 61, name: "MOULOMBA MOMBO Richard", party: "UPG" },
  { no: 62, name: "MOUNDOUNGA Séraphin", party: "PDG" },
  { no: 63, name: "MOUSSAVOU MOUNDZIEGOU Emile", party: "PDG" },
  { no: 64, name: "MOUSSOUAMI Serge", party: "ADERE" },
  { no: 65, name: "MVE-EBANG Marcellin", party: "PDG" },
  { no: 66, name: "MVOU Alexandrine ép. NDZOUMBA", party: "PDG" },
  { no: 67, name: "MVOUBA OKORI Léon Paul", party: "UGDD" },
  { no: 68, name: "MYBOTO Zacharie", party: "PDG" },
  { no: 69, name: "NAKI Honorine ép. DOSSOU", party: "PDG" },
  { no: 70, name: "NDAKI Barnabé", party: "PGP" },
  { no: 71, name: "NDAOT REMBOGO Séraphin", party: "CLR" },
  { no: 72, name: "NDEKABOGNEDJE Zéphirin", party: "UPG" },
  { no: 73, name: "NDEMBI NZINGA Claudio", party: "PDG" },
  { no: 74, name: "NDEMEZO'O OBIANG René", party: "PDG" },
  { no: 75, name: "NDJAVE NDJOY Albert", party: "UPG" },
  { no: 76, name: "NDONG ASSOUMOU Sylvestre", party: "RPG" },
  { no: 77, name: "NDONG MBA Clément", party: "PDG" },
  { no: 78, name: "NDONG NGUEMA Paul", party: "PDG" },
  { no: 79, name: "NDONGOU Jean François", party: "PDG" },
  { no: 80, name: "NGARI Idriss", party: "PDG" },
  { no: 81, name: "NGAZOUZE Raphaël", party: "PDG" },
  { no: 82, name: "NGOMA Angélique", party: "PDG" },
  { no: 83, name: "NGOMA MADOUGOUNG Senturel", party: "PDG" },
  { no: 84, name: "NGOMBELA Raymond", party: "RPG" },
  { no: 85, name: "NGONDJIGA Ludovic", party: "PDG" },
  { no: 86, name: "NGOUA MBINA Beni", party: "RPG" },
  { no: 87, name: "NGUEMA NDONG Jean Marie", party: "RPG" },
  { no: 88, name: "NGUEMBI André Christ", party: "PDG" },
  { no: 89, name: "NKERO MOUGNONGO Charlotte", party: "PDG" },
  { no: 90, name: "NKOGHE ESSINGONE Adrien", party: "PDG" },
  { no: 91, name: "NTEM ALLOGHO Lévy", party: "PDG" },
  { no: 92, name: "NTOLO EYA'A Francis", party: "PDG" },
  { no: 93, name: "NTOUTOUME EMANE Jean François", party: "PDG" },
  { no: 94, name: "NYINGONE ANDA Marie-Madeleine", party: "RPG" },
  { no: 95, name: "NZENGUE MAYILA Philippe", party: "PDG" },
  { no: 96, name: "NZENGUET MOUELE Pierre", party: "Indépendant" },
  { no: 97, name: "NZONDO François", party: "PSD" },
  { no: 98, name: "NZOUBA-NDAMA Guy", party: "PDG" },
  { no: 99, name: "OBAME NGUEMA Paulin", party: "PDG" },
  { no: 100, name: "ODDOU MBA Christian", party: "RPG" },
  { no: 101, name: "OMPATA François", party: "PDG" },
  { no: 102, name: "ONA ONDO Daniel", party: "PDG" },
  { no: 103, name: "ONDO METHOGO Emmanuel", party: "PDG" },
  { no: 104, name: "ONKASSA EDHOUBA Rigobert", party: "PDG" },
  { no: 105, name: "ONOUVIET Richard Auguste", party: "PDG" },
  { no: 106, name: "OSSAGOU Guy Christian", party: "PDG" },
  { no: 107, name: "OTOUMOLONGUI Brigitte", party: "PDG" },
  { no: 108, name: "OWONO NGUEMA Jean Christophe", party: "PDG" },
  { no: 109, name: "OYANE ONDO Paulette", party: "PDG" },
  { no: 110, name: "OYE MBA Casimir", party: "PDG" },
  { no: 111, name: "OYOUBI Luc", party: "PDG" },
  { no: 112, name: "OYOUMBOU Patrice", party: "PDG" },
  { no: 113, name: "PAMBO PAMBO Dieudonné", party: "ADERE" },
  { no: 114, name: "PAMBO Raphaël", party: "UPG" },
  { no: 115, name: "PING Jean", party: "PDG" },
  { no: 116, name: "POUABOU MPIRA Gaston", party: "UPG" },
  { no: 117, name: "SYLONG Jean Richard", party: "PDG" },
  { no: 118, name: "TOUNGUI Paul", party: "PDG" },
  { no: 119, name: "ZENG EBOME Pierre Claver", party: "MAD" },
];

// Interface pour les propriétés du composant
interface Legislature11PageProps {
  navigateTo: (page: string, data?: any) => void;
}

const Legislature11Page: React.FC<Legislature11PageProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Fil d'Ariane */}
      <nav className="flex items-center space-x-2 text-gray-600 text-sm mb-6">
        <Home className="w-4 h-4 cursor-pointer" onClick={() => navigateTo('accueil')} />
        <ChevronRight className="w-4 h-4" />
        <span className="cursor-pointer" onClick={() => navigateTo('deputes')}>Députés</span>
        <ChevronRight className="w-4 h-4" />
        <span className="cursor-pointer" onClick={() => navigateTo('legislatures-precedentes')}>Les législatures précédentes</span>
        <ChevronRight className="w-4 h-4" />
        <span>11ème Législature</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center font-serif">11ème Législature</h1>

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <p className="text-gray-700 mb-6 text-justify">
          Cette page présente les informations relatives à la 11ème législature de l'Assemblée Nationale du Gabon.
          Vous trouverez ci-dessous la liste des députés qui ont siégé durant cette période, avec leur affiliation politique.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500">Liste des Députés de la 11ème Législature</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">N°</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">NOM & PRÉNOMS</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">PARTI POLITIQUE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {deputes11emeLegislature.map((depute) => (
                <tr key={depute.no} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{depute.no}.</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{depute.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{depute.party}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigateTo('legislatures-precedentes')}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5 mr-2 transform rotate-180" />
            Retour aux législatures précédentes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Legislature11Page;
