import React from 'react'
import * as S from "./styles";
import NextLink from "next/link";

const Link = ({ styleType, children, href, as }) => {
  const props = {
    href,
    as,
  }
  if (styleType === "NextLink") return <NextLink {...props}><S.NextLink>{children}</S.NextLink></NextLink>;
  else return <></>;

}

export default Link;