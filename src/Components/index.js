import { useEffect, useState } from "react";
import { getResultingData } from "./services/finance.service";
import StepperForm from "./StepperForm";
import { useLocation, useSearchParams } from "react-router-dom";

const StepperIndexPage = () => {
  const [data, setData] = useState({});
  const [searchParams] = useSearchParams();

  const queryValue = searchParams.get("id");
  console.log("queryValue", queryValue);

  useEffect(() => {
    const fetchData = async () => {
      const getData = await getResultingData(queryValue);
      setData(getData?.data?.entity?.details?.output);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <StepperForm data={data} id={queryValue} />
    </div>
  );
};

export default StepperIndexPage;
