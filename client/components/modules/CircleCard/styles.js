import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PictureColumn = styled.div`
  margin-bottom: 40px;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const TextColumn = styled.div`

`;