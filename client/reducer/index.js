import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { reducer as userReducer } from "./user";
// import { reducer as studentReducer } from "./student";

const rootReducer = combineReducers({
  userReducer,
  //   studentReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// console.log(store.getState());

export default store;
