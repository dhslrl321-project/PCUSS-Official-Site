import React from 'react'
import * as S from "./styles";
import Label from "../../atoms/Label";

const JobTag = ({ tagName }) => {
  return (
    <S.Container>
      <Label styleType="SecondaryDescription" >{tagName}</Label>
    </S.Container>
  )
}

export default JobTag
