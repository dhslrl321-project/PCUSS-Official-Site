import styled from 'styled-components';
import { theme, ifProp } from 'styled-tools';

export const Container = styled.nav`
  ${theme("shortcuts.flexCenter")};
  font-size: 1.2rem;
  font-weight: bolder;
  height: 80px;
  background: ${theme("palettes.background")};
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;

  width: 100%;
  max-width: 1500px;

  height: -80px;
  transition: 0.5s ease;
  transform: ${ifProp("show", "translate(0, 0);", "translate(0, -270%)")};
  z-index: 10;
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

export const NavColumnWrapper = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

export const ExpandableNavColumnWrapper = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: flex-start;
  margin: 40px 0;
`;

export const Column = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;