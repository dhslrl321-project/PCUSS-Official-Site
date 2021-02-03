import ProfileCard from '.';

const data = {
  name: "조인준 교수",
  email: "injune@pcu.ac.kr",
  finalEducation: "공학 박사",
  fields: [
    "정보 보호",
    "Computer Network",
    "전산 조직 응용"
  ],
  src: "/professor/pro01.jpg"
};

export default {
  title: "modules / ProfileCard",
  component: ProfileCard
};

export const Rendering = (args) => <ProfileCard {...args} />;
Rendering.args = {
  data
};