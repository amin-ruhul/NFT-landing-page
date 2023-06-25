import Image from "next/image";
import React from "react";

function CryptoCard() {
  return (
    <div className="w-full p-[0.625rem] bg-white border rounded-[0.813rem]">
      <div className="w-full h-[13.875rem] relative rounded-[0.813rem]">
        <Image
          src="/assets/hero-1.png"
          fill
          alt=""
          className="rounded-[0.813rem] object-cover"
        />

        <div className="absolute bottom-0 left-0 flex mb-[-10px]">
          <div className="w-[31px] h-[31px] rounded-full relative">
            <Image
              src="/assets/icons/user-4.svg"
              fill
              alt=""
              className="rounded-full object-contain"
            />
          </div>
          <div className="w-[31px] h-[31px] rounded-full relative">
            <Image
              src="/assets/icons/user-3.svg"
              fill
              alt=""
              className="rounded-full object-contain"
            />
          </div>
          <div className="w-[31px] h-[31px] rounded-full relative">
            <Image
              src="/assets/icons/user-2.svg"
              fill
              alt=""
              className="rounded-full object-contain"
            />
          </div>
          <div className="w-[31px] h-[31px] rounded-full relative">
            <Image
              src="/assets/icons/user-1.svg"
              fill
              alt=""
              className="rounded-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mb-[1.25rem] mt-[0.625rem]">
        <h4 className="text-[1.25rem] font-semibold">ArtCrypto</h4>
        <div className="flex items-center justify-between mt-[0.75rem]">
          <div className="flex items-center">
            <Image
              src="/assets/icons/ethereum.svg"
              width={9}
              height={15}
              alt="ethereum"
            />
            <p className="text-[#00AC4F] font-bold">0.25 ETH</p>
          </div>
          <p className="text-[#838383]">1 of 321</p>
        </div>
      </div>
      <div className="border border-[#F4F4F4]"></div>
      <div className="mt-[1rem] flex justify-between items-center">
        <span className="px-[11px] py-[5px] text-primary rounded-full bg-[#F5F5F5]">
          3h 50m 2s left
        </span>
        <button className="text-primary">Place a bid</button>
      </div>
    </div>
  );
}

export default CryptoCard;
