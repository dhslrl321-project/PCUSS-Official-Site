import styled from "styled-components";
import { ifProp, theme } from "styled-tools";

export const Container = styled.section`
  ${theme("shortcuts.flexCenterColumn")};
`;

export const LabelGroup = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

export const LabelItem = styled.li`
  cursor: pointer;
  list-style: none;
  margin: 15px 15px;
  color: ${ifProp("active", "#4663FF", "#FFFFFF")};
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 900px;

  @media screen and (max-width: 924px) {
    width: 600px;
  }

  @media screen and (max-width: 768px) {
    width: 400px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 30px;
`;

export const InfoColumn_wonik = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Partition = styled.div`
  width: 600px;

  @media screen and (max-width: 924px) {
    width: 200px;
  }

  @media screen and (max-width: 768px) {
    width: 100px;
  }

  @media screen and (max-width: 480px) {
    width: 50px;
  }
`;
