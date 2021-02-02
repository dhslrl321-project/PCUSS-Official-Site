import Ctf from "../components/sections/Ctf";
import { data as ctfData } from "../components/sections/Ctf/data";
import Activities from "../components/sections/Activities";
import { data as activitiesData } from "../components/sections/Activities/data";
export default function () {
  return (
    <main>
      <Ctf data={ctfData} />
      <Activities data={activitiesData} />
    </main>
  );
}