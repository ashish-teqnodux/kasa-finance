import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import DropdownField from "../UI/DropdownField";
import MuiAutoComplete from "../UI/MuiAutoComplete";

const appliancesOptions = [
  { title: "Refrigerator", value: "Refrigerator" },
  {
    title: "Dishwasher",
    value: "Dishwasher",
  },
  {
    title: "Stove",
    value: "Stove",
  },
  {
    title: "Washer",
    value: "Washer",
  },
  {
    title: "Dryer",
    value: "Dryer",
  },
  {
    title: "Toilet",
    value: "Toilet",
  },
];

const specialItemsOptions = [
  { title: "Toilet", value: "Toilet" },
  {
    title: "Full Size Pool Table",
    value: "Full Size Pool Table",
  },
  {
    title: "Grand Piano",
    value: "Grand Piano",
  },
  {
    title: "Baby Grand Piano",
    value: "Baby Grand Piano",
  },
  {
    title: "Upright Piano",
    value: "Upright Piano",
  },
  {
    title: "Radiators Other",
    value: "Radiators Other",
  },
];

const FurnitureForm = ({
  register,
  errors,
  handleChangeDropdown,
  dropdownValue,
  handleChangeMultiSelect,
  multiFieldValue,
}) => {
  return (
    <Box
      sx={{
        pb: "30px",
        width: "30%",
        // margin: "auto",
      }}
    >
      <div>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", textDecoration: "underline", mb: "10px" }}
        >
          Furniture Plan
        </Typography>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DropdownField
            id="Is Appliances In Scope"
            name="Is Appliances In Scope"
            label="Is Appliances In Scope"
            register={register}
            errors={errors}
            value={dropdownValue?.["Is Appliances In Scope"]}
            handleChangeDropdown={(e) =>
              handleChangeDropdown(e, "Is Appliances In Scope")
            }
            options={["Yes", "No"]}
          />
        </Grid>
        {dropdownValue?.["Is Appliances In Scope"] === "Yes" && (
          <Grid item xs={12}>
            <MuiAutoComplete
              id="Appliances"
              name="Appliances"
              label="Appliances"
              options={appliancesOptions}
              handleChangeMultiSelect={(event, newValue) =>
                handleChangeMultiSelect(event, newValue, "Appliances")
              }
              values={multiFieldValue?.["Appliances"]}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <DropdownField
            id="Is Special Items In Scope"
            name="Is Special Items In Scope"
            label="Is Special Items In Scope"
            register={register}
            errors={errors}
            value={dropdownValue?.["Is Special Items In Scope"]}
            handleChangeDropdown={(e) =>
              handleChangeDropdown(e, "Is Special Items In Scope")
            }
            options={["Yes", "No"]}
          />
        </Grid>
        {dropdownValue?.["Is Special Items In Scope"] === "Yes" && (
          <Grid item xs={12}>
            <MuiAutoComplete
              id="Special Items"
              name="Special Items"
              label="Special Items"
              options={specialItemsOptions}
              handleChangeMultiSelect={(event, newValue) =>
                handleChangeMultiSelect(event, newValue, "Special Items")
              }
              values={multiFieldValue?.["Special Items"]}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default FurnitureForm;
