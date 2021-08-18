import API from "../utils/api";

export const fetchStudents = async (id) => {
  const { data } = await API.get(`/student-service/students/${id}?size=10`);
  // const { content } = data;

  // console.log("content: ", content instanceof Array);
  return data;
};

export const fetchAppendStudent = async (studentId, pageQuery) => {
  const { data } = await API.get(
    `/student-service/students/${studentId}?page=${pageQuery}&size=10`
  );

  // console.log(last);
  // console.log(content);

  return data;
};
