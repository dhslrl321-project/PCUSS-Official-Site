import styled, { css } from 'styled-components';

const defaultStyle = css`
  transition: 0.5s ease;
`;

export const Picture = styled.img`
  width: 250px;
  border-radius: 125px;
  ${defaultStyle};
  
  @media screen and (max-width: 768px) {
    width: 180px;
    border-radius: 90px;
  }

  background: powderblue;
`;

export const Icon = styled.img`
  width: 60px;
  height: auto;
`;