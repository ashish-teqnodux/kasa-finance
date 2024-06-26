const ApiUrl = process.env.REACT_APP_API_URL;

const UrlParamsReplace = (url, params = {}) => {
  let urlWithPrefix = `${ApiUrl}${url}`;
  if (params) {
    Object.keys(params).forEach(
      (key) => (urlWithPrefix = urlWithPrefix.replace(`:${key}`, params[key]))
    );
  }
  return urlWithPrefix;
};

export const GET_RESULTING_DATA_BY_ID = (id) =>
  UrlParamsReplace("/get-resultig-data/:id", { id });

export const ADD_RESULT_DATA_TO_ZOHO = (id) =>
  UrlParamsReplace("/save-data-to-zoho/:id", { id });

export const GET_USER_BY_ID = (id) => {
  return `https://fvbackend.kasawalkthrough.com/api/auth/get-user/${id}`;
};

export const UPDATE_ROOM_NAME_IN_ZOHO = () => {
  return "https://proposal-backend.kasawalkthrough.com/api/update-room-in-zoho";
};
