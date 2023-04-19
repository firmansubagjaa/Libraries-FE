import React from "react";
import InputForms from "../../Elements/input";
import Button from "../../Elements/button";
import { Link } from "react-router-dom";
import Heading2 from "../../Elements/Heading/Heading2";

export default function FormRegister() {
  return (
    <>
      <div className="flex justify-center pt-10">
        <Heading2 classname="text-2xl font-bold text-primary">Sign Up</Heading2>
      </div>
      <form className="w-full flex flex-col justify-center container my-10">
        <InputForms htmlfor="name" title="Fullname" type="text" name="name" id="name" placeholder='exp: "Jhon Elix"' classname="" />
        <InputForms htmlfor="email" title="Email" type="email" name="email" id="email" placeholder="your email" classname="" />
        <InputForms htmlfor="password" title="Password" type="password" name="password" id="password" placeholder="******" classname="" />
        <InputForms htmlfor="ConfirmPassword" title="Confirm Password" type="password" name="ConfirmPassword" id="ConfirmPassword" placeholder="******" classname="" />
        <Button classname="mt-3 btn-secondary shadow-2xl">Register</Button>
      </form>
    </>
  );
}
