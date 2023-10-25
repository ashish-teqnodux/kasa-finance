import { Grid } from "@mui/material";
import React from "react";

import ScopeButton from "./ScopeButton";

const ProjectFloors = ({ floor, index, setIsDragEnabled, floorClick }) => {
  return (
    <Grid
      item
      xs={12}
      md={3}
      key={`${floor.floor}+${index}`}
      style={{ position: "relative" }}
    >
      <div className="floorBtn">
        <div>{floor.floor}</div>
        <div
          className={`absolute -top-1 -right-1`}
          //   onClick={() => handleRemoveClick(floor.floor, floor?.id)}
        ></div>
      </div>
      <div className="roombtnSpacing">
        {floor.rooms.map((roomObj, roomIndex) => {
          return (
            <ScopeButton
              roomIndex={roomIndex}
              buttonName={roomObj?.Room}
              type="button"
              roomObj={roomObj}
              floor={floor}
              floorClick={floorClick}
            />
          );
        })}
      </div>
    </Grid>
  );
};

export default ProjectFloors;
