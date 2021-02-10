
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
        { id: 1, src: "/chat/junior.svg", chatting: "웹 해킹이란 무엇인가요?", isQuestions: true },
        { id: 2, src: "/chat/senior.svg", chatting: "웹 해킹이란 웹 사이트의 취약점을 공격하는 기술이에요.", isQuestions: false },
        { id: 4, src: "/chat/junior.svg", chatting: "오.. 어떤 문제가 나오나요?", isQuestions: true },
        { id: 5, src: "/chat/senior.svg", chatting: "웹 해킹 분야에서는 하나의 웹 페이지가 주어질거에요", isQuestions: false },
        { id: 6, src: "/chat/senior.svg", chatting: "그럼 그 웹에 여러분들이 시도할 수 있는 모든 것들을 이용해 해킹을 수행하고 깃발을 찾으면 점수를 얻습니다.", isQuestions: false },
        { id: 7, src: "/chat/junior.svg", chatting: "하지만 저는 웹 해킹에 대해서 아는게 없는걸요?", isQuestions: true },
        { id: 8, src: "/chat/senior.svg", chatting: "걱정하지 마세요! Java 프로그래밍언어나 1학년 때 배운 기초 웹 프로그래밍을 통해 기본기를 쌓고 네트워크 보안을 통해서 다양한 해킹 기법들을 공부할 수 있습니다!", isQuestions: false },
      ]
    },
    {
      id: 2,
      conversations: [
        { id: 1, src: "/chat/junior.svg", chatting: "암호학은 무엇이죠? 암호학?", isQuestions: true },
        { id: 2, src: "/chat/senior.svg", chatting: "암호학은 보안에서 어딜가나 빠지지 않는 것입니다. 암호학은 보안에 있어서 가장 중요한 역할을 수행하죠.", isQuestions: false },
        { id: 3, src: "/chat/senior.svg", chatting: "쉽게 말 해서 암호학은 평문을 암호문으로 바꾸는 행위를 말하는데, CTF에서도 암호학이 출제돼요!", isQuestions: false },
        { id: 4, src: "/chat/junior.svg", chatting: "암호학이라.. 저에게 암호학은 너무 어렵지 않을까요?", isQuestions: true },
        { id: 5, src: "/chat/senior.svg", chatting: "걱정하지 마세요! 2학년 때 배우는 암호학개론부터 시작해서 컴퓨터 기초와 네트워크 보안을 수강한다면 여러분도 충분히 해결할 수 있을거에요 ㅎㅎ", isQuestions: false },
        { id: 6, src: "/chat/senior.svg", chatting: "저희가 도와드릴게요!", isQuestions: false }
      ]
    },
    {
      id: 3,
      conversations: [
        { id: 1, src: "/chat/junior.svg", chatting: "포렌식! 포렌식은 들어본적 있는것 같아요!", isQuestions: true },
        { id: 2, src: "/chat/junior.svg", chatting: "증거인멸을 시도한 범죄자의 휴대폰을 포렌식 했다. 라는 기사를 본 적 있어요", isQuestions: true },
        { id: 3, src: "/chat/senior.svg", chatting: "정답입니다. 포렌식은 사이버 수사대나 법을 다루는 곳에서 데이터를 분석하고 증거를 수집하는데에 쓰여요", isQuestions: false },
        { id: 4, src: "/chat/senior.svg", chatting: "하드디스크나 네트워크 통신 이력, 메모리 캡쳐등이 주어지며 데이터 분석 및 증거를 수집하라는 문제로 출제돼요", isQuestions: false },
        { id: 5, src: "/chat/junior.svg", chatting: "어떤 수업을 들어야 풀 수 있을까요?", isQuestions: true },
        { id: 6, src: "/chat/senior.svg", chatting: "해킹 실무나, 보안 프로젝트와 비슷한 실제 사용되는 해킹을 다루는 수업을 듣는다면 충분히 해결할 수 있습니다.", isQuestions: false },
        { id: 7, src: "/chat/senior.svg", chatting: "화이팅!", isQuestions: false },
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
