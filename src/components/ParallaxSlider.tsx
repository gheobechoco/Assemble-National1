// src/components/ParallaxSlider.tsx
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Interface pour définir la structure d'une diapositive (slide)
interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  slideImage?: string; // Image optionnelle à l'intérieur de la diapositive
}

// Données des diapositives
const slides: Slide[] = [
  {
    id: 1,
    title: "Travaux : Plusieurs textes législatifs structurants dont celui...",
    subtitle: "Session Parlementaire Extraordinaire",
    description: "Plusieurs textes législatifs structurants dont celui relatif aux partis politiques adoptés à l'Assemblée Nationale de transition.",
    backgroundImage: "/images/background-Assembke-National.jpg",
    slideImage: "/images/background-Assembke-National.jpg"
  },
  {
    id: 2,
    title: "Budget 2024 : Adoption des mesures budgétaires",
    subtitle: "Finances Publiques",
    description: "Les députés ont adopté le projet de budget rectificatif 2024 avec des mesures d'accompagnement pour les secteurs prioritaires.",
    backgroundImage: "/images/assembler-nat-vote.webp"
  },
  {
    id: 3,
    title: "Réforme constitutionnelle : Les grands enjeux",
    subtitle: "Constitution",
    description: "Le projet de réforme constitutionnelle examine les modifications institutionnelles pour renforcer la démocratie gabonaise.",
    backgroundImage: "/images/Assemble-Nat-1.jpg"
  }
];

const ParallaxSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Index de la diapositive actuelle
  const [isAnimating, setIsAnimating] = useState(false); // État d'animation pour éviter les clics multiples
  const [backgroundPosition, setBackgroundPosition] = useState(0); // Position du fond pour l'effet parallaxe
  const sliderRef = useRef<HTMLDivElement>(null); // Référence à l'élément du slider
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Référence pour l'intervalle de lecture automatique

  // Fonctionnalité de lecture automatique des diapositives
  useEffect(() => {
    startAutoPlay(); // Démarre la lecture automatique au montage du composant
    return () => stopAutoPlay(); // Nettoie l'intervalle au démontage
  }, []);

  // Démarre la lecture automatique
  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      nextSlide(); // Passe à la diapositive suivante toutes les 5 secondes
    }, 5000);
  };

  // Arrête la lecture automatique
  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Efface l'intervalle existant
      intervalRef.current = null;
    }
  };

  // Anime la position du fond pour l'effet de parallaxe
  useEffect(() => {
    const animateBackground = () => {
      // Met à jour la position du fond, avec un reset à 6200% pour un effet continu
      setBackgroundPosition(prev => (prev + 0.5) % 6200);
      requestAnimationFrame(animateBackground); // Demande la prochaine frame d'animation
    };
    const animation = requestAnimationFrame(animateBackground);
    return () => cancelAnimationFrame(animation); // Annule l'animation au démontage
  }, []);

  // Passe à la diapositive suivante
  const nextSlide = () => {
    if (isAnimating) return; // Empêche le changement de diapositive si une animation est en cours
    setIsAnimating(true); // Active l'état d'animation
    setCurrentSlide((prev) => (prev + 1) % slides.length); // Calcule l'index de la prochaine diapositive
    setTimeout(() => setIsAnimating(false), 800); // Désactive l'état d'animation après 800ms (durée de l'animation CSS)
  };

  // Passe à la diapositive précédente
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Gère le retour au dernier slide si on est au premier
    setTimeout(() => setIsAnimating(false), 800);
  };

  // Navigue vers une diapositive spécifique
  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <section className="parallax-slider">
      <div
        ref={sliderRef}
        className="da-slider"
        style={{
          backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
          backgroundPosition: `${backgroundPosition}% center`
        }}
        onMouseEnter={stopAutoPlay} // Arrête la lecture automatique quand la souris entre dans le slider
        onMouseLeave={startAutoPlay} // Reprend la lecture automatique quand la souris quitte
      >
        {/* Superposition sombre pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Rendu de chaque diapositive */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            // Applique les classes d'animation basées sur la diapositive actuelle et la précédente
            className={`da-slide ${
              index === currentSlide
                ? 'da-slide-fromright' // Diapositive actuelle (vient de la droite)
                : index === (currentSlide - 1 + slides.length) % slides.length
                  ? 'da-slide-toleft' // Diapositive précédente (va vers la gauche)
                  : 'opacity-0' // Autres diapositives (cachées)
            }`}
          >
            {/* Détails du texte de la diapositive */}
            <div className="slide-details relative z-10">
              <div className="bg-green-600 inline-block px-6 py-3 mb-4 rounded-lg shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold text-white font-serif">
                  {slide.title}
                </h2>
              </div>
              <h3 className="text-lg md:text-xl text-yellow-400 font-semibold mb-4 font-serif">
                {slide.subtitle}
              </h3>
              <p className="text-white text-base md:text-lg mb-6 leading-relaxed max-w-2xl">
                {slide.description}
              </p>
              <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Lire la suite
              </button>
            </div>

            {/* Image spécifique à la diapositive (si présente) */}
            {slide.slideImage && (
              <div className="da-img">
                <img
                  src={slide.slideImage}
                  alt={slide.title}
                  className="max-w-xs md:max-w-md lg:max-w-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            )}
          </div>
        ))}

        {/* Contrôles de navigation (flèches gauche/droite) */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="ml-4 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-white transition-all duration-300 disabled:opacity-50 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="mr-4 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-white transition-all duration-300 disabled:opacity-50 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicateurs de diapositive (points en bas) */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125' // Diapositive active
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75' // Autres diapositives
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxSlider;
