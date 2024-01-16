import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import { Card, Divider, StepLabel } from "@mui/material";
import * as yup from "yup";
import FinanceForm from "./Forms/FinanceForm";
import { useReactHookForm } from "./hooks/useReactHookForm";
import moment from "moment";
import momentTz from "moment-timezone";
import TimingForm from "./Forms/TimingForm";
import { pushResultDatatoZoho } from "./services/finance.service";
import dayjs from "dayjs";
import LogisticsForm from "./Forms/LogisticsForm";
import styled from "@emotion/styled";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ChairIcon from "@mui/icons-material/Chair";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import ScopeForm from "./Forms/ScopeForm";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import MuiSnackbar from "./UI/MuiSnackbar";
import FurnitureForm from "./Forms/FurnitureForm";
import MuiCustomModal from "./UI/MuiCustomModal";

const steps = ["Finance", "Timing", "Logistics", "Scope", "Furniture"];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg, #1e2e5a 0%,#263055 50%,#444c74 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,#1e2e5a 0%,#263055 50%,#444c74 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, #8c8fa9 0%, #444c74 50%, #1e2e5a 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, #8c8fa9 0%, #444c74 50%, #1e2e5a 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <AttachMoneyIcon />,
    2: <AccessTimeIcon />,
    3: <LocalShippingIcon />,
    4: <PlaylistAddCheckIcon />,
    5: <ChairIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const StepperForm = ({ data, id }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [date, setDate] = React.useState({});
  const [multiFieldValue, setMultiFieldValue] = React.useState({});
  const [dropdownValue, setDropdownValue] = React.useState({});
  const [initialScopeData, setInitialScopeData] = React.useState([]);
  const [initialStaircaseData, setInitialStaircaseData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [type, setType] = React.useState("");
  const [emailModal, setEmailModal] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  const staticStage = React.useMemo(() => {
    return data?.Stage;
  }, [data]);

  let groupedData = React.useMemo(() => {
    const grouped = data?.Resulting_Scope?.reduce((acc, item) => {
      const { Floor, SF } = item;
      const existingGroup = acc.find((group) => group.floor === Floor);

      if (existingGroup) {
        existingGroup.rooms.push(item);
        existingGroup.totalSF += SF; // Add SF to existing group
      } else {
        acc.push({ floor: Floor, rooms: [item], totalSF: SF });
      }

      return acc;
    }, []);
    return grouped;
  }, [data]);

  const floorClick = (roomObj) => {
    let newScopeData = [...initialScopeData];

    let findIndex = newScopeData.findIndex(
      (item) => item.Room === roomObj.Room
    );
    if (findIndex !== -1) {
      let {
        Is_Install,
        Is_Refinishing,
        Is_Out_Of_Scope_For_Refinish,
        Is_Out_Of_Scope_For_Install,
      } = roomObj;

      if (Is_Install && Is_Refinishing) {
        newScopeData[findIndex].Is_Out_Of_Scope_For_Refinish = true;
        newScopeData[findIndex].Is_Out_Of_Scope_For_Install = true;
        newScopeData[findIndex].Is_Install = false;
        newScopeData[findIndex].Is_Refinishing = false;
      } else if (Is_Install && !Is_Refinishing) {
        newScopeData[findIndex].Is_Refinishing = true;
        newScopeData[findIndex].Is_Out_Of_Scope_For_Refinish = false;
        newScopeData[findIndex].Is_Out_Of_Scope_For_Install = false;
      } else if (!Is_Install && Is_Refinishing) {
        newScopeData[findIndex].Is_Install = true;
        newScopeData[findIndex].Is_Refinishing = false;
        newScopeData[findIndex].Is_Out_Of_Scope_For_Refinish = true;
        newScopeData[findIndex].Is_Out_Of_Scope_For_Install = false;
      } else if (Is_Out_Of_Scope_For_Refinish && Is_Out_Of_Scope_For_Install) {
        newScopeData[findIndex].Is_Refinishing = true;
        newScopeData[findIndex].Is_Install = false;
        newScopeData[findIndex].Is_Out_Of_Scope_For_Refinish = false;
        newScopeData[findIndex].Is_Out_Of_Scope_For_Install = true;
      }
    }
    setInitialScopeData(newScopeData);
  };

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

  let timeZoneOffset = data?.["offset"];

  const { register, errors, getValues, setValue, handleSubmit } =
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
    setValue(
      "Special instructions for getting into home Notes",
      data?.["Special instructions for getting into home Notes"]
    );
    setValue("Installation Layout Notes", data?.["Installation Layout Notes"]);
    setValue(
      "Other Reason Customer Is Doing Project",
      data?.["Other Reason Customer Is Doing Project"]
    );
    setValue(
      "Most Important thing to the customer",
      data?.["Most Important thing to the customer"]
    );
    setValue(
      "Complications to be discussed",
      data?.["Complications to be discussed"]
    );

    const parsedDate = momentTz.tz(
      data?.["Deposit Taken Date"],
      "America/New_York"
    );

    const formattedDate = parsedDate?.format("MM/DD/YYYY hh:mm A");

    let dateFields = {
      "Deposit Taken Date": data?.["Deposit Taken Date"] ? formattedDate : "",
      "Estimated or Agreed Start Date":
        data?.["Estimated or Agreed Start Date"] || "",
      "Earliest Date Customer Can Start":
        data?.["Earliest Date Customer Can Start"] || "",
      "When does the floor need to be used":
        data?.["When does the floor need to be used"] || "",
    };

    let multiFields = {
      "Critical Timing Requirements": data?.["Critical Timing Requirements"]
        ? data?.["Critical Timing Requirements"]?.map((val) => {
            return {
              title: val,
              value: val,
            };
          })
        : [],
      "Stain Sample Chosen By The Customer": data?.[
        "Stain Sample Chosen By The Customer"
      ]
        ? data?.["Stain Sample Chosen By The Customer"]?.map((val) => {
            return {
              title: val,
              value: val,
            };
          })
        : [],
      Appliances: data?.Appliances
        ? data?.Appliances?.map((val) => {
            return {
              title: val,
              value: val,
            };
          })
        : [],
      "Special Items": data?.["Special Items"]
        ? data?.["Special Items"]?.map((val) => {
            return {
              title: val,
              value: val,
            };
          })
        : [],
    };

    let dropdownFields = {
      "Method of Deposit": data?.["Method of Deposit"] || "",
      "Payment Terms": data?.["Payment Terms"] || "",
      "Confirmed Timing Details": data?.["Confirmed Timing Details"] || "",
      "Customer Plan During Project":
        data?.["Customer Plan During Project"] || "",
      "Confirmation for OPS to reach out to the customer":
        data?.["Confirmation for OPS to reach out to the customer"] || "",
      "Requires COI": data?.["Requires COI"] || "",
      "Special instructions needed for getting Into the home?":
        data?.["Special instructions needed for getting Into the home?"] || "",
      "Confirmation that FlooredAtHome will be the only trade":
        data?.["Confirmation that FlooredAtHome will be the only trade"] || "",
      "Disposal Plan": data?.["Disposal Plan"] || "",
      "Walls & Baseboard to be painted after the project":
        data?.["Walls & Baseboard to be painted after the project"] || "",
      "Delivery Required": data?.["Delivery Required"] || "",
      "Material Confirmed": data?.["Material Confirmed"] || "",
      "Scope Confirmed": data?.["Scope Confirmed"] || "",
      "Are we matching any existing floor (Refi. orInst.)":
        data?.["Are we matching any existing floor (Refi. orInst.)"] || "",
      "Any project complications to be discussed with OPS":
        data?.["Any project complications to be discussed with OPS"] || "",
      "Why Customer is Doing the Project":
        data?.["Why Customer is Doing the Project"] || "",
      "Installation Layout Style of New Floor":
        data?.["Installation Layout Style of New Floor"] || "",
      "Will the new floor be lower than the current floor":
        data?.["Will the new floor be lower than the current floor"] || "",
      "Is any leveling needed": data?.["Is any leveling needed"] || "",
      "Is the customer staining the floor":
        data?.["Is the customer staining the floor"] || "",
      "Gloss level chosen by customer":
        data?.["Gloss level chosen by customer"] || "",
      "Is Appliances In Scope": data?.["Is Appliances In Scope"] || "",
      "Is Special Items In Scope": data?.["Is Special Items In Scope"] || "",
      "Timing Requirements": data?.["Timing Requirements"] || "",
    };

    setDate(dateFields);
    setMultiFieldValue(multiFields);
    setDropdownValue(dropdownFields);
    setInitialScopeData(data?.Resulting_Scope);
    setInitialStaircaseData(data?.Staircases_Scope);
  }, [data]);

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
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const newCompleted = completed;
    newCompleted[activeStep] = false;
    setCompleted(newCompleted);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const onChangeDate = (localDate, key) => {
    if (key === "Deposit Taken Date") {
      // let dateFormetWithOffset =
      //   dayjs(localDate).format("YYYY-MM-DDTHH:mm:ss") + `-${data?.["offset"]}`;
      setDate({ ...date, [key]: localDate });
    } else {
      setDate({ ...date, [key]: dayjs(localDate).format("YYYY-MM-DD") });
    }
  };

  const handleChangeMultiSelect = (event, newValue, key) => {
    setMultiFieldValue({ ...multiFieldValue, [key]: newValue });
  };

  const handleChangeDropdown = (event, key) => {
    setDropdownValue({ ...dropdownValue, [key]: event.target.value });
  };

  const handleChangeStaricaseDropdown = (event, name, key) => {
    let tmpStaircase = [...initialStaircaseData];
    tmpStaircase = tmpStaircase?.map((SC) => {
      if (SC?.Staircase_Name === name) {
        if (key === "Staircase Scope") {
          return {
            ...SC,
            Staircase_Scope: event.target.value,
          };
        } else {
          return {
            ...SC,
            Is_there_a_staircase_rip_out: event.target.value,
          };
        }
      }
      return { ...SC };
    });
    setInitialStaircaseData(tmpStaircase);
  };

  const staircaseClick = (staricase) => {
    let tmpStaircase = [...initialStaircaseData];
    tmpStaircase = tmpStaircase?.map((SC) => {
      if (SC?.Staircase_Name === staricase?.Staircase_Name) {
        return {
          ...SC,
          Staircase_Scope: staricase?.Staircase_Scope
            ? null
            : "Refinishing Only",
          Is_there_a_staircase_rip_out: staricase?.Staircase_Scope
            ? ""
            : staricase?.Is_there_a_staircase_rip_out,
        };
      }
      return { ...SC };
    });
    setInitialStaircaseData(tmpStaircase);
  };

  const openEmailModal = async (data) => {
    setEmailModal(true);
    setFormData(data);
  };

  const onSubmit = async (emailVal, data) => {
    setIsLoading({ [emailVal]: true });
    let isInstall = false;
    let isRefinishing = false;

    if (initialScopeData?.length > 0) {
      for (const floor of initialScopeData) {
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

    let dateFormatWithOffset =
      dayjs(date?.["Deposit Taken Date"]).format("YYYY-MM-DDTHH:mm:ss") +
      `-${timeZoneOffset}`;

    let formatteddates = {
      "Deposit Taken Date": date?.["Deposit Taken Date"]
        ? dateFormatWithOffset
        : "",
      "Estimated or Agreed Start Date": date?.["Estimated or Agreed Start Date"]
        ? moment(date?.["Estimated or Agreed Start Date"]).format("YYYY-MM-DD")
        : "",
      "Earliest Date Customer Can Start": date?.[
        "Earliest Date Customer Can Start"
      ]
        ? moment(date?.["Earliest Date Customer Can Start"]).format(
            "YYYY-MM-DD"
          )
        : "",
      "When does the floor need to be used": date?.[
        "When does the floor need to be used"
      ]
        ? moment(date?.["When does the floor need to be used"]).format(
            "YYYY-MM-DD"
          )
        : "",
    };

    let formattedMultivalues = {
      "Critical Timing Requirements":
        multiFieldValue?.["Critical Timing Requirements"]?.map(
          (val) => val.value
        ) || [],
      "Stain Sample Chosen By The Customer": isRefinishing
        ? multiFieldValue?.["Stain Sample Chosen By The Customer"]?.map(
            (val) => val.value
          )
        : [],
      Appliances:
        dropdownValue?.["Is Appliances In Scope"] === "Yes"
          ? multiFieldValue?.Appliances?.map((val) => val.value)
          : [],
      "Special Items":
        dropdownValue?.["Is Special Items In Scope"] === "Yes"
          ? multiFieldValue?.["Special Items"]?.map((val) => val.value)
          : [],
    };

    let formattedDropdownvalues = {
      "Method of Deposit": dropdownValue?.["Method of Deposit"] || "",
      "Payment Terms": dropdownValue?.["Payment Terms"] || "",
      "Confirmed Timing Details":
        dropdownValue?.["Confirmed Timing Details"] || "",
      "Customer Plan During Project":
        dropdownValue?.["Customer Plan During Project"] || "",
      "Confirmation for OPS to reach out to the customer":
        dropdownValue?.["Confirmation for OPS to reach out to the customer"] ||
        "",
      "Requires COI": dropdownValue?.["Requires COI"] || "",
      "Special instructions needed for getting Into the home?":
        dropdownValue?.[
          "Special instructions needed for getting Into the home?"
        ] || "",
      "Confirmation that FlooredAtHome will be the only trade":
        dropdownValue?.[
          "Confirmation that FlooredAtHome will be the only trade"
        ] || "",
      "Disposal Plan": dropdownValue?.["Disposal Plan"] || "",
      "Walls & Baseboard to be painted after the project":
        dropdownValue?.["Walls & Baseboard to be painted after the project"] ||
        "",
      "Delivery Required": dropdownValue?.["Delivery Required"] || "",
      "Material Confirmed": dropdownValue?.["Material Confirmed"] || "",
      "Scope Confirmed": dropdownValue?.["Scope Confirmed"] || "",
      "Are we matching any existing floor (Refi. orInst.)":
        dropdownValue?.["Are we matching any existing floor (Refi. orInst.)"] ||
        "",
      "Any project complications to be discussed with OPS":
        dropdownValue?.["Any project complications to be discussed with OPS"] ||
        "",
      "Why Customer is Doing the Project":
        dropdownValue?.["Why Customer is Doing the Project"] || "",
      "Installation Layout Style of New Floor": isInstall
        ? dropdownValue?.["Installation Layout Style of New Floor"]
        : "",
      "Will the new floor be lower than the current floor": isInstall
        ? dropdownValue?.["Will the new floor be lower than the current floor"]
        : "",
      "Is any leveling needed": isInstall
        ? dropdownValue?.["Is any leveling needed"]
        : "",
      "Is the customer staining the floor": isRefinishing
        ? dropdownValue?.["Is the customer staining the floor"]
        : "",
      "Gloss level chosen by customer": isRefinishing
        ? dropdownValue?.["Gloss level chosen by customer"]
        : "",
      "Is Appliances In Scope": dropdownValue?.["Is Appliances In Scope"] || "",
      "Is Special Items In Scope":
        dropdownValue?.["Is Special Items In Scope"] || "",
      "Timing Requirements": dropdownValue?.["Timing Requirements"] || "",
    };

    let noteValues = {
      Amount: data?.Amount ? Number(data?.Amount) : 0,
      "Deposit Taken": data?.["Deposit Taken"]
        ? Number(data["Deposit Taken"])
        : 0,
      "Other Project Timing Notes": data?.["Other Project Timing Notes"] || "",

      "Special instructions for getting into home Notes":
        dropdownValue?.[
          "Special instructions needed for getting Into the home?"
        ] === "Yes"
          ? data?.["Special instructions for getting into home Notes"]
          : "",
      "Installation Layout Notes": isInstall
        ? data?.["Installation Layout Notes"]
        : "",
      "Other Reason Customer Is Doing Project":
        dropdownValue?.["Why Customer is Doing the Project"] === "Other"
          ? data?.["Other Reason Customer Is Doing Project"]
          : "",
      "Most Important thing to the customer":
        data?.["Most Important thing to the customer"] || "",
      "Complications to be discussed":
        dropdownValue?.[
          "Any project complications to be discussed with OPS"
        ] === "Yes"
          ? data?.["Complications to be discussed"]
          : "",
      "Would like to get an Email ?": emailVal || "No",
      Stage: staticStage || "",
    };

    let finalBody = {
      id,
      ...noteValues,
      ...formatteddates,
      ...formattedMultivalues,
      ...formattedDropdownvalues,
      Resulting_Scope: initialScopeData,
      Staircases_Scope: initialStaircaseData,
    };

    const pushData = await pushResultDatatoZoho(finalBody, id);

    if (pushData?.data) {
      let message = pushData?.data?.entity?.code;
      setOpen(true);
      setMessage(message);
      setType(message === "success" ? "success" : "error");
    }
    setIsLoading({ [emailVal]: false });
    setEmailModal(false);
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
      <MuiSnackbar
        open={open}
        message={message || ""}
        type={type || ""}
        onClose={() => setOpen(false)}
      />
      <Box sx={{ width: "100%", p: 10 }}>
        <Stepper
          alternativeLabel
          nonLinear
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton
                type="button"
                color="inherit"
                onClick={handleStep(index)}
              >
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          <Divider sx={{ my: "40px" }} />
        </div>
        <div>
          <React.Fragment>
            <form onSubmit={handleSubmit(openEmailModal)}>
              <div className="formContainer">
                {activeStep === 0 && (
                  <FinanceForm
                    register={register}
                    errors={errors}
                    onChange={onChangeDate}
                    handleChangeDropdown={handleChangeDropdown}
                    date={date}
                    dropdownValue={dropdownValue}
                    data={data}
                    getValues={getValues}
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
                    getValues={getValues}
                    data={data}
                  />
                )}
                {activeStep === 2 && (
                  <LogisticsForm
                    register={register}
                    errors={errors}
                    handleChangeDropdown={handleChangeDropdown}
                    dropdownValue={dropdownValue}
                    getValues={getValues}
                    data={data}
                  />
                )}
                {activeStep === 3 && (
                  <ScopeForm
                    floors={groupedData}
                    register={register}
                    floorClick={floorClick}
                    errors={errors}
                    handleChangeMultiSelect={handleChangeMultiSelect}
                    handleChangeDropdown={handleChangeDropdown}
                    dropdownValue={dropdownValue}
                    getValues={getValues}
                    data={data}
                    multiFieldValue={multiFieldValue}
                    initialStaircaseData={initialStaircaseData}
                    staircaseClick={staircaseClick}
                    handleChangeStaricaseDropdown={
                      handleChangeStaricaseDropdown
                    }
                  />
                )}
                {activeStep === 4 && (
                  <FurnitureForm
                    register={register}
                    errors={errors}
                    handleChangeDropdown={handleChangeDropdown}
                    dropdownValue={dropdownValue}
                    handleChangeMultiSelect={handleChangeMultiSelect}
                    multiFieldValue={multiFieldValue}
                  />
                )}
              </div>
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
                  variant="contained"
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Previous
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleNext}
                  sx={{
                    display: activeStep === 4 ? "none" : "block",
                  }}
                >
                  Next
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    display: activeStep === 4 ? "block" : "none",
                  }}
                >
                  Save
                </Button>
              </Box>
            </form>
          </React.Fragment>
        </div>
      </Box>
      <MuiCustomModal
        open={emailModal}
        handleClose={() => {
          setEmailModal(false);
        }}
        onSubmit={(emailVal) => onSubmit(emailVal, formData)}
        loading={isLoading}
      />
    </Card>
  );
};

export default StepperForm;
