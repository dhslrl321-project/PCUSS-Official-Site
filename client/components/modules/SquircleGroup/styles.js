import styled from 'styled-components';

export const Container = styled.div`
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  width: 1100px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`

  @media screen and (min-width: 768px) {
    & + &:not(&:nth-child(4)) {
      margin-left: 100px;
    }

    &:nth-child(n + 4) {
      margin-top: 80px;
    }
  }

  @media screen and (max-width: 768px) {
    & + &:not(&:nth-child(2n - 1)) {
      margin-left: 20px;
    }
  }
`;