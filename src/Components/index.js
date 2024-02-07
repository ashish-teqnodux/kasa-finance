import { useEffect, useState } from "react";
import { getResultingData } from "./services/finance.service";
import StepperForm from "./StepperForm";
import { useSearchParams } from "react-router-dom";
import { getAuth } from "./services/identity.service";
import MuiLinearProgress from "./UI/MuiLinearProgress";

const StepperIndexPage = () => {
  const [data, setData] = useState({});
  const [searchParams] = useSearchParams();
  const auth = getAuth();

  const queryValue = searchParams.get("id");

  const fetchData = async () => {
    const getData = await getResultingData(queryValue);
    setData(getData?.data?.entity?.details?.output);
  };

  useEffect(() => {
    if (!!auth) {
      fetchData();
      setInterval(() => {
        fetchData();
      }, 60 * 1000);
    }
  }, []);

  return (
    <>
      {Object.keys(data || {}).length > 0 ? (
        <div className="App">
          <StepperForm data={data} id={queryValue} />
        </div>
      ) : (
        <MuiLinearProgress />
      )}
    </>
  );
};

export default StepperIndexPage;
