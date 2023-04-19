import React from "react";
import Label from "./label";
import Input from "./input";

export default function InputForms(props) {
  const { type, name, htmlFor, id, classname, placeholder, title, onChange, onBlur, value } = props;

  return (
    <>
      <div className="form-control w-full max-w-md mb-4">
        <Label htmlFor={htmlFor} id={id} className={classname}>
          {title}
        </Label>
        <Input type={type} name={name} id={id} placeholder={placeholder} classname={classname} onChange={onChange} onBlur={onBlur} value={value} />
      </div>
    </>
  );
}
