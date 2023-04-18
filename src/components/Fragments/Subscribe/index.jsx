import React from "react";
import Heading2 from "../../Elements/Heading/Heading2";

export default function Subscribe() {
  return (
    <div className="container">
      <div className="hero min-h-screen bg-base-200 rounded-2xl mb-32">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center">
            <div className="mb-10">
              <Heading2 classname="text-3xl font-bold md:px-32 md:text-5xl xl:px-56">Recommended books from you to review</Heading2>
            </div>
            <form action="" className="flex flex-col md:flex-row justify-center">
              <div>
                <input type="text" placeholder="Your Email" className="input input-bordered input-secondary min-w-screen xl:w-[32rem]" />
              </div>
              <div className="mt-3 md:mt-0 md:ml-4">
                <button className="btn btn-secondary btn-block" type="submit">
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
