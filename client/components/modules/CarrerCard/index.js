import React from 'react'
import * as S from "./styles";
import Title from "../../atoms/Title";
import Label from "../../atoms/Label";
import Image from "../../atoms/Image";
const CarrerCard = ({ data }) => {
  const { id, carrerTitle, carrerDescription, src } = data;
  return (
    <S.Container isLeft={parseInt(id) % 2 != 0}>
      <S.ImageWrapper>
        <Image src={src} />
      </S.ImageWrapper>
      <S.TextWrapper>
        <Title styleType="SubTitle">{carrerTitle}</Title>
        <Label styleType="Description" size="0.8">{carrerDescription}</Label>
      </S.TextWrapper>
    </S.Container>
  )
}

export default CarrerCard;