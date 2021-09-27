import { LOAD_SYSTEM } from "../../types";

export const setSystem = (database) => {
  return {
    type: LOAD_SYSTEM,
    payload: database,
  };
};
