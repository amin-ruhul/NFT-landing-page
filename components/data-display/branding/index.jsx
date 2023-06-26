import Image from "next/image";
import React from "react";

function Branding() {
  return (
    <section className="px-[30px] lg:px-[120px] bg-[#d9e0ec33] py-[8.063rem] flex flex-col lg:flex-row items-center justify-between space-y-[3rem] lg:space-y-0">
      <h1 className="text-[1.75rem] font-integral max-w-[24.875rem]">
        The amazing NFT art of the world here
      </h1>

      <article className="flex items-start space-x-[1rem]">
        <Image
          src="/assets/icons/card-tick-1.svg"
          width={36}
          height={36}
          alt="card-tick"
        />
        <div>
          <p className="text-[1.25rem] font-bold">Fast Transaction</p>
          <p className="text-[#696969] text-[0.875rem] mt-[0.75rem] max-w-[15rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            etiam viverra tellus imperdiet.
          </p>
        </div>
      </article>

      <article className="flex items-start space-x-[1rem]">
        <Image
          src="/assets/icons/chart.svg"
          width={36}
          height={36}
          alt="chart"
        />
        <div>
          <p className="text-[1.25rem] font-bold">Growth Transaction</p>
          <p className="text-[#696969] text-[0.875rem] mt-[0.75rem] max-w-[19.438rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            etiam viverra tellus
          </p>
        </div>
      </article>
    </section>
  );
}

export default Branding;
