import React from "react";
import NavBar from "@/components/navbar";
import HeroSection from "@/components/data-display/hero-section";
import CryptoCard from "@/components/data-display/card/crypto-card";
import MoreCryptoSection from "@/components/data-display/more-crypto-section";

function Home() {
  return (
    <>
      {/* <NavBar />
      <HeroSection /> */}
      <MoreCryptoSection />
    </>
  );
}

export default Home;
