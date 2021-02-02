import Navbar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import Suggestion from "../components/sections/Suggestion";
import { data as suggestionData } from "../components/sections/Suggestion/data";
import Carrer from "../components/sections/Carrer";
import { data as carrerData } from "../components/sections/Carrer/data";

export default function carrer() {
  return (
    <main>
      <Suggestion data={suggestionData} />
      <Carrer data={carrerData} />
    </main>
  );
}