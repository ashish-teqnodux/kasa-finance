import React from "react";
import { Box, Grid } from "@mui/material";
import Input from "../UI/Input";
import DropdownField from "../UI/DropdownField";

const CustomerInfoForm = ({
  register,
  errors,
  getValues,
  data,
  handleChangeDropdown,
  dropdownValue,
}) => {
  return (
    <Box
      sx={{
        pb: "30px",
        width: "100%",
      }}
    >
      <Grid container spacing={2}>
        {/* first column */}
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                id="Customer Name"
                name="Customer Name"
                type="text"
                label="Customer Name"
                register={register}
                errors={errors}
                getValues={getValues}
                value={data?.["Customer Name"] || ""}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                id="Unit"
                name="Unit"
                type="text"
                label="Unit"
                register={register}
                errors={errors}
                getValues={getValues}
                value={data?.["Unit"] || ""}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                id="Street"
                name="Street"
                type="text"
                label="Street"
                register={register}
                errors={errors}
                getValues={getValues}
                value={data?.["Street"] || ""}
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                id="City"
                name="City"
                type="text"
                label="City"
                register={register}
                errors={errors}
                getValues={getValues}
                value={data?.["City"] || ""}
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                id="State"
                name="State"
                type="text"
                label="State"
                register={register}
                errors={errors}
                getValues={getValues}
                value={data?.["State"] || ""}
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                id="Zip Code"
                name="Zip Code"
                type="text"
                label="Zip Code"
                register={register}
                errors={errors}
                getValues={getValues}
                value={data?.["Zip Code"] || ""}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                id="Mobile_Phone"
                name="Mobile_Phone"
                type="text"
                label="Mobile Phone"
                register={register}
                errors={errors}
                getValues={getValues}
                value={data?.["Mobile_Phone"] || ""}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                id="Other_Phone"
                name="Other_Phone"
                type="text"
                label="Other Phone"
                register={register}
                errors={errors}
                getValues={getValues}
                value={data?.["Other_Phone"] || ""}
              />
            </Grid>
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
        </Grid>

        {/* second column */}
        <Grid item xs={6}>
          <Grid
            container
            spacing={2}
            sx={{ maxHeight: "550px", overflowY: "auto", px: 1 }}
          >
            <Grid item xs={12}>
              <DropdownField
                id="Property type"
                name="Property type"
                label="Property type"
                register={register}
                errors={errors}
                value={dropdownValue?.["Property type"]}
                handleChangeDropdown={(e) =>
                  handleChangeDropdown(e, "Property type")
                }
                options={[
                  "Single Family House",
                  "Multi Family House",
                  "Apartment",
                  "Condo",
                  "Townhouse",
                  "Gated Community",
                  "Commercial Space",
                  "Private House",
                ]}
              />
            </Grid>
            {(dropdownValue?.["Property type"] === "Apartment" ||
              dropdownValue?.["Property type"] === "Condo") && (
              <>
                <Grid item xs={12}>
                  <DropdownField
                    id="Doorman building?"
                    name="Doorman building?"
                    label="Doorman building?"
                    register={register}
                    errors={errors}
                    value={dropdownValue?.["Doorman building?"]}
                    handleChangeDropdown={(e) =>
                      handleChangeDropdown(e, "Doorman building?")
                    }
                    options={["Yes", "No"]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    id="Floor level"
                    name="Floor level"
                    type="text"
                    label="Floor level"
                    register={register}
                    errors={errors}
                    getValues={getValues}
                    value={data?.["Floor level"]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <DropdownField
                    id="Metal doors to be scribed around?"
                    name="Metal doors to be scribed around?"
                    label="Metal doors to be scribed around?"
                    register={register}
                    errors={errors}
                    value={dropdownValue?.["Metal doors to be scribed around?"]}
                    handleChangeDropdown={(e) =>
                      handleChangeDropdown(
                        e,
                        "Metal doors to be scribed around?"
                      )
                    }
                    options={["Yes", "No"]}
                  />
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <DropdownField
                id="Are we matching any existing floor (Refi. orInst.)"
                name="Are we matching any existing floor (Refi. orInst.)"
                label="Are we matching any existing floor (Refi. orInst.)"
                register={register}
                errors={errors}
                value={
                  dropdownValue?.[
                    "Are we matching any existing floor (Refi. orInst.)"
                  ]
                }
                handleChangeDropdown={(e) =>
                  handleChangeDropdown(
                    e,
                    "Are we matching any existing floor (Refi. orInst.)"
                  )
                }
                options={["Yes", "No"]}
              />
            </Grid>
            <Grid item xs={12}>
              <DropdownField
                id="Is any leveling needed"
                name="Is any leveling needed"
                label="Is any leveling needed"
                register={register}
                errors={errors}
                value={dropdownValue?.["Is any leveling needed"]}
                handleChangeDropdown={(e) =>
                  handleChangeDropdown(e, "Is any leveling needed")
                }
                options={["Yes", "No"]}
              />
            </Grid>
            <Grid item xs={12}>
              <DropdownField
                id="Scope Confirmed"
                name="Scope Confirmed"
                label="Scope Confirmed"
                register={register}
                errors={errors}
                value={dropdownValue?.["Scope Confirmed"]}
                handleChangeDropdown={(e) =>
                  handleChangeDropdown(e, "Scope Confirmed")
                }
                options={["Yes", "No"]}
              />
            </Grid>
            <Grid item xs={12}>
              <DropdownField
                id="Why Customer is Doing the Project"
                name="Why Customer is Doing the Project"
                label="Why Customer is Doing the Project"
                register={register}
                errors={errors}
                value={dropdownValue?.["Why Customer is Doing the Project"]}
                handleChangeDropdown={(e) =>
                  handleChangeDropdown(e, "Why Customer is Doing the Project")
                }
                options={[
                  "Moving into a new house",
                  "Looking for an exact color",
                  "Improve Squeaks",
                  "Improve Leveling",
                  "Damage to prior floor",
                  "Other",
                ]}
              />
            </Grid>
            {dropdownValue?.["Why Customer is Doing the Project"] ===
              "Other" && (
              <Grid item xs={12}>
                <Input
                  id="Other Reason Customer Is Doing Project"
                  name="Other Reason Customer Is Doing Project"
                  type="text"
                  label="Other Reason Customer Is Doing Project"
                  register={register}
                  errors={errors}
                  getValues={getValues}
                  value={data?.["Other Reason Customer Is Doing Project"]}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <Input
                id="Most Important thing to customer about project"
                name="Most Important thing to customer about project"
                type="text"
                label="Most Important thing to customer about project"
                register={register}
                errors={errors}
                getValues={getValues}
                value={data?.["Most Important thing to customer about project"]}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerInfoForm;
