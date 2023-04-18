import React from "react";
import { useRouteError } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function ErrorSection() {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-[30rem]">
        <h1 className="text-5xl font-bold py-5">Oops!</h1>
        <p>Sorry, an unexpected error has occured</p>
        <p>{error.statusText || error.message}</p>
      </div>
      <Footer />
    </>
  );
}
