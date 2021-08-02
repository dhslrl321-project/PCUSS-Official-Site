import StudentGroup from ".";
import { studentCardData } from "../../../datas/StudentData";

export default {
  title: "organisms / StudentGroup",
  component: StudentGroup,
};

const Template = (args) => <StudentGroup {...args} />;

export const Rendering = Template.bind({});
Rendering.args = {
  data: studentCardData.content,
};
