import styled from 'styled-components';
import { ifProp } from 'styled-tools';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PictureColumn = styled.div`
  width: 250px;
  border-radius: 125px;

  margin-bottom: 40px;
  
  transition: 0.5s ease;
  @media screen and (max-width: 768px) {
    width: 180px;
    border-radius: 90px;

    margin-bottom: 20px;
  }
`;

export const LabelColumn = styled.div`

`;

export const DescColumn = styled.div`
  width: 250px;
  margin-top: 20px;
  text-align: center;
  ${ifProp("isVisible", "", "display: none;")}

  @media screen and (max-width: 768px) {
    width: 180px;
  }
`;
