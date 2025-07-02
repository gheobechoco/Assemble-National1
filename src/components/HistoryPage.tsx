// src/components/HistoryPage.tsx
import React, { useState, useEffect } from 'react'; // Import useState and useEffect for sidebar functionality
import { Home } from 'lucide-react'; // Import Home and FileText icons from Lucide React

// Données pour les articles "À la une" avec des images de remplacement (copied from BureauPage/MissionsPage)
const featuredArticles = [
  {
    image: "/images/president-AN-transition.jpeg", // Image des Travaux Législatifs
    title: "Travaux : Plusieurs textes législatifs structurants dont celui...",
    link: "#"
  },
  {
    image: "/images/jean-francois-ndoungou.png", // Image d'une Séance Plénière 1
    title: "Travaux : Jean François NDONGOU préside une séance plénière",
    link: "#"
  },
  {
    image: "/images/assembler-nat-vote.webp", // Image d'une Réforme Constitutionnelle
    title: "Réforme constitutionnelle : Les enjeux",
    link: "#"
  },
  {
    image: "/images/cloture-solennelle-premiere=session.jpeg", // Image du Budget 2024
    title: "Budget 2024 : Adoption des mesures",
    link: "#"
  }
];

// URLs des images des présidents (placeholders) (copied from BureauPage/MissionsPage)
const presidentImages: { [key: string]: string } = {
  "Jean-François NDONGOU": "https://placehold.co/150x150/e0e0e0/333333?text=J.F.+NDONGOU", // Image de Jean-François NDONGOU
  "placeholder_member": "https://placehold.co/150x150/e0e0e0/333333?text=Membre" // Image générique d'un membre
};

