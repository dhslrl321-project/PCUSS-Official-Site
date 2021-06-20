import SquircleCard from '.';

export default {
  title: "molecules / SquircleCard",
  component: SquircleCard
};

const data = {
  label: "보안 컨설팅 전문가 홍길동",
  src: "/interview/interview1.JPG"
};

export const Default = (args) => <SquircleCard {...args} />;
Default.args = {
  data: data,
  isDetail: false,
}