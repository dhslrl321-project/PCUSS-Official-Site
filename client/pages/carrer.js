import Carrer from "../components/sections/Carrer";
import { data as carrerData } from "../datas/CarrerData";
import Suggestion from "../components/sections/Suggestion";
import { data as suggestionData } from "../datas/SuggestionData";
import withHead from "../commons/withHead";
import Section from "../components/atoms/Section";

const carrer = () => {
  return (
    <>
      <Section styleType="FirstMargin">
        <Suggestion data={suggestionData} />
      </Section>
      <Section styleType="LastMargin">
        <Carrer data={carrerData} />
      </Section>
    </>
  );
}

export default withHead(carrer, "졸업 후 진로", "정보보안학과를 졸업한다면 어떤 직무를 갖게 될까요? 4대 직무를 통해 알아봅시다.");