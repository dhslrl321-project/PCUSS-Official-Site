import SquircleCard from '.';

const data = {
  label: "보안 컨설팅 전문가 홍길동",
  src: "/picture/1.svg"
};

export default {
  title: "modules / SquircleCard",
  component: SquircleCard
};

export const Rendering = (args) => <SquircleCard {...args} />;
Rendering.args = {
  data: data,
}