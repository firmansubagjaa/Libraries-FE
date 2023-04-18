import React from "react";
import InputForms from "../../Elements/input";

export default function FormLogin(props) {
  const { htmlFor, title, id, type, placeholder } = props;
  return (
    <div>
      <InputForms htmlFor={htmlFor} title={title} id={id} type={type} placeholder={placeholder} />
    </div>
  );
}
