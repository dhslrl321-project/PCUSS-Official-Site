import Student from "../components/sections/Student";
import { data as studentData } from "../datas/StudentData";
import Section from "../components/atoms/Section";

const student = () => {
  return (
    <>
      <Section styleType="FirstMargin">
        <Student data={studentData} />
      </Section>
    </>
  );
};

export default student;
