// src/App.tsx
import React, { useState } from 'react';
// Importation des icônes Lucide-React nécessaires
import { Menu, X, Phone, MapPin, Facebook, Youtube, Twitter, FileText, Video, Building, Globe, Mail, ChevronRight } from 'lucide-react';
// Importation des composants
import ParallaxSlider from './components/ParallaxSlider';
import DeputesProvincePage from './components/ProvinceMap';
import HistoryPage from './components/HistoryPage';
import MissionsPage from './components/MissionsPage';
import BureauPage from './components/BureauPage';
import ConferencePresidentsPage from './components/ConferencePresidentspage';
import CommissionsGeneralesPermanentesPage from './components/CommissionsGeneralesPermanentesPage';
import CommissionLoisPage from './components/CommissionLoisPage';
import CommissionFinancesPage from './components/CommissionFinancesPage';
import CommissionAffairesEtrangeresPage from './components/CommissionAffairesEtrangeresPage';
import CommissionSantePage from './components/CommissionSantePage';
import CommissionEnvironnementPage from './components/CommissionEnvironnementPage';
import CommissionPlanificationPage from './components/CommissionPlanificationPage';
import DeputesTransitionPage from './components/DeputesTransitionPage';
import DeputesAlphabetiquePage from './components/DeputesAlphabetiquePage';
import DeputiesList from './components/DeputiesList';
import ContacterDeputePage from './components/ContacterDeputePage';
//import DeputesPage from './components/DeputesPage';
import AnciensPresidentsPage from './components/AnciensPresidentsPage';
import PresidentBiographyPage from './components/PresidentBiographyPage';
import LegislaturesPrecedentesPage from './components/LegislaturesPrecedentesPage';
import Legislature13Page from './components/Legislature13Page';
import Legislature12Page from './components/Legislature12Page';
import Legislature11Page from './components/Legislature11Page';
import Legislature10Page from './components/Legislature10Page';
import Legislature9Page from './components/Legislature9Page';
import Legislature8Page from './components/Legislature8Page';
import DeputeDetailsPage from './components/DeputeDetailsPage';
import JournalDebatsPage from './components/JournalDebatsPage';
import Session2Details2014Page from './components/Session2Details2014Page';
import SyntheseTravauxPage from './components/SyntheseTravauxPage';
import QuestionsOralesAvecDebatPage from './components/QuestionsOralesAvecDebatPage';
import QuestionsEcritesPage from './components/QuestionsEcritesPage';
import QuestionsOralesActualitePage from './components/QuestionsOralesActualitePage';
import CommissionEnquetePage from './components/CommissionEnquetePage';
import InformationsCommissionsPage from './components/InformationsCommissionsPage';
import LexiqueVocabulaireParlementaire from './components/LexiqueVocabulaireParlementaire';
import DefinitionLoiPage from './components/DefinitionLoiPage';
import RepertoireLoisAdopteesPage from './components/RepertoireLoisAdopteesPage';
import RepertoireLoisPromulgueesPage from './components/RepertoireLoisPromulgueesPage';
import ActivitesMultilateralesPage from './components/ActivitesMultilateralesPage';
import ListeOrganisationsInterparlementaires from './components/ListeOrganisationsInterparlementaires';
import ActivitesSections from './components/ActivitesSections';
import ListeGroupes from './components/ListeGroupes';
import ActivitesGroupes from './components/ActivitesGroupes';
import ListeReseaux from './components/ListeReseaux';
import ActivitesReseaux from './components/ActivitesReseaux';
import EvenementsPage from './components/EvenementsPage'; // Importation du nouveau composant EvenementsPage


// Interface pour les éléments de menu, incluant un sous-menu optionnel
interface MenuItem {
  id: string;
  label: string;
  submenu?: { label: string; id: string; hasSubSubMenu?: boolean; submenu?: { label: string; id: string; }[] }[]; // Ajout du sous-menu pour les sous-sous-menus
}

// Interface pour les articles de presse
interface NewsArticle {
  title: string;
  excerpt: string;
  date: string;
}

