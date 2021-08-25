import { DEVICE_WIDTH } from "../../types";

export const deviceWidth = (state = window.innerWidth, action) => {
  switch (action.type) {
    case DEVICE_WIDTH:
      return action.payload;
    default:
      return state;
  }
};
