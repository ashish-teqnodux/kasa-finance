import React from "react";
import PropTypes from "prop-types";

const StaircaseButton = ({ staircase, staircaseClick }) => {
  return (
    <>
      <button
        className="scopeBtn"
        style={
          staircase?.Staircase_Scope
            ? {
                backgroundColor: "#1E2E5A",
                color: "white",
              }
            : {
                backgroundColor: "#808080",
                color: "white",
              }
        }
        type="button"
        onClick={() => staircaseClick(staircase)}
      >
        {staircase?.Staircase_Name} - from {staircase?.From_Floor} to{" "}
        {staircase?.To_Floor}
      </button>
    </>
  );
};

export default StaircaseButton;

StaircaseButton.propTypes = {
  staircase: PropTypes.object,
  staircaseClick: PropTypes.func,
};
