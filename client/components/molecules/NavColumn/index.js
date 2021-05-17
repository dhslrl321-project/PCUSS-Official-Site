import * as S from "./styles";

const NavColumn = ({ name }) => {
  return (
    <S.NavItemContainer>
      <S.NavItem>
        <span>{name}</span>
      </S.NavItem>
    </S.NavItemContainer>
  )
}

export default NavColumn
