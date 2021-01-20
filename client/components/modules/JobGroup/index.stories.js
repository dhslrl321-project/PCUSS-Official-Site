import JobGroup from ".";

export default {
  title: "modules / JogGroup",
  component: JobGroup
}

const Template = (args) => <JobGroup {...args} />
const data = [
  { id: 1, tagName: "웹 취약점 공격" },
  { id: 2, tagName: "포렌식" },
  { id: 3, tagName: "시스템 취약점 공격" },
  { id: 4, tagName: "시큐어 코딩" },
  { id: 5, tagName: "관리 체계 점검" },
  { id: 6, tagName: "정보 보안 교육" },
  { id: 7, tagName: "랜섬웨어" },
  { id: 8, tagName: "악성코드 분석" },
  { id: 9, tagName: "포렌식" },
  { id: 10, tagName: "솔루션 정책 점검" },
  { id: 11, tagName: "정보보안 법률" },
  { id: 12, tagName: "보안 프로그램" },
  { id: 13, tagName: "소스코드 진단" },
  { id: 14, tagName: "APT 공격" },
  { id: 15, tagName: "패킷 분석" },
  { id: 16, tagName: "로그 분석" },
  { id: 17, tagName: "보안 솔루션" },
]
export const Rendering = Template.bind({});
Rendering.args = {
  data,
  handleJobCardOnClick: () => {
    console.log();
  }
}