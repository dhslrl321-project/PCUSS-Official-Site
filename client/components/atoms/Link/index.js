import NextLink from "next/link";

import * as S from "./styles";

const Link = ({ styleType, children, href, as }) => {
  const props = {
    href,
    as,
  }
  if (styleType === "NextLink") return <NextLink {...props}><S.NextLink>{children}</S.NextLink></NextLink>;
  else return <></>;

}

export default Link;