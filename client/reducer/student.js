import { fetchStudents } from "../services/studentService";

// initialState
const initialState = {
  students: [],
};

// action type
const SET_STUDENT = "client/student/SET_STUDENT";

// reducer
export const reducer = (state = initialState, action) => {
  if (action.type === SET_STUDENT) {
    return {
      ...state,
      students: action.students,
    };
  }
  return state;
};

// action creator
export const setStudent = (students) => {
  return {
    type: SET_STUDENT,
    students,
  };
};

export const loadStudent = (id) => {
  return async (dispatch) => {
    const students = await fetchStudents(id);

    dispatch(setStudent(students));
  };
};
