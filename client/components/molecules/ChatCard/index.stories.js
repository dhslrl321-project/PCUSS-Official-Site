import ChatCard from ".";

export default {
  title: "molecules / ChatCard",
  component: ChatCard
}

const data = [
  {
    id: 1,
    src: "/chat/junior.svg",
    chatting: "정보보안학과에선 어떤 능력을 요구하나요?",
    isQuestions: true
  },
  {
    id: 2,
    src: "/chat/senior.svg",
    chatting: "해킹이라는 것은 많은 시간이 걸립니다.그에 따라서 당연하게 끈기가 없다면, 성공하기는 힘들죠. 그러니까 끈기가 있어야 합니다.",
    isQuestions: false
  }
]

const Template = (args) => <ChatCard {...args} />

export const Junior = Template.bind({});
Junior.args = {
  data: data[0]
}

export const Senior = Template.bind({});
Senior.args = {
  data: data[1]
}