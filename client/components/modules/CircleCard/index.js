import React from 'react';
import * as S from './styles';
import Image from '../../atoms/Image';
import Label from '../../atoms/Label';

const CircleCard = ({ data }) => {
  const { label, src } = data;

  return (
    <S.Container>
      <S.PictureColumn>
        <Image styleType="Picture" src={src} />
      </S.PictureColumn>
      <S.TextColumn>
        <Label styleType="SecondaryLabel">{label}</Label>
      </S.TextColumn>
    </S.Container>
  );
};

export default CircleCard;