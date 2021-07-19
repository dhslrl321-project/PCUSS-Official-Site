import styled from "styled-components";
import { ifProp } from "styled-tools";

export const Container = styled.div`
  display: flex;

  justify-content: space-between;
  width: 900px;
  height: 40px;
  background: #2d333b;

  border-radius: 2px;

  @media screen and (max-width: 900px) {
    width: 600px;
  }

  @media screen and (max-width: 768px) {
    width: 500px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

export const Button = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;

  background: none;
  border: solid #adbac7 1px;
  border-radius: 50px;

  cursor: pointer;

  color: black;

  background: ${ifProp("isHover", "red", "wheat")};
`;

export const Items = styled.div`
  display: flex;

  width: 180px;
  height: 40px;

  margin-right: 90px;
  margin-left: 35px;
  align-items: center;
  justify-content: space-between;

  // background: blue;
`;
