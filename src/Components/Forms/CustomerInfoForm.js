import React from "react";
import { Box, Grid } from "@mui/material";
import Input from "../UI/Input";
import MuiDatePicker from "../UI/MuiDatePicker";
import DropdownField from "../UI/DropdownField";
import MuiAutoComplete from "../UI/MuiAutoComplete";

const multiOptions = [
  { title: "None", value: "None" },
  {
    title: "Planned Furniture Move After Project",
    value: "Planned Furniture Move After Project",
  },
  {
    title: "Other trades will be working in the space",
    value: "Other trades will be working in the space",
  },
  {
    title: "Project planned around a vacation",
    value: "Project planned around a vacation",
  },
  {
    title: "Customer has critical timing requirements",
    value: "Customer has critical timing requirements",
  },
];

const CustomerInfoForm = ({
  register,
  errors,
  date,
  onChange,
  handleChangeMultiSelect,
  multiFieldValue,
  handleChangeDropdown,
  dropdownValue,
  getValues,
  data,
}) => {
  return (
    <Box
      sx={{
        pb: "30px",
        width: "30%",
        // margin: "auto",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input
            id="Spouse name"
            name="Spouse name"
            type="text"
            label="Spouse name"
            register={register}
            errors={errors}
            getValues={getValues}
            value={data?.["Spouse name"] || ""}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            id="Spouse_s_phone_number"
            name="Spouse_s_phone_number"
            type="number"
            label="Spouse's phone number"
            register={register}
            errors={errors}
            getValues={getValues}
            value={data?.["Spouse_s_phone_number"] || ""}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerInfoForm;
