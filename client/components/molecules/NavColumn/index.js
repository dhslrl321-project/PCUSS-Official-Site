import Link from "../../atoms/Link";

import * as S from "./styles";

const NavColumn = ({ name, href }) => {
  return (
    <S.NavItemContainer>
      <S.NavItem>
        <Link styleType="NextLink" href={href}>
          {name}
        </Link>
      </S.NavItem>
    </S.NavItemContainer>
  )
}

export default NavColumn
