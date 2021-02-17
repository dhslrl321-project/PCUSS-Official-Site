import Ctf from ".";
import { data } from "../../../datas/CtfData";

export default {
  title: "sections / CTF",
  component: Ctf
}

const Template = (args) => <Ctf {...args} />

export const Rendering = Template.bind({});
Rendering.args = {
  data
}