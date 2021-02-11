import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';

export const Styles = css`
  font-size: ${theme("fontSizes.FirstLabel")};
  font-weight: bold;
  transition: 0.3s ease;
  letter-spacing: 0.5px;
  cursor: pointer;
  :hover {
    color: #023CFF;
  }
  :active {
    color: #023CFF;
  }
`;

export const NextLink = styled.a`
  ${Styles};
`;