import { useState } from "react";
import PropTypes from "prop-types";
import { CiSearch } from "react-icons/ci";

function SearchBar({ onSearch }) {
  const [searchKey, setSearchKey] = useState("");

  return (
    <form
      className="rounded-full w-[18.75rem] relative"
      onSubmit={(searchEvent) => {
        searchEvent.preventDefault();
        onSearch(searchKey);
      }}
    >
      <input
        className="w-full h-[3.125rem] rounded-full border-[2px] border-[#EFEFEF] px-[1rem]"
        placeholder="Search"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <button className="absolute top-[50%] right-[5%] -translate-y-[50%]">
        <CiSearch className=" w-[20px] h-[20px]" />
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchBar;
