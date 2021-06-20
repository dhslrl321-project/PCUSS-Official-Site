import TimelogGroup from ".";

const data = [
  { id: 1, year: "2014", content: "배재대학교 사이버 보안학과 창립", isLeft: false },
  { id: 2, year: "2014", content: "제 1회 학술회", isLeft: true },
  { id: 3, year: "2015", content: "사이버 교욱센터 대상", isLeft: false },
  { id: 4, year: "2016", content: "논문 수상", isLeft: true },
  { id: 5, year: "2016", content: "LOCS 설립", isLeft: false },
  { id: 6, year: "2017", content: "BOB 10기 합격", isLeft: true },
  { id: 7, year: "2018", content: "소마 12기 합격", isLeft: false },
  { id: 8, year: "2019", content: "DDOS 공격 원천 차단", isLeft: true },
  { id: 9, year: "2020", content: "보안 관제센터 설립", isLeft: false },
  { id: 10, year: "2020", content: "hello", isLeft: true },
]

export default {
  title: "organisms / TimelogGroup",
  component: TimelogGroup
}

export const Render = () => <TimelogGroup data={data} />