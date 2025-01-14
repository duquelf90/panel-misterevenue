import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoImage from "/public/logo.svg";


export const Logo = ({className}) => {
  return (
    <Link href="/">
      <Image src={LogoImage} alt="logos" width={150} height={150} className={`flex flex-wrap items-center ${className} ` }/>
    </Link>
  );
};



