/* eslint-disable prettier/prettier */
"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import React from "react";

const CapitalDisplay = ({ initialCapital }: { initialCapital: number }) => {
  const formattedCapital = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "MXN", // Cambia a 'USD' o cualquier otra moneda según necesites
  }).format(initialCapital);

  return <p>{formattedCapital}</p>;
};

export const MyCard = (props: { [key: string]: any }) => {
  const { title, subtitle, balance, roi } = props;

  return (
    <Card className="w-full">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-2xl font-semibold">
        <CapitalDisplay initialCapital={balance} />
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-bold text-small text-default-400">{roi}%</p>
          <p className="text-default-400 text-small">Rentabilidad {subtitle}</p>
        </div>
      </CardFooter>
    </Card>
  );
};
