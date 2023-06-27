import HeroSection from "@/components/data-display/hero-section";
import MoreCryptoSection from "@/components/data-display/more-crypto-section";
import Branding from "@/components/data-display/branding";
import FeaturedSection from "@/components/data-display/featured-section";
import AccountSection from "@/components/data-display/account-section";
import Showcase from "@/components/data-display/showcase";

function Home() {
  return (
    <>
      <HeroSection />
      <Branding />
      <Showcase />
      <FeaturedSection />
      <AccountSection />
      <MoreCryptoSection />
    </>
  );
}

export default Home;
