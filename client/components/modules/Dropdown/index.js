import React, { useState, useEffect } from 'react'
import * as S from "./styles";
import Link from "../../atoms/Link";

const Dropdown = ({ show }) => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (show) setIsOpen(true);
  }, [])

  return (
    <S.Container show={isOpen}>
      <S.NavColumn>
        <S.NavItem>
          <Link styleType="NextLink" href="/curriculum">커리큘럼</Link>
        </S.NavItem>
        <S.NavItem>
          <Link styleType="NextLink" href="/carrer">졸업 후 진로</Link>
        </S.NavItem>
        <S.NavItem>
          <Link styleType="NextLink" href="/interview">선배의 인터뷰</Link>
        </S.NavItem>
      </S.NavColumn>
      <S.NavColumn>
        <S.NavItem>
          <Link styleType="NextLink" href="/activity">CTF</Link>
        </S.NavItem>
        <S.NavItem>
          <Link styleType="NextLink" href="/activity">세미나</Link>
        </S.NavItem>
        <S.NavItem>
          <Link styleType="NextLink" href="/activity">컨퍼런스</Link>
        </S.NavItem>
      </S.NavColumn>
      <S.NavColumn>
        <S.NavItem>
          <Link styleType="NextLink" href="/professor">교수진</Link>
        </S.NavItem>
        {/* <S.NavItem>
          <Link styleType="NextLink" href="/">랩실</Link>
        </S.NavItem>
        <S.NavItem>
          <Link styleType="NextLink" href="/">소모임</Link>
        </S.NavItem> */}
      </S.NavColumn>
    </S.Container>
  )
}

export default Dropdown
