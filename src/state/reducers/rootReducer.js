import { combineReducers } from "redux";

import { deviceWidth } from "./diviceWidth/Reducer-deviceWidth";
import { userLoginState } from "./userLoginState/Reducer-userLoginState";

export const reducers = combineReducers({
  deviceWidth,
  userLoginState,
});
