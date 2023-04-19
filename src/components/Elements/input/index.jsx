import React from "react";
import Label from "./label";
import Input from "./input";

export default function InputForms(props) {
  const { type, name, htmlFor, id, classname, placeholder, title } = props;

  return (
    <>
      <div className="form-control w-full max-w-md">
        <Label htmlFor={htmlFor} id={id}>
          {title}
        </Label>
        <Input type={type} name={name} id={id} placeholder={placeholder} classname={classname} />
      </div>
    </>
  );
}
