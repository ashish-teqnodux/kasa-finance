import axios from "axios";

export const postWithOutAuth = (url, entity) => {
  return new Promise((resolve, _reject) => {
    axios
      .post(url, entity)
      .then((response) => {
        if (response && response.data) {
          resolve({ status: true, data: response.data });
        }
      })
      .catch((ex) => {
        resolve({ status: false, message: ex.message });
      });
  });
};

export const getWithOutAuth = (url) => {
  return new Promise((resolve, _reject) => {
    axios
      .get(url)
      .then((response) => {
        if (response && response.data) {
          resolve({ status: true, data: response.data });
        }
      })
      .catch((ex) => {
        resolve({ status: false, error: ex.message });
      });
  });
};
