import Professor from "../components/sections/Professor";
import { data as professorData } from "../datas/ProfessorData";
export default function professor() {
  return (
    <Professor data={professorData} />
  );
}