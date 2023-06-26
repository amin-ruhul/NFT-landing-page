import React from "react";
import Image from "next/image";
import SecondaryButton from "@/components/data-input/button/secondary-btn";

function FeaturedCard() {
  return (
    <article>
      <div className="flex justify-between">
        <div className="w-[77%] relative">
          <Image
            src="/assets/hero-1.png"
            fill
            alt="crypto-image"
            sizes="33vw"
            className="rounded-[0.813rem] object-cover"
          />
        </div>
        <div className="w-[20%] space-y-[0.516rem]">
          <div className=" relative w-full h-[85px]">
            <Image
              src="/assets/image-1.png"
              fill
              alt="crypto-image"
              sizes="33vw"
              className="rounded-[0.813rem] object-cover"
            />
          </div>
          <div className=" relative w-full h-[85px]">
            <Image
              src="/assets/image-2.png"
              fill
              alt="crypto-image"
              sizes="33vw"
              className="rounded-[0.813rem] object-cover"
            />
          </div>
          <div className=" relative w-full h-[85px]">
            <Image
              src="/assets/image-3.png"
              fill
              alt="crypto-image"
              sizes="33vw"
              className="rounded-[0.813rem] object-cover"
            />
          </div>
        </div>
      </div>
      <p className="text-[1.25rem] font-bold mt-[1.813rem]">
        Amazing Collection
      </p>
      <div className="flex items-center justify-between mt-[0.688rem]">
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/arkhan.png"
            width={28}
            height={28}
            className="rounded-full"
            alt="arkan"
          />
          <small className="text-[0.875rem] font-medium">by Arkan</small>
        </div>
        <SecondaryButton
          btnText="Total 54 Items"
          className="py-[0.545rem] px-[.85rem] text-[0.688rem]"
        />
      </div>
    </article>
  );
}

export default FeaturedCard;
