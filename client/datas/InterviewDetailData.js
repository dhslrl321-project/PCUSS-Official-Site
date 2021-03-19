import { qnaData as KimDoUnQna } from "./InterviewQnA/KimDoUn";
import { qnaData as SongTaeGiQna } from "./InterviewQnA/SongTaeGi";
import { qnaData as ParkJiHunQna } from "./InterviewQnA/ParkJiHun";
import { qnaData as LeeJaeRangQna } from "./InterviewQnA/LeeJaeRang";
import { qnaData as YunJungHoQna } from "./InterviewQnA/YunJungHo";
import { qnaData as KimWhaRimQna } from "./InterviewQnA/KimWhaRim";

export const data = {
  headerData: {
    title: "선배와의 인터뷰",
    titleDescription: "배재대학교 정보보안학과를 졸업하신 선배님들을 만나봅시다."
  },
  pageData: [
    {
      cardData: {
        label: "모의 해킹 전문가 김도언 선배님 (14학번)", src: "/interview/Interview1.JPG"
      },
      qnaData: KimDoUnQna
    },
    {
      cardData: {
        label: "정보보안 담당자 송태기 선배님 (14학번)", src: "/interview/Interview2.JPG"
      },
      qnaData: SongTaeGiQna
    },
    {
      cardData: {
        label: "보안 전문가 윤정호 선배님 (14학번)", src: "/interview/Interview3.JPG"
      },
      qnaData: YunJungHoQna
    },
    {
      cardData: {
        label: "보안 컨설팅 전문가 이재랑 선배님 (15학번)", src: "/interview/Interview4.jpg"
      },
      qnaData: LeeJaeRangQna
    },
    {
      cardData: {
        label: "사이버위협분석 전문가 박지훈 선배님 (15학번)", src: "/interview/Interview5.jpg"
      },
      qnaData: ParkJiHunQna
    },
    {
      cardData: {
        label: "리버싱 엔지니어 김화림 선배님 (16학번)", src: "/interview/Interview6.jpg"
      },
      qnaData: KimWhaRimQna
    }
  ]
};

export const storyData = {
  headerData: {
    title: "선배와의 인터뷰",
    titleDescription: "배재대학교 정보보안학과를 졸업하신 선배님들을 만나봅시다."
  },
  pageData: {
    cardData: {
      label: "", src: "/interview/Interview6.JPG"
    },
    qnaData: {
      list: [
        {
          id: 1,
          label: '""',
          largeDescriptionData: {
            descs: [
              { id: 1, content: "" },
              { id: 2, content: "" },
              { id: 3, content: "" },
              { id: 4, content: "" },
              { id: 5, content: "" },
              { id: 6, content: "" },
            ],
          }
        },
        {
          id: 2,
          label: '""',
          largeDescriptionData: {
            descs: [
              { id: 1, content: "" },
              { id: 2, content: "" },
              { id: 3, content: "" },
              { id: 4, content: "" },
              { id: 5, content: "" },
              { id: 6, content: "" },
            ],
          }
        },
        {
          id: 3,
          label: '""',
          largeDescriptionData: {
            descs: [
              { id: 1, content: "" },
              { id: 2, content: "" },
              { id: 3, content: "" },
              { id: 4, content: "" },
              { id: 5, content: "" },
              { id: 6, content: "" },
            ],
          }
        }
      ]
    }
  }
};