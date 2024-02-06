import React from "react";
import { Box, Divider, Grid, Typography, styled } from "@mui/material";
import ProjectFloors from "../UI/ProjectFloors";
import DropdownField from "../UI/DropdownField";
import Input from "../UI/Input";
import MuiAutoComplete from "../UI/MuiAutoComplete";
import StaircaseButton from "../UI/StaricaseButton";
import ColorInfo from "../UI/ColorInfo";

const ProjectGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
  // [theme.breakpoints.down("sm")]: {
  //   width: "100%", // Adjust for small screens (e.g., phones)
  // },
}));

const typoHeaderStyle = {
  textAlign: "center",
  textDecoration: "underline",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#1E2E5A",
};

const gridItemStyle = {
  paddingLeft: 0,
};

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

  const both = React.useMemo(() => {
    return isInstall && isRefinishing;
  }, [floors, isInstall, isRefinishing]);

  const commonQuestions = React.useMemo(() => {
    return (
      <>
        <Grid item xs={12} style={isRefinishing ? gridItemStyle : {}}>
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
        {dropdownValue?.[
          "Any project complications to be discussed with OPS"
        ] === "Yes" && (
          <Grid item xs={12} style={isRefinishing ? gridItemStyle : {}}>
            <Input
              id="Complications to be discussed"
              name="Complications to be discussed"
              type="text"
              label="Complications to be discussed"
              register={register}
              errors={errors}
              getValues={getValues}
              value={data?.["Complications to be discussed"]}
            />
          </Grid>
        )}
        <Grid item xs={12} style={isRefinishing ? gridItemStyle : {}}>
          <DropdownField
            id="3 coats of finish in 1 day allowed?"
            name="3 coats of finish in 1 day allowed?"
            label="3 coats of finish in 1 day allowed?"
            register={register}
            errors={errors}
            value={dropdownValue?.["3 coats of finish in 1 day allowed?"]}
            handleChangeDropdown={(e) =>
              handleChangeDropdown(e, "3 coats of finish in 1 day allowed?")
            }
            options={["Yes", "No"]}
          />
        </Grid>
        <Grid item xs={12} style={isRefinishing ? gridItemStyle : {}}>
          <Input
            id="Other stain/finish notes"
            name="Other stain/finish notes"
            type="text"
            label="Other stain/finish notes"
            register={register}
            errors={errors}
            getValues={getValues}
            value={data?.["Other stain/finish notes"]}
          />
        </Grid>
      </>
    );
  }, [dropdownValue, data]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Grid container spacing={2}>
        {isRefinishing && (
          <Grid item xs={both ? 2.5 : 5}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={typoHeaderStyle}
                style={{ marginBottom: "20px" }}
              >
                Refinishing
              </Typography>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{ maxHeight: "600px", overflowY: "auto", px: 1 }}
            >
              {(both || isRefinishing) && commonQuestions}
              <Grid style={gridItemStyle} item xs={12}>
                <DropdownField
                  id="Is the customer staining the floor"
                  name="Is the customer staining the floor"
                  label="Is the customer staining the floor"
                  register={register}
                  errors={errors}
                  value={dropdownValue?.["Is the customer staining the floor"]}
                  handleChangeDropdown={(e) =>
                    handleChangeDropdown(
                      e,
                      "Is the customer staining the floor"
                    )
                  }
                  options={["Yes", "No"]}
                />
              </Grid>
              <Grid style={gridItemStyle} item xs={12}>
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
              <Grid style={gridItemStyle} item xs={12}>
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
                  options={[
                    "Matte",
                    "Satin",
                    "Semi-Gloss",
                    "Semi-Gloss",
                    "TBD",
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
        )}
        {isRefinishing && (
          <Grid
            item
            xs={0.5}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Divider orientation="vertical" />
          </Grid>
        )}
        {isInstall && (
          <Grid item xs={both ? 2.5 : 5}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={typoHeaderStyle}
                style={{ marginBottom: "20px" }}
              >
                Installation
              </Typography>
            </Grid>
            <Grid
              container
              spacing={2}
              // sx={{ maxHeight: "550px", overflowY: "auto", px: 1 }}
            >
              {!both && commonQuestions}
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
              <Grid item xs={12}>
                <DropdownField
                  id="Doors jams expected to be cut?"
                  name="Doors jams expected to be cut?"
                  label="Doors jams expected to be cut?"
                  register={register}
                  errors={errors}
                  value={dropdownValue?.["Doors jams expected to be cut?"]}
                  handleChangeDropdown={(e) =>
                    handleChangeDropdown(e, "Doors jams expected to be cut?")
                  }
                  options={["Yes", "No"]}
                />
              </Grid>
              <Grid item xs={12}>
                <DropdownField
                  id="Doors expected to be cut?"
                  name="Doors expected to be cut?"
                  label="Doors expected to be cut?"
                  register={register}
                  errors={errors}
                  value={dropdownValue?.["Doors expected to be cut?"]}
                  handleChangeDropdown={(e) =>
                    handleChangeDropdown(e, "Doors expected to be cut?")
                  }
                  options={["Yes", "No"]}
                />
              </Grid>
            </Grid>
          </Grid>
        )}
        {isInstall && (
          <Grid
            item
            xs={0.5}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Divider orientation="vertical" />
          </Grid>
        )}
        <Grid item xs={2.5}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12}>
              <Typography sx={typoHeaderStyle}>Staircase In Scope</Typography>{" "}
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ width: "100%" }}>
                {initialStaircaseData?.length > 0 &&
                  initialStaircaseData.map((staircase) => {
                    return (
                      <div style={{ margin: "5px 0" }}>
                        <StaircaseButton
                          staircase={staircase}
                          staircaseClick={staircaseClick}
                        />
                        {staircase?.Staircase_Scope && (
                          <Grid container spacing={2} sx={{ mt: "5px" }}>
                            <Grid item xs={12}>
                              <DropdownField
                                id="Staircase Scope"
                                name="Staircase Scope"
                                label="Staircase Scope"
                                register={register}
                                errors={errors}
                                value={staircase?.Staircase_Scope}
                                handleChangeDropdown={(e) =>
                                  handleChangeStaricaseDropdown(
                                    e,
                                    staircase?.Staircase_Name,
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
                                value={staircase?.Is_there_a_staircase_rip_out}
                                handleChangeDropdown={(e) =>
                                  handleChangeStaricaseDropdown(
                                    e,
                                    staircase?.Staircase_Name,
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
                          </Grid>
                        )}
                      </div>
                    );
                  })}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0.5} sx={{ display: "flex", justifyContent: "center" }}>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={3}>
          <Grid item xs={12}>
            <ColorInfo />
          </Grid>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScopeForm;
