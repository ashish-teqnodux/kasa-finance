import isEqual from "lodash.isequal";

export const Constants = {
  MIDDLE_FORM_WIDTH: "50%",
};

export const checkIfRoomIsChanged = (prevRoom, newRoom) => {
  const roomsAreEqual = isEqual(prevRoom, newRoom);
  return !roomsAreEqual;
};

export const replaceHtmlEntities = (str = "") => {
  return str.replace(/<br>/g, "\n");
};
