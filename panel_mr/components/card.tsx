/* eslint-disable prettier/prettier */
"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import React from "react";

export const MyCard = () => {
  return (
    <Card className="max-w-[340px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Balance Total</p>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-2xl font-semibold">
        <p>
          $ 1500000
        </p>
        
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
};
