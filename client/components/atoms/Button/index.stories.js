import Button from ".";

export default {
  title: "atoms / Button",
  componenet: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};
