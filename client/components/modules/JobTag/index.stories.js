import JobTag from ".";

export default {
  title: "modules / JobTag",
  component: JobTag
}

const Template = (args) => <JobTag {...args} />

export const LargeRendering = Template.bind({});
LargeRendering.args = {
  tagName: "웹 모바일 취약점 공격"
}

export const ShortRendering = Template.bind({});
ShortRendering.args = {
  tagName: "포렌식"
}