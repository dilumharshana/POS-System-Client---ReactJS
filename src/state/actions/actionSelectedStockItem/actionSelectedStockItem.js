import { SELECTED_STOCK_ITEM } from "../../types";

export const setSelectItem = (itemData) => {
  return {
    type: SELECTED_STOCK_ITEM,
    payload: itemData,
  };
};
