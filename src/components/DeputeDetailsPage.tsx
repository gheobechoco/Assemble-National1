// src/components/DeputeDetailsPage.tsx
import React from 'react';
import {  Briefcase, MapPin, Mail, Globe, Users, Landmark, User, FileText } from 'lucide-react';

// Interface pour les props de la page de détails du député
interface DeputeDetailsPageProps {
  depute: {
    name: string;
    imageKey: string;
    function: string;
    address: string;
    email: string;
    constituency: string;
    province: string;
    commissions: string[];
    politicalParty: string;
    presentation: string;
  };
  // Fonction de navigation pour revenir à la page précédente
  navigateTo: (page: string, data?: any) => void;
}

// Images spécifiques des députés (basées sur les captures d'écran fournies)
const deputeImages: { [key: string]: string } = {
  "ABIERY WILLY BERTRAND": "https://placehold.co/150x150/e0e0e0/333333?text=A.W.+BERTRAND",
  "ABOUGHE OTSAGHE Charlotte": "https://placehold.co/150x150/e0e0e0/333333?text=C.+ABOUGHE",
  "ADIABENOT-MEPOREWA Flavienne Patricia Hélène": "https://placehold.co/150x150/e0e0e0/333333?text=F.P.H.+ADIABENOT",
  "AKOMEZOGHO FRANCOIS AUGUSTE": "https://placehold.co/150x150/e0e0e0/333333?text=F.A.+AKOMEZOGHO",
  "AKURE DAVAIN Séraphin": "https://placehold.co/150x150/e0e0e0/333333?text=S.+AKURE",
  "AWASSI Alexandre Gilbert": "https://placehold.co/150x150/e0e0e0/333333?text=A.G.+AWASSI",
  "BADJINA MOUDOUMA épse ELLA ASSEKO Firmine Olga": "https://placehold.co/150x150/e0e0e0/333333?text=F.O.+BADJINA",
  "BANDEGA LENDOYE Raphaël": "https://placehold.co/150x150/e0e0e0/333333?text=R.+BANDEGA",
  "BECKOPA Epse Roy Valentin Virginie": "https://placehold.co/150x150/e0e0e0/333333?text=V.+BECKOPA",
  "BEKA B'OBAME Jean Marie": "https://placehold.co/150x150/e0e0e0/333333?text=J.M.+BEKA",
  "BEKALLE-AKWE Henri": "https://placehold.co/150x150/e0e0e0/333333?text=H.+BEKALLE",
  "BIAHODJOW Germain": "https://placehold.co/150x150/e0e0e0/333333?text=G.+BIAHODJOW",
  "BIYOGHE MBA Paul": "https://placehold.co/150x150/e0e0e0/333333?text=P.+BIYOGHE",
  "BOUANGA MOMBO ep. MAKITA Nicole": "https://placehold.co/150x150/e0e0e0/333333?text=N.+BOUANGA",
  "BOUKANDOU Elza Richtuelle": "https://placehold.co/150x150/e0e0e0/333333?text=E.+BOUKANDOU",
  "BOUYOU Tatiana Mireille": "https://placehold.co/150x150/e0e0e0/333333?text=T.+BOUYOU",
  "DIOUMY MOUBASSANGO Donatien Lhye": "https://placehold.co/150x150/e0e0e0/333333?text=D.L.+DIOUMY",
  "DOUFOUNDOU Emerencienne": "https://placehold.co/150x150/e0e0e0/333333?text=E.+DOUFOUNDOU",
  "DOUMBENENY Jean Lucien": "https://placehold.co/150x150/e0e0e0/333333?text=J.L.+DOUMBENENY",
  "EBANETH EP. SIMA EYI NATHALIE": "https://placehold.co/150x150/e0e0e0/333333?text=N.+EBANETH",
  "EKOUA SIMA Jean Paulin": "https://placehold.co/150x150/e0e0e0/333333?text=J.P.+EKOUA",
  "ELLA ENGONGA Leonel": "https://placehold.co/150x150/e0e0e0/333333?text=L.+ELLA",
  "ELLA NGUEMA Gerard": "https://placehold.co/150x150/e0e0e0/333333?text=G.+ELLA",
  "EYEGHE Ali": "https://placehold.co/150x150/e0e0e0/333333?text=A.+EYEGHE",
  "FOUMBOULA LIBEKA M. GEOFFROY": "https://placehold.co/150x150/e0e0e0/333333?text=M.G.+FOUMBOULA",
  "FOUTY Frateli Martial": "https://placehold.co/150x150/e0e0e0/333333?text=F.M.+FOUTY",
  "GEY Charles-Henri": "https://placehold.co/150x150/e0e0e0/333333?text=C.H.+GEY",
  "GONDJOUT INDJENDJET Melvin Vincent": "https://placehold.co/150x150/e0e0e0/333333?text=M.V.+GONDJOUT",
  "IDODO Jean Lambert": "https://placehold.co/150x150/e0e0e0/333333?text=J.L.+IDODO",
  "IMMONGUALT TATANGANI Eudes Régis": "https://placehold.co/150x150/e0e0e0/333333?text=E.R.+IMMONGUALT",
  "ISSEMBE Serge Aimé": "https://placehold.co/150x150/e0e0e0/333333?text=S.A.+ISSEMBE",
  "KOUMBA Brigitte": "https://placehold.co/150x150/e0e0e0/333333?text=B.+KOUMBA",
  "LEKOGO Justine Judith": "https://placehold.co/150x150/e0e0e0/333333?text=J.J.+LEKOGO",
  "LEYAMA Jean Valentin": "https://placehold.co/150x150/e0e0e0/333333?text=J.V.+LEYAMA",
  "LIBAMA Marcel": "https://placehold.co/150x150/e0e0e0/333333?text=M.+LIBAMA",
  "LISSENGUET GOUMBOU Irène": "https://placehold.co/150x150/e0e0e0/333333?text=I.+LISSENGUET",
  "LOUEMBE Blaise": "https://placehold.co/150x150/e0e0e0/333333?text=B.+LOUEMBE",
  "MABIALA Serge Maurice": "https://placehold.co/150x150/e0e0e0/333333?text=S.M.+MABIALA",
  "MAGANGA MOUSSAVOU née MALANDOU BOUKA Albertine": "https://placehold.co/150x150/e0e0e0/333333?text=A.+MAGANGA",
  "MALLY HODJOUA Gabriel": "https://placehold.co/150x150/e0e0e0/333333?text=G.+MALLY",
  "MANDJOU NGAYOUO Paulin": "https://placehold.co/150x150/e0e0e0/333333?text=P.+MANDJOU",
  "MATSIENDI Roland": "https://placehold.co/150x150/e0e0e0/333333?text=R.+MATSIENDI",
  "MAVOUNGOU MIHINDOU": "https://placehold.co/150x150/e0e0e0/333333?text=M.+MAVOUNGOU",
  "MBADINGA MBADINGA Josué": "https://placehold.co/150x150/e0e0e0/333333?text=J.+MBADINGA",
  "MBAGOU Jean-Bosco": "https://placehold.co/150x150/e0e0e0/333333?text=J.B.+MBAGOU",
  "MBAGOU Jeanne": "https://placehold.co/150x150/e0e0e0/333333?text=J.+MBAGOU",
  "MBOUMBOU MAKANGA Jean-Marie": "https://placehold.co/150x150/e0e0e0/333333?text=J.M.+MBOUMBOU",
  "MBOUMI NZINZI Jean Claude": "https://placehold.co/150x150/e0e0e0/333333?text=J.C.+MBOUMI",
  "MENGUE EKOMIE Roger": "https://placehold.co/150x150/e0e0e0/333333?text=R.+MENGUE",
  "MENGUE M'AKUE Diane Dorothée": "https://placehold.co/150x150/e0e0e0/333333?text=D.D.+MENGUE",
  "MENIE M'YEYI Antoine": "https://placehold.co/150x150/e0e0e0/333333?text=A.+MENIE",
  "MIHINDOU MI NZAMBA Carl": "https://placehold.co/150x150/e0e0e0/333333?text=C.+MIHINDOU",
  "MINKO MI ETOUA Christian": "https://placehold.co/150x150/e0e0e0/333333?text=C.+MINKO",
  "MOUDOUNDGA MOUITY Patrice": "https://placehold.co/150x150/e0e0e0/333333?text=P.+MOUDOUNDGA",
  "MOUELE ROMAIN ROMAIN": "https://placehold.co/150x150/e0e0e0/333333?text=R.+MOUELE",
  "MOURI BOUSSOUGOU Dieudonné": "https://placehold.co/150x150/e0e0e0/333333?text=D.+MOURI",
  "MOUPOUMBOU Clément": "https://placehold.co/150x150/e0e0e0/333333?text=C.+MOUPOUMBOU",
  "MOUSSAVOU Florentin": "https://placehold.co/150x150/e0e0e0/333333?text=F.+MOUSSAVOU",
  "MVE EBANG Marcellin": "https://placehold.co/150x150/e0e0e0/333333?text=M.+MVE",
  "NANG ONDO THIERRY": "https://placehold.co/150x150/e0e0e0/333333?text=T.+NANG",
  "NDIMAL BARRY": "https://placehold.co/150x150/e0e0e0/333333?text=B.+NDIMAL",
  "NDJIMBI Franck": "https://placehold.co/150x150/e0e0e0/333333?text=F.+NDJIMBI",
  "NDJOUNGA Jean Bosco": "https://placehold.co/150x150/e0e0e0/333333?text=J.B.+NDJOUNGA",
  "NDONG OBIANG François": "https://placehold.co/150x150/e0e0e0/333333?text=F.+NDONG",
  "NDONGOU Jean François": "https://placehold.co/150x150/e0e0e0/333333?text=J.F.+NDONGOU",
  "NGABIKOUMOU WADA Mesmin Boris": "https://placehold.co/150x150/e0e0e0/333333?text=M.B.+NGABIKOUMOU",
  "NGOMA Angélique": "https://placehold.co/150x150/e0e0e0/333333?text=A.+NGOMA",
  "NGOUENENI NDZENGOUIMA Joël": "https://placehold.co/150x150/e0e0e0/333333?text=J.+NGOUENENI",
  "NGOUNDJI Ludwine Staelle": "https://placehold.co/150x150/e0e0e0/333333?text=L.S.+NGOUNDJI",
  "NGUEMA NGUEMA Sosthène": "https://placehold.co/150x150/e0e0e0/333333?text=S.+NGUEMA",
  "NGUIENO Dominique Guy-Noël": "https://placehold.co/150x150/e0e0e0/333333?text=D.G.N.+NGUIENO",
  "NTOUTOUME MEBIAME Aurélien": "https://placehold.co/150x150/e0e0e0/333333?text=A.+NTOUTOUME",
  "NTOUTOUME Béatrice": "https://placehold.co/150x150/e0e0e0/333333?text=B.+NTOUTOUME",
  "NZE NDONG NZE PASCAL FRANCK": "https://placehold.co/150x150/e0e0e0/333333?text=P.F.+NZE",
  "NZONDO ELOI": "https://placehold.co/150x150/e0e0e0/333333?text=E.+NZONDO",
  "NZUE EDZANG Frédéric": "https://placehold.co/150x150/e0e0e0/333333?text=F.+NZUE",
  "OBAME EYEGUE Jean-Marie": "https://placehold.co/150x150/e0e0e0/333333?text=J.M.+OBAME",
  "OGOULIGUENDE née MAVIKANA Pepeçy": "https://placehold.co/150x150/e0e0e0/333333?text=P.+OGOULIGUENDE",
  "ONA NGUEMA Freddy Fernandez": "https://placehold.co/150x150/e0e0e0/333333?text=F.F.+ONA",
  "ONDIAS SOUNA Luck Harley": "https://placehold.co/150x150/e0e0e0/333333?text=L.H.+ONDIAS",
  "ONDJAMBI ONGUIA Gérard": "https://placehold.co/150x150/e0e0e0/333333?text=G.+ONDJAMBI",
  "ONDZOUNGA Pacôme Rufin": "https://placehold.co/150x150/e0e0e0/333333?text=P.R.+ONDZOUNGA",
  "ONGUORI NGOUBILI Félicité": "https://placehold.co/150x150/e0e0e0/333333?text=F.+ONGUORI",
  "OSSINGA ONANGA Alban Stéphane": "https://placehold.co/150x150/e0e0e0/333333?text=A.S.+OSSINGA",
  "OTANDO Charles": "https://placehold.co/150x150/e0e0e0/333333?text=C.+OTANDO",
  "OVONO MBOUENGOU Jean Placilde": "https://placehold.co/150x150/e0e0e0/333333?text=J.P.+OVONO",
  "OWONO NDONG Edgard": "https://placehold.co/150x150/e0e0e0/333333?text=E.+OWONO",
  "POLO ép PANDZOU ODETTE": "https://placehold.co/150x150/e0e0e0/333333?text=O.+POLO",
  "REVANGUE Ep ABIOUME Madeleine Sidonie": "https://placehold.co/150x150/e0e0e0/333333?text=M.S.+REVANGUE",
  "ROYEMBO Albert Richard": "https://placehold.co/150x150/e0e0e0/333333?text=A.R.+ROYEMBO",
  "SOUGOU LATSIERE Alix": "https://placehold.co/150x150/e0e0e0/333333?text=A.+SOUGOU",
  "SOWA AKENDENGUE NIANG Stephen Darell": "https://placehold.co/150x150/e0e0e0/333333?text=S.D.+SOWA",
  "TATY KOUMBA Odette Jeanine": "https://placehold.co/150x150/e0e0e0/333333?text=O.J.+TATY",
  "TRISSAUGUI OGOUILATH Pendi Georges": "https://placehold.co/150x150/e0e0e0/333333?text=P.G.+TRISSAUGUI",
  "TSONO Huguette": "https://placehold.co/150x150/e0e0e0/333333?text=H.+TSONO",
  "WAURA Fidèle": "https://placehold.co/150x150/e0e0e0/333333?text=F.+WAURA",
  "YEMBIT MANGALA Jean de Dieu": "https://placehold.co/150x150/e0e0e0/333333?text=J.D.+YEMBIT",
};

