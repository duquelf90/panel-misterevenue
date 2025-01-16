
'use client'
import React from 'react'
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


const MyChart = () => {
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

  const series = [
    {
      name: "Received Amount",
      data: [0, 20, 35, 45, 35, 55, 65, 50, 65, 75, 60, 75],
    },

  ];

  const options = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#5750F1", "#0ABEF9"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 310,
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false, // Deshabilitar el zoom
      },
    },
    fill: {
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 320,
          },
        },
      },
    ],
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    grid: {
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (e) {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
    xaxis: {
      type: "category",
      categories: monthNames,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
    },
  };

  

  return (
    <>
      <h4 className="my-2 ml-4 text-body-2xlg font-semibold text-dark ">
        Rendimiento
      </h4>
      <div className="ml-1 mr-1">
        <ApexChart type="area" options={options} series={series} height={100} />
      </div>


    </>
  );
};

export default MyChart;