import React from "react";

export default function Heading2(props) {
  const { classname, children } = props;
  return <h2 className={classname}>{children}</h2>;
}
