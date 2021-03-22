import Merit from '.';
import { data } from "../../../datas/MeritData";

export default {
  title: "sections / Merit",
  component: Merit
};

const Template = (args) => <Merit {...args} />;

export const Rendering = Template.bind({});
Rendering.args = {
  data: data
};