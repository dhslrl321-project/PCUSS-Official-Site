import React from 'react'
import * as S from "./styles";
import Link from "../../atoms/Link";
import { FaTimes } from "react-icons/fa";
const Sidebar = ({ isSidebarOpen, handleSidebarToggle }) => {
  return (
    <S.Container isSidebarOpen={isSidebarOpen} onClick={handleSidebarToggle}>
      <S.Icon >
        <FaTimes />
      </S.Icon>
      <S.SidebarWrapper>
        <S.SidebarMenu>
          <Link styleType="NextLink" href="/">Home</Link>
          <Link styleType="NextLink" href="/curriculum">커리큘럼</Link>
          <Link styleType="NextLink" href="/">졸업 후 진로</Link>
          <Link styleType="NextLink" href="/">선배의 인터뷰</Link>
          <Link styleType="NextLink" href="/">CTF</Link>
          <Link styleType="NextLink" href="/">세미나</Link>
          <Link styleType="NextLink" href="/">대외 활동</Link>
          <Link styleType="NextLink" href="/">교수진</Link>
          <Link styleType="NextLink" href="/">랩실</Link>
          <Link styleType="NextLink" href="/">소모임</Link>
        </S.SidebarMenu>
      </S.SidebarWrapper>
    </S.Container>
  )
}

export default Sidebar