const DeputeDetailsPage: React.FC<DeputeDetailsPageProps> = ({ depute, navigateTo }) => {
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
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors" onClick={() => navigateTo('contacter-depute')}>
                  Contacter le Député
                </a>
              </li>
              <li>&gt;</li>
              <li className="text-blue-800 font-semibold">
                {depute.name}
              </li>
            </ul>
          </div>

          {/* Titre de la page */}
          <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">
            Détails du Député
          </h2>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex flex-col items-center">
            <img
              src={deputeImages[depute.imageKey] || "https://placehold.co/150x150/e0e0e0/333333?text=Depute"}
              alt={depute.name}
              className="rounded-lg mx-auto mb-4 w-48 h-48 object-cover border-4 border-blue-400 shadow-lg"
              onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=Depute"; }}
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{depute.name}</h3>

            <div className="w-full max-w-xl space-y-4">
              <div className="flex items-center bg-gray-50 p-3 rounded-md shadow-sm">
                <Briefcase className="w-5 h-5 mr-3 text-blue-600" />
                <span className="font-semibold text-gray-700">FONCTION :</span>
                <span className="ml-2 text-gray-600">{depute.function}</span>
              </div>
              <div className="flex items-center bg-gray-50 p-3 rounded-md shadow-sm">
                <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                <span className="font-semibold text-gray-700">ADRESSE :</span>
                <span className="ml-2 text-gray-600">{depute.address}</span>
              </div>
              <div className="flex items-center bg-gray-50 p-3 rounded-md shadow-sm">
                <Mail className="w-5 h-5 mr-3 text-blue-600" />
                <span className="font-semibold text-gray-700">EMAIL :</span>
                <span className="ml-2 text-blue-600 hover:underline">{depute.email}</span>
              </div>
              <div className="flex items-center bg-gray-50 p-3 rounded-md shadow-sm">
                <Landmark className="w-5 h-5 mr-3 text-blue-600" />
                <span className="font-semibold text-gray-700">CIRCONSCRIPTION :</span>
                <span className="ml-2 text-gray-600">{depute.constituency}</span>
              </div>
              <div className="flex items-center bg-gray-50 p-3 rounded-md shadow-sm">
                <Globe className="w-5 h-5 mr-3 text-blue-600" />
                <span className="font-semibold text-gray-700">PROVINCE :</span>
                <span className="ml-2 text-gray-600">{depute.province}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md shadow-sm">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 mr-3 text-blue-600" />
                  <span className="font-semibold text-gray-700">MEMBRE DE :</span>
                </div>
                <ul className="list-disc list-inside ml-8 text-gray-600 space-y-1">
                  {depute.commissions.map((commission, index) => (
                    <li key={index}>{commission}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center bg-gray-50 p-3 rounded-md shadow-sm">
                <User className="w-5 h-5 mr-3 text-blue-600" />
                <span className="font-semibold text-gray-700">PARTI POLITIQUE :</span>
                <span className="ml-2 text-gray-600">{depute.politicalParty}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md shadow-sm">
                <div className="flex items-center mb-2">
                  <FileText className="w-5 h-5 mr-3 text-blue-600" />
                  <span className="font-semibold text-gray-700">PRÉSENTATION :</span>
                </div>
                <p className="ml-8 text-gray-600">{depute.presentation}</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigateTo('contacter-depute')}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md flex items-center justify-center"
          >
            Retour à la liste des députés
          </button>
        </div>

        {/* Sidebar (Right Column) - Contenu de la barre latérale (similaire à ContacterDeputePage) */}
        <div className="w-full md:w-3/12 px-4 mt-8 md:mt-0">
          {/* Section Président */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Jean-François NDONGOU</h3>
            <div className="text-center mb-4">
              <img
                src="/images/jean-francois-ndoungou.png"
                alt="Jean-François NDONGOU"
                className="rounded-full mx-auto mb-2 w-28 h-28 object-cover border-2 border-blue-500 shadow-lg"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=President"; }}
              />
              <p className="text-gray-600 text-sm font-semibold">Président de l'Assemblée Nationale de la Transition</p>
            </div>
          </div>

          {/* Section "À la une" avec défilement automatique (placeholders) */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 overflow-hidden relative h-64">
            <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">À la une</h3>
            <div className="relative w-full h-48">
              {/* Placeholder pour les articles "À la une" */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <img
                  src="/images/president-AN-transition.jpeg "
                  alt="Article Placeholder"
                  className="w-full h-32 object-cover rounded-md mb-2 shadow-sm"
                />
                <p className="text-sm font-semibold text-blue-600 px-2">Actualités de l'Assemblée Nationale</p>
              </div>
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

export default DeputeDetailsPage;
