import { useEffect, useState } from "react";
import { getResultingData } from "./services/finance.service";
import StepperForm from "./StepperForm";
import { useSearchParams } from "react-router-dom";
import { getAuth } from "./services/identity.service";
import MuiLinearProgress from "./UI/MuiLinearProgress";
import MuiSnackbar from "./UI/MuiSnackbar";

const StepperIndexPage = () => {
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [searchParams] = useSearchParams();
  const auth = getAuth();

  const queryValue = searchParams.get("id");

  const fetchData = async () => {
    const getData = await getResultingData(queryValue);
    if (getData?.data?.status) {
      setData(getData?.data?.entity?.details?.output);
    } else {
      setOpen(true);
      setMessage(getData?.data?.message || "Something went wrong");
      setType("error");
    }
  };

  useEffect(() => {
    if (!!auth) {
      fetchData();
      // setInterval(() => {
      //   fetchData();
      // }, 10 * 1000);
    }
  }, []);

  return (
    <>
      <MuiSnackbar
        open={open}
        message={message || ""}
        type={type || ""}
        onClose={() => setOpen(false)}
      />
      {Object.keys(data || {}).length > 0 ? (
        <div className="App">
          <StepperForm data={data} id={queryValue} fetchData={fetchData} />
        </div>
      ) : (
        <MuiLinearProgress />
      )}
    </>
  );
};

export default StepperIndexPage;
