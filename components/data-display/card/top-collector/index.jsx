import Image from "next/image";
import PropTypes from "prop-types";

function TopCollector({ slNumber, name, imageUrl, totalEthereum, incRate }) {
  return (
    <div className="flex items-center space-x-[1.375rem]">
      <p className="text-[1.5rem] font-bold">{slNumber}</p>
      <div className="relative h-[3.75rem] w-[3.75rem] rounded-full">
        <Image
          src={imageUrl}
          alt="col-user"
          fill
          sizes="300px"
          className="rounded-full"
        />
      </div>

      <div>
        <p className="font-medium">{name}</p>
        <div className="flex space-x-1">
          <Image
            src="/assets/icons/ethereum.svg"
            width={9}
            height={15}
            alt="ethereum"
          />
          <p className="text-[#636363] text-[0.875rem] font-semibold">
            {totalEthereum}
          </p>
        </div>
      </div>
      <p className="text-semibold text-[#14C8B0] text-[1.25rem]">{incRate}</p>
    </div>
  );
}

TopCollector.propTypes = {
  slNumber: PropTypes.number,
  name: PropTypes.string,
  totalEthereum: PropTypes.string,
  incRate: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default TopCollector;
