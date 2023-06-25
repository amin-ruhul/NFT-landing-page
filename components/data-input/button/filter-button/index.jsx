import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function FilterButton({ filterData, className, onClick, activeSlug }) {
  return (
    <button
      className={classNames(
        {
          "text-white bg-[#3D00B7]": activeSlug === filterData.slug,
        },
        `${className} py-[0.625rem] px-[1.25rem] bg-[#dcdcdc33] rounded-full hover:bg-primary hover:text-white transition-colors duration-300 delay-100`
      )}
      onClick={() => onClick(filterData.slug)}
    >
      {filterData.label}
    </button>
  );
}

FilterButton.propTypes = {
  filterData: PropTypes.shape({
    label: PropTypes.string,
    slug: PropTypes.string,
  }),
  className: PropTypes.string,
  onClick: PropTypes.func,
  activeSlug: PropTypes.string,
};

export default FilterButton;
