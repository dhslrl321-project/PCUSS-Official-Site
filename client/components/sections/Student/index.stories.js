import Student from ".";

import { data } from "../../../datas/StudentData";

export default {
  title: "sections / Student",
  component: Student,
};

const Template = (args) => <Student {...args} />;

export const Rendering = Template.bind({});

Rendering.args = {
  data,
};
