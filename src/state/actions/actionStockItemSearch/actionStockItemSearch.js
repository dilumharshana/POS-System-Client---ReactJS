import { STOCK_ITEM_SEARCH } from "../../types";

export const searchStockItem = (item) => {
  return {
    type: STOCK_ITEM_SEARCH,
    payload: item,
  };
};
