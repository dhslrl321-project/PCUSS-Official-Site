import React from 'react'
import * as S from "./styles";
import Link from "../../atoms/Link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <S.Container>
      <S.RootWrapper>
        <S.LinkContainer>
          <S.LinkWrapper>
            <S.LinkItems>
              <S.LinkTitle>About Us</S.LinkTitle>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/">우리의 강점</Link>
              </S.LinkWrap>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/">우리가 추구하는 가치</Link>
              </S.LinkWrap>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/">우리가 걸어온 길</Link>
              </S.LinkWrap>
            </S.LinkItems>
            <S.LinkItems>
              <S.LinkTitle>See More</S.LinkTitle>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/">커리큘럼</Link>
              </S.LinkWrap>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/">졸업 후 진로</Link>
              </S.LinkWrap>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/">교수진</Link>
              </S.LinkWrap>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/">선배의 인터뷰</Link>
              </S.LinkWrap>
            </S.LinkItems>
            <S.LinkItems>
              <S.LinkTitle>Activities</S.LinkTitle>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/">세미나</Link>
              </S.LinkWrap>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/">CTF</Link>
              </S.LinkWrap>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/">랩실</Link>
              </S.LinkWrap>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/">소모임</Link>
              </S.LinkWrap>
            </S.LinkItems>
          </S.LinkWrapper>
        </S.LinkContainer>

        <S.SocialMediaContainer>
          <S.SocialMediaWrap>
            <S.WebsiteRights>배재대학교 정보보안학과 LOCS All rights reserved.</S.WebsiteRights>
            <S.SocialIcons>
              <S.SocialIconLink href="/" arial-label="facebook">
                <FaFacebook />
              </S.SocialIconLink>
              <S.SocialIconLink href="/" arial-label="facebook">
                <FaInstagram />
              </S.SocialIconLink>
              <S.SocialIconLink href="/" arial-label="facebook">
                <FaYoutube />
              </S.SocialIconLink>
              <S.SocialIconLink href="/" arial-label="facebook">
                <FaTwitter />
              </S.SocialIconLink>
            </S.SocialIcons>
          </S.SocialMediaWrap>
        </S.SocialMediaContainer>

      </S.RootWrapper>
    </S.Container>
  )
}

export default Footer
