import QnACard from '.';

const data = {
  label: '"주로 사용하는 툴이나 도구가 무엇인가요?"',
  description: "개발에는 Jetbrain사의 Intellij를 사용하고 있고, 이 외에드 이클립스와 같은 ide가 존재합니다."
};

export default {
  title: "modules / QnACard",
  component: QnACard
};

const Template = (args) => <QnACard {...args} />;

export const Rendering = Template.bind({});
Rendering.args = {
  data,
};