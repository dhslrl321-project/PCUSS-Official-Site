import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Container = styled.div`
  ${theme("shortcuts.flexCenter")};
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  margin: 50px 0;
`;

export const ImageColumn = styled.div`
  ${theme("shortcuts.flexCenter")};
  flex-direction: column;
  width: 300px;
  img {
    border-radius: 10px;
  }
  margin: 10px 40px;
  @media screen and (max-width: 768px) {
    margin: 40px;
  }
`;

export const InfoColumn = styled.div`
  margin: 0 40px;
`;

export const Description = styled.div`
  ${theme("shortcuts.flexCenterColumn")};
  align-items: flex-start;
  span {
    margin: 8px 0;
  }
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;