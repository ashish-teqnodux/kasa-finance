import { Grid } from "@mui/material";
import React from "react";

import ScopeButton from "./ScopeButton";

const ProjectFloors = ({
  floor,
  index,
  setIsDragEnabled,
  floorClick,
  data,
}) => {
  return (
    <Grid
      item
      xs={12}
      md={3}
      key={`${floor.floor}+${index}`}
      style={{ position: "relative" }}
    >
      <div className="floorBtn">
        <div style={{ fontSize: "10px" }}>
          {floor?.floor}-{(floor?.totalSF || 0)?.toFixed(2)}
        </div>
        <div
          className={`absolute -top-1 -right-1`}
          //   onClick={() => handleRemoveClick(floor.floor, floor?.id)}
        ></div>
      </div>
      <div className="roombtnSpacing">
        {floor.rooms.map((roomObj, roomIndex) => {
          const fvRoom = data?.fv_rooms?.find(
            (room) => room?.Name === roomObj.Room
          );
          const displayName = fvRoom?.Display_Name || fvRoom?.Name;
          return (
            <ScopeButton
              roomIndex={roomIndex}
              buttonName={displayName}
              // buttonName={roomObj?.Room}
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
