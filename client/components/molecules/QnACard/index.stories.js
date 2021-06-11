import QnACard from '.';

export default {
  title: "molecules / QnACard",
  component: QnACard
};

const data = {
  id: 1,
  label: '"김oo 선배님의 학창 시절은 어땠나요? 궁금합니다!!!"',
  largeDescriptionData: {
    descs: [
      { id: 1, content: "호기심 많은 학생 중 하나였습니다." },
      { id: 2, content: "그 호기심으로 아마 제가 지금까지 밥벌어 먹고 살지 않을까 싶네요 핳하" },
    ],
  }
}

const Template = (args) => <QnACard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data,
};