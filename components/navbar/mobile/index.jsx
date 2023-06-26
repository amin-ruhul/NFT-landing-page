import React from "react";
import Styles from "./menu.module.css";
import classNames from "classnames";
import { LiaTimesSolid } from "react-icons/lia";

function MobileMenu({ isMobileMenuOpen, onClose }) {
  return (
    <div
      className={classNames(
        {
          block: isMobileMenuOpen,
          hidden: !isMobileMenuOpen,
        },
        `fixed inset-0 bg-[#1B2D49]/40 lg:hidden z-[99999]`
      )}
    >
      <div className="w-80 bg-white h-full opacity-100 pt-[1.5rem]">
        <div className={`${Styles.sidebarHideTransition}`}>
          <div className="flex justify-between px-[1.5rem]">
            <div className="text-primary text-[1.5rem] font-integral">
              NFters
            </div>
            <button onClick={onClose}>
              <LiaTimesSolid className="h-[1.5rem] w-[1.5rem]" />
            </button>
          </div>
          <div className="border my-[1.5rem]"></div>

          <ul className="flex flex-col space-y-[2rem] text-[1.2rem] px-[1.5rem]">
            <li>Marketplace</li>
            <li>Resource</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
