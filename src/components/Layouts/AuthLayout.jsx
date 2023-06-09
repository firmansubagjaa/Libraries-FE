import React from "react";
import Image from "../Elements/Image";

import hero from "../../assets/svg/hero.svg";
import Footer from "../Fragments/Footer";
import HeroAuth from "../Fragments/HeroAuth";
import Button from "../Elements/button";
import FormLogin from "../Fragments/FormLogin";
export default function AuthLayout(props) {
  const { children, buttonTitle, to } = props;

  return (
    <>
      <HeroAuth>
        <div className="mt-2 flex justify-between container py-5">
          <Button classname="-ml-4 btn-ghost normal-case text-primary text-2xl font-bold" to="/">
            Libra<span className="text-secondary">ries</span>
          </Button>
          <Button classname="btn-secondary shadow-2xl" to={to}>
            {buttonTitle}
          </Button>
        </div>
        {children}
      </HeroAuth>
      <Footer />
    </>
  );
}
