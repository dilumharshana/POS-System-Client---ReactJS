import { STOCK_ITEM_SEARCH } from "../../types";

export const stockItemSearch = (state = null, action) => {
  switch (action.type) {
    case STOCK_ITEM_SEARCH:
      return action.payload;
    default:
      return state;
  }
};
