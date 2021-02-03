import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div:nth-child(2) {
    margin-bottom: 85px;
  }

  /* height: 100vh; */
`;