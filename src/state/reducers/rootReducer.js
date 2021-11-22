import { combineReducers } from "redux";

import { deviceWidth } from "./diviceWidth/Reducer-deviceWidth";
import { userLoginState } from "./userLoginState/Reducer-userLoginState";
import { currentUser } from "./currentUser/Reducer-currentUser";
import { systemSearch } from "./systemsSearch/Reducer-setSystemSearch";
import { currentSystem } from "./currentSystem/Reducer-currentSystem";
import { systemStock } from "./systemStock/Reducer-systemStock";
import { stockItemSearch } from "./systemItemSearch/Reducer-systemItemSearch";
import { selectedStockItem } from "./selectedStockItem/Reducer-SelectedStockItem";
import { tabName } from "./selectedTabName/currentTabName";

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
  currentSystem,
  systemStock,
  stockItemSearch,
  selectedStockItem,
  tabName,
});

export const reducers = persistReducer(persistConfig, rootReducer);
