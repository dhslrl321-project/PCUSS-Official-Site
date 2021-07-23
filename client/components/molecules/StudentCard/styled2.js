import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100%;
  padding: 10px;

  background: #2d333b;
  border-radius: 6px;
`;

export const Column = styled.div`
  display: flex;
  width: 100%;
  div:nth-child(2) {
    background: red;
    width: 50%;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  padding: 0 3%;
`;
