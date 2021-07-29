import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  margin: 2% 0%;

  span: nth-child(2) {
    margin-right: 30%;
  }

  span: nth-child(3) {
    margin-right: 14%;
  }

  @media screen and (max-width: 924px) {
    justify-content: center;

    margin: 4% 0%;

    span: nth-child(2) {
      margin-left: 16%;
    }

    span: nth-child(3) {
      margin-left: -4%;
      margin-right: 18%;
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: center;

    margin: 3% 0%;

    span {
      font-size: 12px;
    }

    span: nth-child(2) {
      margin-right: 10%;
    }

    span: nth-child(3) {
      margin-left: 10%;
    }
  }

  @media screen and (max-width: 480px) {
    justify-content: center;
    span {
      font-size: 10px;
    }

    span: nth-child(2) {
      margin-left: 15%;
      margin-right: 0%;
    }

    span: nth-child(3) {
      margin-left: 17%;
    }
  }
`;

export const LabelWrapper = styled.div`
  display: flex;

  margin: 2% 0%;

  div: nth-child(1) {
    width: 10%;
    display: flex;
    justify-content: center;
    margin-left: 5.5%;
  }

  div: nth-child(2) {
    margin-left: 12%;
    padding-right: 5%;
  }

  div: nth-child(3) {
    width: 53%;
    padding-right: 10%;
  }

  @media screen and (max-width: 924px) {
    div: nth-child(2) {
      width: 50%;

      margin-left: 15%;
    }

    div: nth-child(3) {
      width: 54%;
    }
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 480px) {
  }
`;

export const Margin = styled.div`
  width: 100%;
`;
