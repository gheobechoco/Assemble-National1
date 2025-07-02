// src/components/Legislature12Page.tsx
import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

// Interface pour les propriétés du composant
interface Legislature12PageProps {
  navigateTo: (page: string, data?: any) => void;
}

// Données des députés de la 12ème législature
const deputies = [
  { no: 1, name: "AKOGHET Gisèle", party: "PDG" },
  { no: 2, name: "ANGANGOU Estelle Flore", party: "PDG" },
  { no: 3, name: "ANGARA Alphonse", party: "PDG" },
  { no: 4, name: "ANGO NDOUTOUOME François", party: "PDG" },
  { no: 5, name: "ANGOUE MEVIANE Samuel", party: "PDG" },
  { no: 6, name: "ANGWE ABOUGHE André", party: "PDG" },
  { no: 7, name: "ASSENGONE OBAME Françoise", party: "PDG" },
  { no: 8, name: "AZIZET Berthe", party: "PDG" },
  { no: 9, name: "BAL'ABONDHOUME Irène Farelle ép.KOUNDE", party: "PDG" },
  { no: 10, name: "BARRO CHAMBRIER Hugues Alexandre", party: "PDG" },
  { no: 11, name: "BAYOGHA NEMBE Célestin", party: "PDG" },
  { no: 12, name: "BERRE André Dieudonné", party: "PDG" },
  { no: 13, name: "BIE EYENE Paul", party: "PDG" },
  { no: 14, name: "BIYOGHE BINZUE Nicaise", party: "PDG" },
  { no: 15, name: "BOUKILA Jean Pierre", party: "PDG" },
  { no: 16, name: "BOUKOUBI Faustin", party: "PDG" },
  { no: 17, name: "BOUNGUERES Alain Simplice", party: "PDG" },
  { no: 18, name: "BOUTAMBA MBINA Alexis", party: "PDG" },
  { no: 19, name: "DOUPAMBY MATOKA Marcel", party: "PDG" },
  { no: 20, name: "EDZEBA BICKE Steve Thierry", party: "PDG" },
  { no: 21, name: "ELLA MENIE Vincent de Paul", party: "PDG" },
  { no: 22, name: "ESSIE EMANE Paul", party: "PDG" },
  { no: 23, name: "EYAMBA TSIMAT Maurice Nestor", party: "PDG" },
  { no: 24, name: "GONDJOUT Vincent de Paul", party: "PDG" },
  { no: 25, name: "IDOUNDOU Emmanuel", party: "PDG" },
  { no: 26, name: "IGNOUMBA Jonathan", party: "PDG" },
  { no: 27, name: "INDOUMOU MAMBOUNGOU Barnabé", party: "PDG" },
  { no: 28, name: "IVALA Christian Clotaire", party: "PDG" },
  { no: 29, name: "KAH Gervin Landry", party: "PDG" },
  { no: 30, name: "KOHO Paulette", party: "PDG" },
  { no: 31, name: "LATE Emmanuel", party: "PDG" },
  { no: 32, name: "LENGOMAS MATOMBI Gilbert", party: "PDG" },
  { no: 33, name: "MABALA Martin", party: "PDG" },
  { no: 34, name: "MACHIMA Hilaire", party: "PDG" },
  { no: 35, name: "MAGANGA MANFOUMBI Justin", party: "PDG" },
  { no: 36, name: "MAGANGA MOUSSAVOU Albertine", party: "PSD" },
  { no: 37, name: "MAKUNGU Alain Patrick", party: "PDG" },
  { no: 38, name: "MALONGA MOUELET Gabriel", party: "PDG" },
  { no: 39, name: "MARAT ABYLA Luc", party: "PDG" },
  { no: 40, name: "MASSALAT SAMBA Narcisse", party: "UPNR" },
  { no: 41, name: "MASSIMA Jean", party: "PDG" },
  { no: 42, name: "MAVOUNGOU BOUYOU Vincent", party: "PDG" },
  { no: 43, name: "MAWOBO LENDOYE Fernando", party: "PDG" },
  { no: 44, name: "MBA ABESSOLE Paul", party: "RPG" },
  { no: 45, name: "MBADINGA MOMBO Ferdinand", party: "PDG" },
  { no: 46, name: "M'BA MINKO Jean Eddy", party: "PDG" },
  { no: 47, name: "MBONDZI Solange", party: "PDG" },
  { no: 48, name: "MBOUMBA Joseph", party: "PDG" },
  { no: 49, name: "MBOUMBOU MIYAKOU Edgard Anicet", party: "PDG" },
  { no: 50, name: "MBOUMI Michel", party: "PDG" },
  { no: 51, name: "MBOUMI NZINZI Jean Claude", party: "PDG" },
  { no: 52, name: "MENGA M'ESSONE Michel", party: "PDG" },
  { no: 53, name: "MEYO-ME-NKOGHE Dieudonné", party: "PDG" },
  { no: 54, name: "MIKANGA SEMBA Philippe Romain", party: "PDG" },
  { no: 55, name: "MIKOUANDZA TONDA Justin", party: "PDG" },
  { no: 56, name: "MOMAOADJAMBO Sylvain", party: "PDG" },
  { no: 57, name: "MONDJO Dieudonné", party: "PDG" },
  { no: 58, name: "MOUBAMBA MOUKETOU Aloise", party: "PDG" },
  { no: 59, name: "MOUDOUMA Apollinaire Adonis", party: "PDG" },
  { no: 60, name: "MOULEYEY Guy Carly", party: "PDG" },
  { no: 61, name: "MOULENGUI MABENDE Martin", party: "PDG" },
  { no: 62, name: "MOUNGUENGUI KOUMBA Guy François", party: "PDG" },
  { no: 63, name: "MOUSSAVOU Louis Marie", party: "PDG" },
  { no: 64, name: "MOUTSINGA Juliette", party: "PDG-PGCI" },
  { no: 65, name: "MPONO Jean Claude", party: "PDG" },
  { no: 66, name: "MVE EBANG Marcellin", party: "PDG" },
  { no: 67, name: "NANG NDONG Paul", party: "PDG" },
  { no: 68, name: "NDAKI Bernabé", party: "PDG" },
  { no: 69, name: "NDEKA YINO Marguerite", party: "PDG" },
  { no: 70, name: "NDIAMONO François", party: "PDG" },
  { no: 71, name: "NDJAVE NDJOY Albert", party: "PDG" },
  { no: 72, name: "NDEMEZO'O OBIANG René", party: "PDG" },
  { no: 73, name: "NDONG NGUEMA Paul", party: "PDG" },
  { no: 74, name: "NDONG OBIANG Albert", party: "PDG" },
  { no: 75, name: "NDONG SIMA Raymond", party: "PDG" },
  { no: 76, name: "NDONGOU Jean-François", party: "PDG" },
  { no: 77, name: "NDOUTOUME ESSONE Jean-Marie", party: "PDG" },
  { no: 78, name: "NDZIAMI Jacques", party: "PDG" },
  { no: 79, name: "NDZOUMBA Bernard", party: "PDG" },
  { no: 80, name: "NGARI Idriss", party: "PDG" },
  { no: 81, name: "NGOMA Angélique", party: "PDG" },
  { no: 82, name: "NGOMA MADOUNGOU Senturel", party: "PDG" },
  { no: 83, name: "NGOMBELA Raymond", party: "PDG" },
  { no: 84, name: "NGONDJIGA Ludovic", party: "PDG" },
  { no: 85, name: "NGOU-MVE Nicolas", party: "PDG" },
  { no: 86, name: "NGOZO ISSONDOU Maxime Laurent", party: "PDG" },
  { no: 87, name: "NGUEMA NDONG Jean Marie", party: "RPG" },
  { no: 88, name: "NGUEMA ONDO Jean Léonard", party: "PDG" },
  { no: 89, name: "NKERO MOUGNOKO Charlotte", party: "PDG" },
  { no: 90, name: "NKOGHE BEKALE Julien", party: "PDG" },
  { no: 91, name: "NKOGHE ESSINGONE Adrien", party: "PDG" },
  { no: 92, name: "NONGOU MOUNDOUNGA ép. LOUEMBET Pauline Olive", party: "PDG" },
  { no: 93, name: "NTOLO EYA'A Francis", party: "PDG" },
  { no: 94, name: "NTOUTOUOME MEBIAME Aurélien", party: "PDG" },
  { no: 95, name: "NTOUTOUOME Robert", party: "PDG" },
  { no: 96, name: "NTIMEDJIARA Rachel", party: "PDG" },
  { no: 97, name: "NYINGONE ANDA Marie-Madeleine", party: "RPG" },
  { no: 98, name: "NZENGUE MAYILA Philippe", party: "PDG" },
  { no: 99, name: "NZIENGUI MIHINDOU", party: "CLR" },
  { no: 100, name: "NZOUBA-NDAMA Guy", party: "PDG" },
  { no: 101, name: "OBAME ONDO Jean Marie", party: "PDG" },
  { no: 102, name: "OGOUBANDJA OGOUEMPONO Jules Marius", party: "PDG" },
  { no: 103, name: "OGOULA Philomène", party: "PDG" },
  { no: 104, name: "OGUEWA BA Célestine", party: "PDG" },
  { no: 105, name: "ONDIMBA Maxime", party: "PDG" },
  { no: 106, name: "ONOUVIET Richard-Auguste", party: "PDG" },
  { no: 107, name: "OSSAGOU Guy Christian", party: "PDG" },
  { no: 108, name: "OSSELE NDONG Rémy", party: "PDG" },
  { no: 109, name: "ONDZOUNGA Rufin Pacoime", party: "PDG" },
  { no: 110, name: "OTANDO Charles", party: "PDG" },
  { no: 111, name: "OWONO NDONG Edgard", party: "PDG" },
  { no: 112, name: "RETENO André Jules", party: "PDG" },
  { no: 113, name: "ROYEMBO Richard", party: "PDG" },
  { no: 114, name: "SIMEPOUNGOU Claude", party: "PDG" },
  { no: 115, name: "SYLONG Jean Richard", party: "PDG" },
  { no: 116, name: "TALI Nicolas", party: "PDG" },
  { no: 117, name: "TOUNGUI Paul", party: "PDG" },
  { no: 118, name: "YAMI Laurent", party: "PDG" },
  { no: 119, name: "YOUBANGOYE MBILA Alexandre", party: "PDG" },
  { no: 120, name: "ZIBI ABEGHE Bertrand", party: "PDG" }
];

