import React from 'react'
import * as S from "./styles";

const Title = ({ styleType, children }) => {
  if (styleType === "MainTitle") return <S.MainTitle>{children}</S.MainTitle>
  else if (styleType === "SubTitle") return <S.SubTitle>{children}</S.SubTitle>
  else return <></>;
}

export default Title
