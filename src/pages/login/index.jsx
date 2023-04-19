import React from "react";
import AuthLayout from "../../components/Layouts/AuthLayout";
import Button from "../../components/Elements/button";
import FormLogin from "../../components/Fragments/FormLogin";
import InputForms from "../../components/Elements/input";

export default function Login() {
  return (
    <>
      <AuthLayout buttonTitle="Sign Up" to={"/register"}>
        <FormLogin />
      </AuthLayout>
    </>
  );
}
