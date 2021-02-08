import styled from 'styled-components';
import { ifProp } from 'styled-tools';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PictureColumn = styled.div`
  width: ${ifProp("isDetail", "400px;", "240px;")};
  height: ${ifProp("isDetail", "240px;", "135px;")};
  & > img {
    border-radius: ${ifProp("isDetail", "24px;", "16px;")};
  }
  
  transition: 0.5s ease;


  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: ${ifProp("isDetail", "280px;", "200px;")};
    height: ${ifProp("isDetail", "200px;", "120px;")};
    & > img {
      border-radius: ${ifProp("isDetail", "14px;", "10px;")};
    }
  }
  
  @media screen and (max-width: 479px) {
    width: ${ifProp("isDetail", "240px;", "160px;")};
    height: ${ifProp("isDetail", "160px;", "100px;")};
    & > img {
      border-radius: ${ifProp("isDetail", "14px;", "10px;")};
    }
  }
`;

export const LabelColumn = styled.div`
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 1.0rem;
  }

  @media screen and (max-width: 479px) {
    font-size: 0.8rem;
  }
`;