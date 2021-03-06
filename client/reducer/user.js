import { login } from "../services/authService";
import { silentRefresh } from "../services/userService";

// initialState
const initialState = {
  isConnected: false,
};

// action types
const SET_USER = "client/user/SET_USER";
const CLEAR_USER = "client/user/CLEAR_USER";

// reudcer
export const reducer = (state = initialState, action) => {
  if (action.type === SET_USER) {
    const { user } = action.user;
    return {
      user,
      isConnected: true,
    };
  } else if (action.type === CLEAR_USER) {
    return null;
  } else {
    return state;
  }
};

// action creator
export const setUser = (user) => {
  return {
    type: SET_USER,
    user: {
      user,
    },
  };
};

export const loadUser = (code) => {
  return async (dispatch) => {
    const user = await login(code);

    console.log("user reducer 에서의 user: ", user);

    dispatch(setUser(user));
  };
};

export const loadRefreshedUser = () => {
  return async (dispatch) => {
    const user = await silentRefresh();

    dispatch(setUser(user));
  };
};
export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};
