import "./App.css";
import StepperForm from "./Components/StepperForm";
import { useEffect, useState } from "react";
import { getResultingData } from "./Components/services/finance.service";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
