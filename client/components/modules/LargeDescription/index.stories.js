import LargeDescription from ".";

const dataWithSource = {
  title: "정보보안 전문가가 되기 위해서 필요한 것은?",
  descs: [
    { id: 1, content: "정보보안 전문가가 되기 위해서는 다양한 보안 분야의 시야를 넓히는 것이 중요합니다. 공격자의 공격 패턴을 파악하고 적절한 대책을 제시할 수 있어야 하기 때문에, 공격자보다 더 다양한 지식과 해당 분야에 대한 이해가 필요합니다." },
    { id: 2, content: "이처럼 정보보안 전문가는 보안 사고 예방 및 대응을 위해서 개발 언어별 프로그래밍 지식과 네트워크, 시스템, DB에 관한 다양한 지식이 필요합니다. 해킹과 같은 고급 기술이 아니라 개발과 같은 원천 기술이라 의아할 수 있지만 정보보안은 수학과 같이 원리를 알고 이를 응용해 분석할 수 있는 능력이 필요합니다." },
    { id: 3, content: "예를 들어 웹 모의해킹을 잘 하려면 공격 패턴을 익히는 것보다, 웹 서버를 개발해보고 시큐어 코딩을 적용해보며 각 로직 별로 공격을 수행해 보는 것이 더 중요합니다. 개발이 어떻게 되어 있는지 알아야 공격이 가능하고, " },
    { id: 4, content: "이런 Insight가 생겨야 시스템을 보고 분석할 수 있는 능력이 생기기 때문에, 패턴이나 공격 기법만 외워서는 절대 보안 전문가로 거듭날 수 없습니다." },
  ],
  source: "(주) SK Infosec 공식 블로그 발췌",
  isImg: false,
  src: ""
}

const dataWithImg = {
  title: "CTF란 무엇인가요?",
  descs: [
    { id: 1, content: "Capture The Flag 의 약자인 CTF는 해킹 방어 대회를 뜻합니다." },
    { id: 2, content: "해킹 방어 대회는 일반적으로 해킹(Hacking) 실력을 겨루는 대회를 의미하는데, 일반적인 해킹 방어 대회에서는 Flag 값을 찾는 것을 뜻합니다." },
    { id: 3, content: "출제자는 보안에 취약한 웹 서버나 프로그램을 만들어 참여자에게 나눠주며 프로그램 혹은 코드에 있는 취약점 (FLAG)를 찾게 하고 취약점에 따른 점수를 계산하여 순위를 매기는 대회 입니다." },
    { id: 4, content: "이런 CTF를 저희 사이버 보안학과에서는 2020년 1회를 시작으로 세미나와 함께 하나의 문화로 자리 잡힌 행사 입니다." },
    { id: 5, content: "본인이 CTF를 처음 하더라도 선배 들의 도움을 받으며 직접 해킹을 해볼 수 있는 기회가 됩니다." },
  ],
  source: "(주) SK Infosec 공식 블로그 발췌",
  isImg: true,
  src: "/ctf/xfff.png"
}

export default {
  title: "modules / LargeDescription",
  component: LargeDescription
}

const Template = (args) => <LargeDescription {...args} />

export const DescWithLabelRender = Template.bind({});
DescWithLabelRender.args = {
  data: dataWithSource
}

export const DescWithImgRender = Template.bind({});
DescWithImgRender.args = {
  data: dataWithImg
}