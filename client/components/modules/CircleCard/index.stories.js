import CircleCard from '.';

const data = {
  isFalse: {
    id: 1,
    label: "소모임 및 연구실",
    description: null,
    src: "/picture/1.svg"
  },
  isTrue: {
    id: 1,
    label: "학술 세미나",
    description: "학술 세미나에 대한 설명을 뭐라고 해야할지 모르겠어서 장황하게 쓸데없이 끄적이고 있는 개발자가 존재한다고 합니다.",
    src: "/picture/1.svg"
  }
};

export default {
  title: "modules / CircleCard",
  component: CircleCard
};

export const isFalseRendering = (args) => <CircleCard {...args} />;
isFalseRendering.args = {
  data: data.isFalse,
};

export const isTrueRendering = (args) => <CircleCard {...args} />;
isTrueRendering.args = {
  data: data.isTrue,
  isVisible: true,
}

