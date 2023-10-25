import React, { useEffect, useState } from "react";
import ScopeButton from "../UI/ScopeButton";
import { Box, Grid } from "@mui/material";
import styled from "@emotion/styled";
import ProjectFloors from "../UI/ProjectFloors";
import DropdownField from "../UI/DropdownField";
import Input from "../UI/Input";
import MuiAutoComplete from "../UI/MuiAutoComplete";

const ProjectGrid = styled(Grid)({
  padding: "10px 0 10px 24px",
  display: "flex",
  justifyContent: "center",
  // height: "100%",
  width: "100%",
});

const multiOptions = [
  { title: "Aged Barrel", value: "Aged Barrel" },
  {
    title: "Antique Brown",
    value: "Antique Brown",
  },
  {
    title: "Cherry",
    value: "Cherry",
  },
  {
    title: "Chestnut",
    value: "Chestnut",
  },
  {
    title: "Classic Grey",
    value: "Classic Grey",
  },
  {
    title: "Coffee Brown",
    value: "Coffee Brown",
  },
  {
    title: "Colonial Maple",
    value: "Colonial Maple",
  },
  {
    title: "Country White",
    value: "Country White",
  },
  {
    title: "Dark Grey",
    value: "Dark Grey",
  },
  {
    title: "Dark Walnut",
    value: "Dark Walnut",
  },
  {
    title: "Early American",
    value: "Early American",
  },
  {
    title: "Ebony",
    value: "Ebony",
  },
  {
    title: "English Chestnut",
    value: "English Chestnut",
  },
  {
    title: "Espresso",
    value: "Espresso",
  },
  {
    title: "Fruitwood",
    value: "Fruitwood",
  },
  {
    title: "Golden Brown",
    value: "Golden Brown",
  },
  {
    title: "Golden Oak",
    value: "Golden Oak",
  },
  {
    title: "Golden Pecan",
    value: "Golden Pecan",
  },
  {
    title: "Gunstock",
    value: "Gunstock",
  },
  {
    title: "Hetitage Brown",
    value: "Hetitage Brown",
  },
  {
    title: "Jacobean",
    value: "Jacobean",
  },
  {
    title: "Medium Brown",
    value: "Medium Brown",
  },
  {
    title: "Neutral",
    value: "Neutral",
  },
  {
    title: "Nutmeg",
    value: "Nutmeg",
  },
  {
    title: "Provincial",
    value: "Provincial",
  },
  {
    title: "Red Mahogany",
    value: "Red Mahogany",
  },
  {
    title: "Rosewood",
    value: "Rosewood",
  },
  {
    title: "Royal Mahogany",
    value: "Royal Mahogany",
  },
  {
    title: "Rustic Beige",
    value: "Rustic Beige",
  },
  {
    title: "Sedona Red",
    value: "Sedona Red",
  },
  {
    title: "Silvered Grey",
    value: "Silvered Grey",
  },
  {
    title: "Special Walnut",
    value: "Special Walnut",
  },
  {
    title: "Spice Brown",
    value: "Spice Brown",
  },
  {
    title: "True Black",
    value: "True Black",
  },
  {
    title: "Warm Grey",
    value: "Warm Grey",
  },
  {
    title: "Weathered Oak",
    value: "Weathered Oak",
  },
];

