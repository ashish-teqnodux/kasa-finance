import React, { useEffect, useState } from "react";
import ScopeButton from "../UI/ScopeButton";
import { Box, Grid } from "@mui/material";
import styled from "@emotion/styled";
import ProjectFloors from "../UI/ProjectFloors";

const ProjectGrid = styled(Grid)({
  padding: "10px 0 10px 24px",
  display: "flex",
  justifyContent: "center",
  // height: "100%",
  width: "40%",
});

const ScopeForm = ({ floors, floorClick }) => {
  return (
    <ProjectGrid container spacing={1}>
      {floors?.length > 0 &&
        floors.map((floor, index) => {
          return (
            <ProjectFloors
              addedFloors={floors}
              floor={floor}
              index={index}
              floorClick={floorClick}
            />
          );
        })}
    </ProjectGrid>
  );
};

export default ScopeForm;
