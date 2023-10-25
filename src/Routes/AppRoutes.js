import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StepperIndexPage from "../Components";
import WithSecurity from "./WithSecurity";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/t4UeOug5F7TN5NOrAUJjf5bZjkHVRx0k"
          element={
            <WithSecurity>
              <StepperIndexPage />
            </WithSecurity>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
