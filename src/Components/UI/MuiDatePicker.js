import React from "react";
import styled from "@emotion/styled";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const StyledMobileDatePicker = styled(MobileDatePicker)(() => ({
  "&.MuiTextField-root": {
    width: "100%",
    "& .MuiInputBase-input": {
      padding: "14px",
      fontSize: "13px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "10px",
    },
    "& .css-lccy1c-MuiGrid-root": {
      paddingRight: "0",
    },
    "& .MuiInputLabel-root": {
      color: "#202020",
      fontSize: "13px",
      // top: "2px",
      marginTop: "-2px",
    },
    "& .MuiInputLabel-shrink": {
      marginTop: "2px",
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset>legend": {
      fontSize: "10px",
    },
  },
}));

const MuiDatePicker = (props) => {
  const { value, onChange, label } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledMobileDatePicker
        // defaultValue={dayjs("2022-04-17")}
        onChange={onChange}
        defaultValue={dayjs(value)}
        label={label}
      />
    </LocalizationProvider>
  );
};

export default MuiDatePicker;
