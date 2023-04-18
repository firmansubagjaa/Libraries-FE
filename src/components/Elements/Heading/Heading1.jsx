import React from "react";

export default function Heading1(props) {
  const { children } = props;
  return (
    <>
      <h1 className={`font-bold text-2xl ${classname}`}>{children}</h1>
    </>
  );
}
