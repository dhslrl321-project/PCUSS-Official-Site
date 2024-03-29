import Label from "../../atoms/Label"
import JobTag from "../JobTag";
import * as S from "./styles";

const LabInfoCard = ({ data }) => {
  const { infoTitle, infoDescription } = data;

  const isListDescription = Array.isArray(infoDescription);

  return (
    <S.Container>
      <S.TitleColumn>
        <Label styleType="Label" size="1">{infoTitle}</Label>
      </S.TitleColumn>
      <S.DescriptionColumn>
        {isListDescription ?
          infoDescription.map(descItem =>
            <S.DescriptionColumn key={descItem.id}>
              <Label styleType="Description" size="0.9">
                {descItem.description}
              </Label>
            </S.DescriptionColumn>) :
          <Label styleType="Description" size="0.9">
            {infoDescription}
          </Label>}
      </S.DescriptionColumn>
      <S.Partition />
    </S.Container >
  )
}

export default LabInfoCard
