import React from "react";
import PropTypes from "prop-types";

function SecondaryButton({ btnText, className, onClick }) {
  return (
    <button
      className={`${className} py-[1.125rem] px-[2.5rem] text-primary border-[2px] border-primary rounded-full hover:scale-105 transition delay-100 duration-300`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}

SecondaryButton.defaultProps = {
  btnText: "upload",
};

SecondaryButton.propTypes = {
  btnText: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default SecondaryButton;
