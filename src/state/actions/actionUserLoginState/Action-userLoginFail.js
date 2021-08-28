import { USER_LOGIN_FAIL } from "../../types";

export const setUserLoginFail = (success) => {
  return {
    type: USER_LOGIN_FAIL,
    payload: success,
  };
};
