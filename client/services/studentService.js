import API from "../utils/api";

export const fetchStudents = async (id) => {
  const { data } = await API.get(`/student-service/students/${id}?size=10`);

  // console.log("content: ", content instanceof Array);
  return data;
};

export const fetchAppendStudent = async (studentId, pageQuery) => {
  const { data } = await API.get(
    `/student-service/students/${studentId}?page=${pageQuery}&size=10`
  );

  return data;
};

export const fetchActivity = async (studentId) => {
  const { data } = await API.get(
    `/student-service/students/activity/${studentId}`
  );

  return data;
};
