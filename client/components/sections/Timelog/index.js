import React from 'react'
import SectionHeader from '../../modules/SectionHeader';
import TimelogGroup from '../../modules/TimelogGroup';
import * as S from "./styles";

const Timelog = ({ data }) => {
  const { headerData, timeLogData } = data;
  const { title, description } = headerData;
  return (
    <S.Container data-aos="zoom-in-up">
      <SectionHeader title={title} description={description} />
      <TimelogGroup data={timeLogData} />
    </S.Container>
  )
}

export default Timelog
