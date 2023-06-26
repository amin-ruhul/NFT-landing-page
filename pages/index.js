import React from "react";
import NavBar from "@/components/navbar";
import HeroSection from "@/components/data-display/hero-section";
import CryptoCard from "@/components/data-display/card/crypto-card";
import MoreCryptoSection from "@/components/data-display/more-crypto-section";
import Footer from "@/components/footer";
import Branding from "@/components/data-display/branding";
import FeaturedCard from "@/components/data-display/card/featured-card";
import FeaturedSection from "@/components/data-display/featured-section";

function Home() {
  return (
    <>
      {/* <NavBar />
      <HeroSection /> */}
      <Branding />
      <div className="h-[70px]"></div>

      <FeaturedSection />
      <div className="h-[70px]"></div>
      <MoreCryptoSection />
      <Footer />
    </>
  );
}

export default Home;
