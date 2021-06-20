import React from 'react'
import * as S from "./styles";
import LabCard from '../../molecules/LabCard';
const LabGroup = ({ data }) => {
  return (
    <S.Container>
      {data.map(labCard => <LabCard key={labCard.id} data={labCard.labData} />)}
    </S.Container>
  )
}

export default LabGroup
