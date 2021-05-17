import { dropdownData } from "./data";

import NavColumn from "../../molecules/NavColumn";
import ExpandableNavColumn from "../../molecules/ExpandableNavColumn";

import * as S from "./styles";


const Navigation = () => {
  return (
    <S.Container>
      <S.NavWrapper>

        <S.NavColumnWrapper>
          <NavColumn name="배재대학교 정보보안학과" />
        </S.NavColumnWrapper>

        <S.ExpandableNavColumnWrapper>
          {dropdownData.map(data => <ExpandableNavColumn data={data} />)}
        </S.ExpandableNavColumnWrapper>

        <S.NavColumnWrapper>
          <NavColumn name="로그인" />
          <NavColumn name="회원가입" />
        </S.NavColumnWrapper>

      </S.NavWrapper>
    </S.Container >
  )
}

export default Navigation
