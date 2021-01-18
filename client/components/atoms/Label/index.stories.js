import Label from ".";

export default {
  title: "atoms / Label",
  component: Label
}

const Template = (args) => <Label {...args} />

export const PrimaryLabelRendering = Template.bind({});
PrimaryLabelRendering.args = {
  styleType: "PrimaryLabel",
  children: "PrimaryLabel"
}

export const SecondaryLabelRendering = Template.bind({});
SecondaryLabelRendering.args = {
  styleType: "SecondaryLabel",
  children: "SecondaryLabel"
}
export const PrimaryDescriptionRendering = Template.bind({});
PrimaryDescriptionRendering.args = {
  styleType: "PrimaryDescription",
  children: "PrimaryDescription"
}
export const SecondaryDescriptionRendering = Template.bind({});
SecondaryDescriptionRendering.args = {
  styleType: "SecondaryDescription",
  children: "SecondaryDescriptionl"
}