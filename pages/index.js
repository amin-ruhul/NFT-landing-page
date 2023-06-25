import React from "react";
import NavBar from "@/components/navbar";
import HeroSection from "@/components/data-display/hero-section";
import CryptoCard from "@/components/data-display/card/crypto-card";

function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />

      <div className="px-[30px] lg:px-[120px] grid w-full grid-cols-4 gap-[40px] bg-[#d9e0ec33] pt-[4rem]">
        <CryptoCard />
        <CryptoCard />
        <CryptoCard />
        <CryptoCard />
        <CryptoCard />
        <CryptoCard />
        <CryptoCard />
      </div>
    </>
  );
}

export default Home;
