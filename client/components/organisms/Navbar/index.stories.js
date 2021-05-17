import Navbar from ".";

export default {
  title: "organisms / Navbar",
  component: Navbar
}

const Template = (args) => <Navbar {...args} />

export const Rendering = Template.bind({});
Rendering.args = {
  toggle: false
}