const HistoryPage: React.FC = () => {
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
        {/* Main Content Area */}
        <div className="w-full md:w-9/12 px-4">

          {/* Breadcrumb */}
          <div className="mb-6">
            <ul className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <a href="/" className="flex items-center hover:text-blue-600 transition-colors">
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
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors" onClick={(e) => e.preventDefault()}>
                  L'historique
                </a>
              </li>
              <li>&gt;</li>
              <li className="text-blue-800 font-semibold">
                L'histoire de l'Assemblée Nationale du Gabon
              </li>
            </ul>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">L'histoire de l'Assemblée Nationale du Gabon</h2>

          {/* Article Content */}
          <div className="contentArticle text-gray-700 leading-relaxed space-y-4">
            <p className="text-justify">
              Le premier parlement gabonais, dans le cadre de la communauté, existait au sein du parlement français à travers les délégués de l'Afrique équatoriale française (AEF) parmi lesquels furent membres pour le compte du Gabon, Messieurs Stanislas MIGOLET, Paul GONDJOUT et NZE-MBOT (1946-1947). Ces assemblées préfiguraient déjà les institutions parlementaires nationales.
            </p>
            <p className="text-justify">
              Le Gabon accède à la souveraineté internationale le 17 août 1960 et le 23 août de la même année il est admis en qualité de membre de l'Organisation des Nations Unies (ONU).
            </p>
            <p className="text-justify">
              La constitution du 4 novembre 1960 faisait du Gabon une République, une et indivisible, démocratique, sociale et laïque, basée sur le principe « du gouvernement du peuple par le peuple pour le peuple ». Le pouvoir exécutif était exercé par le président de la République, Chef de l'Etat, élu pour sept (07) ans au suffrage universel direct, et le pouvoir législatif par une Assemblée nationale dont les membres étaient élus au suffrage universel direct pour une période de sept (07) ans. L'Assemblée nationale avait le pouvoir, sous certaines conditions, de démettre de ses fonctions le Président de la République, en cas de manquement constaté aux règles démocratiques.
            </p>
            <p className="text-justify">
              Le Gabon élit son premier parlement en 1961, celui-ci était composé de quarante-neuf (49) membres. Deux grands groupes composaient ce parlement, le Bloc démocratique gabonais (BDG) et l'Union démocratique et socialiste du Gabon (UDSG).
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">L'Assemblée nationale et le parti unique (1967-1990).</h3>
            <p className="text-justify">
              L'expérience de la première législature avait été marquée par les luttes intestines entre les deux groupes parlementaires avec pour conséquence les multiples motions de censure et le coup d'Etat de février 1964.
            </p>
            <p className="text-justify">
              Le 12 mars 1967, le Président Albert Bernard BONGO (puis El Hadj Omar BONGO ONDIMBA), annonce la création du parti démocratique gabonais (PDG) en tant que parti unique.
            </p>
            <p className="text-justify">
              Le 4 février 1973, le Président de la République écourte son mandat et convoque le congrès du PDG qui donne son investiture à soixante-dix candidats à la députation. Ceux-ci seront élus le 6 mars 1973. Ainsi naquit la première Assemblée nationale monopartite conduite par l'honorable Georges DAMAS ALEKA.
            </p>
            <p className="text-justify">
              A son renouvellement en décembre 1979, le mandat des députés à l'Assemblée nationale avait été ramené de sept (07) à cinq (5) ans et leur nombre passait de soixante-dix (70) à quatre vint treize (93). La deuxième législature sous le parti unique avait pour président l'honorable Augustin BOUMAH.
            </p>
            <p className="text-justify">
              Dans le système du parti unique, l'élection des députés comportait deux modes de nomination. Le premier consistait à organiser les primaires au sein du parti pour élire quatre-vingt-quatre (84) membres (appelés camarades) qui devaient être confirmés par une élection populaire et le deuxième autorisait le Président de la République à choisir les neuf (09) députés restants, à raison d'un député par province.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">L'Assemblée nationale et le renouveau démocratique (1990)</h3>
            <p className="text-justify">
              La Conférence nationale, tenue à Libreville du 23 mars au 19 avril 1990, a amené le Gabon à une réforme profonde de ses institutions. C'est ainsi que la loi fondamentale n°3/91 du 26 mars 1991 a permis de réaménager les anciennes institutions et de créer de nouvelles telles que la Cour constitutionnelle et le Conseil national de la communication.
            </p>
            <p className="text-justify">
              Dans le même temps, le nombre de députés à l'Assemblée nationale est passé de quatre-vingt-treize (93) à cent vingt (120), tous élus au scrutin nominal majoritaire à deux tours et répartis comme suit par province : Estuaire 18, Haut-Ogooué 17, Moyen-Ogooué 9, Ngounié 17, Nyanga 10, Ogooué-Ivindo 9, Ogooué-Lolo 10, Ogooué-Maritime 13 et Woleu-Ntem 17.
            </p>
            <p className="text-justify">
              Le premier président de l'Assemblée nationale de l'ère du renouveau fut l'honorable Jules Aristide BOURDES OGOULIGUENDE.
            </p>
            <p className="text-justify">
              En 1994, certains amendements seront apportés à la loi fondamentale. C'est ainsi que le Parlement gabonais est devenu depuis lors bicaméral. En effet, l'article 35, alinéa 1er de la loi 1/94 du 18 mars 1994 détermine le Parlement en ces termes : « le pouvoir législatif est représenté par un Parlement composé de deux chambres : l'Assemblée nationale et le Sénat ».
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">L'Assemblée nationale dans la « IIIe République »</h3>
            <p className="text-justify">
              L'évolution de la vie politique au Gabon est très complexe. Toutefois, à la lumière de l'histoire des institutions politiques de notre pays, nous pouvons retenir trois phases :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>La première phase date de février 1959, période que l'on pourrait appeler ou baptiser première République où, à l'occasion du référendum de 1958, le Gabon venait d'entrer comme Etat-membre dans la communauté franco-africaine et de se doter d'une loi constitutionnelle.</li>
            </ul>
            <p className="text-justify">
              Le 17 août 1960, le Gabon accède à l'indépendance et la loi constitutionnelle du 14 novembre de la même année, organise le fonctionnement de ses Institutions.
            </p>
            <p>L'emblème nationale est le drapeau tricolore : Vert, Jaune, Bleu à trois bande horizontales, d'égale dimension ;</p>
            <p>L'Hymne national est la concorde ;</p>
            <p>La devise de la République est « Union, Travail, Justice » ;</p>
            <p>Le sceau de la République est une « Maternité allaitant » ;</p>
            <p>Son principe est « Gouvernement du peuple, par le peuple et pour le peuple » ;</p>
            <p>La langue officielle de travail est le « français » ;</p>
            <p>La capitale de la République est « Libreville » ;</p>
            <p>La fête nationale est célébrée le « 17 août » (de chaque année).</p>
            <p className="text-justify">
              - La deuxième phase quant à elle, est la période qui va de 1967 à 1991, marqué par l'accession au pouvoir du Président Albert Bernard Bongo à la magistrature suprême et la suppression du multipartisme par l'instauration du monopartisme, c'est-à-dire le parti unique et par conséquent le parti Etat. C'est la période que l'on pourrait appeler ou baptiser deuxième République.
            </p>
            <p className="text-justify">
              - Enfin, la troisième phase est la période que l'on pourrait appeler troisième République, qui va de 1991 à nos jours. Celle-ci est marquée par le retour au pluralisme politique, à l'adoption de la Constitution en 1991, à la ratification des Accords de Paris de 1994 et à l'organisation du référendum de 1995...
            </p>
            <p className="text-justify">
              En réalité, cette classification fait l'objet de grands débats entre juristes et politologues...
            </p>
            <p className="text-justify">
              De tout ce qui précède, la IIIe République est marquée par le renouveau démocratique et la création de nouvelles institutions. Aux côtés de la Chambre des députés, représentant la Chambre basse, est créé le Sénat, Chambre haute du Parlement.
            </p>
            <p className="text-justify">
              Actuellement, le Gabon connait donc sa IIIe République et sa 23e Constitution depuis celle de 1959. Depuis 1960, le Gabon est devenu indépendant, une République où les citoyens élisent librement des hommes et des femmes qui agissent en leur nom et dirigent leurs Institutions pour une période donnée.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4"><u>Liste des Présidents</u></h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="text-gray-800">1960 - 1961 : <strong><a href="https://fr.wikipedia.org/wiki/Paul_Gondjout" className="text-blue-600 hover:underline">Paul Gondjout</a></strong></span></li>
              <li><span className="text-gray-800">Février 1961 - avril 1964 : <strong>Louis Bigman</strong></span></li>
              <li><span className="text-gray-800">Avril 1964 - 1975 : <strong>George Damas Aleka</strong></span></li>
              <li><span className="text-gray-800">1975 - 1980 : <strong><a href="https://fr.wikipedia.org/wiki/Paul_Gondjout" className="text-blue-600 hover:underline">Paul Gondjout</a></strong></span></li>
              <li><span className="text-gray-800">1980 - 1990 : <strong>Augustin Boumah</strong></span></li>
              <li><span className="text-gray-800">Novembre 1990 - 1993 : <strong>Jules Aristide Bourdes Ougoulinguende</strong></span></li>
              <li><span className="text-gray-800">Avril 1993 - mai 1996 : <strong>Marcel Éloi Rahandi Chambrier</strong></span></li>
              <li><span className="text-gray-800">Janvier 1997 - 8 avril 2016 : <strong><a href="https://fr.wikipedia.org/wiki/Guy_Nzouba-Ndama" className="text-blue-600 hover:underline">Guy Nzouba-Ndama</a></strong></span></li>
              <li><span className="text-gray-800">8 avril 2016 - 30 avril 2018 : <strong><a href="https://fr.wikipedia.org/wiki/Richard_Auguste_Onouviet" className="text-blue-600 hover:underline">Richard Auguste Onouviet</a></strong></span></li>
              <li><span className="text-gray-800">Depuis le 11 janvier 2019 : <strong><a href="https://fr.wikipedia.org/wiki/Faustin_Boukoubi" className="text-blue-600 hover:underline">Faustin Boukoubi</a></strong></span></li>
            </ul>

            <p className="mt-8 text-justify">
              <strong>Paul Gondjout</strong>, né le 4 (24) juin 1912 à <a href="https://fr.wikipedia.org/w/index.php?title=Simath-Lac_Zil%C3%A9&amp;action=edit&amp;redlink=1" className="text-blue-600 hover:underline">Simath-Lac Zilé</a> et mort le 1er juillet 1990 à Libreville, est un comptable et homme politique français et gabonais.
            </p>

            {/* Table for Paul Gondjout's Biography */}
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
                <tbody>
                  <tr>
                    <td colSpan={2} className="px-6 py-3 font-bold text-center bg-gray-100 border-b">
                      Fonction
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="px-6 py-2 border-b">
                      <p className="font-semibold">Sénateur 1949-1958</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold border-b">Gouvernement</td>
                    <td className="px-6 py-2 border-b">Quatrième République</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold border-b">Groupe politique</td>
                    <td className="px-6 py-2 border-b">IOM</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold border-b">Prédécesseur</td>
                    <td className="px-6 py-2 border-b">Mathurin Anguiley 1886- 1949</td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="px-6 py-3 font-bold text-center bg-gray-100 border-b">
                      Biographie
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold border-b">Date de naissance</td>
                    <td className="px-6 py-2 border-b">24 juin 1912</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold border-b">Lieu de naissance</td>
                    <td className="px-6 py-2 border-b">Simath-Lac Zilé (Moyen-Ogooué, Gabon, (Afrique-Équatoriale française)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold border-b">Date de décès</td>
                    <td className="px-6 py-2 border-b">1er juillet 1990 (à 78 ans)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold border-b">Lieu de décès</td>
                    <td className="px-6 py-2 border-b">Libreville (Gabon)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold border-b">Parti politique</td>
                    <td className="px-6 py-2 border-b">Bloc démocratique gabonais</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold border-b">Père</td>
                    <td className="px-6 py-2 border-b">Pierre Gondjout</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold border-b">Mère</td>
                    <td className="px-6 py-2 border-b">Eugénie Mboumba</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold border-b">Fratrie</td>
                    <td className="px-6 py-2 border-b">Raphaël Gondjout (1908-1949), Edouard Gondjout, Georges Gondjout, Yvette Gondjout.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold border-b">Conjoint</td>
                    <td className="px-6 py-2 border-b">Rosalie Matoukou ; Odette Louembet (1951-1990)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold border-b">Profession</td>
                    <td className="px-6 py-2 border-b">Comptable</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold border-b">Religion</td>
                    <td className="px-6 py-2 border-b">Catholique</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold border-b">Résidence</td>
                    <td className="px-6 py-2 border-b">Gabon</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold">Jeunesse et formation</td>
                    <td className="px-6 py-2">
                      Paul Gondjout naît à Simath-Lac Zilé, dans ce qui est alors le district du Moyen-Ogooué. Il est le fils de Pierre Gondjout, né vers 1886, expéditionnaire-comptable, et d'Eugénie Mboumba, née vers 1890, du clan des Avembédjèna du groupe Enenga, apparenté à l'ethnie Myènè. De cette union sont nés six autres enfants. Le premier, en 1908, Raphaël Gondjout, mourra à la suite d'un accident en 1949. Son frère, Edouard Gondjout, né en 1915, combattra politiquement aux côtés de ses deux aînés. Paul Gondjout dit « Indjendjet » fréquente l'école Montfort des Frères de Saint-Gabriel qui forme alors les cadres indigènes de l'administration coloniale. Cette école a d'ailleurs formé Léon Mba, Jean-Hilaire Aubame et Charles N'Tchoréré. Paul Gondjout sort de cette école en 1928 et s'engage dans l'administration coloniale comme expéditionnaire comptable. Il s'installe à Port-Gentil au début des années 1930 où il rencontre et épouse Rosalie Matoukou. De cette union naît en 1943 Arlette Gondjout. Il fréquente le Cercle amical et mutualiste des évolués (CAME). En 1951, il épouse Odette Louembé, de culture Vili. Ils ont ensemble Amélie, Laure Olga, Christian, Vincent et Paul-Marie.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold border-b">Carrière politique</td>
                    <td className="px-6 py-2 border-b">
                      Paul Gondjout commence sa lutte alors qu'il est en poste à Port-Gentil. Il est témoin des injustices faites aux indigènes et ne supporte pas l'exploitation irrationnelle des matières premières par les Blancs. Il fréquente le milieu des Évolués, qui s'interroge sur la situation politique de la colonie du Gabon. En 1944, la Quatrième République voit le jour et ouvre un nouveau chemin aux peuples colonisés par la France. Certaines libertés sont restituées. La liberté d'association permet notamment de créer les premiers partis politiques. Émile Issembé fonde le premier parti autochtone en 1945. C'est le Parti Démocrate Gabonais. Paul Gondjout en est le vice-président.
                      En 1946, il est élu au Conseil Représentatif puis au Grand Conseil de l'AEF pour le compte de l'Ogooué-Maritime. En 1949, Mathurin Anghiley, sénateur du Gabon, meurt à 63 ans. Gondjout se présente aux élections organisées pour le remplacer. Il bat Louis Bigmann, Jean-François Ondo Ndong et Léon Mba. Mais l'élection est contestée notamment par Jean-François Ondo Ndong qui évoque une grosse fraude et engage un contentieux. La victoire de Gondjout Paul est tout de même confirmée. Installé à Paris, il fréquente l'intelligentsia française et ultra-marine.
                      En 1952, il crée le Bloc Démocratique Gabonais (BDG) pour se libérer d'un PDG en perte d'influence face à l'Union Démocratique et Sociale Gabonaise (UDSG) de Jean-Hilaire Aubame. Il associe Léon Mba à sa lutte. C'est grâce à cela que ce dernier obtient son premier mandat électif en tant que maire de Libreville en 1956.
                      En 1957, Gondjout mène ses troupes aux élections territoriales. Le BDG, donné perdant, réalise un tour de force et se retrouve majoritaire à l'Assemblée territoriale. Paul Gondjout devient président de cette Assemblée et installe Léon Mba à la tête du premier gouvernement. Gondjout croit en un régime parlementaire. Il estime que seul ce régime est capable de maintenir l'équilibre entre les trois pouvoirs. Il partage ainsi la vision du charismatique Jean-Hilaire Aubame, dont il se rapproche.
                      En novembre 1960, son lieutenant, Léon Mba, décide d'un coup d'État institutionnel. Dans la nuit du 16 au 17, il fait arrêter le Président Gondjout, Sossa Simawango (président du groupe BDG à l'Assemblée) et Luc Ivanga (vice-président de l'Assemblée). Les deux amis du BDG deviennent alors adversaires. Gondjout est emprisonné puis mis en résidence surveillée.
                      Nommé à la Cour des comptes en 1963, il accepte en février 1964 de participer au gouvernement provisoire dirigé par Aubame à l'issue du coup d'État du 17 février. Mais la France rétablit Mba par la force qui envoie à Dom-Les-Bam (prison sous forme de résidence surveillée) tous ses adversaires politiques. Le Procès de Lambaréné qui suit permet de libérer Gondjout et de mettre fin à la carrière politique de Aubame. Gondjout est pourtant affaibli. La mort de Léon Mba n'y fait rien. il perd définitivement son influence. Il revient tout de même à la tête de l'Assemblée nationale de 1975 à 1980.
                      Épuisé et malade, il meurt dans son domaine de Makengoué à Libreville le 1er juillet 1990.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 font-semibold border-b">Influence</td>
                    <td className="px-6 py-2 border-b">
                      Paul Gondjout a beaucoup influencé la politique de son pays mais aussi les deux premières générations d'intellectuels gabonais sortis des écoles et universités françaises. En France, il est très proche, au cours des années 1950, des étudiants gabonais tels que Léon Augé et Marcel Eloi Rahandi Chambrier qui ont, semble-t-il, contribué à la formation du BDG. Paul Gondjout a également été le premier vrai leader de la communauté Myènè après la chute d'Issembé. C'est lui qui a rallié cette communauté au BDG alors que Léon Mba a fait se rallier une petite partie de la population fang de l'Estuaire car il était mal aimé des autres Fangs du Gabon.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Louis-Emile Bigmann</h3>
            <p className="text-justify">
              Louis-Emile Bigmann (1897-1986) était un homme politique gabonais.
            </p>
            <h4 className="text-xl font-semibold mt-4 mb-2">Petite enfance et carrière politique</h4>
            <p className="text-justify">
              Membre du peuple Mpongwe, il est né et a vécu à Baraka, au Gabon. Bigmann a fréquenté l'Ecole Montfort à Libreville, capitale du Gabon. Mpongwe, critique vis-à-vis du colonialisme, Laurent Antchouey et fondateur de "L'Echo Gabonais" à Dakar en 1922.
            </p>
            <p className="text-justify">
              Bigmann a été nommé président de l'Assemblée nationale par le président gabonais Leon M'ba en 1961, alors que son ancien titulaire, Paul Gondjout, était incarcéré.
            </p>
            <h4 className="text-xl font-semibold mt-4 mb-2">Coup d'Etat du Gabon de 1964</h4>
            <p className="text-justify">
              Article principal : Coup d'Etat du Gabon en 1964
            </p>
            <p className="text-justify">
              Dans la nuit du 17 au début de la matinée du 18 février 1964, 150 membres de l'armée, de la gendarmerie et de la police gabonaises, dirigés par le lieutenant Jacques Mombo et Valére Essone, s'emparèrent du palais présidentiel. Les gendarmes en service ont affirmé qu'il ne s'agissait que d'un exercice militaire. Cependant, pendant "l'exercice", les lieutenants ont traîné le président M'ba hors de son lit sous la menace d'une arme à feu. Bongo a entendu ce bruit et a téléphoné à Bigmann pour savoir ce qui s'était passé. Bigmann est arrivé au palais présidentiel et a demandé aux rebelles ce que Bongo lui avait demandé. À ce stade, ils ont ouvert les portes et l'ont arrêté aussi. Les conspirateurs ont ensuite arrêté tous les membres du gouvernement gabonais, à l'exception du technicien respecté André Gustave Anguilé.
            </p>
            <p className="text-justify">
              À Radio Libreville, l'armée a annoncé à la population gabonaise qu'un coup d'État avait eu lieu, a demandé une assistance technique et a demandé aux Français de ne pas intervenir dans cette affaire. M'ba a été contraint de diffuser un discours dans lequel il reconnaissait sa défaite : "Le jour J est arrivé, les injustices sont indescriptibles, ces personnes sont patientes, mais leur patience a des limites. Ébullition."
            </p>
            <p className="text-justify">
              Aucun sang n'a été versé pendant l'événement, et lorsque les Gabonais n'ont pas réagi violemment, l'armée a interprété cela comme un signe d'approbation. Aubame s'est vu offrir la présidence du gouvernement provisoire nouvellement formé. Le gouvernement était composé de politiciens civils de l'UDSG et du BDG, tels que Gondjout. Pendant le coup d'État, il a été ministre d'État. Les dirigeants du coup d'Etat se sont contentés de rétablir la sécurité des civils. La petite armée gabonaise n'est pas intervenue; composés majoritairement d'officiers français, ils sont restés dans leur caserne.
            </p>
            <p className="text-justify">
              Le gouvernement provisoire a donné l'ordre de transférer M'ba au fief électoral d'Aubame, Ndjolé. En raison des fortes pluies, le président déchu a été envoyé à Lambaréné 250 kilomètres au nord de Libreville. Le nouveau chef du gouvernement a contacté l'ambassadeur de France, Paul Cousseran, pour l'assurer que les biens des ressortissants étrangers seraient protégés et pour demander une intervention contre toute intervention militaire française. À Paris, le président Charles de Gaulle s'est prononcé contre le plaidoyer.
            </p>
            <p className="text-justify">
              M'ba était l'un des alliés africains les plus fidèles de la France et, lors d'une visite en France en 1961, il a déclaré : "Tous les Gabonais ont deux patries : la France et le Gabon". De plus, sous son régime, les Européens ont été particulièrement bien traités. Les autorités françaises ont donc décidé, conformément aux accords signés franco-gabonais, de rétablir le gouvernement légitime. Intervention ne peut commencer sans une demande officielle adressée au chef de l’État du Gabon. Depuis l’emprisonnement de M'ba, les Français ont contacté le vice-président du Gabon, Paul-Marie Yembit, qui n’avait pas été arrêté. Cependant, il est resté introuvable. Par conséquent, ils ont décidé de composer une lettre datée d'avant confirmant leur intervention, que Yembit signera plus tard. Moins de 24 heures plus tard, les troupes françaises postées à Dakar et à Brazzaville ont atterri à Libreville et ont restauré M'ba au pouvoir. Au cours de l'opération, un soldat français et 15 à 25 Gabonais sont morts.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Georges Damas Aleka (1902-1982), Auteur-Compositeur de l'hymne national du Gabon.</h3>
            <p className="text-justify">
              Qui était Georges Damas Aléka, ce compatriote qui a composé les paroles et la musique de notre hymne national " La Concorde" en 1958 ?
            </p>
            <p className="text-justify">
              Pourquoi l'Histoire officielle ne parle pas assez de cette icône de la vie politique de notre pays, qui était un homme apôtre de la non-violence, un politicien modéré, au moment où deux leaders politiques, deux camps des pères de l'indépendance s’affrontaient, l’exécutif et le parlement, pour déterminer le type de régime à adopter.
            </p>
            <p className="text-justify">
              D'un côté le camp de Gabriel Léon Mba Minko, Premier ministre et chef de l'Etat par intérim, soutenu par une majorité du Bloc Démocratique Gabonais (BDG), représentant le pouvoir exécutif et favorable à un régime présidentiel fort ;
            </p>
            <p className="text-justify">
              De l'autre, celui de Paul Indendjet Gondjout, Président de l'Assemblée nationale, soutenu par le Parti de l'Unité Nationale du Gabon (PUNGA) de René Paul Sousatte et Jean-Jacques Boucavel, l'Union Démocratique et Sociale Gabonaise (UDSG) de Jean-Hilaire Aubame, Eugène Amogho et Jean-Félix Mba et quelques dissidents du BDG, favorable à un régime parlementaire.
            </p>
            <p className="text-justify">
              Voici un homme qui, pour garder l'esprit de la concorde et de la cohésion nationale, décide de rester en dehors de ces affrontements, pour préserver le consensus d'un régime politique pluraliste.
            </p>
            <p className="text-justify">
              Pour mémoire, Georges Damas Aléka est né le 18 novembre 1902 à Libreville, d'une famille d'ethnie Mpongwé. C'est l'auteur compositeur de notre hymne national intitulé " La Concorde".
            </p>
            <p className="text-justify">
              Après des brillantes études à l'école Montfort à Libreville, il entre, comme tous les jeunes de cette génération dans la vie active.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>De 1924 à 1939, il est employé de banque ;</li>
              <li>Dès 1938, il fait une entrée en politique de façon radicale en dénonçant vigoureusement la politique ségrégationniste et de discrimination raciale pratiquée par les administrateurs coloniaux à Libreville, en particulier, et au Gabon en général. Du coup, il prend la tête de tous ceux qui s’insurgeaient contre les droits spéciaux crées par décret du gouvernement RESTE, qui octroyait un régime de faveur aux Métis, au détriment des Noirs dans la colonie : droit de poursuivre des études secondaires, ouverture d'internat, accès plus facile au travail.</li>
              <li>En effet, en 1943, les Gabonais Métis, avaient un statut à part, car issus d'union entre Blancs et Noirs. Ils obtinrent un symbole de leur statut avec l'ouverture du " Cercle des Métis", à Libreville, un lieu de rencontres leur étant réservé, mais interdit aux Gabonais de peau noire. Une véritable politique d’apartheid encouragé par les autorités de l'époque basée sur le seul critère de la couleur de la peau. C'est ce qui va le pousser à ouvrir un autre front de contestation en intégrant, au lendemain de la seconde guerre mondiale, l'Union des Syndicats Confédérés (USC) dont il fut le Secrétaire Général.</li>
              <li>De 1939 à 1943, il est agent de la compagnie des Chargeurs ;</li>
              <li>De 1943 à 1946, il est conseiller du Gabon auprès du Gouverneur Général de l'Afrique Equatoriale Française (AEF) à Brazzaville.</li>
              <li>En 1946, Damas Aléka ira représenter l'USC à la première générale du travail qui se tint à Dakar au Sénégal.</li>
              <li>De 1946 à 1954, il occupe les fonctions de membre suppléant du Conseil privé du Gouverneur du Gabon.</li>
              <li>De 1956 à 1963, il est élu Conseiller municipal de Libreville.</li>
              <li>En 1958, passionné de musique et par amour pour son pays, il compose les paroles et la musique de ce qui allait devenir l'hymne national du Gabon, au moment où les affrontements politiques viraient à des affrontements mystico-fétichistes, où les sorciers et autres charlatans, "semaient la haine et la division" dans les failles et les villages, en ville ou en campagne, ces "perfides trompeurs", comme aux "temps de nos aïeux", où les guerres tribales, l'esclavage et la haine de l'autre, régentaient la vie de nos sociétés.</li>
              <li>En 1959, il est représentant du Gabon au Conseil, Economique et Social de la république française à Paris.</li>
              <li>En 1960, année de l'indépendance nationale, commence alors pour cet acteur de la vie politique une longue et riche carrière politique et diplomatique.</li>
              <li>Le 2 décembre 1967, à la suite de la disparition du Père de l'indépendance, Léon Mba, il préside la grande cérémonie de prestation de serment du nouveau Président de la république, Albert-Bernard Bongo, conformément à la constitution, en qualité de Président de l'Assemblée nationale.</li>
              <li>De 1960 à 1982, il est également membre de la société des auteurs, compositeurs et éditeurs.</li>
              <li>En 1961, il est nommé par Léon Mba, Ambassadeur, auprès de la CEE et du BENELUX.</li>
              <li>En 1963, Ambassadeur auprès de la république fédérale allemande (RFA).</li>
              <li>En 1969, il publie un ouvrage célèbre : " l'homme Noir" aux éditions Paul Bory à Monaco.</li>
              <li>De 1972 à 1977, il est nommé Haut-Conseiller de l'Etat.</li>
              <li>Le 4 mai 1982, il tire sa révérence et termine sa vie dans le panthéon de l'Histoire de notre pays, sans finir dans les poubelles de l'Histoire et en laissant un exemple de dignité et de probité morale, qui manque cruellement de nos jours à beaucoup d'hommes politiques africains.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Jean Augustin Boumah (1927 – 2015)</h3>
            <p className="text-justify">
              Le Gabon vit un mois d’avril bien particulier : après Rose Francine Rogombé le 10 avril, André Mba Obame le 12, c’est au tour d’Augustin Boumah de tirer sa révérence. L’ancien président de l’Assemblée nationale s’est éteint le 23 avril à l’âge de 87 ans.
            </p>
            <p className="text-justify">
              Né le 7 novembre 1927 à Libreville, Augustin Boumah est mort le 23 avril 2015 à l’âge de 87 ans. Diplômé de l’Institut des Hautes Etudes d’Outre-Mer (Paris), l’ancien inspecteur général du Travail a été directeur de l’Ecole nationale d’administration (1965-1966) avant d’entrer au gouvernement comme ministre des Finances puis ministre d’Etat (1967-1975). Il avait également occupé de 1975 à 1980 les fonctions de président de la Cour Suprême, avant d’atterrir au perchoir (de 1980 à 1985 et de 1985 à 1990). Il avait donc dirigé l’Assemblée nationale pendant ces dix années.
            </p>
            <p className="text-justify">
              La légende veut que peu après les manifestations de rue de mai 1990 consécutives à l’annonce du décès de Joseph Rendjambé, il avait reçu la visite impromptue, à son domicile, des forces de sécurité convaincues d’y retrouver Alain Dickson, alors considéré comme le meneur des « casseurs » et « pyromanes ». Tout en reconnaissant qu’Alain Dickson était son neveu, Augustin Boumah n’avait pas manqué de marquer son étonnement devant la violation du domicile de la deuxième personnalité de l’Etat en dépit de l’immunité parlementaire dont il jouissait.
            </p>
            <p className="text-justify">
              Cet homme de rigueur et de principe annonça, dès le lendemain, sa démission du poste de président de l’Assemblée nationale. Convoqué alors au Palais de la présidence de la République par le président Omar Bongo qui tentait de le dissuader dans sa démarche, il répondit : « le Gabon n’est-il pas un Etat de droit, pourquoi accepter que l’on viole le domicile du président du Parlement ? » Il resta ferme sur sa décision. Lors de la mise en place de la Cour Constitutionnelle en octobre 1991, il fut nommé membre de cette institution et y siégea deux mandats durant.
            </p>
            <p className="text-justify">
              Il y a quelques années, ce natif de l’Estuaire avait perdu son épouse, et il n’a, depuis lors, pas été revu en public. Il laisse une nombreuse progéniture.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Jules-Aristide Bourdes-Ogouliguende</h3>
            <h4 className="text-xl font-semibold mt-4 mb-2">Fonction</h4>
            <p className="text-justify">Député à l'Assemblée nationale du Gabon</p>
            <h4 className="text-xl font-semibold mt-4 mb-2">Biographie</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Naissance: 28 février 1938 à Libreville</li>
              <li>Décès: 25 mars 2018 (à 80 ans) à Libreville</li>
              <li>Nationalité: Gabonais</li>
              <li>Activité: Homme politique</li>
            </ul>
            <p className="text-justify">
              Jules-Aristide Bourdes-Ogouliguende, né le 28 février 1938 à Libreville et mort dans la même ville le 25 mars 2018, est un homme politique gabonais.
            </p>
            <p className="text-justify">
              Il est le président du Congrès pour la démocratie et la justice (CDJ), un parti d'opposition. Il a été ministre de 1976 à 1990 et fut le président de l'Assemblée nationale de 1990 à 1993.
            </p>
            <h4 className="text-xl font-semibold mt-4 mb-2">Biographie (suite)</h4>
            <p className="text-justify">
              Bourdes-Ogouliguende est entré au gouvernement pour la première fois en 1976 en tant que ministre de la Fonction publique. En 1978, ses fonctions furent étendues à la Justice. Il rejoint le bureau politique du Parti démocratique gabonais en 1979. Au gouvernement, il est promu ministre d'État pour l'emploi en 1981, puis ministre d'État pour l'Éducation supérieure, la recherche et l'environnement en 1983.
            </p>
            <p className="text-justify">
              Lors des élections législatives de 1990, il est élu en tant que candidat du PDG, puis est élu président de l'Assemblée nationale, le 20 novembre 1990. Lors de son mandat à l'Assemblée, il a développé une certaine indépendance et il lui est arrivé de voter avec l'opposition. Il a démissionné du PDG en janvier 1993, puis de son mandat à l'Assemblée en avril.
            </p>
            <p className="text-justify">
              Il s'est présenté à l'élection présidentielle de 1993 au sein de la Convention des forces du changement et a terminé 5e avec 3,38 % des suffrages exprimés.
            </p>
            <p className="text-justify">
              Aux élections législatives de 1996, Bourdes-Ogouliguende est élu dans la circonscription de Port-Gentil.
            </p>
            <p className="text-justify">
              Il fut candidat à l'élection présidentielle anticipée de 2009, qui fait suite à la mort d'Omar Bongo.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Marcel Eloi Rahandi Chambrier (médecin et homme politique) : Au singulier</h3>
            <p className="text-justify">
              Dans le microcosme politique, le docteur Chambrier pose une réelle singularité. Certains ont pu lui reprocher sa forte personnalité, en aucune façon sa fidélité et son sens du devoir.
            </p>
            <h4 className="text-xl font-semibold mt-4 mb-2">Marcel Eloi Rahandi CHAMBRIER / Les années de formation</h4>
            <p className="text-justify">
              Né un 1er décembre 1933, à Libreville, de famille mpongwé, le jeune homme fait ses études à l'école catholique Montfort, laquelle a formé nombre de cadres du pays, avant les Indépendances. Ce cycle primaire achevé, Marcel Eloi Rahandi CHAMBRIER vient en France suivre son cursus secondaire, au lycée Michelet de Vanves, région parisienne. Son baccalauréat en poche, il s'inscrit en faculté de médecine, jusqu'à l'obtention de son diplôme tropical, assorti d'une spécialisation en hématologie. De 1957 à 1963, Marcel Eloi Rahandi CHAMBRIER fera partie des rares médecins à exercer en France, externe des hôpitaux de Paris.
            </p>
            <p className="text-justify">
              En 1967, de retour à Libreville, Marcel Eloi Rahandi CHAMBRIER ouvrira la première polyclinique privée du Gabon, quartier Montagne-Sainte. Une structure de référence aujourd'hui.
            </p>
            <h4 className="text-xl font-semibold mt-4 mb-2">Marcel Eloi Rahandi CHAMBRIER / Le retour au pays</h4>
            <p className="text-justify">
              Si la trajectoire est déjà brillante, comme souvent, le mal du pays est le plus fort. Marcel Eloi Rahandi CHAMBRIER rentre donc au Gabon, et ne peut manquer de s'intéresser à son époque, politiquement parlant. Ses sympathies n'auront pas été du goût de tout le monde, sa personnalité non plus. Au moment du putsch des jeunes officiers en février 1964, les soupçons sont lourds. Mais l'accession au pouvoir du président Bongo, le 2 décembre 1967, lui ouvre d'autres perspectives. Les événements de 1967, que tous deux ont difficilement vécus, n'y est sans doute pas étranger. A la création du PDG, en mars 1968, Marcel Eloi Rahandi CHAMBRIER devient l'un des membres fondateurs. Il y restera fidèle. Même quand le bateau semble prendre l'eau, dans cette période critique de 1990, où certains "barons" n'hésitent pas à le quitter, Marcel Eloi Rahandi CHAMBRIER affirme haut et fort son appartenance et ses amitiés. "Grande gueule" diront certains, mais homme de parole.
            </p>
            <p className="text-justify">
              S'il devient président de l'ordre des médecins gabonais (1968-1974), Marcel Eloi Rahandi CHAMBRIER occupe aussi plusieurs postes ministériels dans les différents gouvernements du président Bongo. Député à l'assemblée, il tiendra aussi la présidence de cette institution. Ceci dit, la trajectoire n'est pas linéaire. Il semble que son caractère, parfois jugé hautain, lui ait valu quelques inimitiés. Peu lui importe !
            </p>
            <p className="text-justify">
              Issu de la noblesse mpongwé, Marcel Eloi Rahandi CHAMBRIER aime à rappeler ses origines et ne se démarque jamais d'une élégance irréprochable, au public comme au privé. La chose a pu déplaire, mais à 83 ans, il ne change pas une ligne à ce registre. Et la voix reste forte.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Richard Auguste Onouviet</h3>
            <p className="text-justify">
              Richard Auguste Onouviet est un homme d'État gabonais, né le 14 juin 1949. Onouviet est ministre de la Décentralisation et de la Politique de la ville. Il est aussi député de Lambaréné.
            </p>
            <p className="text-justify">
              Il est, du 8 avril 2016 au 30 avril 2018, président de l'Assemblée nationale.
            </p>
            <p className="text-justify">
              Le 30 avril 2018, après l'échec du gouvernement d'Emmanuel Issoze Ngondet d'organiser les élections législatives gabonaises de 2018, la Cour constitutionnelle lui ordonne de démissionner, dissout l'Assemblée nationale et confie le pouvoir législatif au Sénat jusqu'à l'organisation des législatives.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Faustin Boukoubi</h3>
            <h4 className="text-xl font-semibold mt-4 mb-2">Fonctions</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Président de l'Assemblée nationale du Gabon</li>
              <li>En fonction depuis le 11 janvier 2019 (3 mois et 18 jours)</li>
              <li>Législature: 4e</li>
              <li>Prédécesseur: Richard Auguste Onouviet</li>
            </ul>
            <h4 className="text-xl font-semibold mt-4 mb-2">Biographie</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Date de naissance: 20 mars 1954 (65 ans)</li>
              <li>Lieu de naissance: Dolisie (Congo)</li>
              <li>Nationalité: Gabonaise</li>
              <li>Parti politique: PDG</li>
              <li>Diplômé de: Université de Kobe</li>
            </ul>
            <p className="text-justify">
              Faustin Boukoubi, né le 20 mars 1954 à Dolisie (actuelle République du Congo), est un homme politique gabonais, député, plusieurs fois ministre, secrétaire général du Parti démocratique gabonais (PDG) de 2008 à 2017, et président de l'Assemblée nationale depuis janvier 2019. Il est l'une des personnalités les plus influentes de la majorité présidentielle.
            </p>
            <p className="text-justify">
              Après une scolarité à Koulamoutou (Ogooué-Lolo), il intègre l'Institut national des sciences de gestion de Libreville, puis complète sa formation à l'École d'administration et de gestion d'entreprise de Kobé (Japon).
            </p>
            <p className="text-justify">
              Il entre au gouvernement pour la première fois au début des années 1990, en tant que secrétaire d'État auprès du ministre des Finances. Il s'en éloigne en 1994 pour accepter le poste de directeur général adjoint de l'Union gabonaise des banques (UGB), mais son succès aux élections législatives de 1996 lui vaut le portefeuille de ministre de la Santé entre 1997 et 2004, suivi par celui de ministre d'État à l'Agriculture entre 2004 et 2008. Dans l'intervalle il est réélu député, en 2001 et 2006.
            </p>
            <p className="text-justify">
              En 2008, il conquiert de haute lutte le poste de secrétaire général du Parti démocratique gabonais, d'abord promis à l'ancienne ministre Paulette Missambo. En 2009, à la mort d'Omar Bongo Ondimba, le fondateur du PDG, Faustin Boukoubi apporte son soutien à son fils Ali Bongo et travaille à préserver la cohésion du parti.
            </p>
            <p className="text-justify">
              Il est amené à démissionner le 10 août 2017.
            </p>
            <p className="text-justify">
              En janvier 2019, Boukoubi est élu président de l'Assemblée nationale.
            </p>
          </div>
        </div>

        {/* Sidebar (Right Column) */}
        <div className="w-full md:w-3/12 px-4 mt-8 md:mt-0">
          {/* Section Président */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Jean-François NDONGOU</h3>
            <div className="text-center mb-4">
              <img
                src={presidentImages["Jean-François NDONGOU"]} // Utilisation de l'image du président
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

export default HistoryPage;
