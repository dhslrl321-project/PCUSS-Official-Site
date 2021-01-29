import React from 'react';
import * as S from './styles';
import Image from '../../atoms/Image';
import Label from '../../atoms/Label';

const SquircleCard = ({ data }) => {
  const { label, src } = data;
  
  return (
    <S.Container>
      <S.PictureColumn>
        <Image src={src} />
      </S.PictureColumn>
      <S.LabelColumn>
        <Label styleType="Label" size="1.0">{label}</Label>
      </S.LabelColumn>
    </S.Container>
  );
};

export default SquircleCard;