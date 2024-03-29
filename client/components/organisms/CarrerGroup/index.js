import CarrerCard from "../../molecules/CarrerCard";

import * as S from "./styles";

const CarrerGroup = ({ data }) => {

  return (
    <S.Container>
      {data.map(carrer =>
        <S.CardWrapper data-aos="zoom-in" key={carrer.id}>
          <CarrerCard data={carrer} />
        </S.CardWrapper>)}
    </S.Container>
  )
}

export default CarrerGroup;
