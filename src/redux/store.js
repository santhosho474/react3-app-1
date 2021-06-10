import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

import { MechanicReducer } from "./MechanicReducer";

const rootReducer = combineReducers({
  mechanic: MechanicReducer,
});

// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
