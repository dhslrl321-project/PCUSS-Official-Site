import CircleGroup from '.';

export default {
  title: "organisms / CircleGroup",
  component: CircleGroup
};


const normalData = [
  { id: 1, label: "소모임 및 연구실", description: null, src: "/handsup.jpg" },
  { id: 2, label: "학생과 교수 사이의 관계", description: null, src: "/handsup.jpg" },
  { id: 3, label: "대회 참여", description: "Test", src: "/handsup.jpg" }
];

const ActivitiesData = [
  { id: 1, label: "학술 세미나", description: "학술 세미나에 대한 설명을 뭐라고 해야할지 모르겠어서 장황하게 쓸데없이 끄적이고 있는 개발자가 존재한다고 합니다.", src: "/handsup.jpg" },
  { id: 2, label: "컨퍼런스", description: "컨퍼런스에 대한 설명을 뭐라고 해야할지 모르겠어서 장황하게 쓸데없이 끄적이고 있는 개발자가 존재한다고 합니다.", src: "/handsup.jpg" }
];

export const Normal = (args) => <CircleGroup {...args} />;
Normal.args = {
  data: normalData,
};

export const Activities = (args) => <CircleGroup {...args} />;
Activities.args = {
  data: ActivitiesData,
  isDescVisible: true,
};