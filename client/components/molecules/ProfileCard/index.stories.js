import ProfileCard from '.';

export default {
  title: "molecules / ProfileCard",
  component: ProfileCard
};

const data = {
  name: "조인준 교수",
  email: "injune@pcu.ac.kr",
  finalEducation: "공학 박사",
  fields: [
    { id: 1, field: "정보 보호" },
    { id: 2, field: "Computer Network" },
    { id: 3, field: "전산 조직 응용" }
  ],
  src: "/professor/pro01.jpg"
};

export const Default = (args) => <ProfileCard {...args} />;
Default.args = {
  data
};