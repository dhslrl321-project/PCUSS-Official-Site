import OAuth from ".";

export default {
  title: "sections / OAuth",
  component: OAuth,
};

const Template = (args) => <OAuth {...args} />;

export const SignUp = Template.bind({});

SignUp.args = {
  styleType: "SignUp",
};

export const SignIn = Template.bind({});

SignIn.args = {
  styleType: "SignIn",
};
