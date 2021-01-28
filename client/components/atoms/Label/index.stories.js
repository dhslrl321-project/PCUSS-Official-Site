import Label from ".";

export default {
  title: "atoms / Label",
  component: Label
}

const Template = (args) => <Label {...args} />

export const LabelRendering = Template.bind({});
LabelRendering.args = {
  styleType: "Label",
  size: "1.2",
  children: "Label"
};

export const DescriptionRendering = Template.bind({});
DescriptionRendering.args = {
  styleType: "Description",
  size: "3.0",
  children: "Description"
};