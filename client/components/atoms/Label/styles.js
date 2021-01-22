import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';
import { down } from "styled-breakpoints";
const defaultStyle = css`
  transition: 0.5s ease;
`;

export const PrimaryLabel = styled.span`
  font-size: ${theme("fontSize.PrimaryLabel")};
  ${defaultStyle}
  @media screen and (max-width: 480px){
    font-size: ${theme("fontSize.PrimaryLabelM")}
  }
`;

export const SecondaryLabel = styled.span`
  font-size: ${theme("fontSize.SecondaryLabel")};
  ${defaultStyle}
  
  @media screen and (max-width: 480px){
    font-size: ${theme("fontSize.SecondaryLabelM")}
  }
`;

export const PrimaryDescription = styled.p`
  font-size: ${theme("fontSize.PrimaryDescription")};
  ${defaultStyle}
  @media screen and (max-width: 480px){
    font-size: ${theme("fontSize.PrimaryDescriptionM")}
  }
`;

export const SecondaryDescription = styled.p`
  font-size: ${theme("fontSize.SecondaryDescription")};
  ${defaultStyle}
  @media screen and (max-width: 480px){
    font-size: ${theme("fontSize.SecondaryDescriptoinM")}
  }
`;