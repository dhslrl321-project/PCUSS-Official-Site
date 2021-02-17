import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

const defaultStyle = css`
  transition: 0.5s ease;
  letter-spacing: 0.5px;
`;

const commonAttribute = css`
  @media screen and (min-width: 768px) {
    font-size: ${prop('size')}rem;
  }
  
  ${defaultStyle};

  @media screen and (max-width: 768px) {
    font-size: calc(${prop('size')}rem - 0.2rem);
  }
`;

export const Labels = styled.span`
  ${commonAttribute};
`;

export const Description = styled.p`
  ${commonAttribute};
`;