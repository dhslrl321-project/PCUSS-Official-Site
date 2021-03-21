import Ctf from "../components/sections/Ctf";
import { data as ctfData } from "../datas/CtfData";
import Activities from "../components/sections/Activities";
import { data as activitiesData } from "../datas/ActivitiesData";
import withHead from "../commons/withHead";

const activity = () => {
  return (
    <>
      <Ctf data={ctfData} />
      <Activities data={activitiesData} />
    </>
  );
}

export default withHead(activity, "활동", "CTF, 세미나, 컨퍼런스 등 다양한 활동을 만나보세요");