import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const InfoColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > :nth-child(n + 2) {
    margin-top: 8px;
  }
  
  margin-right: 30px;
`;

export const PictureColumn = styled.div`
  width: 100px;
  height: 120px;

  & > img {
    border-radius: 10px;
  }

`;

export const DetailColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  & > :nth-child(n + 2) {
    margin-top: 12px;
  }

  & > :nth-child(n + 4) {
    margin-top: 5px;
  }

`;