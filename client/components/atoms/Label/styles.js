import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';


export const PrimaryLabel = styled.span`
  font-size: ${theme("fontSize.PrimaryLabel")};
`;

export const SecondaryLabel = styled.span`
  font-size: ${theme("fontSize.SecondaryLabel")};
`;

export const PrimaryDescription = styled.p`
  font-size: ${theme("fontSize.PrimaryDescription")};
`;

export const SecondaryDescription = styled.p`
  font-size: ${theme("fontSize.SecondaryDescription")};
`;