import { USER_LOGIN_FAIL } from "../../types";

export const setUserLoginFail = (success) => {
  return (dispatch) => {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: success,
    });
  };
};
