import Curriculum from "../components/sections/Curriculum";
import { data as curriculumData } from "../components/sections/Curriculum/data";

export default function curriculum() {
  return (
    <Curriculum datas={curriculumData} />
  )
}