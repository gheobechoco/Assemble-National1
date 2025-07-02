// src/components/SessionDetailsPage.tsx
import React from 'react';
import { Home, BookOpen, Calendar, FileText } from 'lucide-react';

interface SessionDetailsPageProps {
  navigateTo: (page: string, data?: any) => void;
  session: { id: string; label: string; date: string; }; // Données de la session passées en prop
}

const SessionDetailsPage: React.FC<SessionDetailsPageProps> = ({ navigateTo, session }) => {
  // Données fictives pour le contenu d'une session (à remplacer par des données réelles)
  const sessionContent = {
    'session-12-2018': {
      image: "https://placehold.co/400x250/e0e0e0/333333?text=Session+2018",
      title: "Compte rendu de la 1ère session ordinaire 2018",
      details: "Cette session a été marquée par l'examen de plusieurs projets de loi importants, notamment sur la réforme foncière et la modernisation de l'administration publique. Les débats ont été intenses et ont abouti à l'adoption de textes clés pour le développement du pays.",
      documents: [
        { name: "Discours d'ouverture", link: "#" },
        { name: "Procès-verbal de la séance du 15/03/2018", link: "#" },
        { name: "Loi n°XXX/2018 sur la réforme foncière", link: "#" },
      ]
    },
    'session-13-2019': {
      image: "https://placehold.co/400x250/e0e0e0/333333?text=Session+2019",
      title: "Compte rendu de la 1ère session ordinaire 2019",
      details: "La 1ère session ordinaire de 2019 a abordé des sujets cruciaux tels que l'amélioration du système éducatif et les mesures de soutien à l'économie locale. Les députés ont travaillé sur des propositions visant à renforcer la résilience économique du Gabon.",
      documents: [
        { name: "Rapport de la Commission Éducation", link: "#" },
        { name: "Synthèse des débats économiques", link: "#" },
      ]
    },
    'session-2014': {
      image: "https://placehold.co/400x250/e0e0e0/333333?text=Session+2014",
      title: "Compte rendu de la Deuxième Session Ordinaire 2014",
      details: "La Deuxième Session Ordinaire de 2014 a été consacrée à l'examen du budget de l'État pour l'année suivante et à l'évaluation des politiques publiques en matière de santé et d'infrastructures. Des ajustements significatifs ont été apportés pour répondre aux besoins de la population.",
      documents: [
        { name: "Discours de clôture de la session", link: "#" },
        { name: "Rapport budgétaire 2015", link: "#" },
        { name: "Synthèse des questions au gouvernement", link: "#" },
      ]
    },
    // Ajoutez d'autres sessions ici avec leur contenu
    'session-13-2019-2': {
      image: "https://placehold.co/400x250/e0e0e0/333333?text=Session+2019-2",
      title: "Journal des débats de la 13ème législature_1ère session ordinaire 2019",
      details: "Ce journal des débats de la 13ème législature, première session ordinaire de 2019, couvre les discussions parlementaires sur des thèmes variés, incluant la gouvernance et le développement social. Il offre un aperçu détaillé des positions des différents groupes parlementaires.",
      documents: [
        { name: "Compte rendu intégral", link: "#" },
        { name: "Liste des interventions", link: "#" },
      ]
    },
    'session-2019-prem': {
      image: "https://placehold.co/400x250/e0e0e0/333333?text=Session+2019-Prem",
      title: "Compte rendu de la Première Session Ordinaire 2019",
      details: "La première session ordinaire de 2019 a mis l'accent sur les réformes institutionnelles et la préparation des prochaines échéances électorales. Les députés ont échangé sur les meilleures pratiques pour renforcer la démocratie gabonaise.",
      documents: [
        { name: "Rapport sur les réformes institutionnelles", link: "#" },
        { name: "Débats sur le code électoral", link: "#" },
      ]
    },
    'session-2017-sec': {
      image: "https://placehold.co/400x250/e0e0e0/333333?text=Session+2017-Sec",
      title: "Compte rendu de la Seconde Session Ordinaire 2017",
      details: "La seconde session ordinaire de 2017 a été dominée par les discussions sur la diversification économique et l'attractivité des investissements. Des mesures incitatives ont été proposées pour stimuler la croissance dans les secteurs non pétroliers.",
      documents: [
        { name: "Loi sur l'investissement", link: "#" },
        { name: "Rapport sur la diversification économique", link: "#" },
      ]
    },
    'session-2017-prem': {
      image: "https://placehold.co/400x250/e0e0e0/333333?text=Session+2017-Prem",
      title: "Compte rendu de la Première Session Ordinaire 2017",
      details: "La première session ordinaire de 2017 a traité des questions de développement social et d'accès aux services de base. Les députés ont mis en avant la nécessité de renforcer les infrastructures éducatives et sanitaires dans les zones rurales.",
      documents: [
        { name: "Rapport sur l'accès à l'eau potable", link: "#" },
        { name: "Projet de loi sur l'éducation", link: "#" },
      ]
    },
    'session-2016-sec': {
      image: "https://placehold.co/400x250/e0e0e0/333333?text=Session+2016-Sec",
      title: "Compte rendu de la Seconde Session Ordinaire 2016",
      details: "La seconde session ordinaire de 2016 a été axée sur la gouvernance locale et la décentralisation. Des propositions ont été faites pour donner plus d'autonomie aux collectivités territoriales et renforcer la participation citoyenne.",
      documents: [
        { name: "Loi sur la décentralisation", link: "#" },
        { name: "Rapport sur la gouvernance locale", link: "#" },
      ]
    },
  };

  const currentSessionDetails = sessionContent[session.id as keyof typeof sessionContent] || {
    image: "https://placehold.co/400x250/cccccc/333333?text=Contenu+non+disponible",
    title: "Contenu non disponible",
    details: "Désolé, les détails pour cette session ne sont pas encore disponibles.",
    documents: []
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fil d'Ariane */}
        <div className="mb-6">
          <ul className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <a href="#" className="flex items-center hover:text-blue-600 transition-colors" onClick={(e) => { e.preventDefault(); navigateTo('accueil'); }}>
                <Home className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Accueil</span>
              </a>
            </li>
            <li>&gt;</li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors" onClick={(e) => { e.preventDefault(); navigateTo('travaux'); }}>
                Travaux parlementaires
              </a>
            </li>
            <li>&gt;</li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors" onClick={(e) => { e.preventDefault(); navigateTo('journal-debats'); }}>
                Journal des débats
              </a>
            </li>
            <li>&gt;</li>
            <li className="text-blue-800 font-semibold">
              {session.label}
            </li>
          </ul>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-8 font-serif">{currentSessionDetails.title}</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex flex-col md:flex-row items-start md:space-x-6">
          <img
            src={currentSessionDetails.image}
            alt={currentSessionDetails.title}
            className="w-full md:w-1/2 h-auto rounded-md object-cover mb-4 md:mb-0"
            onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x250/cccccc/333333?text=Image+non+disponible"; }} // Fallback
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Calendar className="w-6 h-6 mr-2" />
              Détails de la Session
            </h2>
            <p className="text-gray-700 mb-4">{currentSessionDetails.details}</p>
            <p className="text-gray-600 text-sm flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              Date de la session : {session.date}
            </p>
          </div>
        </div>

        {currentSessionDetails.documents.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              Documents associés
            </h2>
            <ul className="space-y-3">
              {currentSessionDetails.documents.map((doc, index) => (
                <li key={index} className="flex items-center text-blue-600 hover:underline">
                  <FileText className="w-5 h-5 mr-2" />
                  <a href={doc.link} target="_blank" rel="noopener noreferrer">{doc.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={() => navigateTo('journal-debats')}
          className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-lg"
        >
          Retour au Journal des Débats
        </button>
      </div>
    </div>
  );
};

export default SessionDetailsPage;
