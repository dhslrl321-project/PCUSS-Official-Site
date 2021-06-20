import CarrerGroup from ".";

export default {
  title: "organisms / CarrerGroup",
  component: CarrerGroup
}

const data = [
  {
    id: 1,
    src: "/carrer/solution.svg",
    carrerTitle: "보안 솔루션 개발 / 관제 / 운영",
    carrerDescription: "전략을 통해서 각종 보안의 위협으로 부터 서비스를 보호하는 솔루션을 개발하거나 서비스에 적용합니다. 보안 솔루션 개발자들에 의해서 보안 프로그램이 만들어지고 방어막이 두터워집니다. 또한 각종 DDOS 공격, Zero Day 공격으로 부터 로그를 감시하며 적절한 조치를 즉각적으로 취하는 보안의 소방관같은 역할입니다.",
    isLeft: true
  },
  {
    id: 2,
    src: "/carrer/consultant.svg",
    carrerTitle: "정보보안 컨설턴트",
    carrerDescription: "한 조직 내에서 가장 위험한 보안 위협은 바로 관리 체계 자체에 보안 허점입니다. 정보 보안 컨설턴트는 각종 기업의 관리적/물리적/기술적 분야에서 발생 가능한 위협을 분석하고 방향을 제시하는 역할을 수행합니다.",
    isLeft: false
  },
  {
    id: 3,
    src: "/carrer/hacking.svg",
    carrerTitle: "모의 해킹 전문가",
    carrerDescription: "보안 사고의 효과적인 예방을 위해서는 현재 기업 서비스에 어떤 취약점이 존재하는지를 미리 파악해야 하고 이를 제거해야 합니다. 모의 해킹 전문가는 기업의 시스템에 직접 해킹을 시도해 봄으로 어떤 취약점과 위협이 존재하는지 파악하고, 그에 따른 적절한 보안 대책을 제시하는 역할을 합니다.",
    isLeft: true
  },
  {
    id: 4,
    src: "/carrer/handler.svg",
    carrerTitle: "침해사고 대응 전문가",
    carrerDescription: "위험을 최소화한다고 하더라도, 기업 내/외 요인으로 인해서 침해 사고가 발생할 수 있습니다. 위의 경우 침해사고 대응 전문가가 현장에 투입되어 공격 유형을 분석하고 이후에 대한 대책을 수립합니다. 또한 유사한 침해사고가 재발되지 않도록 예방하는 역할을 수행합니다.",
    isLeft: false
  }
]

const Template = (args) => <CarrerGroup {...args} />

export const Default = Template.bind({});
Default.args = {
  data
}