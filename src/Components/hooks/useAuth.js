import { useEffect, useState } from "react";
import { getUserById } from "../services/finance.service";
import { getAuth, setAuth } from "../services/identity.service";

export const useAuth = ({ queryValue, userId }) => {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();

  const redirectToLogin = () => {
    const redirectUri = `${process.env.REACT_APP_REDIRECT_URI}?id=${queryValue}`;
    window.location.href = `${process.env.REACT_APP_LOGIN_REDIRECT_URI}?origin=${process.env.REACT_APP_ORIGIN}&redirectUri=${redirectUri}`;
  };

  const checkLoginUser = async (id) => {
    let loginRes = await getUserById(id);
    if (loginRes?.data?.status) {
      new Promise((resolve, _reject) => {
        if (loginRes?.data?.entity?.resulting_login_status === "loggedin") {
          setIsLoggedIn(true);
          resolve(setAuth(loginRes?.data?.entity));
        } else {
          setIsLoggedIn(false);
          redirectToLogin();
        }
      });
    } else {
      setIsLoggedIn(false);
      redirectToLogin();
    }
  };

  const getUser = async () => {
    try {
      if (userId || auth) {
        await checkLoginUser(userId || auth?.id);
      } else {
        redirectToLogin();
      }
    } catch (error) {
      redirectToLogin();
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return {
    loggedIn,
  };
};
