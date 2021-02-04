import ProfileGroup from '.';

const data = [
  { 
    id: 1, 
    name: "조인준 교수",
    email: "injune@pcu.ac.kr",
    finalEducation: "공학 박사",
    fields: [
      "정보 보호",
      "컴퓨터 네트워크",
      "전산 조직 응용"
    ],
    src: "/professor/pro01.jpg"
  },
  { 
    id: 2,
    name: "이병엽 교수",
    email: "bylee@pcu.ac.kr",
    finalEducation: "공학 박사",
    fields: [
      "정보 보호",
      "컴퓨터 네트워크"
    ],
    src: "/professor/pro02.jpg"
  },
  { 
    id: 3, 
    name: "함형민 조교수",
    email: "aham@pcu.ac.kr",
    finalEducation: "공학 박사",
    fields: [
      "정보 보호",
      "네트워크 보안",
      "사물 인터넷"
    ],
    src: "/professor/pro08.jpg"
  }
];

export default {
  title: "modules / ProfileGroup",
  component: ProfileGroup
};

export const Rendering = (args) => <ProfileGroup {...args} />;
Rendering.args = {
  data
};