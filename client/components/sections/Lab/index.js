import * as S from "./styles";

import SectionHeader from "../../organisms/SectionHeader";
import LabGroup from "../../organisms/LabGroup";

const Lab = ({ data }) => {

  const { headerData, labData } = data;

  const { title, titleDescription } = headerData;

  return (
    <S.Container id="lab">
      <SectionHeader title={title} description={titleDescription} />
      <LabGroup data={labData} />
    </S.Container>
  )
}

export default Lab
