import Hero from "../components/sections/Hero";
import Merit from "../components/sections/Merit";
import { data as meritData } from "../datas/MeritData";
import Qualification from "../components/sections/Qualification";
import { data as qualificationData } from "../datas/QualificationData";
import Timelog from "../components/sections/Timelog";
import { data as timelogData } from "../datas/TimelogData";
import Section from '../components/atoms/Section';

export default function Home() {

  return (
    <>
      <Section styleType="FirstMargin">
        <Hero />
      </Section>
      <Section styleType="DefaultMargin">
        <Merit data={meritData} />
      </Section>
      <Section styleType="DefaultMargin">
        <Qualification data={qualificationData} />
      </Section>
      <Section styleType="LastMargin">
        <Timelog data={timelogData} />
      </Section>
    </>
  )
}