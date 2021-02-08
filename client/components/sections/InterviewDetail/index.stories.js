import InterviewDetail from '.';
import { storyData } from './data';

export default {
  title: "sections / InterviewDetail",
  component: InterviewDetail
};

const Template = (args) => <InterviewDetail {...args} />;

export const Rendering = Template.bind({});
Rendering.args = {
  data: storyData
};