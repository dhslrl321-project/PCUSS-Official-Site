import CircleGroup from '.';

const normalData = [
  { id: 1, label: "소모임 및 연구실", description: null, src: "/picture/1.svg" },
  { id: 2, label: "학생과 교수 사이의 관계", description: null, src: "/picture/2.svg" },
  { id: 3, label: "대회 참여", description: "Test", src: "/picture/3.svg" }

];

const ActivitiesData = [
  { id: 1, label: "학술 세미나", description: "학술 세미나에 대한 설명을 뭐라고 해야할지 모르겠어서 장황하게 쓸데없이 끄적이고 있는 개발자가 존재한다고 합니다.", src: "/picture/1.svg" },
  { id: 2, label: "컨퍼런스", description: "컨퍼런스에 대한 설명을 뭐라고 해야할지 모르겠어서 장황하게 쓸데없이 끄적이고 있는 개발자가 존재한다고 합니다.", src: "/picture/2.svg" }
];


export default {
  title: "modules / CircleGroup",
  component: CircleGroup
};

export const NormalRendering = (args) => <CircleGroup {...args} />;
NormalRendering.args = {
  data: normalData,
};

export const ActivitiesRendring = (args) => <CircleGroup {...args} />;
ActivitiesRendring.args = {
  data: ActivitiesData,
  isVisible: true,
};