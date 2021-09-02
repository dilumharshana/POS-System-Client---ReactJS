import { USER_LOGIN_FAIL, LOGIN_PROCESS } from "../../types";

export const userLoginState = (
  state = { state: true, message: null },
  action
) => {
  switch (action.type) {
    case LOGIN_PROCESS:
      return action.payload;
    case USER_LOGIN_FAIL:
      return action.payload;
    default:
      return state;
  }
};
