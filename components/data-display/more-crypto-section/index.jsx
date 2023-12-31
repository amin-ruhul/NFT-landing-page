import Image from "next/image";
import { useState } from "react";
import CryptoCard from "../card/crypto-card";
import { cryptoList } from "@/utils/data/cryptoList";
import { filterList } from "@/utils/data/filterList";
import FilterButton from "@/components/data-input/button/filter-button";
import SecondaryButton from "@/components/data-input/button/secondary-btn";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

function MoreCryptoSection() {
  const MAX_DATA_LOAD = 8;

  const [activeFilter, setActiveFilter] = useState(filterList[0].slug);
  const [filteredCrypto, setFilteredCrypto] = useState(() =>
    cryptoList.slice(0, MAX_DATA_LOAD)
  );
  const [loadedData, setLoadedData] = useState(() =>
    cryptoList.slice(0, MAX_DATA_LOAD)
  );

  const handelFilter = (key) => {
    setActiveFilter(key);
    let updatedData = loadedData.filter((crypto) => crypto.type.includes(key));
    setFilteredCrypto(updatedData);
  };

  const loadMoreData = () => {
    let prevLoadData = filterList.length - 1;
    let data = cryptoList.slice(0, prevLoadData + MAX_DATA_LOAD);
    setFilteredCrypto(data);
    setLoadedData(data);
    setActiveFilter(filterList[0].slug);
  };

  return (
    <div className="px-[1rem] lg:px-[7.5rem]  bg-[#d9e0ec33] pt-[4rem] w-full pb-[2.688rem]">
      <h2 className="text-[2.125rem] font-integral mb-[2.375rem]">
        Discover more NFTs
      </h2>
      <div className="flex mb-[2.5rem] w-full flex-col md:flex-row justify-between">
        <div className="flex space-x-[0.625rem] overflow-x-auto">
          {filterList.map((filterData) => (
            <FilterButton
              key={filterData.slug}
              filterData={filterData}
              activeSlug={activeFilter}
              onClick={(data) => handelFilter(data)}
              className="min-w-[150px] md:min-w-0"
            />
          ))}
        </div>
        <button className="mt-[0.5rem] max-w-[160px]">
          <div className="flex items-center space-x-2 py-[0.625rem] px-[1.25rem] bg-[#dcdcdc33] rounded-full">
            <Image
              src="/assets/icons/all-filter.svg"
              width={24}
              height={24}
              alt="all-filter"
              quality={20}
            />
            <p>All Filters</p>
          </div>
        </button>
      </div>

      <motion.div
        layout
        className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[40px]"
      >
        <AnimatePresence>
          {filteredCrypto.map((cryptoData) => (
            <CryptoCard key={cryptoData.id} cryptoData={cryptoData} />
          ))}
        </AnimatePresence>
      </motion.div>

      <div
        className={classNames(
          {
            hidden:
              filteredCrypto.length === 0 ||
              loadedData.length === cryptoList.length,
            flex:
              filteredCrypto.length && loadedData.length !== cryptoList.length,
          },
          `items-center justify-center mt-[3.438rem]`
        )}
      >
        <SecondaryButton
          btnText="More NFTs"
          className="px-[2.5rem] py-[1.25rem] text-[1.25rem] font-medium"
          onClick={loadMoreData}
        />
      </div>
    </div>
  );
}

export default MoreCryptoSection;
