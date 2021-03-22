import { qnaData as KimDoUnQna } from "./InterviewQnA/KimDoUn";
import { qnaData as SongTaeGiQna } from "./InterviewQnA/SongTaeGi";
import { qnaData as ParkJiHunQna } from "./InterviewQnA/ParkJiHun";
import { qnaData as YunJungHo } from "./InterviewQnA/YunJungHo";
import { qnaData as ParkYoungSu } from "./InterviewQnA/ParkYoungSu";

export const data = {
  headerData: {
    title: "선배와의 인터뷰",
    titleDescription: "배재대학교 정보보안학과를 졸업하신 선배님들을 만나봅시다."
  },
  pageData: [
    {
      cardData: {
        label: "정보보안 담당자 송OO 선배님 (14학번)", src: "/interview/Interview1.JPG"
      },
      qnaData: SongTaeGiQna
    },
    {
      cardData: {
        label: "모의 해킹 전문가 김OO 선배님 (14학번)", src: "/interview/Interview2.JPG"
      },
      qnaData: KimDoUnQna
    },
    {
      cardData: {
        label: "사이버위협분석 전문가 박OO 선배님 (15학번)", src: "/interview/Interview3.JPG"
      },
      qnaData: ParkJiHunQna
    },
    {
      cardData: {
        label: "네트워크 분석 전문가 윤OO 선배님 (11학번)", src: "/interview/Interview4.jpg"
      },
      qnaData: YunJungHo
    },
    {
      cardData: {
        label: "풀스택 개발자 박OO 선배님 (14학번)", src: "/interview/Interview5.jpg"
      },
      qnaData: ParkYoungSu
    },
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