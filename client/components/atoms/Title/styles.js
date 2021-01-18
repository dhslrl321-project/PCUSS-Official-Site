import styled, { css } from 'styled-components';
import { theme } from "styled-tools";
import { down } from "styled-breakpoints";

const defaultStyle = css`
  font-weight: bold;
`;
export const MainTitle = styled.h1`
   ${defaultStyle}
   font-size: ${theme("fontSize.MainTitle")};

   ${down("sm")} {
     font-size: ${theme("fontSize.MainTitleM")};
   }

`;
export const SubTitle = styled.h3`
  ${defaultStyle}
  font-size: ${theme("fontSize.SubTitle")};

  ${down("sm")} {
    font-size: ${theme("fontSize.SubTitleM")};
  }

`;