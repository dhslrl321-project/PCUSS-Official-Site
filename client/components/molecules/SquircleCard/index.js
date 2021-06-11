import Link from '../../atoms/Link';
import Image from '../../atoms/Image';
import Label from '../../atoms/Label';

import * as S from './styles';

const SquircleCard = ({ data, as, isDetail }) => {
  const { label, src } = data;
  const path = `/interview/${as}`;

  const link = <Link styleType="NextLink" href="/interview/[id]" as={path}>
    <S.PictureColumn isDetail={isDetail}>
      <Image src={src} />
    </S.PictureColumn>
  </Link>;

  const picture = <S.PictureColumn isDetail={isDetail}>
    <Image src={src} />
  </S.PictureColumn>;

  return (
    <S.Container>
      {isDetail ? picture : link}
      <S.LabelColumn>
        <Label styleType="Label" size="0.95">{label}</Label>
      </S.LabelColumn>
    </S.Container>
  );
};

export default SquircleCard;