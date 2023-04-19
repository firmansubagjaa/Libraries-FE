import React from "react";
import InputForms from "../../Elements/input";
import Button from "../../Elements/button";
import { Link } from "react-router-dom";
import Heading2 from "../../Elements/Heading/Heading2";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormRegister() {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="flex justify-center pt-10">
        <Heading2 classname="text-2xl font-bold text-primary">Sign Up</Heading2>
      </div>
      <form onSubmit={formik.handleSubmit} className="w-full flex flex-col ml-16 xl:ml-2 container my-10">
        <InputForms htmlfor="fullname" title="Fullname" type="text" name="fullname" id="fullname" placeholder='exp: "Jhon Elix"' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fullname} />
        {formik.touched.fullname && formik.errors.fullname ? <div className="text-red-600 mb-3">{formik.errors.fullname}</div> : null}

        <InputForms htmlfor="email" title="Email" type="email" name="email" id="email" placeholder="your email" classname="" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
        {formik.touched.email && formik.errors.email ? <div className="text-red-600 mb-3">{formik.errors.email}</div> : null}

        <InputForms htmlfor="password" title="Password" type="password" name="password" id="password" placeholder="******" classname="" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />

        {formik.touched.password && formik.errors.password ? <div className="text-red-600 mb-3">{formik.errors.password}</div> : null}

        <InputForms
          htmlfor="confirmPassword"
          title="Confirm Password"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="******"
          className=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />

        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="text-red-600 mb-3">{formik.errors.confirmPassword}</div> : null}

        <Button classname="mt-3 btn-secondary shadow-2xl">Register</Button>
      </form>
    </>
  );
}
