import React from "react";
import PrimaryButton from "../data-input/button/primary-btn";
import SecondaryButton from "../data-input/button/secondary-btn";
import SearchBar from "../data-input/search-bar";

function NavBar() {
  return (
    <>
      <nav className="px-[1rem] lg:px-[7.5rem] flex justify-between items-center  border-b py-[1.875rem]">
        <div className="text-primary text-[1.5rem] font-integral">NFters</div>
        <ul className="flex space-x-[2.938rem]">
          <li>Marketplace</li>
          <li>Resource</li>
          <li>About</li>
        </ul>
        <div className="flex items-center space-x-[1.25rem]">
          <SearchBar />
          <PrimaryButton />
          <SecondaryButton btnText="Connect Wallet" className="px-[1.375rem]" />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
