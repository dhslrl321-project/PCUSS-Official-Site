import Navbar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import Curriculum from "../components/sections/Curriculum";
import { data as curriculumData } from "../components/sections/Curriculum/data";
export default function curriculum() {
  return (
    <main>
      <Curriculum datas={curriculumData} />
    </main>
  )
}