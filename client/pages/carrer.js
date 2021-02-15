import Carrer from "../components/sections/Carrer";
import { data as carrerData } from "../datas/CarrerData";
import Suggestion from "../components/sections/Suggestion";
import { data as suggestionData } from "../datas/SuggestionData";

export default function carrer() {
  return (
    <>
      <Suggestion data={suggestionData} />
      <Carrer data={carrerData} />
    </>
  );
}