import Image from '../../atoms/Image';
import Label from '../../atoms/Label';

import * as S from "./styles";

const LectureCard = ({ data }) => {
  const { title, description, src } = data;
  return (
    <S.Container>
      <S.IconColumn>
        <Image src={src} />
      </S.IconColumn>
      <S.TextColumn>
        <Label styleType="Label" size="1.2">{title}</Label>
        <Label styleType="Description" size="0.8">{description}</Label>
      </S.TextColumn>
    </S.Container>
  )
}

export default LectureCard
