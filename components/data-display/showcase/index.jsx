import React from "react";
import Image from "next/image";
import PrimaryButton from "@/components/data-input/button/primary-btn";

function Showcase() {
  return (
    <section className="px-[30px] lg:px-[120px] pt-[8.375rem] pb-[9.438rem] flex flex-col lg:flex-row justify-between space-y-[2rem] lg:space-y-0 ">
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
        <article className="flex items-center space-x-[1.25rem]">
          <div className="relative h-[9.188rem] w-[9.188rem]">
            <Image src="/assets/image-2.png" fill alt="image" sizes="640px" />
          </div>
          <div className="space-y-2">
            <p className="text-[1.25rem] font-bold">The Futr Abstr</p>
            <div className="flex items-center space-x-2">
              <div className="relative h-[2.125rem] w-[2.125rem]">
                <Image src="/assets/user-2.png" fill alt="user" sizes="640px" />
              </div>
              <div className="flex border space-x-1 border-[#00AC4F] p-[0.5rem] rounded-[0.5rem]">
                <Image
                  src="/assets/icons/ethereum.svg"
                  width={9}
                  height={14}
                  alt="ethereum"
                  className="hidden lg:block"
                />
                <small className="text-[0.75rem] text-[#00AC4F]">
                  0.25 ETH
                </small>
              </div>
              <p className="text-[#757575] text-[0.875rem]">1 of 8</p>
            </div>
            <PrimaryButton
              btnText="Place a bid"
              className="py-[0.6rem] lg:py-[0.875rem] px-[0.90rem] text-[0.89rem] lg:text-[1rem] lg:px-[1.25rem]"
            />
          </div>
        </article>

        <article className="flex items-center space-x-[1.25rem]">
          <div className="relative h-[9.188rem] w-[9.188rem]">
            <Image src="/assets/image-2.png" fill alt="image" sizes="640px" />
          </div>
          <div className="space-y-2">
            <p className="text-[1.25rem] font-bold">The Futr Abstr</p>
            <div className="flex items-center space-x-2">
              <div className="relative h-[2.125rem] w-[2.125rem]">
                <Image src="/assets/user-2.png" fill alt="user" sizes="640px" />
              </div>
              <div className="flex border space-x-1 border-[#00AC4F] p-[0.5rem] rounded-[0.5rem]">
                <Image
                  src="/assets/icons/ethereum.svg"
                  width={9}
                  height={14}
                  alt="ethereum"
                  className="hidden lg:block"
                />
                <small className="text-[0.75rem] text-[#00AC4F]">
                  0.25 ETH
                </small>
              </div>
              <p className="text-[#757575] text-[0.875rem]">1 of 8</p>
            </div>
            <PrimaryButton
              btnText="Place a bid"
              className="py-[0.6rem] lg:py-[0.875rem] px-[0.90rem] text-[0.89rem] lg:text-[1rem] lg:px-[1.25rem]"
            />
          </div>
        </article>

        <article className="flex items-center space-x-[1.25rem]">
          <div className="relative h-[9.188rem] w-[9.188rem]">
            <Image src="/assets/image-2.png" fill alt="image" sizes="640px" />
          </div>
          <div className="space-y-2">
            <p className="text-[1.25rem] font-bold">The Futr Abstr</p>
            <div className="flex items-center space-x-2">
              <div className="relative h-[2.125rem] w-[2.125rem]">
                <Image src="/assets/user-2.png" fill alt="user" sizes="640px" />
              </div>
              <div className="flex border space-x-1 border-[#00AC4F] p-[0.5rem] rounded-[0.5rem]">
                <Image
                  src="/assets/icons/ethereum.svg"
                  width={9}
                  height={14}
                  alt="ethereum"
                  className="hidden lg:block"
                />
                <small className="text-[0.75rem] text-[#00AC4F]">
                  0.25 ETH
                </small>
              </div>
              <p className="text-[#757575] text-[0.875rem]">1 of 8</p>
            </div>
            <PrimaryButton
              btnText="Place a bid"
              className="py-[0.6rem] lg:py-[0.875rem] px-[0.90rem] text-[0.89rem] lg:text-[1rem] lg:px-[1.25rem]"
            />
          </div>
        </article>
      </div>
      <div className="w-[1px] h-fll border"></div>

      <div>
        <p className="text-[1.25rem] font-integral">Top Collections over </p>
        <small className="text-[1.125rem] text-[#3D00B7]">Last 7 days</small>

        <div className="mt-[2.375rem] space-y-[1.188rem]">
          <div className="flex items-center space-x-[1.375rem]">
            <p className="text-[1.5rem] font-bold">1</p>
            <div className="relative h-[3.75rem] w-[3.75rem] rounded-full">
              <Image
                src="/assets/col-user-1.png"
                alt="col-user"
                fill
                sizes="300px"
                className="rounded-full"
              />
            </div>

            <div>
              <p className="font-medium"> CryptoFunks</p>
              <div className="flex space-x-1">
                <Image
                  src="/assets/icons/ethereum.svg"
                  width={9}
                  height={15}
                  alt="ethereum"
                />
                <p className="text-[#636363] text-[0.875rem] font-semibold">
                  19,769.39
                </p>
              </div>
            </div>
            <p className="text-semibold text-[#14C8B0] text-[1.25rem]">
              +26.52%
            </p>
          </div>
          <div className="flex items-center space-x-[1.375rem]">
            <p className="text-[1.5rem] font-bold">1</p>
            <div className="relative h-[3.75rem] w-[3.75rem] rounded-full">
              <Image
                src="/assets/col-user-1.png"
                alt="col-user"
                fill
                sizes="300px"
                className="rounded-full"
              />
            </div>

            <div>
              <p className="font-medium"> CryptoFunks</p>
              <div className="flex space-x-1">
                <Image
                  src="/assets/icons/ethereum.svg"
                  width={9}
                  height={15}
                  alt="ethereum"
                />
                <p className="text-[#636363] text-[0.875rem] font-semibold">
                  19,769.39
                </p>
              </div>
            </div>
            <p className="text-semibold text-[#14C8B0] text-[1.25rem]">
              +26.52%
            </p>
          </div>
          <div className="flex items-center space-x-[1.375rem]">
            <p className="text-[1.5rem] font-bold">1</p>
            <div className="relative h-[3.75rem] w-[3.75rem] rounded-full">
              <Image
                src="/assets/col-user-1.png"
                alt="col-user"
                fill
                sizes="300px"
                className="rounded-full"
              />
            </div>

            <div>
              <p className="font-medium"> CryptoFunks</p>
              <div className="flex space-x-1">
                <Image
                  src="/assets/icons/ethereum.svg"
                  width={9}
                  height={15}
                  alt="ethereum"
                />
                <p className="text-[#636363] text-[0.875rem] font-semibold">
                  19,769.39
                </p>
              </div>
            </div>
            <p className="text-semibold text-[#14C8B0] text-[1.25rem]">
              +26.52%
            </p>
          </div>
          <div className="flex items-center space-x-[1.375rem]">
            <p className="text-[1.5rem] font-bold">1</p>
            <div className="relative h-[3.75rem] w-[3.75rem] rounded-full">
              <Image
                src="/assets/col-user-1.png"
                alt="col-user"
                fill
                sizes="300px"
                className="rounded-full"
              />
            </div>

            <div>
              <p className="font-medium"> CryptoFunks</p>
              <div className="flex space-x-1">
                <Image
                  src="/assets/icons/ethereum.svg"
                  width={9}
                  height={15}
                  alt="ethereum"
                />
                <p className="text-[#636363] text-[0.875rem] font-semibold">
                  19,769.39
                </p>
              </div>
            </div>
            <p className="text-semibold text-[#14C8B0] text-[1.25rem]">
              +26.52%
            </p>
          </div>
          <div className="flex items-center space-x-[1.375rem]">
            <p className="text-[1.5rem] font-bold">1</p>
            <div className="relative h-[3.75rem] w-[3.75rem] rounded-full">
              <Image
                src="/assets/col-user-1.png"
                alt="col-user"
                fill
                sizes="300px"
                className="rounded-full"
              />
            </div>

            <div>
              <p className="font-medium"> CryptoFunks</p>
              <div className="flex space-x-1">
                <Image
                  src="/assets/icons/ethereum.svg"
                  width={9}
                  height={15}
                  alt="ethereum"
                />
                <p className="text-[#636363] text-[0.875rem] font-semibold">
                  19,769.39
                </p>
              </div>
            </div>
            <p className="text-semibold text-[#14C8B0] text-[1.25rem]">
              +26.52%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
