import React from "react";
import { Box, Grid } from "@mui/material";
import Input from "../UI/Input";
import MuiDatePicker from "../UI/MuiDatePicker";
import DropdownField from "../UI/DropdownField";

const multiOptions = [
  { title: "Cash or Check", value: "Cash or Check" },
  { title: "Wire Transfer", value: "Wire Transfer" },
];

const FinanceForm = ({
  register,
  errors,
  onChange,
  handleChangeDropdown,
  date,
  dropdownValue,
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
            id="Amount"
            name="Amount"
            type="number"
            label="Amount"
            register={register}
            errors={errors}
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
            options={["Check", "Square", "Synchrony", "Cash", "Zelle", "Wire"]}
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
      </Grid>
    </Box>
  );
};

export default FinanceForm;
