import React from "react";
import AuthLayout from "../../components/Layouts/AuthLayout";
import FormRegister from "../../components/Fragments/FormRegister";

export default function Register() {
  return (
    <AuthLayout buttonTitle="Login" to={"/login"}>
      <FormRegister />
    </AuthLayout>
  );
}
