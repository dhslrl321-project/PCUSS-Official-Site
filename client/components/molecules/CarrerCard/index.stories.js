import CarrerCard from ".";

export default {
  title: "molecules / CarrerCard",
  component: CarrerCard
}

const data = {
  id: 1,
  src: "/carrer/solution.svg",
  carrerTitle: "보안 솔루션 개발 / 관제 / 운영",
  carrerDescription: "전략을 통해서 각종 보안의 위협으로 부터 서비스를 보호하는 솔루션을 개발하거나 서비스에 적용합니다. 보안 솔루션 개발자들에 의해서 보안 프로그램이 만들어지고 방어막이 두터워집니다.",
}
const data2 = {
  id: 2,
  src: "/carrer/solution.svg",
  carrerTitle: "보안 솔루션 개발 / 관제 / 운영",
  carrerDescription: "전략을 통해서 각종 보안의 위협으로 부터 서비스를 보호하는 솔루션을 개발하거나 서비스에 적용합니다. 보안 솔루션 개발자들에 의해서 보안 프로그램이 만들어지고 방어막이 두터워집니다. 또한 각종 DDOS 공격, Zero Day 공격으로 부터 로그를 감시하며 적절한 조치를 즉각적으로 취하는 보안의 소방관같은 역할입니다.",
}

const Template = (args) => <CarrerCard {...args} />

export const Default = Template.bind({});
Default.args = {
  data
}

export const Reverse = Template.bind({});
Reverse.args = {
  data: data2
}