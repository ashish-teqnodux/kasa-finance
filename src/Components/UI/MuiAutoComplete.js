import styled from "@emotion/styled";
import React from "react";
import { Autocomplete, Paper, TextField } from "@mui/material";

const StyledInput = styled(TextField)(() => ({
  "&.MuiTextField-root": {
    "& .MuiInputBase-input": {
      padding: "14px",
      fontSize: "13px",
    },
    "& .MuiChip-label": {
      fontSize: "12px",
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
      marginLeft: "-1px",
      marginTop: "5px",
    },
    "& .MuiInputLabel-shrink": {
      marginTop: "2px",
    },
  },
  "& .MuiOutlinedInput-root": {
    minHeight: "45px",
    "& fieldset>legend": {
      fontSize: "10px",
    },
  },
}));

const MuiAutoComplete = ({
  id,
  name,
  label,
  options,
  handleChangeMultiSelect,
  values,
}) => {
  const handleChangeMulti = (event, newValue) => {
    handleChangeMultiSelect(event, newValue);
  };

  return (
    <Autocomplete
      multiple
      id="size-small-standard-multi"
      size="small"
      options={options}
      onChange={handleChangeMulti}
      getOptionLabel={(option) => option.title}
      value={values}
      PaperComponent={CustomPaper}
      renderInput={(params) => (
        <StyledInput
          {...params}
          variant="outlined"
          label={label}
          sx={{ fontSize: "10px" }}
        />
      )}
    />
  );
};

export default MuiAutoComplete;

function CustomPaper(props) {
  return (
    <Paper
      {...props}
      style={{
        fontSize: "13px", // Adjust the max height as needed
      }}
    />
  );
}
