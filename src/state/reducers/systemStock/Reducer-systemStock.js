import { LOAD_SYSTEM_STOCK } from "../../types";

export const systemStock = (state = {}, action) => {
  switch (action.type) {
    case LOAD_SYSTEM_STOCK:
      return action.payload;

    default:
      return state;
  }
};
