import Lab from "../components/sections/Lab";
import { data as labData } from "../datas/LabData";
import Club from "../components/sections/Club";
import { data as clubData } from "../datas/ClubData";
export default function member() {
  return (
    <>
      <Lab data={labData} />
      <Club data={clubData} />
    </>
  )
}