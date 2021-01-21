import CircleCard from '.';

const data = {
  id: 1,
  label: "소모임 및 연구실",
  src: "/picture/1.svg"
};

export default {
  title: "modules / CircleCard",
  component: CircleCard
};

export const Rendering = (args) => <CircleCard {...args} />;
Rendering.args = {
  data
};