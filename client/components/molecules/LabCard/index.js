import { Image } from '../../atoms/Image/style'
import Label from '../../atoms/Label';
import LabInfoCard from '../LabInfoCard'

import * as S from "./styles";

const LabCard = ({ data }) => {
  const { labMainData, labInfoData } = data;
  return (
    <S.Container data-aos="zoom-in-up">
      <S.ImageColumn>
        <Image src={labMainData.src} />
        <S.Description>
          <Label styleType="Label" size="1.1">{labMainData.labName}</Label>
          <Label styleType="Label" size="0.9">{labMainData.labBirth}</Label>
          <Label styleType="Label" size="0.9">{labMainData.labLocation}</Label>
        </S.Description>
      </S.ImageColumn>
      <S.InfoColumn>
        {labInfoData.map(infoData =>
          <LabInfoCard key={infoData.id} data={infoData} />)}
      </S.InfoColumn>
    </S.Container>
  )
}

export default LabCard
