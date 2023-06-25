import React from "react";
import PropTypes from "prop-types";

function SecondaryButton({ btnText, className, onClick }) {
  return (
    <button
      className={`${className} py-[1.125rem] px-[2.5rem] text-primary border-[2px] border-primary rounded-full`}
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
