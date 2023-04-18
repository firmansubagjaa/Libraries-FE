import React from "react";

export default function Image(props) {
  const { src, alt, classname } = props;
  return (
    <>
      <div>
        <img src={src} alt={alt} className={classname} />
      </div>
    </>
  );
}
