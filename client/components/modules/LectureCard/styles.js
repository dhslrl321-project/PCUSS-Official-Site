import styled from "styled-components";
import { theme } from 'styled-tools';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 90px;
  background: ${theme("palettes.cardBg")};
  border-radius: 10px;

  @media screen and (max-width: 480px) {
    width: 90vw;
  }

  @media screen and (min-width: 481px) and (max-width: 1100px) {
    width: 40.9vw;
  }

  @media screen and (min-width: 1101px) {
    width: 450px;
  }
`;

export const IconColumn = styled.div`
  ${theme("shortcuts.flexCenter")};
  margin: 0 20px;
  width: 40px;
  height: auto;

  @media screen and (max-width: 768px){
    margin: 0 15px;
    width: 40px;
  }
`;

export const TextColumn = styled.div`
  ${theme("shortcuts.flexCenterColumn")};
  align-items: flex-start;
  margin-left: 10px;
  /* Label */
  span {
    margin-bottom: 15px;
    font-weight: bolder;

    @media screen and (max-width: 480px) {
      width: 70vw;
    }

    @media screen and (min-width: 481px) and (max-width: 1100px) {
      width: 28vw;
    }

    @media screen and (min-width: 1101px) {
      width: 220px;
    }   
  }
  /* Description */
  p {

    font-weight: 300;

    @media screen and (max-width: 480px) {
      width: 60vw;
    }

    @media screen and (min-width: 481px) and (max-width: 1100px) {
      width: 27.27vw;
    } 

    @media screen and (min-width: 1101px) {
      width: 300px;
    }
  }
`