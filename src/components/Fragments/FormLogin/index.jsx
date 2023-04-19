import React from "react";
import InputForms from "../../Elements/input";
import Button from "../../Elements/button";
import { Link } from "react-router-dom";
import Heading2 from "../../Elements/Heading/Heading2";

export default function FormLogin() {
  return (
    <>
      <div className="flex justify-center pt-10">
        <Heading2 classname="text-2xl font-bold text-primary">Sign In</Heading2>
      </div>
      {/* form */}
      <form className="w-full flex flex-col justify-center container my-10">
        {/* email */}
        <InputForms htmlfor="email" title="Email" type="email" name="email" id="email" placeholder="your email" classname="font-bold" />

        {/* password */}
        <InputForms htmlfor="password" title="Password" type="password" name="password" id="password" placeholder="******" classname="" />
        <span className="font-semibold py-4">
          Forget your password?
          <Link to="/ reset-password" className="link link-primary no-underline ml-1">
            Reset password
          </Link>
        </span>

        {/* submit */}
        <Button classname="mt-3 btn-secondary shadow-2xl">Login</Button>
      </form>
      {/* end */}
    </>
  );
}
