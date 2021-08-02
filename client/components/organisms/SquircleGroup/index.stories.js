import SquircleGroup from '.';

const data = {
  list: [
    { id: 1, label: "보안 컨설팅 전문가 홍길동", src: "/interview1.jpg" },
    { id: 2, label: "보안 컨설팅 전문가 김길동", src: "/interview1.jpg" },
    { id: 3, label: "보안 컨설팅 전문가 서길동", src: "/interview1.jpg" },
    { id: 4, label: "보안 컨설팅 전문가 최길동", src: "/interview1.jpg" },
    { id: 5, label: "보안 컨설팅 전문가 박길동", src: "/interview1.jpg" },
    { id: 6, label: "보안 컨설팅 전문가 유길동", src: "/interview1.jpg" },
  ]
};

export default {
  title: "organisms / SquircleGroup",
  component: SquircleGroup
};

export const Rendering = (args) => <SquircleGroup {...args} />;
Rendering.args = {
  data: data.list
};