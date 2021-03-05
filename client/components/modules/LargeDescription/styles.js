import styled from 'styled-components';
import { theme, ifProp } from 'styled-tools';

export const Container = styled.div`
  ${theme("shortcuts.flexCenterColumn")}
  margin-top: 50px;
  width: 90%;
`;
export const DescriptionWrapper = styled.div`
  ${theme("shortcuts.flexCenterColumn")};
  width: 80%;
  margin-top: 50px;
  font-weight: 300;
`;

export const LabelWrapper = styled.div`
  margin: 18px 0;
`;
export const ImageWrapper = styled.div`
  display: ${ifProp("isImg", "flex", "none")};
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-top: 50px;

  @media screen and (max-width: 480px){
    width: 200px;
  }
`;
export const SourceWrapper = styled.div`
  display: ${ifProp("isImg", "none", "flex")};
  justify-content: flex-end;
  align-items: center;
  color: ${theme("palettes.sourceColor")};
  font-style: italic;
  margin-top: 50px;
`;