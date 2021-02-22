import React from 'react'
import * as S from "./styles";
import LabCard from '../LabCard';
const LabGroup = ({ data }) => {
  return (
    <S.Container>
      {data.map(labCard => <LabCard data={labCard.labData} />)}
    </S.Container>
  )
}

export default LabGroup
