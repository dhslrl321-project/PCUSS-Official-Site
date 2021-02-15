import Activities from '.';
import { data } from "../../../datas/ActivitiesData";

export default {
  title: "sections / Activities",
  component: Activities
};

const Template = (args) => <Activities {...args} />;

export const Rendering = Template.bind({});
Rendering.args = {
  data: data,
};