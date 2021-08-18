import { fetchStudents, fetchAppendStudent } from "../services/studentService";

// initialState
const initialState = {
  students: [],
  id: 17,
  last: false,
};

// action type
const SET_STUDENT = "client/student/SET_STUDENT";
const SET_APPEND_STUDENT = "client/student/SET_APPEND_STUDENT";
const SET_LAST = "client/student/SET_LAST";

// reducer
export const reducer = (state = initialState, action) => {
  if (action.type === SET_STUDENT) {
    return {
      ...state,
      students: action.students,
      id: action.id,
    };
  }
  if (action.type === SET_APPEND_STUDENT) {
    const { students } = state;
    const { student } = action;
    return {
      ...state,
      students: students.concat(student),
    };
  }
  if (action.type === SET_LAST) {
    const { last } = action;
    return {
      ...state,
      last: last,
    };
  }
  return state;
};

// action creator
export const setStudent = (students, id) => {
  return {
    type: SET_STUDENT,
    students,
    id,
  };
};

export const loadStudent = (id) => {
  return async (dispatch) => {
    const students = await fetchStudents(id);

    const { last, content } = students;
    dispatch(setLast(last));
    dispatch(setStudent(content, id));
  };
};

export const setAppendStudent = (student) => {
  return {
    type: SET_APPEND_STUDENT,
    student,
  };
};

export const setLast = (last) => {
  return {
    type: SET_LAST,
    last,
  };
};

export const loadAppendStudent = (count, number) => {
  return async (dispatch) => {
    const moreStudents = await fetchAppendStudent(count, number);
    const { content, last } = moreStudents;

    if (last === true) {
      dispatch(setLast(last));
    }
    dispatch(setAppendStudent(content));
  };
};