const ScopeForm = ({
  floors,
  floorClick,
  register,
  errors,
  handleChangeDropdown,
  dropdownValue,
  getValues,
  data,
  handleChangeMultiSelect,
  multiFieldValue,
}) => {
  let isInstall = false;
  let isRefinishing = false;

  if (floors?.length > 0) {
    for (const floor of floors) {
      if (floor?.rooms?.length > 0) {
        for (const room of floor.rooms) {
          if (room?.Is_Install) {
            isInstall = true;
          }
          if (room?.Is_Refinishing) {
            isRefinishing = true;
          }
        }
      }
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ProjectGrid container spacing={1}>
        {floors?.length > 0 &&
          floors.map((floor, index) => {
            return (
              <ProjectFloors
                addedFloors={floors}
                floor={floor}
                index={index}
                floorClick={floorClick}
              />
            );
          })}
      </ProjectGrid>
      <Box
        sx={{
          pb: "30px",
          width: "60%",
          margin: "auto",
        }}
      >
        <Grid container spacing={2} sx={{ mt: "5px" }}>
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
              id="Any project complications to be discussed with OPS"
              name="Any project complications to be discussed with OPS"
              label="Any project complications to be discussed with OPS"
              register={register}
              errors={errors}
              value={
                dropdownValue?.[
                  "Any project complications to be discussed with OPS"
                ]
              }
              handleChangeDropdown={(e) =>
                handleChangeDropdown(
                  e,
                  "Any project complications to be discussed with OPS"
                )
              }
              options={["Yes", "No"]}
            />
          </Grid>
          {isInstall && (
            <Grid item xs={12}>
              <DropdownField
                id="Installation Layout Style of New Floor"
                name="Installation Layout Style of New Floor"
                label="Installation Layout Style of New Floor"
                register={register}
                errors={errors}
                value={
                  dropdownValue?.["Installation Layout Style of New Floor"]
                }
                handleChangeDropdown={(e) =>
                  handleChangeDropdown(
                    e,
                    "Installation Layout Style of New Floor"
                  )
                }
                options={[
                  "Straight",
                  "Diagonal",
                  "Herringbone",
                  "Chevron",
                  "Other",
                ]}
              />
            </Grid>
          )}
          {isInstall && (
            <Grid item xs={12}>
              <Input
                id="Installation Layout Notes"
                name="Installation Layout Notes"
                type="text"
                label="Installation Layout Notes"
                register={register}
                errors={errors}
                getValues={getValues}
                value={data?.["Installation Layout Notes"]}
              />
            </Grid>
          )}
          {isInstall && (
            <Grid item xs={12}>
              <DropdownField
                id="Will the new floor be lower than the current floor"
                name="Will the new floor be lower than the current floor"
                label="Will the new floor be lower than the current floor"
                register={register}
                errors={errors}
                value={
                  dropdownValue?.[
                    "Will the new floor be lower than the current floor"
                  ]
                }
                handleChangeDropdown={(e) =>
                  handleChangeDropdown(
                    e,
                    "Will the new floor be lower than the current floor"
                  )
                }
                options={["Yes", "No", "TBD"]}
              />
            </Grid>
          )}
          {isInstall && (
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
          )}
          {isRefinishing && (
            <Grid item xs={12}>
              <DropdownField
                id="Is the customer staining the floor"
                name="Is the customer staining the floor"
                label="Is the customer staining the floor"
                register={register}
                errors={errors}
                value={dropdownValue?.["Is the customer staining the floor"]}
                handleChangeDropdown={(e) =>
                  handleChangeDropdown(e, "Is the customer staining the floor")
                }
                options={["Yes", "No"]}
              />
            </Grid>
          )}
          {isRefinishing && (
            <Grid item xs={12}>
              <MuiAutoComplete
                id="Stain Sample Chosen By The Customer"
                name="Stain Sample Chosen By The Customer"
                label="Stain Sample Chosen By The Customer"
                options={multiOptions}
                handleChangeMultiSelect={(event, newValue) =>
                  handleChangeMultiSelect(
                    event,
                    newValue,
                    "Stain Sample Chosen By The Customer"
                  )
                }
                values={
                  multiFieldValue?.["Stain Sample Chosen By The Customer"]
                }
              />
            </Grid>
          )}
          {isRefinishing && (
            <Grid item xs={12}>
              <DropdownField
                id="Gloss level chosen by customer"
                name="Gloss level chosen by customer"
                label="Gloss level chosen by customer"
                register={register}
                errors={errors}
                value={dropdownValue?.["Gloss level chosen by customer"]}
                handleChangeDropdown={(e) =>
                  handleChangeDropdown(e, "Gloss level chosen by customer")
                }
                options={["Matte", "Satin", "Semi-Gloss", "Semi-Gloss", "TBD"]}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default ScopeForm;