const Legislature12Page: React.FC<Legislature12PageProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Fil d'Ariane */}
      <nav className="flex items-center space-x-2 text-gray-600 text-sm mb-6">
        <Home className="w-4 h-4 cursor-pointer" onClick={() => navigateTo('accueil')} />
        <ChevronRight className="w-4 h-4" />
        <span className="cursor-pointer" onClick={() => navigateTo('deputes')}>Députés</span>
        <ChevronRight className="w-4 h-4" />
        <span className="cursor-pointer" onClick={() => navigateTo('legislatures-precedentes')}>Anciennes Législatures</span>
        <ChevronRight className="w-4 h-4" />
        <span>La 12ème Législature</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center font-serif">La 12ème Législature</h1>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Image du blason du Gabon */}
        <div className="flex justify-center mb-8">
          <img
            src="https://placehold.co/400x300/E0E0E0/333333?text=Blason+du+Gabon" // Placeholder pour le blason
            alt="Blason du Gabon"
            className="w-full max-w-md h-auto rounded-lg"
          />
        </div>

        {/* Introduction */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          La 12ème Législature de l'Assemblée Nationale du Gabon a joué un rôle crucial dans le paysage politique et législatif du pays. Cette période a été marquée par des débats importants et l'adoption de lois fondamentales qui ont contribué à l'évolution institutionnelle de la République Gabonaise.
        </p>

        {/* Tableau des députés */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tl-lg">N°</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">NOMS & PRÉNOMS</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tr-lg">PARTI POLITIQUE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {deputies.map((deputy) => (
                <tr key={deputy.no} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{deputy.no}.</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{deputy.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{deputy.party}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section sur les travaux (exemple) */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 font-serif">Travaux Parlementaires Marquants</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Adoption de la loi de finances rectificative pour l'année [Année]</li>
            <li>Débats sur la réforme du code électoral</li>
            <li>Examen des projets de loi relatifs à la protection de l'environnement</li>
            <li>Mises en place de commissions d'enquête parlementaires sur des sujets d'intérêt national</li>
          </ul>
        </div>

        {/* Bouton de retour */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigateTo('legislatures-precedentes')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center mx-auto"
          >
            <ChevronRight className="w-5 h-5 mr-2 transform rotate-180" />
            Retour aux législatures précédentes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Legislature12Page;
