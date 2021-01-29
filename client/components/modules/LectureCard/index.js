import React from 'react'
import * as S from "./styles";
import Image from '../../atoms/Image';
import Label from '../../atoms/Label';

const LectureCard = ({ data }) => {
  const { title, description, src } = data;
  return (
    <S.Container>
      <S.IconColumn>
        <Image src={src} />
      </S.IconColumn>
      <S.TextColumn>
        <Label styleType="Label" size="1.2">{title}</Label>
        <Label styleType="Description" size="0.7">{description}</Label>
      </S.TextColumn>
    </S.Container>
  )
}

export default LectureCard
