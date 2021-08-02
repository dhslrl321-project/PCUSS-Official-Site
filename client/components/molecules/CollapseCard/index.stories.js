import CollapseCard from ".";

export default {
  title: "molecules / CollapseCard",
  component: CollapseCard,
};

export const Default = (args) => <CollapseCard {...args} />;

const data = [
  {
    id: 1,
    activityName: "정보처리기사",
    result: "자격증 취득",
  },
  {
    id: 2,
    activityName: "정보보안학과 홈페이지 Front 제작",
    result: "홈페이지 운영중",
  },
];

Default.args = {
  data,
};
