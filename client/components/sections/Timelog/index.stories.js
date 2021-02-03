import Timelog from ".";
import { data } from "./data";

export default {
  title: "sections / Timelog",
  component: Timelog
}

export const Render = () => <Timelog data={data} />