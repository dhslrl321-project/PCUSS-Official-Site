import Profile from ".";

export default {
  title: "molecules / Profile",
  component: Profile,
};

const Template = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  src:
    "http://k.kakaocdn.net/dn/boEp6l/btq6MTNzPgH/mVE7m02pyxfoMLZIb0iJQK/img_640x640.jpg",
};
