import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card, Divider } from "@mui/material";
import * as yup from "yup";
import FinanceForm from "./Forms/FinanceForm";
import { useReactHookForm } from "./hooks/useReactHookForm";
import moment from "moment";
import TimingForm from "./Forms/TimingForm";
import { pushResultDatatoZoho } from "./services/finance.service";
import dayjs from "dayjs";

const steps = ["Finance", "Timing", "Logistics", "Scope", "Furniture"];

const StepperForm = ({ data }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [date, setDate] = React.useState({});
  const [multiFieldValue, setMultiFieldValue] = React.useState({});
  const [dropdownValue, setDropdownValue] = React.useState({});

  const EventSchema = yup.object().shape({
    // amount: yup
    //   .number()
    //   .typeError("Amonut is not valid")
    //   .required("Amonut is Required"),
    // deposite: yup
    //   .number()
    //   .typeError("Amonut is not valid")
    //   .required("Amonut is Required"),
    // date: yup
    //   .date()
    //   .typeError("Invalid date!")
    //   .min(moment(), "Past dates are not allowed!")
    //   .required("Date is required!")
    //   .test("isHoliday", "Pod is closed on this day", (value) => {
    //     return !props.holidays.includes(
    //       moment(value).format("yyyy-MM-DD").toString()
    //     );
    //   }),
  });

  const { register, errors, watch, getValues, setValue, handleSubmit } =
    useReactHookForm({
      validationSchema: EventSchema,
      defaultValues: {},
      mode: "onChange",
    });

  React.useEffect(() => {
    setValue("Amount", data?.Amount);
    setValue("Deposit Taken", data?.["Deposit Taken"]);
    setValue(
      "Other Project Timing Notes",
      data?.["Other Project Timing Notes"]
    );

    let dateFields = {
      "Deposit Taken Date": data?.["Deposit Taken Date"],
      "Estimated or Agreed Start Date":
        data?.["Estimated or Agreed Start Date"],
      "Earliest Date Customer Can Start":
        data?.["Earliest Date Customer Can Start"],
    };

    let multiFields = {
      "Critical Timing Requirements": data?.["Critical Timing Requirements"],
    };

    let dropdownFields = {
      "Method of Deposit": data?.["Method of Deposit"],
      "Payment Terms": data?.["Payment Terms"],
      "Confirmed Timing Details": data?.["Confirmed Timing Details"],
      "Customer Plan During Project": data?.["Customer Plan During Project"],
    };

    setDate(dateFields);
    setMultiFieldValue(multiFields);
    setDropdownValue(dropdownFields);
  }, []);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const onChangeDate = (localDate, key) => {
    setDate({ ...date, [key]: dayjs(localDate).format("YYYY-MM-DD") });
  };

  const handleChangeMultiSelect = (event, newValue, key) => {
    setMultiFieldValue({ ...multiFieldValue, [key]: newValue });
  };

  const handleChangeDropdown = (event, key) => {
    setDropdownValue({ ...dropdownValue, [key]: event.target.value });
  };

  const onSubmit = async (data) => {
    let formatteddates = {};
    let formattedMultivalues = {};

    for (const localKey in date) {
      formatteddates[localKey] = moment(date[localKey]).format("YYYY-MM-DD");
    }

    for (const localKey in multiFieldValue) {
      formattedMultivalues[localKey] = multiFieldValue?.[localKey]?.map(
        (val) => val.value
      );
    }

    let id = "123";

    let finalBody = {
      id,
      ...data,
      ...formatteddates,
      ...formattedMultivalues,
    };

    const pushData = await pushResultDatatoZoho(finalBody, id);

    console.log(pushData, "pushData-");
  };

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
      }}
    >
      <Box sx={{ width: "100%", p: 10 }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton
                type="button"
                color="inherit"
                onClick={handleStep(index)}
              >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          <Divider sx={{ my: "40px" }} />
        </div>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button type="button" onClick={handleReset}>
                  Reset
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <form onSubmit={handleSubmit(onSubmit)}>
                {activeStep === 0 && (
                  <FinanceForm
                    register={register}
                    errors={errors}
                    onChange={onChangeDate}
                    handleChangeDropdown={handleChangeDropdown}
                    date={date}
                    dropdownValue={dropdownValue}
                  />
                )}
                {activeStep === 1 && (
                  <TimingForm
                    register={register}
                    errors={errors}
                    onChange={onChangeDate}
                    date={date}
                    handleChangeMultiSelect={handleChangeMultiSelect}
                    multiFieldValue={multiFieldValue}
                    handleChangeDropdown={handleChangeDropdown}
                    dropdownValue={dropdownValue}
                  />
                )}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    pt: 2,
                  }}
                >
                  <Button
                    type="button"
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Button type="button" onClick={handleNext} sx={{ mr: 1 }}>
                    Next
                  </Button>
                  <Button type="submit">Finish</Button>
                </Box>
              </form>
            </React.Fragment>
          )}
        </div>
      </Box>
    </Card>
  );
};

export default StepperForm;
