import React from "react";
import Image from "../Elements/Image";

import hero from "../../assets/svg/hero.svg";
import Footer from "../Fragments/Footer";
import HeroAuth from "../Fragments/HeroAuth";
import Button from "../Elements/button";
export default function AuthLayout(props) {
  const { children } = props;

  return (
    <>
      <HeroAuth>
        <div className="mt-2">
          <Button classname="btn btn-ghost normal-case text-primary text-2xl font-bold">
            Libra<span className="text-secondary">ries</span>
          </Button>
        </div>
        <div>{children}</div>
      </HeroAuth>
      <Footer />
    </>
  );
}
