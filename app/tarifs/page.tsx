"use client"

import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from "chart.js";

// Enregistrer les composants nécessaires de Chart.js
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const TarifsGraphPage = () => {
  const [data, setData] = useState({
    labels: ["Lavage Extérieur", "Lavage Intérieur", "Lavage Complet", "Formule Sièges", "Formule Intégrale", "Services à la Carte"],
    datasets: [
      {
        label: "Prix approximatif (€)",
        data: [10, 15, 30, 20, 40, 50], // Tranches de prix
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4, // Courbure de la ligne
      },
    ],
  });

  // Fonction pour mettre à jour les données de la ligne
  const updateData = () => {
    setData(prevData => {
      // Créer de nouvelles données aléatoires
      const newData = prevData.datasets[0].data.map(value => Math.floor(Math.random() * 50) + 10); // Nouvelles valeurs de prix aléatoires

      return {
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: newData,
          },
        ],
      };
    });
  };

  // Utiliser useEffect pour mettre à jour les données à intervalles réguliers
  useEffect(() => {
    const interval = setInterval(() => {
      updateData(); // Met à jour les données toutes les secondes
    }, 1000);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []);

  // Configuration du graphique
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const, // Afficher la légende en haut
      },
      title: {
        display: true,
        text: "Tranches de Prix par Service",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        min: 0,
        title: {
          display: true,
          text: "Prix (€)",
        },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Graphique des Tarifs</h1>
      <Line data={data} options={options} />
    </div>
  );
};

export default TarifsGraphPage;

