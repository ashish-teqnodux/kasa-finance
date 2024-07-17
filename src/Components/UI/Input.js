import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useController } from "react-hook-form";

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
    control,
  } = props;

  const [focus, setFocus] = useState(false);

  const { field } = useController({
    name: id,
    control,
    defaultValue: value,
  });

  const handleChange = (e) => {
    let newValue = e.target.value;

    if (type === "number" && newValue.startsWith(".")) {
      if (newValue.length > 1) {
        newValue = "0" + newValue;
      }
    }

    field.onChange(newValue);
  };

  useEffect(() => {
    if (field.value) {
      setFocus(true);
    }
  }, [field.value]);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = async (e) => {
    if (field.value == 0 || field.value == "" || field.value == null) {
      setFocus(false);
    }
  };

  return (
    <StyledInput
      label={label}
      variant={variant}
      id={id}
      name={name}
      // {...register(id)}
      type={type}
      onFocus={handleFocus}
      onChange={handleChange}
      onBlur={handleBlur}
      autoComplete="off"
      disabled={disabled}
      // defaultValue={value}
      value={field.value}
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
