import Professor from '.';
import { data } from './data';

export default {
  title: "sections / Professor",
  component: Professor
};

const Template = (args) => <Professor {...args} />;

export const Rendering = Template.bind({});
Rendering.args = {
  data,
};