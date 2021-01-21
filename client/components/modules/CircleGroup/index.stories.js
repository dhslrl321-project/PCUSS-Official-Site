import CircleGroup from '.';

const data = [
  { id: 1, label: "소모임 및 연구실", src: "/picture/1.svg" },
  { id: 2, label: "학생과 교수 사이의 관계", src: "/picture/2.svg" },
  { id: 3, label: "대회 참여", src: "/picture/3.svg" }
];


export default {
  title: "modules / CircleGroup",
  component: CircleGroup
};

export const Rendering = (args) => <CircleGroup {...args} />;
Rendering.args = {
  data
};