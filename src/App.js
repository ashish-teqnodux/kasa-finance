import logo from "./logo.svg";
import "./App.css";
import StepperForm from "./Components/StepperForm";
import { useEffect, useState } from "react";
import { getResultingData } from "./Components/services/finance.service";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const getData = await getResultingData("123");
      setData(getData?.data?.entity?.details?.output);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <StepperForm data={data} />
    </div>
  );
}

export default App;
