import { login, logout } from "../services/authService";
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
    const { users } = action.user;
    return {
      user: users,
      isConnected: true,
    };
  } else if (action.type === CLEAR_USER) {
    return {
      user: initialState,
    };
  } else {
    return state;
  }
};

// action creator
export const setUser = (users) => {
  return {
    type: SET_USER,
    user: {
      users,
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

export const loadLogout = () => {
  return async (dispatch) => {
    const data = await logout();
    dispatch(clearUser());
  };
};
export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};
