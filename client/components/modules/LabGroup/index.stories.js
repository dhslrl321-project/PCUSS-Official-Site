import LabGroup from ".";

const data = [
  {
    id: 1,
    labData: {
      labMainData: {
        labName: "LOCS (Lab Of CyberSecurity)",
        labBirth: "연구실 창립일 : 2014.03 ~ 현재",
        labLocation: "연구실 위치 : S103, S202",
        src: "/onboarding.jpg"
      }, labInfoData: [
        {
          id: 1, infoTitle: "LOCS란?",
          infoDescription: "주로 웹 서비스에 대한 보안과 인증에 대한 연구가 많이 이루어집니다."
        },
        {
          id: 2,
          infoTitle: "연구 주제 및 과제",
          infoDescription: "인공지능과 웹 서비스 개발 및 보안 그리고 모의 해킹등 다양한 분야에서 활약하고 있습니다."
        },
        {
          id: 3, infoTitle: "성과 및 주요 활동", infoDescription: [
            { id: 1, description: "📌 배재대학교 최초 Best Of Best 합격" },
            { id: 2, description: "📌 CTF Power of XX 70팀 중 최종 등수 6등으로 수상" },
            { id: 3, description: "📌 논문 대회 수상" },
          ]
        },
        {
          id: 3, infoTitle: "성과 및 주요 활동", infoDescription: [
            { id: 1, description: "📌 배재대학교 최초 Best Of Best 합격" },
            { id: 2, description: "📌 CTF Power of XX 70팀 중 최종 등수 6등으로 수상" },
            { id: 3, description: "📌 논문 대회 수상" },
          ]
        },
      ]
    }
  },
  {
    id: 2, labData: {
      labMainData: {
        labName: "LOCS (Lab Of CyberSecurity)",
        labBirth: "연구실 창립일 : 2014.03 ~ 현재",
        labLocation: "연구실 위치 : S103, S202",
        src: "/onboarding.jpg"
      }, labInfoData: [
        {
          id: 1, infoTitle: "LOCS란?",
          infoDescription: "주로 웹 서비스에 대한 보안과 인증에 대한 연구가 많이 이루어집니다."
        },
        {
          id: 2,
          infoTitle: "연구 주제 및 과제",
          infoDescription: "인공지능과 웹 서비스 개발 및 보안 그리고 모의 해킹등 다양한 분야에서 활약하고 있습니다."
        },
        {
          id: 3, infoTitle: "성과 및 주요 활동", infoDescription: [
            { id: 1, description: "📌 배재대학교 최초 Best Of Best 합격" },
            { id: 2, description: "📌 CTF Power of XX 70팀 중 최종 등수 6등으로 수상" },
            { id: 3, description: "📌 논문 대회 수상" },
          ]
        },
        {
          id: 3, infoTitle: "성과 및 주요 활동", infoDescription: [
            { id: 1, description: "📌 배재대학교 최초 Best Of Best 합격" },
            { id: 2, description: "📌 CTF Power of XX 70팀 중 최종 등수 6등으로 수상" },
            { id: 3, description: "📌 논문 대회 수상" },
          ]
        },
      ]
    }
  },
  {
    id: 3, labData: {
      labMainData: {
        labName: "LOCS (Lab Of CyberSecurity)",
        labBirth: "연구실 창립일 : 2014.03 ~ 현재",
        labLocation: "연구실 위치 : S103, S202",
        src: "/onboarding.jpg"
      }, labInfoData: [
        {
          id: 1, infoTitle: "LOCS란?",
          infoDescription: "주로 웹 서비스에 대한 보안과 인증에 대한 연구가 많이 이루어집니다."
        },
        {
          id: 2,
          infoTitle: "연구 주제 및 과제",
          infoDescription: "인공지능과 웹 서비스 개발 및 보안 그리고 모의 해킹등 다양한 분야에서 활약하고 있습니다."
        },
        {
          id: 3, infoTitle: "성과 및 주요 활동", infoDescription: [
            { id: 1, description: "📌 배재대학교 최초 Best Of Best 합격" },
            { id: 2, description: "📌 CTF Power of XX 70팀 중 최종 등수 6등으로 수상" },
            { id: 3, description: "📌 논문 대회 수상" },
          ]
        },
        {
          id: 3, infoTitle: "성과 및 주요 활동", infoDescription: [
            { id: 1, description: "📌 배재대학교 최초 Best Of Best 합격" },
            { id: 2, description: "📌 CTF Power of XX 70팀 중 최종 등수 6등으로 수상" },
            { id: 3, description: "📌 논문 대회 수상" },
          ]
        },
      ]
    }
  }
]

export default {
  title: "modules / LabGroup",
  component: LabGroup
}

export const Rendering = () => <LabGroup data={data} />