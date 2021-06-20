import Title from ".";

export default {
  title: "atoms / Title",
  component: Title
}

const Template = (args) => <Title {...args} />
export const MainTitle = Template.bind({});
MainTitle.args = {
  styleType: "MainTitle",
  children: "This is Main Ttitle",
}

export const SubTitle = Template.bind({});
SubTitle.args = {
  styleType: "SubTitle",
  children: "This is Sub Title",
}