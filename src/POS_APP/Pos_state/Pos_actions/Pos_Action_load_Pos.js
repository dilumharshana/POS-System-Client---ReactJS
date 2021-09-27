import { LOAD_POS_SYSTEM } from "../Pos_state_types";

export const loadPosSystem = (database) => {
  return {
    type: LOAD_POS_SYSTEM,
    payload: database,
  };
};
