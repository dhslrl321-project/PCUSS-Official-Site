import InterviewDetail from '.';
import { data } from "../../../datas/InterviewDetailData";

export default {
  title: "sections / InterviewDetail",
  component: InterviewDetail
};

const Template = (args) => <InterviewDetail {...args} />;

export const Rendering = Template.bind({});
Rendering.args = {
  data
};