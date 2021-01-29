import React from 'react'
import * as S from "./styles";
import Label from "../../atoms/Label";

const JobTag = ({ tagName }) => {
  return (
    <S.Container>
      <Label styleType="Description" size="0.7">{tagName}</Label>
    </S.Container>
  )
}

export default JobTag
