import styled from 'styled-components';
import { ifProp } from 'styled-tools';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PictureColumn = styled.div`
  width: 200px;
  height: 200px;
  & > img {
    border-radius: 50%;
  }
  margin-bottom: 40px;
  
  transition: 0.5s ease;
  @media screen and (max-width: 768px) {
    width: 180px;
    height: 180px;
    & > img {
      border-radius: 50%;
    }
    margin-bottom: 20px;
  }
`;

export const LabelColumn = styled.div`

`;

export const DescColumn = styled.div`
  width: 250px;
  margin-top: 20px;
  text-align: center;
  display: ${ifProp("isVisible", "block", "none")};

  @media screen and (max-width: 768px) {
    width: 180px;
  }
`;
