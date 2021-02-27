import styled from 'styled-components';
import { theme, ifProp } from 'styled-tools';
export const Header = styled.header`
  ${theme("shortcuts.flexCenter")};
  font-size: 1.2rem;
  font-weight: bolder;
  height: 80px;
  list-style: none;
  background: ${theme("palettes.background")};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  height: -80px;
  transition: 0.5s ease;
  transform: ${ifProp("show", "translate(0, 0);", "translate(0, -100%)")};
  background: transparent;
  z-index: 10;
`;

export const TitleColumn = styled.div`
  padding: 35px;
  display: flex;
  align-items: center;
  justify-content: center;  
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    position: absolute;
    top: 15px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  

  @media screen and (max-width: 768px) {
    display: none;
  }

`;

export const LinkItem = styled.li`
  margin: 0 20px;
  padding: 30px 10px;

  border-bottom: ${ifProp("isFocus", "3px solid", "none")};
  color: ${ifProp("isFocus", theme("palettes.focusColor"), "none")};
`;

export const Link = styled.a`
  cursor: pointer;
`;