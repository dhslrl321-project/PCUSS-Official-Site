import React, { useState } from 'react'
import { useRouter } from "next/router";
import * as S from "./styles";
import Dropdown from "../Dropdown";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { FaBars } from "react-icons/fa";
import Link from "../../atoms/Link/";
const Navbar = ({ handleSidebarToggle }) => {

  const router = useRouter();
  const { pathname } = router;

  const [dropdown, setDropdown] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(true)

  const menuMouseOver = () => {
    setDropdown(true);
  }

  const menuMouseLeave = () => {
    setDropdown(false);
  }

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y > prevPos.y
    if (isShow !== hideOnScroll) setHideOnScroll(isShow)
  }, [hideOnScroll])


  return (
    <S.Header>
      <S.HeaderWrapper show={hideOnScroll}>
        <S.TitleColumn>
          <li><S.Link styleType="NextLink" href="/">배재대학교 정보보안학과</S.Link></li>
        </S.TitleColumn>
        <S.MobileIcon onClick={handleSidebarToggle}>
          <FaBars />
        </S.MobileIcon>
        <S.LinkColumn onMouseOver={menuMouseOver} onMouseLeave={menuMouseLeave}>
          {dropdown && <Dropdown show={dropdown} />}

          <S.LinkItem isFocus={pathname === "/curriculum" || pathname === "/carrer" || pathname === "/interview" ? true : false}>
            <Link styleType="NextLink" href="/curriculum">교육</Link>
          </S.LinkItem>
          <S.LinkItem isFocus={pathname === "/activity" ? true : false}>
            <Link styleType="NextLink" href="/activity">활동</Link>
          </S.LinkItem>
          <S.LinkItem isFocus={pathname === "/professor" || pathname === "/lab" ? true : false}>
            <Link styleType="NextLink" href="/professor">구성원</Link>
          </S.LinkItem>
        </S.LinkColumn>
      </S.HeaderWrapper>
    </S.Header >
  )
}

export default Navbar