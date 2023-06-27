import Image from "next/image";
import PrimaryButton from "@/components/data-input/button/primary-btn";

function AccountSection() {
  return (
    <section className="px-[1rem] lg:px-[7.5rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-[10rem] pb-[5.125rem] pt-[6.375rem]">
      <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-[1rem] items-center">
        <div className="w-full relative h-[300px]">
          <Image
            src="/assets/hero-1.png"
            alt=""
            fill
            sizes="640px"
            className="object-contain"
          />
          <div className="absolute z-50 bottom-[-40px] right-0">
            <Image
              src="/assets/user-1.png"
              width={80}
              height={80}
              alt="user-1"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="row-span-2 relative w-full h-[214px]">
          <Image
            src="/assets/image-3.png"
            fill
            className="object-contain"
            alt="image-3"
            sizes="640px"
          />
          <div className="absolute z-50 bottom-[-40px] right-0">
            <Image
              src="/assets/user-2.png"
              width={80}
              height={80}
              alt="user-1"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="relative w-full h-[214px]">
          <Image
            src="/assets/image-2.png"
            fill
            alt="image-2"
            className="object-contain"
            sizes="640px"
          />

          <div className="absolute z-50 bottom-[-40px] right-0">
            <Image
              src="/assets/user-2.png"
              width={80}
              height={80}
              alt="user-1"
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[2rem] font-integral max-w-[20rem]">
          Create and sell your NFTs
        </h3>
        <p className="text-[1.125rem] text-[#636363] max-w-[32.313rem] mt-[2.5rem] mb-[2rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
          phasellus placerat a pellentesque tellus sed egestas. Et tristique
          dictum sit tristique sed non. Lacinia lorem id consectetur pretium
          diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
        </p>
        <PrimaryButton
          btnText="Sign Up Now"
          className="text-[1.25rem] py-[1.25rem] px-[2.5rem]"
        />
      </div>
    </section>
  );
}

export default AccountSection;
