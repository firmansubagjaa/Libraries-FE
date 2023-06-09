import React from "react";

export default function Input(props) {
  const { type, placeholder, name, id, onChange, onBlur, value } = props;
  return (
    <>
      <input type={type} placeholder={placeholder} name={name} id={id} className="input input-bordered input-secondary min-w-screen" onChange={onChange} onBlur={onBlur} value={value} />
    </>
  );
}
