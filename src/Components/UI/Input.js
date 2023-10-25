import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const StyledInput = styled(TextField)(() => ({
  "&.MuiTextField-root": {
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

const Input = (props) => {
  const {
    label,
    variant = "outlined",
    id,
    name,
    type,
    disabled,
    value,
    errors,
    register,
    multiline,
    maxRows = 4,
    minRows = 4,
    getValues,
  } = props;

  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (!!value) {
      setFocus(true);
    }
  }, [value, register]);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = async (e) => {
    if (getValues(id) == 0 || getValues(id) == "") {
      setFocus(false);
    }
  };

  return (
    <StyledInput
      label={label}
      variant={variant}
      id={id}
      name={name}
      {...register(id)}
      type={type}
      onFocus={handleFocus}
      onBlur={handleBlur}
      autoComplete="off"
      disabled={disabled}
      defaultValue={value}
      InputLabelProps={{ shrink: Boolean(getValues(id)) || focus }}
      inputProps={{
        step: "any",
      }}
      multiline={multiline}
      maxRows={maxRows}
      minRows={minRows}
      sx={{
        width: "100%",
        "& .MuiFormHelperText-root": {
          color: "red",
        },
      }}
      helperText={errors?.message || ""}
    />
  );
};

export default Input;
