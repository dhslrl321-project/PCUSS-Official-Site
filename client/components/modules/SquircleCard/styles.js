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

  @media screen and (max-width: 767px) {
    width: 120px;
    height: 80px;
    border-radius: 10px;
  }

  background-color: red;
`;

export const LabelColumn = styled.div`
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 479px) {
    font-size: 0.6rem;
  }
`;