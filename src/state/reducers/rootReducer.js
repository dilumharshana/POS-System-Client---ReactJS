import { combineReducers } from "redux";

import { deviceWidth } from "./diviceWidth/Reducer-deviceWidth";
import { userLoginState } from "./userLoginState/Reducer-userLoginState";
import { currentUser } from "./currentUser/Reducer-currentUser";

export const reducers = combineReducers({
  deviceWidth,
  userLoginState,
  currentUser,
});
