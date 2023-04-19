import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  const { children, classname, variant, to } = props;
  return (
    <>
      <Link to={to} className={`btn btn-${variant} rounded-full ${classname}`}>
        {children}
      </Link>
    </>
  );
}
