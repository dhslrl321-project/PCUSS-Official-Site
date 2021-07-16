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

export const InfoGroup = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100vw;

  margin: 30px;
`;

export const InfoItemForStudent = styled.div`
  width: 150px;

  display: flex;
  justify-content: space-between;
`;

export const InfoItemForActivity = styled.div`
  width: 250px;

  display: flex;
  justify-content: space-between;
`;
