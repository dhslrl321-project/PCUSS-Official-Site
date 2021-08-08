import API from "../utils/api";

export const fetchStudents = async (id) => {
  const { data } = await API.get(`/student-service/students/${id}`);
  const { content } = data;

  return content;
};
