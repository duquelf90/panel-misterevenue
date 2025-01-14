/* eslint-disable prettier/prettier */
"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const MyChart: React.FC = () => {
  const monthNames = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(2024, i);
    return date.toLocaleString('default', { month: 'long' });
  });
  const item = {
    labels: monthNames,
    datasets: [
      {
        label: new Date().getFullYear(),
        data: [30000, 40000, 80, 81, 56, 90000, 70000, 80000, 95000, 100000, 110000, 120000],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "#3182ce",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom", // Mueve la leyenda a la parte inferior
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <h2 className="text-xl font-semibold">Rendimiento</h2>
      <Line data={item} options={options} />
    </>
  );
};

export default MyChart;
