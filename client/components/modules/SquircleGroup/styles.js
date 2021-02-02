import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  width: 1000px;

  @media screen and (max-width: 767px) {
    width: 500px;
  };

  @media screen and (max-width: 479px) {
    width: 280px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    & + &:not(:nth-child(4)) {
      margin-left: 100px;
    }

    &:nth-child(n + 4) {
      margin-top: 80px;
    }
  };

  @media screen and (min-width: 480px) and (max-width: 767px) {
    & + &:not(:nth-child(4)) {
      margin-left: 20px;
    }

    &:nth-child(n + 4) {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 479px) {
    & + &:not(:nth-child(2n - 1)) {
      margin-left: 30px;
    }

    &:nth-child(n + 3) {
      margin-top: 20px;
    }
  };
`;