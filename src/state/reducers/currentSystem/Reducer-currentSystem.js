import { LOAD_SYSTEM } from "../../types";

export const currentSystem = (state = {}, action) => {
  switch (action.type) {
    case LOAD_SYSTEM:
      return action.payload;

    default:
      return state;
  }
};
