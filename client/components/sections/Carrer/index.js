import SectionHeader from "../../modules/SectionHeader";
import CarrerGroup from '../../modules/CarrerGroup';
import LargeDescription from "../../modules/LargeDescription";
import * as S from "./styles";

const Carrer = ({ data }) => {
  const { headerData, carrerData, largeDescriptionData } = data
  const { title, description } = headerData;

  return (
    <S.Container>
      <SectionHeader title={title} description={description} />
      <CarrerGroup data={carrerData} />
      <LargeDescription data={largeDescriptionData} />
    </S.Container>
  )
}

export default Carrer