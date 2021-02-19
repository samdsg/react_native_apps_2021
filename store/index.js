import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

/* Reducer */
import rootReducer from "./reducers";

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
