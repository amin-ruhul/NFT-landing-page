import Image from "next/image";
import PropTypes from "prop-types";

function BidCard({ bidBtn }) {
  return (
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
            <small className="text-[0.75rem] text-[#00AC4F]">0.25 ETH</small>
          </div>
          <p className="text-[#757575] text-[0.875rem]">1 of 8</p>
        </div>
        {bidBtn}
      </div>
    </article>
  );
}

BidCard.propTypes = {
  bidBtn: PropTypes.node,
};

export default BidCard;
