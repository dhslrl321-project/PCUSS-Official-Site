import Interview from '.';
import { data } from "../../../datas/InterviewData";

export default {
  title: "sections / Interview",
  component: Interview
};

const Template = (args) => <Interview {...args} />;

export const Rendering = Template.bind({});
Rendering.args = {
  data: data,
};