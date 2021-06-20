import Label from "../../atoms/Label";

import * as S from "./styles";

const JobTag = ({ tagName }) => {
  return (
    <S.Container>
      <Label styleType="Description" size="0.7">{tagName}</Label>
    </S.Container>
  )
}

export default JobTag
