import React from "react";
import Navbar from "../../components/Fragments/Navbar";
import Hero from "../../components/Fragments/Hero/index";
import PopularSection from "../../components/Fragments/Popular";
import LatestBooks from "../../components/Fragments/Latest Books";
import Subscribe from "../../components/Fragments/Subscribe";
import Footer from "../../components/Fragments/Footer";

export default function Home() {
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
