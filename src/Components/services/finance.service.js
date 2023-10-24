import * as HttpService from "./http.service";
import {
  ADD_RESULT_DATA_TO_ZOHO,
  GET_RESULTING_DATA_BY_ID,
} from "./url.service";

export const getResultingData = (id) => {
  return HttpService.getWithOutAuth(GET_RESULTING_DATA_BY_ID(id));
};

export const pushResultDatatoZoho = (data, id) => {
  return HttpService.postWithOutAuth(ADD_RESULT_DATA_TO_ZOHO(id), data);
};
