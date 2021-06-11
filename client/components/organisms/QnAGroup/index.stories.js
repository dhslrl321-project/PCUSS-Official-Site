import QnAGroup from '.';

export default {
  title: "organisms / QnAGroup",
  component: QnAGroup
};


export const data = {
  list: [
    {
      id: 1,
      label: '"주로 사용하는 에디터가 무엇인가요?"',
      largeDescriptionData: {
        descs: [
          { id: 1, content: "기본적으로는 IntelliJ와 vscode를 사용하곤 합니다." },
          { id: 2, content: "하지만 때에 따라 vim을 이용하기도 하죠" },
        ],
      }
    },
    {
      id: 2,
      label: '"학창 시절은 어땠나요?"',
      largeDescriptionData: {
        descs: [
          { id: 1, content: "호기심 많은 학생 중 하나였습니다." },
          { id: 2, content: "그 호기심으로 아마 제가 지금까지 밥벌어 먹고 살지 않을까 싶네요 핳하" },
        ],
      }
    }
  ]
}

const Template = (args) => <QnAGroup {...args} />;

export const Rendering = Template.bind({});
Rendering.args = {
  data
};