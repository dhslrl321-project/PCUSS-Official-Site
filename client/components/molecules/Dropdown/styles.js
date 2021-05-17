import styled from 'styled-components';
import { theme } from 'styled-tools';

// 드롭 다운
export const Container = styled.div`
  ${theme("shortcuts.flexCenterColumn")};
  align-items: flex-start;
  position: absolute;
  top: 21px;
`;

export const DropdownItem = styled.div`
  margin: 4px 0px;
  transition: 0.5s ease;
  display: flex;
  align-items: center;
`;