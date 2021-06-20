// initialState
const initialState = {
  // user: {
  //   id: 1,
  //   nickname: "James",
  //   profileImage:
  //     "http://k.kakaocdn.net/dn/boEp6l/btq6MTNzPgH/mVE7m02pyxfoMLZIb0iJQK/img_640x640.jpg",
  // },
};

// action types
const SET_USER = "client/user/SET_USER";
const CLEAR_USER = "client/user/CLEAR_USER";

// reudcer
export const reducer = (state = initialState, action) => {
  if (action.type === SET_USER) {
    return action.user;
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
    user,
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};
