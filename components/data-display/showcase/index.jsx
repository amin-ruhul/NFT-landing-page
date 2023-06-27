import Image from "next/image";
import PrimaryButton from "@/components/data-input/button/primary-btn";
import BidCard from "../card/bid-card";
import SecondaryButton from "@/components/data-input/button/secondary-btn";
import { topCollectorList } from "@/utils/data/topCollectorList";
import TopCollector from "../card/top-collector";

function Showcase() {
  return (
    <section className="px-[1rem] lg:px-[7.5rem] pt-[8.375rem] pb-[9.438rem] flex flex-col lg:flex-row justify-between space-y-[2rem] lg:space-y-0 ">
      <article className="shrink-0 w-full lg:w-[25rem]">
        <div className="flex justify-between">
          <div className="w-full h-[20rem] lg:h-[26.5rem] relative">
            <Image
              src="/assets/image-3.png"
              fill
              alt="crypto-image"
              sizes="33vw"
              className="rounded-[0.813rem] object-cover"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-[0.688rem]">
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/user-1.png"
              width={28}
              height={28}
              className="rounded-full"
              alt=""
            />
            <div>
              <p className="text-[1.25rem] font-bold">The Futr Abstr</p>
              <small className="text-[0.875rem] font-medium text-[#363639]">
                10 in the stock
              </small>
            </div>
          </div>
          <div>
            <small className="text-[0.875rem] font-medium text-[#363639]">
              Highest Bid
            </small>
            <div className="flex items-center space-x-1">
              <Image
                src="/assets/icons/ethereum.svg"
                width={9}
                height={15}
                alt="ethereum"
              />
              <p className=" font-bold text-[#3A3A3A]">0.25 ETH</p>
            </div>
          </div>
        </div>
      </article>

      <div className="space-y-[1.188rem]">
        <BidCard
          bidBtn={
            <PrimaryButton
              btnText="Place a bid"
              className="py-[0.6rem] lg:py-[0.875rem] px-[0.90rem] text-[0.89rem] lg:text-[1rem] lg:px-[1.25rem]"
            />
          }
        />
        <BidCard
          bidBtn={
            <SecondaryButton
              btnText="Place a bid"
              className="py-[0.6rem] lg:py-[0.875rem] px-[0.90rem] text-[0.89rem] lg:text-[1rem] lg:px-[1.25rem]"
            />
          }
        />
        <BidCard
          bidBtn={
            <SecondaryButton
              btnText="Place a bid"
              className="py-[0.6rem] lg:py-[0.875rem] px-[0.90rem] text-[0.89rem] lg:text-[1rem] lg:px-[1.25rem]"
            />
          }
        />
      </div>
      <div className="w-[1px] h-fll border"></div>

      <div>
        <p className="text-[1.25rem] font-integral">Top Collections over </p>
        <small className="text-[1.125rem] text-[#3D00B7] mt-[0.625rem]">
          Last 7 days
        </small>

        <div className="mt-[2.375rem] space-y-[1.188rem]">
          {topCollectorList.map((toCollectorData) => (
            <TopCollector
              key={toCollectorData.slNumber}
              slNumber={toCollectorData.slNumber}
              name={toCollectorData.name}
              imageUrl={toCollectorData.imageUrl}
              totalEthereum={toCollectorData.totalEthereum}
              incRate={toCollectorData.incRate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
