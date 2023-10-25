import React from "react";
import { useLocation, useParams } from "react-router-dom";

const WithSecurity = ({ children }) => {
  const location = useLocation();

  let path = location?.pathname?.split("/");
  if (path?.[1] === "t4UeOug5F7TN5NOrAUJjf5bZjkHVRx0k") {
    return <div>{children}</div>;
  } else {
    return <div>Page Not found</div>;
  }
};

export default WithSecurity;
