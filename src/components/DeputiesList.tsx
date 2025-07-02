// src/components/DeputiesList.tsx
import React from 'react';

// Définition de l'interface pour une députée
interface Deputy {
  name: string;
  imageUrl: string;
}

// Données des femmes députés (basées sur les images fournies)
const femaleDeputies: Deputy[] = [
  { name: "ABOUGHE OTSAGHE Charlotte", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_691218.jpg
  { name: "ADIAHENOT-MEPOREWA Flavienne Patricia Hélène", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_691218.jpg
  { name: "BADJINA MOUDOUIMA épouse ELLA ASSEKO Firmine Olga", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_691218.jpg
  { name: "BECKOPA Epse Roy Valentin Virginie", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_691218.jpg
  { name: "BOUANGA MOMBO ep. MAKITA Nicole", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_6911db.jpg
  { name: "BOUKANDOU Eliza Richtuelle", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_6911db.jpg
  { name: "BOUYOU Tatiana Mireille", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_6911db.jpg
  { name: "EBANETH EP. SIMA EYI NATHALIE", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_6911db.jpg
  { name: "KOUMBA Brigitte", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_6911db.jpg
  { name: "LEKOGO Justine Judith", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_6911db.jpg
  { name: "LISSENGUET GOUMBOU Irène", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_6911db.jpg
  { name: "MAGANGA MOUSSAVOU née MALANDOU BOUKA Albertine", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_6911db.jpg
  { name: "MBAGOU Jeanne", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_69117b.jpg
  { name: "MENGUE M'AKUE Diane Dorothée", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_69117b.jpg
  { name: "NGOMA Angélique", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_69117b.jpg
  { name: "NGOUNDJI Ludwine Staelle", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_69117b.jpg
  { name: "NTOUTOUME Béatrice", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_690e3a.jpg
  { name: "OGOULIGUENDE née MAVIKANA Pepecy", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_690e3a.jpg
  { name: "ONGOUORI NGOUBILI Félicité", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_690e3a.jpg
  { name: "POLO ép PANDZOU ODETTE", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_690e3a.jpg
  { name: "REVANGUE Ep ABIOME Madeleine Sidonie", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_690e3a.jpg
  { name: "SOUGOU LATSIERE Alix Bertille", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_690e3a.jpg
  { name: "TATY KOUMBA Odette Jeanine", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_690e3a.jpg
  { name: "TSONO Huguette", imageUrl: "https://placehold.co/150x150/e0e0e0/333333?text=Photo" }, // Placeholder for image_690e3a.jpg
];

const DeputiesList: React.FC = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-lg flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Liste des femmes Députés par ordre alphabétique</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {femaleDeputies.map((deputy, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 text-center transition-transform transform hover:scale-105"
          >
            <img
              src={deputy.imageUrl}
              alt={deputy.name}
              className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-blue-300"
              onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=Photo"; }} // Fallback image
            />
            <p className="text-sm font-medium text-gray-800">{deputy.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeputiesList;
