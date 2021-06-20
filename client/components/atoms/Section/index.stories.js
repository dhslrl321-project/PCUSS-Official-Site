import Section from ".";

export default {
  title: "atoms / Section",
  component: Section
}

const Template = (args) => <Section {...args} />

export const FirstMargin = Template.bind({});

FirstMargin.args = {
  styleType: "FirstMargin",
  children: "hello"
}

export const LastMargin = Template.bind({});

LastMargin.args = {
  styleType: "LastMargin",
  children: "hello"
}

export const DefaultMargin = Template.bind({});

DefaultMargin.args = {
  styleType: "DefaultMargin",
  children: "hello"
}

export const SingleMargin = Template.bind({});

SingleMargin.args = {
  styleType: "SingleMargin",
  children: "hello"
}