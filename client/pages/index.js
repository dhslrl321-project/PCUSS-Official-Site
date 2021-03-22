import Hero from "../components/sections/Hero";
import Merit from "../components/sections/Merit";
import { data as meritData } from "../datas/MeritData";
import Qualification from "../components/sections/Qualification";
import { data as qualificationData } from "../datas/QualificationData";
import Timelog from "../components/sections/Timelog";
import { data as timelogData } from "../datas/TimelogData";

export default function Home() {

  return (
    <>
      <Hero />
      <Merit data={meritData} />
      <Qualification data={qualificationData} />
      <Timelog data={timelogData} />
    </>
  )
}