import SquircleCard from '.';

const data = {

};

export default {
  title: "modules / SquircleCard",
  component: SquircleCard
};

export const Rendering = (args) => <SquircleCard {...args} />;
Rendering.args = {
  data: data,
}