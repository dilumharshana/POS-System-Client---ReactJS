import { SELECTED_TAB_NAME } from "../../types";

export const tabName = (state = "HOME", action) => {
  switch (action.type) {
    case SELECTED_TAB_NAME:
      return action.payload;
    default:
      return state;
  }
};
