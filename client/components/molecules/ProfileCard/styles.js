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
    margin-top: 16px;
  }
  
  margin-right: 60px;

  @media screen and (max-width: 479px) {
    & > :nth-child(n + 2) {
      margin-top: 8px;
    }
    
    margin-right: 30px;
  }
`;

export const PictureColumn = styled.div`
  width: 150px;
  height: 180px;
  & > img {
    border-radius: 20px;
    box-shadow: 0px 0px 10px 6px black;
  }

  @media screen and (max-width: 479px) {
    width: 80px;
    height: 100px;

    & > img {
      border-radius: 10px;
    }
  }
  
`;

export const DetailColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  & > :nth-child(n + 2) {
    margin-top: 24px;
  }

  & > :nth-child(n + 4) {
    margin-top: 10px;
  }

  @media screen and (max-width: 479px) {
    & > :nth-child(n + 2) {
      margin-top: 12px;
    }

    & > :nth-child(n + 4) {
      margin-top: 5px;
    }
  }
`;