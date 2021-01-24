import React from 'react'
import * as S from "./styles";
import CarrerCard from "../CarrerCard";

const CarrerGroup = ({ data }) => {

  return (
    <S.Container>
      {data.map(carrer =>
        <S.CardWrapper key={carrer.id}>
          <CarrerCard data={carrer} />
        </S.CardWrapper>)}
    </S.Container>
  )
}

export default CarrerGroup;
