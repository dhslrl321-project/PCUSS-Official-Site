import styled from 'styled-components';
import { theme, ifProp } from 'styled-tools';

export const Container = styled.aside`
  position: fixed;
  z-index: 10;
  height: 100%;
  width: 100%;
  background: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ isSidebarOpen }) => (isSidebarOpen ? "100%" : "0")};
  top: ${({ isSidebarOpen }) => (isSidebarOpen ? "0" : '-100%')};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  li {
    margin: 20px;
  }
`;

export const SidebarLink = styled.li`
  list-style: none;
  color: ${ifProp("isFocus", theme("palettes.focusColor"), "none")};
`;