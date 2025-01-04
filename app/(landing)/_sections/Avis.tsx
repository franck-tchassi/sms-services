"use client"

import Image from "next/image";
import avis from "../../../list_avis"; // Chemin vers votre liste d'avis
import { useEffect, useState } from "react";

const Avis = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAvis = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === avis.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevAvis = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? avis.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextAvis, 5000); // Change chaque 5 secondes
    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, []);

  return (
    <section className="bg-green-700 text-white py-16 relative" id="mes-avis">
      {/* SVG pour la courbe */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#006d4d" />
              <stop offset="100%" stopColor="#004b36" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            d="M0,192L48,165.3C96,139,192,85,288,74.7C384,64,480,96,576,133.3C672,171,768,213,864,202.7C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160V0H0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Nos client·e·s témoignent
        </h2>

        {/* Carte du témoignage */}
        <div className="bg-white text-black rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center justify-center" key={currentIndex}>
          {/* Image du témoignage */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <Image
                src={avis[currentIndex].image}
                alt={avis[currentIndex].name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Contenu */}
          <div className="mt-6 md:mt-0 md:ml-6 text-center md:text-left">
            <p className="italic text-lg mb-4">{avis[currentIndex].message}</p>
            <p className="font-bold">{avis[currentIndex].name}</p>
          </div>
        </div>

        {/* Boutons de navigation */}
        <div className="flex justify-between mt-8">
          <button
            className="text-white px-4 py-2 bg-green-500 rounded hover:bg-green-600"
            onClick={prevAvis}
          >
            ⟨ Précédent
          </button>
          <button
            className="text-white px-4 py-2 bg-green-500 rounded hover:bg-green-600"
            onClick={nextAvis}
          >
            Suivant ⟩
          </button>
        </div>

        {/* Indicateurs */}
        <div className="flex justify-center mt-4">
          {avis.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? "bg-white" : "bg-gray-400 opacity-50"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Avis;