import Dropdown from ".";

export default {
  title: "organisms / Dropdown",
  component: Dropdown
}

const Template = (args) => <Dropdown {...args} />

export const Rendering = Template.bind({});
Rendering.args = {
  show: true
}