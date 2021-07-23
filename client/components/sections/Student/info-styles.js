import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100%;
  padding: 10px;

  border-radius: 6px;
`;

export const Column = styled.div`
  display: flex;
  width: 100%;
  div:nth-child(2) {
    margin-left: 9%;
    background: red;
    width: 90%;
  }

  div:nth-child(3) {
    margin-left: 1%;
    background: red;
  }

  div:nth-child(4) {
    background: red;
    display: flex;
    justify-content: flex-end;
    padding: 0;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  padding: 0 3%;
`;
