import React from 'react';
import * as S from './styles';
import Link from '../../atoms/Link';
import Image from '../../atoms/Image';
import Label from '../../atoms/Label';

const SquircleCard = ({ data, as }) => {
  const { label, src } = data;
  const path = `/interview/${as}`;

  return (
    <S.Container>
      <Link styleType="NextLink" href="/interview/[id]" as={path}>
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