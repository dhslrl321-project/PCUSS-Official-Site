import Dropdown from ".";

export default {
  title: "molecules / Dropdown",
  component: Dropdown,
};

const data = [
  { id: 1, name: "행사 및 활동", href: "activity" },
  { id: 2, name: "동아리", href: "club" },
];

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  data,
};
