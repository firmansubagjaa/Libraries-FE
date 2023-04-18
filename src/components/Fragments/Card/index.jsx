import React from "react";
import Heading2 from "../../Elements/Heading/Heading2";
import Image from "../../Elements/Image";

export default function Card(props) {
  const { title, classname, author } = props;
  return (
    <div className={`card bg-base-100 ${classname}`}>
      <figure className="px-10 pt-10">
        <Image src="galaxy.webp" alt="Books" />
      </figure>
      <div className="card-body">
        <Heading2 classname="text-md font-bold">{title}</Heading2>
        {/* <h2 className="text-xs">{title}</h2> */}
        <span className="text-sm">{author}</span>
      </div>
    </div>
  );
}
