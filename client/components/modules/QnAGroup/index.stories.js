import QnAGroup from '.';

const data = {
  list: [
    {
      id: 1,
      label: '"주로 사용하는 툴이나 도구가 무엇인가요?"',
      description: "개발에는 Jetbrain사의 Intellij를 사용하고 있고, 이 외에도 이클립스와 같은 ide가 존재합니다."
    },
    {
      id: 2,
      label: '"주로 사용하는 툴이나 도구가 무엇인가요?"',
      description: "개발에는 Jetbrain사의 Intellij를 사용하고 있고, 이 외에도 이클립스와 같은 ide가 존재합니다."
    },
    {
      id: 3,
      label: '"주로 사용하는 툴이나 도구가 무엇인가요?"',
      description: "개발에는 Jetbrain사의 Intellij를 사용하고 있고, 이 외에도 이클립스와 같은 ide가 존재합니다."
    }
  ]
};

export default {
  title: "modules / QnAGroup",
  component: QnAGroup
};

const Template = (args) => <QnAGroup {...args} />;

export const Rendering = Template.bind({});
Rendering.args = {
  data
};