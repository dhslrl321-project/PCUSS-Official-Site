import { useState } from "react";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { FaBars } from "react-icons/fa";

import NavColumn from "../../molecules/NavColumn";
import ExpandableNavColumn from "../../molecules/ExpandableNavColumn";

import { data as navigationData } from "../../../datas/NavigationData";
import * as S from "./styles";


const Navigation = ({ handleSidebarToggle }) => {

  const { dropdownData } = navigationData;

  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y > prevPos.y
    if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    if (currPos.y === 0) setHideOnScroll(true)
  }, [hideOnScroll])

  return (
    <S.Container>
      <S.NavWrapper show={hideOnScroll}>
        <S.NavColumnWrapper>
          <NavColumn name="배재대학교 정보보안학과" href="/" />
        </S.NavColumnWrapper>

        <S.MobileIcon onClick={handleSidebarToggle}>
          <FaBars />
        </S.MobileIcon>

        <S.Column>
          <S.ExpandableNavColumnWrapper>
            {dropdownData.map(data => <ExpandableNavColumn data={data} />)}
          </S.ExpandableNavColumnWrapper>
        </S.Column>
        <S.Column>
          <S.NavColumnWrapper>
            <NavColumn name="SignIn" href="/#" />
            <NavColumn name="SignUp" href="/#" />
          </S.NavColumnWrapper>
        </S.Column>
      </S.NavWrapper>
    </S.Container >
  )
}

export default Navigation
