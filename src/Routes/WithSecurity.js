import React from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../Components/hooks/useAuth";
import MuiLinearProgress from "../Components/UI/MuiLinearProgress";

const WithSecurity = ({ children }) => {
  const [searchParams] = useSearchParams();
  const queryValue = searchParams.get("id");
  const userId = searchParams.get("userId");

  const { loggedIn } = useAuth({ queryValue, userId });

  return <>{loggedIn ? children : <MuiLinearProgress />}</>;

  // let path = location?.pathname?.split("/");

  // if (path?.[1] === "nkxP5khyF4HoD8E8TTPejzuXUmKSy0ot") {
  //   return <div>{children}</div>;
  // } else {
  //   return <div>Page Not found</div>;
  // }
};

export default WithSecurity;
