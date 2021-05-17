import LabInfoCard from ".";

export default {
  title: "molecules / LabInfoCard",
  component: LabInfoCard
}

const data = {
  infoTitle: "LOCS란?",
  infoDescription: "주로 웹 서비스에 대한 보안과 방법을 생각합니다."
}

const listDescData = {
  infoTitle: "주요 성과 및 결과",
  infoDescription: [
    { id: 1, description: "📌 배재대학교 최초 Best Of Best 합격" },
    { id: 2, description: "📌 CTF Power of XX 70팀 중 최종 등수 6등으로 수상" },
    { id: 3, description: "📌 논문 대회 수상" },
  ]
}

const Template = args => <LabInfoCard {...args} />

export const Default = Template.bind({});
Default.args = {
  data
}

export const ListDescription = Template.bind({});
ListDescription.args = {
  data: listDescData
}