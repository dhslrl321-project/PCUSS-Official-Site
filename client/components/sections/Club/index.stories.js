import Club from '.';
import { data } from "../../../datas/ClubData";

export default {
  title: "sections / Club",
  component: Club
};

const Template = (args) => <Club {...args} />;

export const Rendering = Template.bind({});
Rendering.args = {
  data,
};