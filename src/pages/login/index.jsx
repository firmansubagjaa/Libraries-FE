import React from "react";
import AuthLayout from "../../components/Layouts/AuthLayout";
import Button from "../../components/Elements/button";
import FormLogin from "../../components/Fragments/FormLogin";
import InputForms from "../../components/Elements/input";

export default function Login() {
  return (
    <>
      <AuthLayout>
        {/* <InputForms htmlFor="email" id="email" type="email" placeholder="example@email.com" /> */}
        <div className="flex flex-col justify-center items-center">
          <FormLogin htmlFor="email" title="Email" id="email" type="email" placeholder="example@email.com" />
        </div>
      </AuthLayout>
    </>
  );
}
