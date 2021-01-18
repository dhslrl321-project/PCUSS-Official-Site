import Title from ".";

export default {
  title: "atoms / Title",
  component: Title
}

const Template = (args) => <Title {...args} />
export const MainTitleRendering = Template.bind({});
MainTitleRendering.args = {
  styleType: "MainTitle",
  children: "This is Main Ttitle",
}

export const SubTitleRendering = Template.bind({});
SubTitleRendering.args = {
  styleType: "SubTitle",
  children: "This is Sub Title",
}