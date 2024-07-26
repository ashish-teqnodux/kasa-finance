import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  // width: 259,
  height: 48,
  background: "var(--white, #FFF)",
  position: "relative",
  "& .MuiInputBase-root": {
    padding: "10px 12px 10px 15px",
  },
}));

const StyledSelect = styled(Select)(({ filledOut }) => ({
  fontSize: "13px",
}));

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: "13px",
  marginLeft: "2px",
  color: "#202020",
  fontWeight: 400,
  textAlign: "start",
  position: "absolute",
  pointerEvents: "none",
  transformOrigin: "top left",
  transition: "transform 0.2s ease-out",
  transform: "translate(10px, 14px) scale(1)",

  "&.MuiInputLabel-shrink": {
    transform: "translate(13px, -6px) scale(0.75)",
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: "13px",
}));

const DropdownField = ({
  id,
  name,
  label,
  options,
  handleChangeDropdown,
  register,
  value,
  //   handleClickSbuQueIcon,
}) => {
  return (
    <StyledFormControl variant="outlined" sx={{ width: "100%", height: 48 }}>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledSelect
        // {...register(id)}
        value={value || ""}
        onChange={handleChangeDropdown}
        style={{ borderColor: "red !important" }}
        label={label}
        sx={{
          padding: "10px 12px 10px 20px",
          borderRadius: "10px",
          "& .MuiInputBase-input": {
            padding: "4px 0",
            textAlign: "start",
            paddingRight: "3px !important",
          },
        }}
      >
        {options?.map((option, idx) => (
          <StyledMenuItem key={option + idx} value={option}>
            {option}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
};

export default DropdownField;
