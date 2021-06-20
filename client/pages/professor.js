import Professor from "../components/sections/Professor";
import { data as professorData } from "../datas/ProfessorData";
import withHead from "../commons/withHead";
import Section from "../components/atoms/Section";

const professor = () => {
  return (
    <>
      <Section styleType="SingleMargin">
        <Professor data={professorData} />
      </Section>
    </>
  );
}

export default withHead(professor, "교수진", "배재대학교 정보보안학과의 교육을 책임지는 유능하신 교수님들을 만나봅시다.");