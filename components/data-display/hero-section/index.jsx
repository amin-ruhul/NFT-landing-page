import Image from "next/image";
import StatDisplay from "../stat-display";
import PrimaryButton from "@/components/data-input/button/primary-btn";

function HeroSection() {
  return (
    <div className="px-[1rem] lg:px-[7.5rem] flex items-center flex-col md:flex-row  justify-between pt-[3.563rem] pb-[7rem]">
      <div className="w-full lg:max-w-[38.25rem]">
        <h1 className="font-integral tracking-[2px] text-[2.5rem]">
          Discover, and collect Digital Art NFTs
        </h1>
        <p className="text-[1.25rem] text-secondary leading-[160%] mt-[1.375rem] lg:max-w-[29.438rem]">
          Digital marketplace for crypto collectibles and non-fungible tokens
          (NFTs). Buy, Sell, and discover exclusive digital assets.
        </p>

        <PrimaryButton
          btnText="Explore Now"
          className="py-[1.25rem] px-[2.5rem] mt-[2.5rem]"
        />
        <div className="flex space-x-[1.438rem] items-center mt-[1.875rem]">
          <StatDisplay title="98k+" subTitle="Artwork" />
          <StatDisplay title="12k+" subTitle="Auction" />

          <StatDisplay title="15k+" subTitle="Artist" />
        </div>
      </div>

      <div className="hidden lg:block">
        <div>
          <Image
            src="/assets/hero-1.png"
            height={400}
            width={400}
            alt=""
            className="rounded-[24px]"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
