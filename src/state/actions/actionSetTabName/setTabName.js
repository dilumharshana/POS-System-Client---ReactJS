import { SELECTED_TAB_NAME } from "../../types";

export const setTabName = (name) => {
  console.log(name);
  return {
    type: SELECTED_TAB_NAME,
    payload: name,
  };
};
