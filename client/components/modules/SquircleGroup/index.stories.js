import SquircleGroup from '.';

const data = {
  list: [
    { id: 1, label: "보안 컨설팅 전문가 홍길동", src: "/picture/1.svg" },
    { id: 2, label: "보안 컨설팅 전문가 김길동", src: "/picture/1.svg" },
    { id: 3, label: "보안 컨설팅 전문가 서길동", src: "/picture/1.svg" },
    { id: 4, label: "보안 컨설팅 전문가 최길동", src: "/picture/1.svg" },
    { id: 5, label: "보안 컨설팅 전문가 박길동", src: "/picture/1.svg" },
    { id: 6, label: "보안 컨설팅 전문가 유길동", src: "/picture/1.svg" },
  ]
};

export default {
  title: "modules / SquircleGroup",
  component: SquircleGroup
};

export const Rendering = (args) => <SquircleGroup {...args} />;
Rendering.args = {
  data: data.list
};