// Interface commune pour les props des pages qui reçoivent `navigateTo`






// Définition des éléments du menu de navigation avec leurs sous-menus
const menuItems: MenuItem[] = [
  { id: 'accueil', label: 'Accueil' },
  {
    id: 'presentation',
    label: 'Présentation',
    submenu: [
      { id: 'historique', label: "L'historique" }, // Enlève hasSubSubMenu
      { id: 'cadre-juridique', label: "Le cadre juridique" }, // Enlève hasSubSubMenu
      { id: 'missions', label: "Les missions" },
      { id: 'administration', label: "L'Administration" }, // Enlève hasSubSubMenu
    ],
  },
  {
    id: 'organes',
    label: 'Organes',
    submenu: [
      { id: 'bureau', label: "Le Bureau", hasSubSubMenu: true },
      { id: 'conference-presidents', label: "La Conférence des Présidents" },
      { id: 'commissions-generales', label: "Les Commissions générales permanentes" },
    ],
  },
  {
    id: 'deputes',
    label: 'Députés',
    submenu: [
      { id: 'deputes-transition', label: "Les Députés de la Transition" },
      { id: 'femmes-deputes', label: "Liste des Femmes Députés" },
      { id: 'contacter-depute', label: "Contacter le Député" },
      { id: 'anciens-presidents', label: "Les anciens Présidents" },
      { id: 'legislatures-precedentes', label: "Les législatures précédentes" },
    ],
  },
  {
    id: 'travaux',
    label: 'Travaux parlementaires',
    submenu: [
      { id: 'journal-debats', label: "Journal des débats" },
      { id: 'synthese-travaux', label: "Synthèse des travaux" },
      {
        id: 'controle-parlementaire',
        label: "Contrôle parlementaire",
        hasSubSubMenu: true,
        submenu: [ // Ajout du sous-sous-menu
          { id: 'questions-orales-debat', label: "Questions orales avec débat" },
          { id: 'questions-ecrites', label: "Questions écrites" },
          { id: 'questions-orales-actualite', label: "Questions orales d'actualité" },
          { id: 'commissions-enquete', label: "Commissions d'enquête" },
          { id: 'informations-commissions', label: "Informations des commissions" },
        ]
      },
      { id: 'seances-direct', label: "Séances en direct" },
      { id: 'lexique', label: "Lexique" }, // Ajout de l'entrée Lexique
    ],
  },
  {
    id: 'lois',
    label: 'Lois',
    submenu: [
      { id: 'definition-lois', label: "Définition" },
      { id: 'repertoire-lois-adoptees', label: "Répertoire des lois adoptées" },
      { id: 'repertoire-lois-promulguees', label: "Repertoire des lois promulguées" },
    ],
  },
  {
    id: 'relations',
    label: 'Relations internationales',
    submenu: [
      {
        id: 'activites-multilaterales',
        label: "Activités multilatérales",
        hasSubSubMenu: true,
        submenu: [
          { id: 'liste-organisations-interparlementaires', label: "Liste des organisations interparlementaires" },
          { id: 'activites-sections', label: "Activités des Sections" },
        ]
      },
      {
        id: 'groupes-amitie',
        label: "Groupes interparlementaires d'amitié",
        hasSubSubMenu: true,
        submenu: [
          { id: 'liste-groupes', label: "Liste des Groupes" },
          { id: 'activites-groupes', label: "Activités des Groupes" },
        ]
      },
      {
        id: 'reseaux-interparlementaires',
        label: "Réseaux interparlementaires",
        hasSubSubMenu: true,
        submenu: [
          { id: 'liste-reseaux', label: "Liste des réseaux" },
          { id: 'activites-reseaux', label: "Activités des Réseaux" },
        ]
      },
    ],
  },
  {
    id: 'actualites',
    label: 'Actualités',
    submenu: [
      { id: 'evenements', label: "Les événements" },
    ],
  },
  { id: 'contacts', label: 'Contacts' }
];

