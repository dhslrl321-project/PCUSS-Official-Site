import {
  fetchStudents,
  fetchMoreStudents,
  fetchActivities,
} from "../services/studentService";

// initialState
const initialState = {
  students: [],
  grade: 17,
  last: false,
};

// action type
const SET_STUDENTS_BY_GRADE = "client/student/SET_STUDENTS_BY_GRADE";
const SET_MORE_STUDENTS = "client/student/SET_MORE_STUDENTS";
const SET_IS_LAST_PAGE = "client/student/SET_IS_LAST_PAGE";
const SET_ACTIVITIES = "client/student/SET_ACTIVITIES";

// reducer
export const reducer = (state = initialState, action) => {
  if (action.type === SET_STUDENTS_BY_GRADE) {
    const { grade, students } = action.payload;
    return {
      ...state,
      grade,
      students,
    };
  }
  if (action.type === SET_MORE_STUDENTS) {
    const { students } = state;
    const { moreStudents } = action.payload;
    return {
      ...state,
      students: students.concat(moreStudents),
    };
  }
  if (action.type === SET_IS_LAST_PAGE) {
    const { last } = action.payload;
    return {
      ...state,
      last,
    };
  }
  if (action.type === SET_ACTIVITIES) {
    const { activities, studentId } = action.payload;
    const { students } = state;
    return {
      ...state,
      students: students.map((student) =>
        student.studentId === studentId ? { ...student, activities } : student
      ),
    };
  }
  return state;
};

// action creator
export const setStudentsByGrade = (grade, students) => {
  return {
    type: SET_STUDENTS_BY_GRADE,
    payload: {
      grade,
      students,
    },
  };
};

export const setMoreStudents = (moreStudents) => {
  return {
    type: SET_MORE_STUDENTS,
    payload: {
      moreStudents,
    },
  };
};

export const setIsLastPage = (last) => {
  return {
    type: SET_IS_LAST_PAGE,
    payload: {
      last,
    },
  };
};

export const setActivities = (studentId, activities) => {
  return {
    type: SET_ACTIVITIES,
    payload: {
      studentId,
      activities,
    },
  };
};

export const loadStudentsByGrade = (grade) => {
  return async (dispatch) => {
    const students = await fetchStudents(grade);

    const { last, content: contents } = students;

    let array = [];

    contents.map((content) => {
      const { studentId, name, totalNumber } = content;

      const student = {
        studentId,
        name,
        totalNumber,
        activities: [],
      };
      array.push(student);
    });

    dispatch(setIsLastPage(last));
    dispatch(setStudentsByGrade(grade, array));
  };
};

export const loadMoreStudents = (count, number) => {
  return async (dispatch) => {
    const moreStudents = await fetchMoreStudents(count, number);
    const { content: contents, last } = moreStudents;

    if (last === true) {
      dispatch(setIsLastPage(last));
    }

    let array = [];

    contents.map((content) => {
      const { studentId, name, totalNumber } = content;

      const student = {
        studentId,
        name,
        totalNumber,
        activities: [],
      };
      array.push(student);
    });

    dispatch(setMoreStudents(array));
  };
};

export const loadActivities = (studentId) => {
  return async (dispatch) => {
    const activities = await fetchActivities(studentId);

    dispatch(setActivities(studentId, activities));
  };
};
