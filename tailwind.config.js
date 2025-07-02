/** @type {import('tailwindcss').Config} */
export default {
  // Spécifie les fichiers où Tailwind doit rechercher les classes CSS à inclure dans le build final
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // La section 'extend' permet d'ajouter vos propres personnalisations au thème par défaut de Tailwind
    // sans écraser les valeurs existantes.
    extend: {},
  },
  // La section 'plugins' permet d'inclure des plugins Tailwind personnalisés
  plugins: [],
};
