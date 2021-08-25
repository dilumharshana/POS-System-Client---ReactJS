import { createStore } from "redux";

import { reducers } from "./reducers/rootReducer";

const initialStore = {};
export const store = createStore(reducers, initialStore);
