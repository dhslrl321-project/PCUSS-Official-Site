import Carrer from ".";
import { data } from "../../../datas/CarrerData";
export default {
  title: "sections / Carrer",
  component: Carrer
}

const Template = (args) => <Carrer {...args} />
export const Rendering = Template.bind({});
Rendering.args = {
  data
}