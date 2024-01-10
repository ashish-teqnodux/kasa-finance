import React, { useEffect, useState } from "react";
import ScopeButton from "../UI/ScopeButton";
import { Box, Grid, Typography, styled } from "@mui/material";
// import styled from "@emotion/styled";
import ProjectFloors from "../UI/ProjectFloors";
import DropdownField from "../UI/DropdownField";
import Input from "../UI/Input";
import MuiAutoComplete from "../UI/MuiAutoComplete";
import StaircaseButton from "../UI/StaricaseButton";

const ProjectGrid = styled(Grid)(({ theme }) => ({
  padding: "10px 0 10px 24px",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Adjust for small screens (e.g., phones)
  },
  [theme.breakpoints.up("md")]: {
    width: "80%", // Adjust for large screens (e.g., desktops)
  },
}));

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
  handleChangeStaricaseDropdown,
  dropdownValue,
  getValues,
  data,
  handleChangeMultiSelect,
  multiFieldValue,
  initialStaircaseData,
  staircaseClick,
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
        width: "50%",
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
      <div>
        <Typography
          sx={{
            textAlign: "center",
            textDecoration: "underline",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#1E2E5A",
          }}
        >
          Staircase In Scope
        </Typography>
      </div>
      <Box sx={{ width: "40%" }}>
        {initialStaircaseData?.length > 0 &&
          initialStaircaseData.map((staircase, index) => {
            return (
              <div style={{ marginTop: "4px" }}>
                <StaircaseButton
                  staircase={staircase}
                  staircaseClick={staircaseClick}
                />
              </div>
            );
          })}
      </Box>
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
          {dropdownValue?.["Why Customer is Doing the Project"] === "Other" && (
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
              id="Most Important thing to the customer"
              name="Most Important thing to the customer"
              type="text"
              label="Most Important thing to the customer"
              register={register}
              errors={errors}
              getValues={getValues}
              value={data?.["Most Important thing to the customer"]}
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
          {initialStaircaseData?.map((sc) => {
            if (sc?.Staircase_Scope) {
              return (
                <>
                  <Grid item xs={12} sx={{ textAlign: "start" }}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#1E2E5A",
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      {sc?.Staircase_Name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <DropdownField
                      id="Staircase Scope"
                      name="Staircase Scope"
                      label="Staircase Scope"
                      register={register}
                      errors={errors}
                      value={sc?.Staircase_Scope}
                      handleChangeDropdown={(e) =>
                        handleChangeStaricaseDropdown(
                          e,
                          sc?.Staircase_Name,
                          "Staircase Scope"
                        )
                      }
                      options={[
                        "Refinishing Only",
                        "Unfinished Install with Refinishing",
                        "Prefinished Install",
                        "Unfinished NuStair with Refinishing",
                        "Prefinished NuStair",
                        "Buff and Recoat",
                        "Other",
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <DropdownField
                      id="Is there a staircase rip out?"
                      name="Is there a staircase rip out?"
                      label="Is there a staircase rip out?"
                      register={register}
                      errors={errors}
                      value={sc?.Is_there_a_staircase_rip_out}
                      handleChangeDropdown={(e) =>
                        handleChangeStaricaseDropdown(
                          e,
                          sc?.Staircase_Name,
                          "Is there a staircase rip out?"
                        )
                      }
                      options={[
                        "No Staircase Rip Out Required",
                        "Rip Out Required: Customer Removing",
                        "Wall to wall carpet to be removed by FlooredAtHome",
                        "Wall to wall carpet with stringers to be removed by FlooredAtHome",
                        "Runner to be removed by FlooredAtHome",
                      ]}
                    />
                  </Grid>
                </>
              );
            } else {
              return <></>;
            }
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default ScopeForm;
