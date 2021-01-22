import styled from "styled-components";
import { theme } from 'styled-tools';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 450px;
  height: 85px;
  background: ${theme("palettes.cardBg")};
  border-radius: 10px;

  @media screen and (max-width: 768px){
    width: 100%;
  }
`;

export const IconColumn = styled.div`
  ${theme("shortcuts.flexCenter")};
  margin-left: 20px;
  width: 60px;
  height: auto;

  @media screen and (max-width: 768px){
    margin-left: 15px;
    width: 40px;
  }
  
`;

export const TextColumn = styled.div`
  ${theme("shortcuts.flexCenterColumn")};
  align-items: flex-start;
  margin-left: 10px;

  @media screen and (max-width: 480px){
    margin-left: 10px;
  }
  span:first-child {
    margin-bottom: 15px;
    font-weight: bolder;
  
    @media screen and (max-width: 768px){
      width: 210px;
    }
  
    @media screen and (max-width: 768px){
      width: 100%;
      margin-bottom: 5px;
    }
  }
  p:nth-child(2){
    width: 300px;
    
    @media screen and (max-width: 768px){
      margin-right: 5px;
      width: 180px;
    }
    
    @media screen and (max-width: 480px){
      padding-right: 5px;
      padding-bottom: 5px;
      width: 190px;
    }
  }
`