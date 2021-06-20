import SectionHeader from "../../organisms/SectionHeader";
import CarrerGroup from '../../organisms/CarrerGroup';
import LargeDescription from "../../organisms/LargeDescription";

import * as S from "./styles";

const Carrer = ({ data }) => {
  const { headerData, carrerData, largeDescriptionData } = data
  const { title, description } = headerData;

  return (
    <S.Container data-aos="zoom-in-up">
      <SectionHeader title={title} description={description} />
      <CarrerGroup data={carrerData} />
      <LargeDescription data={largeDescriptionData} styleType="WithQuotation" />
    </S.Container>
  )
}

export default Carrer