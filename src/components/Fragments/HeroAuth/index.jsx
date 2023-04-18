import React from "react";

import hero from "../../../assets/svg/hero.svg";
import Image from "../../Elements/Image";

export default function HeroAuth(props) {
  const { children, alt } = props;

  return (
    <>
      <div className="h-screen">
        <div className="flex">
          <div className="flex bg-base-200 justify-center items-center min-h-screen w-[46vw]">
            <Image src={hero} alt={alt} />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
