import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducers } from "./reducers/rootReducer";

const initialStore = {};
export const store = createStore(
  reducers,
  initialStore,
  applyMiddleware(thunk)
);
