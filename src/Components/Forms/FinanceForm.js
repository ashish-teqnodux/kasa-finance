import React from "react";
import { Box, Grid } from "@mui/material";
import Input from "../UI/Input";
import MuiDatePicker from "../UI/MuiDatePicker";
import DropdownField from "../UI/DropdownField";
import { Constants } from "../../utils/Constants";

const FinanceForm = ({
  register,
  errors,
  onChange,
  handleChangeDropdown,
  date,
  dropdownValue,
  data,
  getValues,
  control,
}) => {
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
            id="Amount"
            name="Amount"
            type="number"
            label="Amount"
            register={register}
            errors={errors}
            value={data?.["Amount"] || null}
            getValues={getValues}
            control={control}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            id="Deposit Taken"
            name="Deposit Taken"
            type="number"
            label="Deposit Taken ($)"
            register={register}
            errors={errors}
            value={data?.["Deposit Taken"] || null}
            getValues={getValues}
            control={control}
          />
        </Grid>
        <Grid item xs={12}>
          <DropdownField
            id="Method of Deposit"
            name="Method of Deposit"
            label="Method of Deposit"
            register={register}
            errors={errors}
            value={dropdownValue?.["Method of Deposit"]}
            handleChangeDropdown={(e) =>
              handleChangeDropdown(e, "Method of Deposit")
            }
            options={[
              "Check",
              "Square",
              "Synchrony",
              "Cash",
              "Zelle",
              "Wire",
              "None",
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <MuiDatePicker
            onChange={(date) => onChange(date, "Deposit Taken Date")}
            value={date?.["Deposit Taken Date"]}
            label="Deposit Taken Date"
          />
        </Grid>
        <Grid item xs={12}>
          <DropdownField
            id="Payment Terms"
            name="Payment Terms"
            label="Payment Terms"
            register={register}
            errors={errors}
            value={dropdownValue?.["Payment Terms"]}
            handleChangeDropdown={(e) =>
              handleChangeDropdown(e, "Payment Terms")
            }
            options={[
              "Cash or Check",
              "Wire Transfer",
              "Credit Card Discussed",
              "6 Month Synchrony Financing Approved",
              "12 Month Synchrony Financing Approved",
              "Zelle",
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            id="Other Payment Notes"
            name="Other Payment Notes"
            type="text"
            label="Other Payment Notes"
            register={register}
            errors={errors}
            value={data?.["Other Payment Notes"]}
            getValues={getValues}
            control={control}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FinanceForm;
