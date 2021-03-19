import React from 'react'
import * as S from "./styles";
import Link from "../../atoms/Link";
import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
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
                <Link styleType="NextLink" href="/curriculum">커리큘럼</Link>
              </S.LinkWrap>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/carrer">졸업 후 진로</Link>
              </S.LinkWrap>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/professor">교수진</Link>
              </S.LinkWrap>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/interview">선배의 인터뷰</Link>
              </S.LinkWrap>
            </S.LinkItems>
            <S.LinkItems>
              <S.LinkTitle>Activities</S.LinkTitle>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/activity#seminar">세미나</Link>
              </S.LinkWrap>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/activity">CTF</Link>
              </S.LinkWrap>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/member">랩실</Link>
              </S.LinkWrap>
              <S.LinkWrap>
                <Link styleType="NextLink" href="/member#club">소모임</Link>
              </S.LinkWrap>
            </S.LinkItems>
          </S.LinkWrapper>
        </S.LinkContainer>

        <S.SocialMediaContainer>
          <S.SocialMediaWrap>
            <S.WebsiteRights>© 2021. LOCS All rights reserved.</S.WebsiteRights>
            <S.SocialIcons>
              <S.SocialIconLink href="https://www.facebook.com/배재대학교-사이버보안학과-366863963663450" arial-label="facebook">
                <FaFacebook />
              </S.SocialIconLink>
              <S.SocialIconLink href="https://www.instagram.com" arial-label="instagram">
                <FaInstagram />
              </S.SocialIconLink>
              <S.SocialIconLink href="https://www.youtube.com/channel/UCooRkW1fWFWMPJvuRbJt4eA" arial-label="facebook">
                <FaYoutube />
              </S.SocialIconLink>
              <S.SocialIconLink href="/" arial-label="facebook">
                <FaGithub />
              </S.SocialIconLink>
            </S.SocialIcons>
          </S.SocialMediaWrap>
        </S.SocialMediaContainer>

      </S.RootWrapper>
    </S.Container>
  )
}

export default Footer
