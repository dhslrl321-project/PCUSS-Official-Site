import styled from "styled-components";
import { ifProp } from "styled-tools";

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 10px;

  margin: 1.7% 0%;
  background: #2d333b;
  border-radius: 6px;

  &.test {
  }
`;

export const Items = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  span: nth-child(2) {
    display: flex;
    justify-content: flex-start;

    width: 20%;
  }

  @media screen and (max-width: 768px) {
    span {
      font-size: 12px;
    }

    span: nth-child(2) {
      width: 30%;
      margin-right: 10%;
    }
  }

  @media screen and (max-width: 480px) {
    span {
      font-size: 5px;
    }

    span: nth-child(2) {
      width: 35%;
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

export const Button = styled.button`
  display: flex;

  align-items: center;

  width: 26px;
  height: 26px;
  margin-left: 5%;

  background: none;
  border: solid #adbac7 1px;
  border-radius: 13px;

  cursor: pointer;

  color: #adbac7;

  @media screen and (max-width: 768px) {
    margin-right: -5%;
  }

  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
    border-radius: 10px;
  }
`;

export const Unset = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
  flex-direction: unset;

  div: nth-child(3) {
    margin-right: -1%;
  }
`;

export const CardWrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;

  max-height: ${ifProp("isHover", "initial", "0")};

  overflow: hidden;

  transition: all ease 1s;
`;

export const Test = styled.div`
  display: flex;
  justify-content: center;

  transform: ${ifProp("isHover", "rotateX(180deg)", "none")};

  transition: 0.5s;

  @media screen and (max-width: 480px) {
    margin-left: -4px;
  }
`;
