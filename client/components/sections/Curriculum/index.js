import React from 'react'
import * as S from "./styles";
import SectionHeader from "../../modules/SectionHeader";
import LectureGroup from '../../modules/LectureGroup';

const Curriculum = ({ datas }) => {
  return (
    <S.Container>
      <SectionHeader data-aos="zoom-in-up" title="커리큘럼" description="정보보안전문가가 되기 위해 4년간 이런 것들을 배우고 경험해요" />
      {datas.curriculumDatas.map(curriculum => (
        <S.LectureWrap key={curriculum.id}>
          <LectureGroup data={curriculum} />
        </S.LectureWrap>
      ))}
    </S.Container>
  )
}

export default Curriculum
