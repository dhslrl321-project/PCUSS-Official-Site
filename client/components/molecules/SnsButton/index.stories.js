import SnsButton from ".";

export default {
  title: "molecules / SnsButton",
  component: SnsButton,
};

const Template = (args) => <SnsButton {...args} />;

export const Kakao = Template.bind({});

Kakao.args = {
  snsType: "Kakao",
};

export const Naver = Template.bind({});

Naver.args = {
  snsType: "Naver",
};

export const Google = Template.bind({});

Google.args = {
  snsType: "Google",
};
