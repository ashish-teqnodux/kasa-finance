import React from "react";
import styled from "@emotion/styled";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
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
      border: "1px solid #8080806e",
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

const StyledMobileDateTimePicker = styled(MobileDateTimePicker)(() => ({
  "&.MuiTextField-root": {
    width: "100%",
    "& .MuiInputBase-input": {
      padding: "14px",
      fontSize: "13px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "10px",
      border: "1px solid #8080806e",
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
      {label === "Deposit Taken Date" ? (
        <StyledMobileDateTimePicker
          value={dayjs(value)}
          onChange={onChange}
          label={label}
        />
      ) : (
        <StyledMobileDatePicker
          onChange={onChange}
          value={dayjs(value)}
          label={label}
        />
      )}
    </LocalizationProvider>
  );
};

export default MuiDatePicker;
