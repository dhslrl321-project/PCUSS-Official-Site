import styled from "styled-components";
import { theme } from 'styled-tools';

export const Root = styled.div`
  ${theme("shortcuts.flexCenter")};
`;

export const Container = styled.div`
  ${theme("shortcuts.flexCenterColumn")};

  @media screen and (max-width: 1100px) {
    width: 100vw;
  }

  @media screen and (min-width: 1101px) {
    width: 1100px;
  }
`;

export const LectureWrapper = styled.div`
  ${theme("shortcuts.flexCenter")};

  position: relative;
  margin: 50px 0;
  flex-direction: column;

  @media screen and (max-width: 768px){
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

export const TitleWrap = styled.div`
  /* width: 920px; */

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 1100px) {
    width: calc(81.8vw + 20px);
  }

  @media screen and (min-width: 1101px) {
    width: 920px;
  }
`;

export const LectureWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  @media screen and (min-width: 481px) {
    margin-top: 10px;

    & > :nth-child(n + 3) {
      margin-top: 20px;
    }

    & > :nth-child(2n) {
      margin-left: 20px;
    }
  }

  @media screen and (max-width: 480px) {
    & > :nth-child(1) {
      margin-top: 10px;
    }

    & > :nth-child(n + 2) {
      margin-top: 20px;
    }
  }
`;