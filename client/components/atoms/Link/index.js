import React from 'react'
import * as S from "./styles";
import NextLink from "next/link";

const Link = ({ styleType, children, href, as }) => {
  const props = {
    href,
    as,
  }
  if (styleType === "NextLink") return <NextLink href={href} as={as}><S.NextLink>{children}</S.NextLink></NextLink>;
  else if (styleType === "Anchor") return <S.Anchor {...props}>{children}</S.Anchor>;
  else return <></>;

}

export default Link;