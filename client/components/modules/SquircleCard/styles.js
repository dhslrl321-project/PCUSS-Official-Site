import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const PictureColumn = styled.div`
  width: 240px;
  height: 135px;
  border-radius: 16px;
  
  transition: 0.5s ease;

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 80px;
    border-radius: 10px;
  }

  background-color: red;
`;

export const LabelColumn = styled.div`
  margin-top: 10px;
`;