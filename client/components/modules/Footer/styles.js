import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Container = styled.footer`
  background: #181818;
`;

export const RootWrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 768px){
    padding-top: 32px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`;

export const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const LinkTitle = styled.h1`
  font-size: 0.9rem;
  margin-bottom: 16px;
`;

export const LinkWrap = styled.div`
  text-decoration: none;
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
`;

export const SocialMediaContainer = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled.a`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
