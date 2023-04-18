import React from "react";

export default function Button(props) {
  const { children, classname, variant } = props;
  return (
    <>
      <button className={`btn btn-${variant} rounded-full ${classname}`}>{children}</button>
    </>
  );
}
