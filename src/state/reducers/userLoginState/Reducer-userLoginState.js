import { USER_LOGIN_FAIL } from "../../types";

export const userLoginState = (
  state = { state: true, message: null },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_FAIL:
      return action.payload;
    default:
      return state;
  }
};
