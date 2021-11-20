import { SELECTED_STOCK_ITEM } from "../../types";

export const selectedStockItem = (state = null, action) => {
  switch (action.type) {
    case SELECTED_STOCK_ITEM:
      return action.payload;
    default:
      return state;
  }
};
