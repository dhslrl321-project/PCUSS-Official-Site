import styled from "styled-components";
import { ifProp, prop } from "styled-tools";

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

  @media screen and (max-width: 924px) {
    span: nth-child(2) {
      width: 35%;
      margin-right: -15%;
    }
  }

  @media screen and (max-width: 768px) {
    span: nth-child(2) {
      width: 30%;
      margin-right: 10%;
    }
  }

  @media screen and (max-width: 480px) {
    span: nth-child(2) {
      margin-right: -3%;
      width: 40%;
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
  justify-content: center;
  align-items: center;

  width: 26px;
  height: 26px;
  margin-left: 5%;

  background: none;
  border: solid 1px;
  border-radius: 13px;

  border-color: ${ifProp("isHover", "#FF6B6B", "#5EE5BC")};

  cursor: pointer;

  color: #adbac7;

  @media screen and (max-width: 768px) {
    margin-right: -5%;
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
  width: 100%;

  height: ${ifProp("isHover", prop("count"), "0")};
  overflow: hidden;

  transition: 1s ease;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  transform: ${ifProp("isHover", "rotate(-180deg)", "rotate(0deg)")};
  color: ${ifProp("isHover", "#FF6B6B", "#5EE5BC")};

  transition: all ease 0.5s;
`;
