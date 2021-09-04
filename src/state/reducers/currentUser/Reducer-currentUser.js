import { LOAD_USER } from "../../types";

export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case LOAD_USER:
      return action.payload;
  }
  return state;
};
