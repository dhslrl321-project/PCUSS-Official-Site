import React from 'react';
import * as S from './styles';
import Image from '../../atoms/Image';
import Label from '../../atoms/Label';

const CircleCard = ({ data, isDescVisible }) => {
  const { label, description, src } = data;

  return (
    <S.Container>
      <S.PictureColumn>
        <Image src={src} />
      </S.PictureColumn>
      <S.LabelColumn>
        <Label styleType="Label" size="1.2">{label}</Label>
      </S.LabelColumn>
      <S.DescColumn isDescVisible={isDescVisible}>
        <Label styleType="Description" size="0.8">{description}</Label>
      </S.DescColumn>
    </S.Container>
  );
};

export default CircleCard;

CircleCard.defaultProps = {
  isDescVisible: false,
};