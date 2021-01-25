import React from 'react'
import * as S from "./styles";
import Title from "../../atoms/Title";
import Label from "../../atoms/Label";
import Image from "../../atoms/Image";
const CarrerCard = ({ data }) => {
  const { carrerTitle, carrerDescription, src, isLeft } = data;
  return (
    <S.Container isLeft={isLeft}>
      <S.ImageWrapper>
        <Image src={src} />
      </S.ImageWrapper>
      <S.TextWrapper>
        <Title styleType="SubTitle">{carrerTitle}</Title>
        <Label styleType="SecondaryDescription">{carrerDescription}</Label>
      </S.TextWrapper>
    </S.Container>
  )
}

export default CarrerCard;