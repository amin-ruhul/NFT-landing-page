import Image from "next/image";
import React from "react";
import PrimaryButton from "../data-input/button/primary-btn";

function Footer() {
  return (
    <section className="px-[30px] lg:px-[120px] pt-[4.938rem] pb-[4.313rem] flex flex-col md:flex-row items-start justify-between border space-y-[2rem] lg:space-y-0">
      <div>
        <h4 className="text-[1.5rem] font-integral mb-[1.688rem]">NFters</h4>
        <p className="text-[#565656] text-[0.875rem] lg:max-w-[20.813rem]">
          The world’s first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items.
        </p>
        <div className="flex items-center space-x-[1rem] mt-[2rem]">
          <Image
            src="/assets/icons/facebook.svg"
            width={36}
            height={36}
            alt="facebook"
          />
          <Image
            src="/assets/icons/twitter.svg"
            width={36}
            height={36}
            alt="twitter"
          />
          <Image
            src="/assets/icons/linkedin.svg"
            width={36}
            height={36}
            alt="linkedin"
          />
        </div>
      </div>
      <div>
        <p className="text-[1.125rem] font-bold mb-[1.5rem]">Market Place</p>
        <ul className="text-[#3D3D3D] font-medium text-[0.875] space-y-[1rem]">
          <li className="cursor-pointer">All</li>
          <li className="cursor-pointer">NFTs</li>
          <li className="cursor-pointer">New Art</li>
          <li className="cursor-pointer">Sports</li>
          <li className="cursor-pointer">Utility</li>
          <li className="cursor-pointer">Music</li>
          <li className="cursor-pointer">Domain Name</li>
        </ul>
      </div>
      <div>
        <p className="text-[1.125rem] font-bold mb-[1.5rem]">My Account</p>
        <ul className="text-[#3D3D3D] font-medium text-[0.875] space-y-[1rem]">
          <li className="cursor-pointer">Profile</li>
          <li className="cursor-pointer">Favorite</li>
          <li className="cursor-pointer">My Collections</li>
          <li className="cursor-pointer">Setting</li>
        </ul>
      </div>
      <div>
        <p className="text-[1.125rem] font-bold mb-[1.5rem]">
          Stay in the loop
        </p>
        <p className="text-[#565656] text-[0.875rem] lg:max-w-[22.625rem]">
          Join our mailing list to stay in the loop with our newest feature
          releases, NFT drops, and tips and tricks for navigating NFTs.
        </p>
        <div className="border-[2px] border-[#F1F1F1] rounded-full flex items-center pr-1 mt-[1.5rem]">
          <input
            type="text"
            className="h-[60px] w-[65%] rounded-full outline-0 px-5"
            placeholder="Enter your email address"
          />
          <PrimaryButton
            btnText="Subscribe Now"
            className="text-[0.5rem] lg:text-[0.75rem] px-[1rem] lg:px-[1.875rem] py-[0.938rem]"
          />
        </div>
      </div>
    </section>
  );
}

export default Footer;
