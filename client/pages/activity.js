import Ctf from "../components/sections/Ctf";
import { data as ctfData } from "../datas/CtfData";
import Activities from "../components/sections/Activities";
import { data as activitiesData } from "../datas/ActivitiesData";

export default function activity() {
  return (
    <>
      <Ctf data={ctfData} />
      <Activities data={activitiesData} />
    </>
  );
}