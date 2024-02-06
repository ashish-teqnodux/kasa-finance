import React from "react";
import { Box, Grid, Typography } from "@mui/material";
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

const LogisticsForm = ({
  register,
  errors,
  handleChangeDropdown,
  dropdownValue,
  getValues,
  data,
}) => {
  return (
    <Box
      sx={{
        pb: "30px",
        width: "100%",
        // margin: "auto",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DropdownField
                id="Confirmation for OPS to reach out to the customer"
                name="Confirmation for OPS to reach out to the customer"
                label="Confirmation for OPS to reach out to the customer"
                register={register}
                errors={errors}
                value={
                  dropdownValue?.[
                    "Confirmation for OPS to reach out to the customer"
                  ]
                }
                handleChangeDropdown={(e) =>
                  handleChangeDropdown(
                    e,
                    "Confirmation for OPS to reach out to the customer"
                  )
                }
                options={["Yes", "No"]}
              />
            </Grid>
            <Grid item xs={12}>
              <DropdownField
                id="Requires COI"
                name="Requires COI"
                label="Requires COI"
                register={register}
                errors={errors}
                value={dropdownValue?.["Requires COI"]}
                handleChangeDropdown={(e) =>
                  handleChangeDropdown(e, "Requires COI")
                }
                options={["Yes", "No"]}
              />
            </Grid>
            <Grid item xs={12}>
              <DropdownField
                id="Special instructions needed for getting Into the home?"
                name="Special instructions needed for getting Into the home?"
                label="Special instructions needed for getting Into the home?"
                register={register}
                errors={errors}
                value={
                  dropdownValue?.[
                    "Special instructions needed for getting Into the home?"
                  ]
                }
                handleChangeDropdown={(e) =>
                  handleChangeDropdown(
                    e,
                    "Special instructions needed for getting Into the home?"
                  )
                }
                options={["Yes", "No"]}
              />
            </Grid>
            {dropdownValue?.[
              "Special instructions needed for getting Into the home?"
            ] === "Yes" && (
              <Grid item xs={12}>
                <Input
                  id="Special instructions for getting into home Notes"
                  name="Special instructions for getting into home Notes"
                  type="text"
                  label="Special instructions for getting into home Notes"
                  register={register}
                  errors={errors}
                  getValues={getValues}
                  value={
                    data?.["Special instructions for getting into home Notes"]
                  }
                />
              </Grid>
            )}
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DropdownField
                id="Confirmation that FlooredAtHome will be the only trade"
                name="Confirmation that FlooredAtHome will be the only trade"
                label="Confirmation that FlooredAtHome will be the only trade"
                register={register}
                errors={errors}
                value={
                  dropdownValue?.[
                    "Confirmation that FlooredAtHome will be the only trade"
                  ]
                }
                handleChangeDropdown={(e) =>
                  handleChangeDropdown(
                    e,
                    "Confirmation that FlooredAtHome will be the only trade"
                  )
                }
                options={["Yes", "No"]}
              />
            </Grid>
            <Grid item xs={12}>
              <DropdownField
                id="Disposal Plan"
                name="Disposal Plan"
                label="Disposal Plan"
                register={register}
                errors={errors}
                value={dropdownValue?.["Disposal Plan"]}
                handleChangeDropdown={(e) =>
                  handleChangeDropdown(e, "Disposal Plan")
                }
                options={[
                  "Curbside",
                  "On Site Dumpster (FAH)",
                  "On Site Dupster (Customer)",
                  "Off Site Disposal",
                  "No Disposal",
                  "TBD",
                ]}
              />
            </Grid>
            <Grid item xs={12}>
              <DropdownField
                id="Walls & Baseboard to be painted after the project"
                name="Walls & Baseboard to be painted after the project"
                label="Walls & Baseboard to be painted after the project"
                register={register}
                errors={errors}
                value={
                  dropdownValue?.[
                    "Walls & Baseboard to be painted after the project"
                  ]
                }
                handleChangeDropdown={(e) =>
                  handleChangeDropdown(
                    e,
                    "Walls & Baseboard to be painted after the project"
                  )
                }
                options={["Yes", "No", "Unknown"]}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ textAlign: "start", textDecoration: "underline" }}>
                <Typography
                  sx={{
                    textDecoration: "underline",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#1E2E5A",
                  }}
                >
                  Material
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <DropdownField
                id="Delivery Required"
                name="Delivery Required"
                label="Delivery Required"
                register={register}
                errors={errors}
                value={dropdownValue?.["Delivery Required"]}
                handleChangeDropdown={(e) =>
                  handleChangeDropdown(e, "Delivery Required")
                }
                options={["Delivery Required", "Delivery Not Required"]}
              />
            </Grid>
            {dropdownValue?.["Delivery Required"] === "Delivery Required" && (
              <Grid item xs={12}>
                <DropdownField
                  id="Material Confirmed"
                  name="Material Confirmed"
                  label="Material Confirmed"
                  register={register}
                  errors={errors}
                  value={dropdownValue?.["Material Confirmed"]}
                  handleChangeDropdown={(e) =>
                    handleChangeDropdown(e, "Material Confirmed")
                  }
                  options={[
                    "Material Required: Confirmed",
                    "Material Required: Not Yet Confirmed",
                  ]}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LogisticsForm;
