
export const data = {
  headerData: {
    title: "CTF",
    description: "CTF는 무엇인가요?"
  },
  chatLabels: [
    { id: 1, label: "웹 해킹", active: true },
    { id: 2, label: "암호학", active: false },
    { id: 3, label: "디지털 포렌식", active: false },
    { id: 4, label: "MISC", active: false },
  ],
  chatData: [
    {
      id: 1,
      conversations: [
        { id: 1, src: "/chat/junior.svg", chatting: "정보보안학과에선 어떤 능력을 요구하나요?", isQuestions: true },
        { id: 2, src: "/chat/senior.svg", chatting: "기본적으로 컴퓨터에 대한 흥미가 있어야 합니다. 컴퓨터에 대한 흥미가 없더라도 걱정하지 마세요. 컴퓨터의 세계는 아주 흥미롭거든요.", isQuestions: false },
        { id: 3, src: "/chat/junior.svg", chatting: "벌써부터 흥미로워요! 자세히 말해주세요!", isQuestions: true },
        { id: 4, src: "/chat/senior.svg", chatting: "기본적으로 모든 것에 궁금증을 갖고 탐구하는 제세가 필요합니다. 탐구하는 자세를 겸비하기 위해서는 다양한 활동을 다양한 시각에서 체험해야 하죠.", isQuestions: false },
      ]
    },
    {
      id: 2,
      conversations: [
        { id: 1, src: "/chat/junior.svg", chatting: "끈기있는 자세란 무엇을 의미하나요?", isQuestions: true },
        { id: 2, src: "/chat/senior.svg", chatting: "해킹이라는 것은 많은 시간이 걸립니다. 그에 따라서 당연하게 끈기가 없다면, 내가 직면한 문제를 해결하지 못해요.", isQuestions: false },
        { id: 3, src: "/chat/senior.svg", chatting: "최고의 보안인재가 되기 위해서는 끈기있는 자세는 필수 덕목이에요.", isQuestions: false },
        { id: 4, src: "/chat/senior.svg", chatting: "끈기가 생기려면 우선 흥미가 생겨야 합니다. 제가 장담하는데 컴퓨터의 세계에 빠지면 흥미롭지 않을 수가 없어요!", isQuestions: false }]
    },
    {
      id: 3,
      conversations: [
        { id: 1, src: "/chat/junior.svg", chatting: "그럼 어떤 것을 도전해야 하죠?", isQuestions: true },
        { id: 2, src: "/chat/senior.svg", chatting: "도전할 수 있는 분야는 아주 무궁무진해요!", isQuestions: false },
        { id: 3, src: "/chat/senior.svg", chatting: "웹 해킹, 드론 해킹, 딥러닝 알고리즘을 적용한 데이터 분석, 블록체인을 활용한 공동 지갑, 트래픽 분석등등 실제로 현재 선배들이 연구하고 있는 분야에요!", isQuestions: false },
        { id: 4, src: "/chat/junior.svg", chatting: "과연 제가 할 수 있을까요?... 걱정돼요..", isQuestions: true },
      ]
    },
    {
      id: 4,
      conversations: [
        { id: 1, src: "/chat/junior.svg", chatting: "저는 사교성이 좋아서 빨리 선후배와 친해지고 싶어요!", isQuestions: true },
        { id: 2, src: "/chat/senior.svg", chatting: "오! 정말 다행이네요. 기본적으로 IT 분야는 서로 소통하는 협업의 문화가 아주 중요하답니다.", isQuestions: false },
        { id: 3, src: "/chat/senior.svg", chatting: "저희는 실제로 기업이 사용하는 협업 도구인 Github, Jira Confluence, Bitbucket 등 다양한 협업 도구를 사용하고 있답니다.", isQuestions: false },
        { id: 4, src: "/chat/junior.svg", chatting: "과연 제가 할 수 있을까요?... 걱정돼요..", isQuestions: true },
      ]
    }
  ],
  largeDescriptionData: {
    title: "CTF는 Capture The Flag 의 약자입니다.",
    descs: [
      { id: 1, content: "Capture The Flag 의 약자인 CTF는 해킹 방어 대회를 뜻합니다." },
      { id: 2, content: "해킹 방어 대회는 일반적으로 해킹(Hacking) 실력을 겨루는 대회를 의미하는데, 일반적인 해킹 방어 대회에서는 Flag 값을 찾는 것을 뜻합니다." },
      { id: 3, content: "출제자는 보안에 취약한 웹 서버나 프로그램을 만들어 참여자에게 나눠주며 프로그램 혹은 코드에 있는 취약점 (FLAG)를 찾게 하고 취약점에 따른 점수를 계산하여 순위를 매기는 대회 입니다." },
      { id: 4, content: "이런 CTF를 저희 사이버 보안학과에서는 2020년 1회를 시작으로 세미나와 함께 하나의 문화로 자리 잡힌 행사 입니다." },
      { id: 5, content: "본인이 CTF를 처음 하더라도 선배 들의 도움을 받으며 직접 해킹을 해볼 수 있는 기회가 됩니다." }
    ],
    source: "",
    isImg: true,
    src: "/ctf/xfff.png"
  }
}
