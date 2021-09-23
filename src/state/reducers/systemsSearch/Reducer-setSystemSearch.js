import { SYSTEM_SEARCH } from "../../types";

export const systemSearch = (state = null, action) => {
  switch (action.type) {
    case SYSTEM_SEARCH:
      return action.payload;
    default:
      return state;
  }
};
