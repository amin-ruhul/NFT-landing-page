import React from "react";
import PropTypes from "prop-types";

function StatDisplay({ title, subTitle }) {
  return (
    <div>
      <h3 className="text-[2.5rem] font-integral">{title}</h3>
      <small className="text-[1.25rem] text-secondary">{subTitle}</small>
    </div>
  );
}

StatDisplay.defaultProps = {
  title: "98k+",
  subTitle: "Artwork",
};

StatDisplay.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default StatDisplay;
