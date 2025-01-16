
'use client'
import React from 'react'
import dynamic from "next/dynamic";
import { generateSaldoData } from 'config/utils';
import { CapitalDisplay } from 'components/card';
import { Card, CardBody } from '@nextui-org/react';
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


const MyChart = () => {

  const saldoInicial = 1000000; // Ejemplo de saldo inicial
  const porcentajeAumento = 36; // Ejemplo de porcentaje de aumento

  const { data } = generateSaldoData(saldoInicial, porcentajeAumento);
  const categories = data.map(item => item.fecha);
  const inicial = data.map(item => item.saldo_inicial);
  const saldoActual = data.map(item => item.saldo_actual);

  const series = [
    {
      name: "Saldo Inicial",
      data: inicial,
    },
    {
      name: "Saldo Actual",
      data: saldoActual
    }

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
        breakpoint: 2000,
        options: {
          chart: {
            height: 300,
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
      categories: categories,
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
    <Card className='md:w-1/2 rounded-[10px] shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7'>
      <CardBody>
        <h4 className="my-2 ml-4 font-semibold text-dark dark:text-white">
          Rendimiento
        </h4>
        <ApexChart type="area" options={options} series={series} height={100} />

        <div className="flex flex-row gap-1 text-center xsm:flex-row xsm:gap-0 justify-center items-center">
          <div className="border-stroke dark:border-dark-3 xsm:w-1/2 xsm:border-r">
            <p className="font-medium">Saldo Inicial</p>
            <h4 className="mt-1 md:text-md font-bold text-dark dark:text-white">
              <CapitalDisplay initialCapital={saldoInicial} />
            </h4>
          </div>
          <div className="xsm:w-1/2">
            <p className="font-medium">Saldo actual</p>
            <h4 className="mt-1 md:text-md font-bold text-dark dark:text-white">
              <CapitalDisplay initialCapital={data[data.length - 1].saldo_actual} />
            </h4>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default MyChart;