// Main application component
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null); // Nouveau pour les sous-sous-menus
  const [deputeDetails, setDeputeDetails] = useState<any>(null);
  const [presidentDetails, setPresidentDetails] = useState<any>(null);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [sessionDetails, setSessionDetails] = useState<any>(null);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigateTo = (page: string, data?: any) => {
    setCurrentPage(page);
    if (page === 'depute-details') {
      setDeputeDetails(data);
      setPresidentDetails(null);
      setSelectedProvince(null);
      setSessionDetails(null);
    } else if (page === 'president-biography') {
      setPresidentDetails(data);
      setDeputeDetails(null);
      setSelectedProvince(null);
      setSessionDetails(null);
    } else if (page === 'deputes-province-details') {
      setSelectedProvince(data);
      setDeputeDetails(null);
      setPresidentDetails(null);
      setSessionDetails(null);
    } else if (page === 'session-details') {
      setSessionDetails(data);
      setDeputeDetails(null);
      setPresidentDetails(null);
      setSelectedProvince(null);
    }
    else {
      setDeputeDetails(null);
      setPresidentDetails(null);
      setSelectedProvince(null);
      setSessionDetails(null);
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null); // Réinitialiser le sous-sous-menu
  };

  // Données fictives pour les articles de presse
  const newsArticles = {
    nationales: [
      {
        title: "Naufrage de l'Esther Miracle : Suites judiciaires",
        excerpt: "Suite au naufrage du bateau \"Esther Miracle\" de...",
        date: "10/03/2023"
      },
      {
        title: "Réforme constitutionnelle : Les enjeux",
        excerpt: "Le projet de réforme constitutionnelle examine...",
        date: "15/03/2023"
      }
    ],
    assemblee: [
      {
        title: "Gabon/Politique : Assemblée Nationale en session",
        excerpt: "Le Premier Ministre, Chef du Gouvernement de la...",
        date: "08/12/2023"
      },
      {
        title: "Budget 2024 : Adoption des mesures",
        excerpt: "Les députés ont adopté le projet de budget...",
        date: "12/12/2023"
      }
    ],
    international: [
      {
        title: "Présidentielle en Guinée Équatoriale",
        excerpt: "En Guinée Équatoriale, le président sortant...",
        date: "22/11/2022"
      },
      {
        title: "Coopération CEMAC : Nouveaux accords",
        excerpt: "La délégation parlementaire gabonaise...",
        date: "28/11/2022"
      }
    ]
  };

  // Composant Header
  const Header = () => (
    <header className="bg-white shadow-md relative z-50">
      {/* Barre supérieure du header */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Fra</span> {/* Langue */}
              <span className="text-gray-600">Suivez-nous</span>
              {/* Icônes de réseaux sociaux */}
              <div className="flex space-x-2">
                <Facebook className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-800" />
                <Youtube className="w-4 h-4 text-red-600 cursor-pointer hover:text-red-800" />
                <Twitter className="w-4 h-4 text-blue-400 cursor-pointer hover:text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal avec logo et titre */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            {/* Logo fictif */}
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-yellow-500 rounded-full flex items-center justify-center">
              <img
  src="public/images/blason_rep.png" // <-- Remplacez cette URL par celle de votre blason
  alt="Blason de l'Assemblée Nationale"
  className="w-17 h-17 rounded-full object-cover border-2 border-white shadow-lg"
  onError={(e) => {
    // Fallback si l'image ne se charge pas
    e.currentTarget.src = "https://placehold.co/64x64/FF0000/FFFFFF?text=Error";
    e.currentTarget.alt = "Image non trouvée";
  }}
/>
            </div>
            {/* Titre et sous-titre */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800 font-serif">ASSEMBLÉE NATIONALE</h1>
              <p className="text-sm text-gray-600">République Gabonaise</p>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de navigation */}
      <nav className="bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Menu de navigation pour les grands écrans */}
            <div className="hidden lg:flex space-x-0">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => item.submenu && setActiveDropdown(item.id)}
                  onMouseLeave={() => item.submenu && setActiveDropdown(null)}
                >
                  <button
                    onClick={() => {
                      // Si c'est "Activités multilatérales", on navigue directement vers cette page
                      if (item.id === 'activites-multilaterales') {
                        navigateTo('activites-multilaterales');
                      } else if (item.id === 'groupes-amitie') {
                        navigateTo('liste-groupes');
                      } else if (item.id === 'reseaux-interparlementaires') {
                        navigateTo('liste-reseaux');
                      } else if (item.id === 'evenements') { // Ajout de la navigation pour "Événements"
                        navigateTo('evenements');
                      }
                      else {
                        navigateTo(item.id);
                      }
                    }}
                    className={`px-4 py-4 text-sm font-medium transition-colors duration-200 flex items-center ${
                      currentPage === item.id
                        ? 'bg-blue-800 text-white'
                        : 'text-blue-100 hover:text-white hover:bg-blue-800'
                    }`}
                  >
                    {item.label}
                    {item.submenu && (
                      <svg className="ml-1 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>

                  {/* Sous-menu déroulant */}
                  {item.submenu && activeDropdown === item.id && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-max min-w-[200px] border border-gray-200">
                      {item.submenu.map((subItem) => (
                        <div
                          key={subItem.id}
                          className="relative group"
                          onMouseEnter={() => subItem.hasSubSubMenu && setActiveSubDropdown(subItem.id)}
                          onMouseLeave={() => subItem.hasSubSubMenu && setActiveSubDropdown(null)}
                        >
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (!subItem.hasSubSubMenu) {
                                navigateTo(subItem.id);
                              }
                            }}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-700 flex justify-between items-center"
                          >
                            {subItem.label}
                            {subItem.hasSubSubMenu && (
                              <ChevronRight className="w-4 h-4 text-gray-500" />
                            )}
                          </a>
                          {/* Sous-sous-menu */}
                          {subItem.hasSubSubMenu && activeSubDropdown === subItem.id && (
                            <div className="absolute left-full top-0 bg-white shadow-lg rounded-md py-2 w-max min-w-[200px] border border-gray-200">
                              {/* Condition pour les sous-sous-menus de "Travaux parlementaires" */}
                              {item.id === 'travaux' && subItem.id === 'controle-parlementaire' && subItem.submenu?.map((subSubItem) => (
                                  <a
                                    key={subSubItem.id}
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navigateTo(subSubItem.id);
                                    }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                                  >
                                    {subSubItem.label}
                                  </a>
                                ))}
                              {/* Condition pour les sous-sous-menus de "Relations internationales" */}
                              {item.id === 'relations' && subItem.submenu?.map((subSubItem) => (
                                  <a
                                    key={subSubItem.id}
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navigateTo(subSubItem.id);
                                    }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                                  >
                                    {subSubItem.label}
                                  </a>
                                ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bouton de menu mobile pour les petits écrans */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-blue-200 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Menu mobile (affiché conditionnellement) */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-blue-800 border-t border-blue-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => {
                        if (item.submenu) {
                          setActiveDropdown(activeDropdown === item.id ? null : item.id);
                          setActiveSubDropdown(null); // Fermer les sous-sous-menus lors du changement de menu principal
                        } else {
                          // Pour le menu mobile, on navigue directement vers la page si le parent est cliqué
                          if (item.id === 'activites-multilaterales') {
                            navigateTo('activites-multilaterales');
                          } else if (item.id === 'groupes-amitie') {
                            navigateTo('liste-groupes');
                          } else if (item.id === 'reseaux-interparlementaires') {
                            navigateTo('liste-reseaux');
                          } else if (item.id === 'evenements') { // Ajout de la navigation pour "Événements"
                            navigateTo('evenements');
                          }
                          else {
                            navigateTo(item.id);
                          }
                        }
                      }}
                      className={`block px-3 py-2 text-sm font-medium w-full text-left transition-colors duration-200 flex justify-between items-center ${
                        currentPage === item.id || activeDropdown === item.id
                          ? 'bg-blue-700 text-white'
                          : 'text-blue-100 hover:text-white hover:bg-blue-700'
                      }`}
                    >
                      {item.label}
                      {item.submenu && (
                        <svg className={`ml-1 h-4 w-4 transform transition-transform ${activeDropdown === item.id ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    {/* Sous-menu mobile */}
                    {item.submenu && activeDropdown === item.id && (
                      <div className="pl-4 pr-2 py-1 bg-blue-700 border-t border-blue-600">
                        {item.submenu.map((subItem) => (
                          <div key={subItem.id}>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                if (subItem.hasSubSubMenu) {
                                  setActiveSubDropdown(activeSubDropdown === subItem.id ? null : subItem.id);
                                } else {
                                  navigateTo(subItem.id);
                                }
                              }}
                              className="block px-3 py-2 text-sm text-blue-100 hover:bg-blue-600 hover:text-white rounded-md flex justify-between items-center"
                            >
                              {subItem.label}
                              {subItem.hasSubSubMenu && (
                                  <ChevronRight className={`w-4 h-4 text-blue-300 transform transition-transform ${activeSubDropdown === subItem.id ? 'rotate-90' : 'rotate-0'}`} />
                              )}
                            </a>
                            {/* Sous-sous-menu mobile */}
                            {subItem.hasSubSubMenu && activeSubDropdown === subItem.id && (
                              <div className="pl-4 pr-2 py-1 bg-blue-600 border-t border-blue-500">
                                {/* Condition pour les sous-sous-menus de "Travaux parlementaires" */}
                                {item.id === 'travaux' && subItem.id === 'controle-parlementaire' && subItem.submenu?.map((subSubItem) => (
                                    <a
                                      key={subSubItem.id}
                                      href="#"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        navigateTo(subSubItem.id);
                                      }}
                                      className="block px-3 py-2 text-sm text-blue-100 hover:bg-blue-500 hover:text-white rounded-md"
                                    >
                                      {subSubItem.label}
                                    </a>
                                  ))}
                                {/* Condition pour les sous-sous-menus de "Relations internationales" */}
                                {item.id === 'relations' && subItem.submenu?.map((subSubItem) => (
                                    <a
                                      key={subSubItem.id}
                                      href="#"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        navigateTo(subSubItem.id);
                                      }}
                                      className="block px-3 py-2 text-sm text-blue-100 hover:bg-blue-500 hover:text-white rounded-md"
                                    >
                                      {subSubItem.label}
                                    </a>
                                  ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );


  // Composant Section Actualités
  const NewsSection: React.FC = () => {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Actualités Nationales */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-red-600 text-white px-4 py-3">
                <h3 className="font-bold flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  ACTUALITÉS NATIONALES
                </h3>
              </div>
              <div className="p-6">
                {newsArticles.nationales.map((article: NewsArticle, index: number) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <h4 className="font-semibold text-gray-800 mb-2 hover:text-red-600 cursor-pointer transition-colors duration-200">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">{article.excerpt}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">{article.date}</span>
                      <span className="text-red-600 hover:text-red-800 cursor-pointer">Lire l'article &gt;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activités de l'Assemblée */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white px-4 py-3">
                <h3 className="font-bold flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  ACTIVITÉS DE L'ASSEMBLÉE NAT
                </h3>
              </div>
              <div className="p-6">
                {newsArticles.assemblee.map((article: NewsArticle, index: number) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <h4 className="font-semibold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">{article.excerpt}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">{article.date}</span>
                      <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Lire l'article &gt;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activités Internationales */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-600 text-white px-4 py-3">
                <h3 className="font-bold flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  ACTIVITÉS À L'INTERNATIONAL
                </h3>
              </div>
              <div className="p-6">
                {newsArticles.international.map((article: NewsArticle, index: number) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <h4 className="font-semibold text-gray-800 mb-2 hover:text-green-600 cursor-pointer transition-colors duration-200">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">{article.excerpt}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">{article.date}</span>
                      <span className="text-green-600 hover:text-green-800 cursor-pointer">Lire l'article &gt;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Composant Page Contacts
  const ContactsPage: React.FC = () => (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Services & Contacts</h1>

        {/* Tableau des services */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Médiathèque</th>
                  <th className="px-6 py-4 text-left font-semibold">Informations utiles</th>
                  <th className="px-6 py-4 text-left font-semibold">Organes de presse</th>
                  <th className="px-6 py-4 text-left font-semibold">Nous Contacter</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Video className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Vidéothèque</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-blue-600" />
                        <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Documents</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      <div className="text-blue-600 hover:text-blue-800 cursor-pointer">→ sentit.ga</div>
                      <div className="text-blue-600 hover:text-blue-800 cursor-pointer">→ egal.ga</div>
                      <div className="text-blue-600 hover:text-blue-800 cursor-pointer">→ gouv.ga</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      <div className="text-blue-600 hover:text-blue-800 cursor-pointer">→ gabon24.ga</div>
                      <div className="text-blue-600 hover:text-blue-800 cursor-pointer">→ gabonmediatime.com</div>
                      <div className="text-blue-600 hover:text-blue-800 cursor-pointer">→ lesdepechesdugabon.com</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-600" />
                        <span>Libreville, Gabon</span>
                      </div>
                      <div>BP: 29</div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-gray-600" />
                        <span>+241 011 74 90 21</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>contact@assemblee-nationale.ga</span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Formulaire de Contact */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 font-serif">Formulaire de Contact</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Votre nom complet"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="votre.email@exemple.com"
                />
            </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Objet de votre message"
                />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Votre message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  // Composant Footer
  const Footer = () => (
    <footer className="bg-blue-900 text-blue-100 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p className="flex items-center mb-2">
            <MapPin className="w-5 h-5 mr-2 text-blue-300" />
            BP 385, Libreville, Gabon
          </p>
          <p className="flex items-center mb-2">
            <Phone className="w-5 h-5 mr-2 text-blue-300" />
            (+241) 01 72 00 20
          </p>
          <p className="flex items-center">
            <Mail className="w-5 h-5 mr-2 text-blue-300" />
            contact@assemblee-nationale.ga
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
          <ul>
            <li className="mb-2"><a href="#" onClick={() => navigateTo('accueil')} className="hover:underline">Accueil</a></li>
            <li className="mb-2"><a href="#" onClick={() => navigateTo('deputes')} className="hover:underline">Députés</a></li>
            <li className="mb-2"><a href="#" onClick={() => navigateTo('lois')} className="hover:underline">Lois</a></li>
            <li className="mb-2"><a href="#" onClick={() => navigateTo('actualites')} className="hover:underline">Actualités</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100073645166615" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@assembleenationaledugabono3895" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/assembleegabon" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-blue-300 text-sm mt-8 border-t border-blue-800 pt-4">
        &copy; {new Date().getFullYear()} Assemblée Nationale du Gabon. Tous droits réservés.
      </div>
    </footer>
  );

  // Composant placeholder pour la page d'accueil
  const HomePage: React.FC<{ navigateTo: (page: string) => void }> = ({ navigateTo }) => (
    <>
      <ParallaxSlider />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">
          Bienvenue sur le site de l'Assemblée Nationale du Gabon
        </h2>
        <p className="text-gray-700">
          Explorez les travaux législatifs, les membres du parlement et les publications officielles.
        </p>
        <button
          onClick={() => navigateTo('deputes-transition')}
          className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Voir les Députés de la Transition
        </button>
      </div>
    </>
  );


  // Fonction pour rendre le contenu de la page en fonction de l'état `currentPage`
  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return (
          <>
            <ParallaxSlider />
            <NewsSection />
            <section className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Dernières Vidéos */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <Video className="w-6 h-6 mr-2 text-red-600" />
                      Dernières Vidéos
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 cursor-pointer transition-colors">
                        <h4 className="font-semibold text-gray-800">Session plénière du 15 Mars 2024</h4>
                        <p className="text-sm text-gray-600">Débat sur le projet de loi de finances rectificative</p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 cursor-pointer transition-colors">
                        <h4 className="font-semibold text-gray-800">Conférence de presse du Président</h4>
                        <p className="text-sm text-gray-600">Point sur les travaux de la session extraordinaire</p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 cursor-pointer transition-colors">
                        <h4 className="font-semibold text-gray-800">Cérémonie d'ouverture de la 2ème session ordinaire</h4>
                        <p className="text-sm text-gray-600">Discours du Président de l'Assemblée Nationale</p>
                      </div>
                    </div>
                  </div>

                  {/* Documents Législatifs */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <FileText className="w-6 h-6 mr-2 text-blue-600" />
                      Documents Législatifs
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 cursor-pointer transition-colors">
                        <h4 className="font-semibold text-gray-800">Loi de finances rectificative 2024</h4>
                        <p className="text-sm text-gray-600">Texte adopté en session extraordinaire</p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 cursor-pointer transition-colors">
                        <h4 className="font-semibold text-gray-800">Règlement intérieur de l'Assemblée Nationale</h4>
                        <p className="text-sm text-gray-600">Version consolidée du règlement</p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 cursor-pointer transition-colors">
                        <h4 className="font-semibold text-gray-800">Rapport de la Commission des Lois</h4>
                        <p className="text-sm text-gray-600">Analyse du projet de loi sur les partis politiques</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      case 'historique':
        return <HistoryPage />;
      case 'missions':
        return <MissionsPage />;
      case 'bureau':
        return <BureauPage />;
      case 'conference-presidents':
        return <ConferencePresidentsPage  />;
      case 'commissions-generales':
        return <CommissionsGeneralesPermanentesPage navigateTo={navigateTo} />;
      case 'commission-lois-details':
        return <CommissionLoisPage />;
      case 'commission-finances-details':
        return <CommissionFinancesPage navigateTo={navigateTo} />;
      case 'commission-affaires-etrangeres-details':
        return <CommissionAffairesEtrangeresPage  />;
      case 'commission-sante-details':
        return <CommissionSantePage  />;
      case 'commission-environnement-details':
        return <CommissionEnvironnementPage  />;
      case 'commission-planification-details':
        return <CommissionPlanificationPage  />;
      case 'deputes-transition':
        return <DeputesTransitionPage navigateTo={navigateTo} />;
      case 'femmes-deputes':
        return <DeputiesList />;
      case 'contacter-depute':
        return <ContacterDeputePage navigateTo={navigateTo} />;
      case 'depute-details':
        return deputeDetails ? <DeputeDetailsPage depute={deputeDetails} navigateTo={navigateTo} /> : <DeputesTransitionPage navigateTo={navigateTo} />;
      case 'deputes-alphabetique':
        return <DeputesAlphabetiquePage  />;
      case 'deputes-province':
        return <DeputesProvincePage onSelectProvince={(provinceId: string) => navigateTo('deputes-province-details', provinceId)} />;
      case 'deputes-province-details':
        return <DeputesProvincePage onSelectProvince={(provinceId: string) => navigateTo('deputes-province-details', provinceId)} />;
      case 'anciens-presidents':
        return <AnciensPresidentsPage navigateTo={navigateTo} />;
      case 'president-biography':
        return presidentDetails ? <PresidentBiographyPage president={presidentDetails} navigateTo={navigateTo} /> : <AnciensPresidentsPage navigateTo={navigateTo} />;
      case 'legislatures-precedentes':
        return <LegislaturesPrecedentesPage navigateTo={navigateTo} />;
      case 'legislature-13':
        return <Legislature13Page navigateTo={navigateTo} />;
      case 'legislature-12':
        return <Legislature12Page navigateTo={navigateTo} />;
      case 'legislature-11':
        return <Legislature11Page navigateTo={navigateTo} />;
      case 'legislature-10':
        return <Legislature10Page navigateTo={navigateTo} />;
      case 'legislature-9':
        return <Legislature9Page navigateTo={navigateTo} />;
      case 'legislature-8':
        return <Legislature8Page navigateTo={navigateTo} />;
      case 'deputes':
        return <ContacterDeputePage navigateTo={navigateTo} />;
      case 'journal-debats':
        return <JournalDebatsPage navigateTo={navigateTo} />;
      case 'synthese-travaux':
        return <SyntheseTravauxPage navigateTo={navigateTo} />;
      case 'questions-orales-debat':
        return <QuestionsOralesAvecDebatPage navigateTo={navigateTo} />;
      case 'questions-ecrites':
        return <QuestionsEcritesPage navigateTo={navigateTo} />;
      case 'questions-orales-actualite':
        return <QuestionsOralesActualitePage navigateTo={navigateTo} />;
      case 'commissions-enquete':
        return <CommissionEnquetePage navigateTo={navigateTo} />;
      case 'informations-commissions':
        return <InformationsCommissionsPage navigateTo={navigateTo} />;
      case 'lexique': // Route pour la page Lexique Vocabulaire Parlementaire
        return <LexiqueVocabulaireParlementaire navigateTo={navigateTo} />;
      case 'definition-lois': // Nouvelle route pour la définition de la loi
        return <DefinitionLoiPage navigateTo={navigateTo} />;
      case 'repertoire-lois-adoptees': // Route pour le répertoire des lois adoptées
        return <RepertoireLoisAdopteesPage navigateTo={navigateTo} />;
      case 'repertoire-lois-promulguees': // Nouvelle route pour le répertoire des lois promulguées
        return <RepertoireLoisPromulgueesPage navigateTo={navigateTo} />;
      case 'activites-multilaterales': // Route pour la page principale des activités multilatérales
        return <ActivitesMultilateralesPage navigateTo={navigateTo} />;
      case 'liste-organisations-interparlementaires': // Nouvelle route pour la liste des organisations
        return <ListeOrganisationsInterparlementaires navigateTo={navigateTo} />;
      case 'activites-sections': // Nouvelle route pour les activités des sections
        return <ActivitesSections navigateTo={navigateTo} />;
      case 'groupes-amitie': // Route pour la page principale des groupes d'amitié
        return <ListeGroupes navigateTo={navigateTo} />;
      case 'liste-groupes': // Nouvelle route pour la liste des groupes
        return <ListeGroupes navigateTo={navigateTo} />;
      case 'activites-groupes': // Nouvelle route pour les activités des groupes
        return <ActivitesGroupes navigateTo={navigateTo} />;
      case 'reseaux-interparlementaires': // Route pour la page principale des réseaux interparlementaires
        return <ListeReseaux navigateTo={navigateTo} />;
      case 'liste-reseaux': // Nouvelle route pour la liste des réseaux
        return <ListeReseaux navigateTo={navigateTo} />;
      case 'activites-reseaux': // Nouvelle route pour les activités des réseaux
        return <ActivitesReseaux navigateTo={navigateTo} />;
      case 'evenements': // Route pour la page des événements
        return <EvenementsPage navigateTo={navigateTo} />;
      case 'session-details':
        return sessionDetails ? <Session2Details2014Page session={sessionDetails} navigateTo={navigateTo} /> : <JournalDebatsPage navigateTo={navigateTo} />;
      case 'contacts':
        return <ContactsPage />;
      // Pages non implémentées avec un placeholder
      case 'travaux': // La page "Travaux parlementaires" elle-même
      case 'controle-parlementaire': // La page "Contrôle parlementaire" elle-même (si elle n'a pas de contenu direct)
      case 'seances-direct':
      case 'cadre-juridique':
      case 'administration':
        return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Page en Construction</h2>
            <p className="text-lg text-gray-700 mb-8">
              Cette section est en cours de développement. Revenez bientôt !
            </p>
            <button
              onClick={() => navigateTo('accueil')}
              className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              Retour à l'accueil
            </button>
          </div>
        );
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
