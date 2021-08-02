import NavColumn from ".";

export default {
  title: "molecules / NavColumn",
  component: NavColumn,
};

const Template = (args) => <NavColumn {...args} />;

export const Home = Template.bind({});
Home.args = {
  name: "배재대학교 정보보안학과",
  href: "/#",
};

export const SignIn = Template.bind({});
SignIn.args = {
  name: "로그인",
  href: "/#",
};

export const SignUp = Template.bind({});
SignUp.args = {
  name: "회원 가입",
  href: "/#",
};
