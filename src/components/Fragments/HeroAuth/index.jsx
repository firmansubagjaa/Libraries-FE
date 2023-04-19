import React from "react";

import hero from "../../../assets/svg/hero.svg";
import Image from "../../Elements/Image";
import FormLogin from "../FormLogin";

export default function HeroAuth(props) {
  const { children, alt } = props;

  return (
    <>
      <div className="">
        <div className="flex">
          <div className="hidden md:flex bg-base-200 justify-center min-h-[150vh]">
            <Image src={hero} alt={alt} classname="w-screen p-28" />
          </div>
          <div className="w-screen">{children}</div>
        </div>
      </div>
    </>
  );
}
