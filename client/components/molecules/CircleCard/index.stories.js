import CircleCard from '.';

export default {
  title: "molecules / CircleCard",
  component: CircleCard
};

const data = {
  isFalse: {
    id: 1,
    label: "소모임 및 연구실",
    description: null,
    src: "/lab/Lab105.jpeg"
  },

  isTrue: {
    id: 1,
    label: "학술 세미나",
    description: "학술 세미나에 대한 설명을 뭐라고 해야할지 모르겠어서 장황하게 쓸데없이 끄적이고 있는 개발자가 존재한다고 합니다.",
    src: "/lab/Lab103.JPG"
  }
};

export const isFalse = (args) => <CircleCard {...args} />;
isFalse.args = {
  data: data.isFalse,
};

export const isTrue = (args) => <CircleCard {...args} />;
isTrue.args = {
  data: data.isTrue,
  isDescVisible: true,
}

