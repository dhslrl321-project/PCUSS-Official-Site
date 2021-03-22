import SquircleCard from '.';

const data = {
  label: "보안 컨설팅 전문가 홍길동",
  src: "/interview1.jpg"
};

export default {
  title: "modules / SquircleCard",
  component: SquircleCard
};

export const Rendering = (args) => <SquircleCard {...args} />;
Rendering.args = {
  data: data,
  isDetail: false,
}