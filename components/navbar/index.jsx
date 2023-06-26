import React, { useState } from "react";
import PrimaryButton from "../data-input/button/primary-btn";
import SecondaryButton from "../data-input/button/secondary-btn";
import SearchBar from "../data-input/search-bar";
import MobileMenu from "./mobile";
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="px-[1rem] lg:px-[7.5rem] flex justify-between items-center  border-b py-[1.875rem]">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden"
        >
          <RxHamburgerMenu className="h-[1.5rem] w-[1.5rem]" />
        </button>
        <div className="text-primary text-[1.5rem] font-integral">NFters</div>
        <ul className="hidden lg:flex space-x-[2.938rem]">
          <li>Marketplace</li>
          <li>Resource</li>
          <li>About</li>
        </ul>
        <div className="flex items-center space-x-[1.25rem]">
          <SearchBar className="hidden lg:block" />
          <PrimaryButton className="hidden lg:block" />
          <SecondaryButton
            btnText="Connect Wallet"
            className="px-[0.7rem] py-[0.5rem] lg:px-[1.375rem] lg:py-[1.125rem]"
          />
        </div>
      </nav>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

export default NavBar;
