import Label from ".";

export default {
  title: "atoms / Label",
  component: Label
}

const Template = (args) => <Label {...args} />

export const Labels = Template.bind({});
Labels.args = {
  styleType: "Label",
  size: "1.2",
  children: "Label"
};

export const Description = Template.bind({});
Description.args = {
  styleType: "Description",
  size: "3.0",
  children: "Description"
};