import React from 'react'
import { useRouter } from "next/router";
import * as S from "./styles";
import Link from "../../atoms/Link";
import { FaTimes } from "react-icons/fa";
const Sidebar = ({ isSidebarOpen, handleSidebarToggle }) => {

  const router = useRouter();
  const { pathname } = router;

  return (
    <S.Container isSidebarOpen={isSidebarOpen} onClick={handleSidebarToggle}>
      <S.Icon >
        <FaTimes />
      </S.Icon>
      <S.SidebarWrapper>
        <S.SidebarMenu>
          <S.SidebarLink isFocus={pathname === "/" ? true : false}>
            <Link styleType="NextLink" href="/">Home</Link>
          </S.SidebarLink>
          <S.SidebarLink isFocus={pathname === "/curriculum" ? true : false}>
            <Link styleType="NextLink" href="/curriculum">커리큘럼</Link>
          </S.SidebarLink>
          <S.SidebarLink isFocus={pathname === "/carrer" ? true : false}>
            <Link styleType="NextLink" href="/carrer">졸업 후 진로</Link>
          </S.SidebarLink>
          <S.SidebarLink isFocus={pathname === "/interview" ? true : false}>
            <Link styleType="NextLink" href="/interview">선배의 인터뷰</Link>
          </S.SidebarLink>
          <S.SidebarLink isFocus={pathname === "/activity" ? true : false}>
            <Link styleType="NextLink" href="/activity">CTF</Link>
          </S.SidebarLink>
          <S.SidebarLink isFocus={pathname === "/activity" ? true : false}>
            <Link styleType="NextLink" href="/activity">세미나</Link>
          </S.SidebarLink>
          <S.SidebarLink isFocus={pathname === "/activity" ? true : false}>
            <Link styleType="NextLink" href="/activity">대외 활동</Link>
          </S.SidebarLink>
          <S.SidebarLink isFocus={pathname === "/professor" ? true : false}>
            <Link styleType="NextLink" href="/professor">교수진</Link>
          </S.SidebarLink>
          <S.SidebarLink isFocus={pathname === "/lab" ? true : false}>
            <Link styleType="NextLink" href="/lab">랩실</Link>
          </S.SidebarLink>
          <S.SidebarLink isFocus={pathname === "/lab" ? true : false}>
            <Link styleType="NextLink" href="/lab">소모임</Link>
          </S.SidebarLink>
        </S.SidebarMenu>
      </S.SidebarWrapper>
    </S.Container>
  )
}

export default Sidebar
