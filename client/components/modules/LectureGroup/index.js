import React from 'react'
import * as S from "./styles";
import Title from "../../atoms/Title";
import LectureCard from "../LectureCard";
const LectureGroup = ({ data }) => {
  return (
    <S.Root>
      <S.Container>
        <S.LectureWrapper>
          <S.TitleWrap>
            <Title styleType="SubTitle">{data.lectureTitle}</Title>
          </S.TitleWrap>
          <S.LectureWrap>
            {data.lectures.map(lecture => (
                <LectureCard key={lecture.id} data={lecture} />
            ))}
          </S.LectureWrap>
        </S.LectureWrapper>
      </S.Container>
    </S.Root>
  )
}

export default LectureGroup
