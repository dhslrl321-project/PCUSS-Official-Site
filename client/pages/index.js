import Navbar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import Hero from "../components/sections/Hero";
import Merit from "../components/sections/Merit";
import { data as meritData } from "../components/sections/Merit/data";
import Qualification from "../components/sections/Qualification";
import { data as qualificationData } from "../components/sections/Qualification/data";
import Timelog from "../components/sections/Timelog";
import { data as timelogData } from "../components/sections/Timelog/data";

export default function Home() {
  return (
    <main>
      <Hero />
      <Merit data={meritData} />
      <Qualification data={qualificationData} />
      <Timelog data={timelogData} />
    </main>
  )
}
