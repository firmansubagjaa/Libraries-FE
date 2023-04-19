import React from "react";

import hero from "../../../assets/svg/hero.svg";
import Image from "../../Elements/Image";
import FormLogin from "../FormLogin";

export default function HeroAuth(props) {
  const { children, alt } = props;

  return (
    <>
      <div className="h-screen">
        <div className="flex">
          <div className="hidden md:flex bg-base-200 justify-center items-center min-h-screen">
            <Image src={hero} alt={alt} classname="w-screen p-28" />
          </div>
          <div className="flex flex-col justify-center w-screen">{children}</div>
        </div>
      </div>
    </>
  );
}
