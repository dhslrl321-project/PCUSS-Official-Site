import Timelog from ".";
import { data } from "../../../datas/TimelogData";

export default {
  title: "sections / Timelog",
  component: Timelog
}

export const Render = () => <Timelog data={data} />