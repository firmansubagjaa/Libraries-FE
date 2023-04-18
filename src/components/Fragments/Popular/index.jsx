import React from "react";
import Button from "../../Elements/button";
import Card from "../Card";
import Heading2 from "../../Elements/Heading/Heading2";

export default function PopularSection() {
  return (
    <section className="container mb-10">
      <div className="flex justify-between text-2xl">
        <Heading2 classname="font-bold">Popular</Heading2>
        <Button variant="link" classname=" text-xl font-bold no-underline text-gray-400">
          View All
        </Button>
      </div>

      <div className="carousel rounded-box justify-between pb-10">
        {[1, 2, 3, 4, 5].map(() => {
          return (
            <div className="carousel-item">
              <Card title="Seni Berbicara" author="Baginda Raja" classname="border-2 w-44 mr-5 xl:mr-0" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
