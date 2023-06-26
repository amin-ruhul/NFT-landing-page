import Image from "next/image";
import React from "react";

function CryptoCard({ cryptoData }) {
  return (
    <div className="w-full p-[0.625rem] bg-white border rounded-[0.813rem]">
      <div className="w-full h-[13.875rem] relative rounded-[0.813rem]">
        <Image
          src={cryptoData.imageUrl}
          fill
          alt="crypto-image"
          sizes="33vw"
          className="rounded-[0.813rem] object-cover"
        />

        <div className="absolute bottom-0 left-0 flex mb-[-10px]">
          {cryptoData.users.map((user) => (
            <div
              className="w-[31px] h-[31px] rounded-full relative"
              key={user.id}
            >
              <Image
                src={user.imageUrl}
                fill
                alt="user"
                sizes="640px"
                className="rounded-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-[1.25rem] mt-[0.625rem]">
        <h4 className="text-[1.25rem] font-semibold">{cryptoData.name}</h4>
        <div className="flex items-center justify-between mt-[0.75rem]">
          <div className="flex items-center space-x-1">
            <Image
              src="/assets/icons/ethereum.svg"
              width={9}
              height={15}
              alt="ethereum"
            />
            <p className="text-[#00AC4F] font-bold">{cryptoData.nft}</p>
          </div>
          <p className="text-[#838383]">{cryptoData.stat}</p>
        </div>
      </div>
      <div className="border border-[#F4F4F4]"></div>
      <div className="mt-[1rem] flex justify-between items-center">
        <span className="px-[11px] py-[5px] text-primary rounded-full bg-[#F5F5F5]">
          {cryptoData.time}
        </span>
        <button className="text-primary">Place a bid</button>
      </div>
    </div>
  );
}

export default CryptoCard;
