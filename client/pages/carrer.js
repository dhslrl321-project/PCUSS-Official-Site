import Carrer from "../components/sections/Carrer";
import { data as carrerData } from "../datas/CarrerData";
import Suggestion from "../components/sections/Suggestion";
import { data as suggestionData } from "../datas/SuggestionData";
import withHead from "../commons/withHead";

const carrer = () => {
  return (
    <>
      <Suggestion data={suggestionData} />
      <Carrer data={carrerData} />
    </>
  );
}

export default withHead(carrer, "졸업 후 진로", "정보보안학과를 졸업한다면 어떤 직무를 갖게 될까요? 4대 직무를 통해 알아봅시다.");