import React from "react";
import Heading2 from "../../Elements/Heading/Heading2";

export default function Subscribe() {
  return (
    <div className="container">
      <div className="hero min-h-screen bg-base-200 rounded-2xl mb-32">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center">
            <div className="mb-10">
              <Heading2 classname="text-5xl font-bold px-72">Recommended books from you to review</Heading2>
            </div>
            <form action="" className="flex justify-center">
              <div>
                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-screen max-w-md" />
              </div>
              <div className="ml-5">
                <button className="btn btn-secondary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
