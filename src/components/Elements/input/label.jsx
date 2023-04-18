import React from "react";

export default function Label(props) {
  const { htmlFor, children, classname } = props;

  return (
    <>
      <label htmlFor={htmlFor} className={`label ${classname}`}>
        {children}
      </label>
    </>
  );
}
