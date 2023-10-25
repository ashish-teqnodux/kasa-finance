import React from "react";
import PropTypes from "prop-types";

const ScopeButton = ({ roomObj, floorClick }) => {
  let {
    Is_Install,
    Is_Refinishing,
    Is_Out_Of_Scope_For_Refinish,
    Is_Out_Of_Scope_For_Install,
  } = roomObj;

  var bgColor = "";
  let darkBlue = "#1E2E5A";
  let lightBlue = "#009DC2";
  let purple = "rgb(249, 131, 44)";
  let grey = "#808080";
  if (Is_Install && Is_Refinishing) {
    bgColor = purple;
  } else if (Is_Install && !Is_Refinishing) {
    bgColor = lightBlue;
  } else if (!Is_Install && Is_Refinishing) {
    bgColor = darkBlue;
  } else if (Is_Out_Of_Scope_For_Refinish && Is_Out_Of_Scope_For_Install) {
    bgColor = grey;
  }

  return (
    <>
      <button
        className="scopeBtn"
        style={
          bgColor
            ? {
                backgroundColor: `${bgColor}`,
                zIndex: "1 !important",
                color: "white",
              }
            : {
                backgroundColor: "#CF1200",
                zIndex: "1 !important",
              }
        }
        type="button"
        onClick={() => floorClick(roomObj)}
      >
        <div>
          {roomObj?.Room} - {roomObj.SF || 0} SF
        </div>
      </button>
    </>
  );
};

export default ScopeButton;

ScopeButton.propTypes = {
  className: PropTypes.string,
  buttonName: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"]),
};
