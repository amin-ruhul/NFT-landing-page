import React from "react";
import PropTypes from "prop-types";

function PrimaryButton({ btnText, className, onClick }) {
  return (
    <button
      className={`${className} py-[1.125rem] px-[2.5rem] text-white bg-primary rounded-full hover:bg-primary-hover transition-colors duration-300 delay-100`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}

PrimaryButton.defaultProps = {
  btnText: "upload",
};

PrimaryButton.propTypes = {
  btnText: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default PrimaryButton;
