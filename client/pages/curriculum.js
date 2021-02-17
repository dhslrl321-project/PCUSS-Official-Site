import Curriculum from "../components/sections/Curriculum";
import { data as curriculumData } from "../datas/CurriculumData";
export default function curriculum() {
  return (
    <Curriculum datas={curriculumData} />
  )
}