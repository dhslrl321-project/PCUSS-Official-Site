import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  & + & {
    margin-left: 40px;
  }

  @media screen and (max-width: 768px) {
    & + & {
      margin-left: 0px;
      margin-top: 50px;
    }
  }
`;