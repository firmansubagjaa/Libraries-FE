import React from "react";
import Navbar from "../Fragments/Navbar";
import Hero from "../Fragments/Hero";
import PopularSection from "../Fragments/Popular";
import LatestBooks from "../Fragments/Latest Books";
import Subscribe from "../Fragments/Subscribe";
import Footer from "../Fragments/Footer";

export default function LandingPage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PopularSection />
      <LatestBooks />
      <Subscribe />
      <Footer />
    </main>
  );
}
