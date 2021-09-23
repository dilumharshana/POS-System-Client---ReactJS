import { SYSTEM_SEARCH } from "../../types";

export const setSearch = (e) => {
  return {
    type: SYSTEM_SEARCH,
    payload: e.target.value,
  };
};
