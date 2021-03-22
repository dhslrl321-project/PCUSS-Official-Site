import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';

const defaultColumnStyle = css`
  width: 400px;
  @media screen and (max-width: 480px) {
    width: 250px;
  }
`;

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const TitleColumn = styled.div`
  margin: 12px 0 24px;;
  ${defaultColumnStyle};
  font-weight: bolder;
`;

export const DescriptionColumn = styled.div`
  ${defaultColumnStyle};
  margin: 10px 0;
  font-weight: 300;
`;
export const ListDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Partition = styled.div`
  width: 400px;
  height: 1px;
  background: gray;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;