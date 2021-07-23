import styled from "styled-components";
import { ifProp } from "styled-tools";

export const Container = styled.div`
  display: flex;

  width: 100%;
  padding: 10px;

  margin: 1.7% 0%;
  background: #2d333b;
  border-radius: 6px;
`;

export const Button = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;

  background: none;
  border: solid #adbac7 1px;
  border-radius: 13px;

  cursor: pointer;

  color: #adbac7;
  // background: ${ifProp("isHover", "red", "wheat")};

  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
    border-radius: 10px;
  }
`;

export const Items = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    span {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 480px) {
    span {
      font-size: 5px;
    }
  }
`;

export const Partition = styled.div`
  width: 800px;

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

export const Margin = styled.div`
  width: 20%;

  @media screen and (max-width: 924px) {
    width: 25%;
  }

  @media screen and (max-width: 768px) {
    width: 30%;
  }

  @media screen and (max-width: 480px) {
    width: 35%;
  }

  &.totalNumber {
    width: 10%;
    margin-left: 15px;
  }
`;
