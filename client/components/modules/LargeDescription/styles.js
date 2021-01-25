import styled from 'styled-components';
import { theme, ifProp } from 'styled-tools';

export const Container = styled.div`
  ${theme("shortcuts.flexCenterColumn")}
`;
export const DescriptionWrapper = styled.div`
  width: 750px;
  margin-top: 50px;
  ${theme("shortcuts.flexCenterColumn")}
  @media screen and (max-width: 768px) {
    width: 430px;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

export const LabelWrapper = styled.div`
  margin: 10px 0;
`;
export const ImageWrapper = styled.div`
  display: ${ifProp("isImg", "flex", "none")};
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-top: 50px;
`;
export const SourceWrapper = styled.div`
  display: ${ifProp("isImg", "none", "flex")};
  justify-content: flex-end;
  align-items: center;
  color: ${theme("palettes.sourceColor")};
  font-style: italic;
  margin-top: 50px;
`;