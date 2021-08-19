import { useEffect } from "react";

import { useDispatch } from "react-redux";

import Student from "../components/sections/Student";
import { data as studentData } from "../datas/StudentData";
import Section from "../components/atoms/Section";

import { loadStudentsByGrade, loadActivities } from "../reducer/student";

const student = () => {
  const dispatch = useDispatch();

  const handleStudentIdLabelClick = (grade) => {
    dispatch(loadStudentsByGrade(grade));
  };

  const handleSeeMoreButtonClick = (studentId) => {
    dispatch(loadActivities(studentId));
  };

  useEffect(() => {
    dispatch(loadStudentsByGrade(17));
  }, []); // loading 구현해야함

  return (
    <>
      <Section styleType="FirstMargin">
        <Student
          data={studentData}
          handleStudentIdLabelClick={handleStudentIdLabelClick}
          handleSeeMoreButtonClick={handleSeeMoreButtonClick}
        />
      </Section>
    </>
  );
};

export default student;
