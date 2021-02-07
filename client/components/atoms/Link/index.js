import React from 'react'
import * as S from "./styles";
import NextLink from "next/link";

const Link = ({ styleType, children, href, to, smooth, duration, spy, exact, offset, activeClass, as }) => {
  const props = {
    href,
    to,
    smooth,
    duration,
    spy,
    exact,
    offset,
    activeClass,
    as,
  }
  if (styleType === "NextLink") return <NextLink href={href} as={as}><S.NextLink>{children}</S.NextLink></NextLink>;
  else if (styleType === "Anchor") return <S.Anchor {...props}>{children}</S.Anchor>;
  else return <></>;

}

export default Link;