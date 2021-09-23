import { combineReducers } from "redux";

import { deviceWidth } from "./diviceWidth/Reducer-deviceWidth";
import { userLoginState } from "./userLoginState/Reducer-userLoginState";
import { currentUser } from "./currentUser/Reducer-currentUser";
import { systemSearch } from "./systemsSearch/Reducer-setSystemSearch";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whiteList: [currentUser],
};

const rootReducer = combineReducers({
  deviceWidth,
  userLoginState,
  currentUser,
  systemSearch,
});

export const reducers = persistReducer(persistConfig, rootReducer);
