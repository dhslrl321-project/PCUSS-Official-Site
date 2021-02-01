import React from 'react';
import * as S from './styles';
import Link from '../../atoms/Link';
import Image from '../../atoms/Image';
import Label from '../../atoms/Label';

const SquircleCard = ({ data }) => {
  const { label, src } = data;
  
  return (
    <S.Container>
      <Link styleType="NextLink" href="#">
        <S.PictureColumn>
          <Image src={src} />
        </S.PictureColumn>
      </Link>
      <S.LabelColumn>
        <Label styleType="Label">{label}</Label>
      </S.LabelColumn>
    </S.Container>
  );
};

export default SquircleCard;