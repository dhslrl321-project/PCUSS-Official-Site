import { createStore, combineReducers } from "redux";

import { reducer as userReducer } from "./user";
// import { reducer as studentReducer } from "./student";

const rootReducer = combineReducers({
  userReducer,
  //   studentReducer,
});

const store = createStore(rootReducer);

console.log(store.getState());

export default store;
