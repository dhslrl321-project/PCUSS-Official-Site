import JobTag from ".";

export default {
  title: "molecules / JobTag",
  component: JobTag
}

const Template = (args) => <JobTag {...args} />

export const Large = Template.bind({});
Large.args = {
  tagName: "웹 모바일 취약점 공격"
}

export const Short = Template.bind({});
Short.args = {
  tagName: "포렌식"
}