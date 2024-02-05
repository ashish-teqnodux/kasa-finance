import React from "react";
import { Box, Grid } from "@mui/material";
import Input from "../UI/Input";
import { Constants } from "../../utils/Constants";

const CustomerInfoForm = ({ register, errors, getValues, data }) => {
  return (
    <Box
      sx={{
        pb: "30px",
        width: Constants.MIDDLE_FORM_WIDTH,
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
