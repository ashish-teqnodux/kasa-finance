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

const TimingForm = ({
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
          <MuiDatePicker
            onChange={(date) =>
              onChange(date, "Estimated or Agreed Start Date")
            }
            value={date["Estimated or Agreed Start Date"]}
            label="Estimated or Agreed Start Date"
          />
        </Grid>
        <Grid item xs={12}>
          <DropdownField
            id="Confirmed Timing Details"
            name="Confirmed Timing Details"
            label="Confirmed Timing Details"
            register={register}
            errors={errors}
            value={dropdownValue?.["Confirmed Timing Details"]}
            handleChangeDropdown={(e) =>
              handleChangeDropdown(e, "Confirmed Timing Details")
            }
            options={[
              "Timing Confirmed with OPS",
              "Timing Tentatively Confirmed with Sales",
              "Timing Flexible and Loosly Discussed",
              "Start Date 100% Confirmed with OPS",
              "Start Date 100% Confirmed with Sales",
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <MuiAutoComplete
            id="Critical Timing Requirements"
            name="Critical Timing Requirements"
            label="Critical Timing Requirements"
            options={multiOptions}
            handleChangeMultiSelect={(event, newValue) =>
              handleChangeMultiSelect(
                event,
                newValue,
                "Critical Timing Requirements"
              )
            }
            values={multiFieldValue?.["Critical Timing Requirements"]}
          />
        </Grid>
        <Grid item xs={12}>
          <DropdownField
            id="Customer Plan During Project"
            name="Customer Plan During Project"
            label="Customer Plan During Project"
            register={register}
            errors={errors}
            value={dropdownValue?.["Customer Plan During Project"]}
            handleChangeDropdown={(e) =>
              handleChangeDropdown(e, "Customer Plan During Project")
            }
            options={[
              "Customer will stay home but doesn't need to use the floor",
              "Customer move in is after project",
              "Customer will plan to be out of the house for the project",
              "Unknown",
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <MuiDatePicker
            onChange={(date) =>
              onChange(date, "Earliest Date Customer Can Start")
            }
            value={date["Earliest Date Customer Can Start"]}
            label="Earliest Date Customer Can Start"
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            id="Other Project Timing Notes"
            name="Other Project Timing Notes"
            type="text"
            multiline={true}
            label="Other Project Timing Notes"
            register={register}
            errors={errors}
            getValues={getValues}
            value={data?.["Other Project Timing Notes"]}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TimingForm;
