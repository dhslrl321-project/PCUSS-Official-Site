import Professor from "../components/sections/Professor";
import { data as professorData } from "../components/sections/Professor/data";

export default function professor() {
  return (
    <Professor data={professorData} />
  );
}