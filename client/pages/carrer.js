import Carrer from "../components/sections/Carrer";
import { data as carrerData } from "../components/sections/Carrer/data";
import Suggestion from "../components/sections/Suggestion";
import { data as suggestionData } from "../components/sections/Suggestion/data";

export default function carrer() {
  return (
    <>
      <Suggestion data={suggestionData} />
      <Carrer data={carrerData} />
    </>
  );
}