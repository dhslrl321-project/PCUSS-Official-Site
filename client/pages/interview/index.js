import Interview from "../../components/sections/Interview";
import { data as interviewData } from "../../datas/InterviewData";
import withHead from "../../commons/withHead";
import Section from '../../components/atoms/Section';

const interview = () => {
  return (
    <>
      <Section styleType="SingleMargin">
        <Interview data={interviewData} />
      </Section>
    </>
  );
}

export default withHead(interview, "선배와 인터뷰", "정보보안학과를 졸업하신 선배님들을 만나봅시다.")