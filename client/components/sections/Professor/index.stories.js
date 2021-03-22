import Professor from '.';
import { data } from "../../../datas/ProfessorData";

export default {
  title: "sections / Professor",
  component: Professor
};

const Template = (args) => <Professor {...args} />;

export const Rendering = Template.bind({});
Rendering.args = {
  data,
};

