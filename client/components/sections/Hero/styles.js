import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Container = styled.div`
  ${theme("shortcuts.flexCenterColumn")};
  margin-top: -80px;
  width: 100vw;
  height: 100vh;
  padding-bottom: 180px;
`;

export const TitleWrapper = styled.div`
  font-size: 2rem;
  color: white;
  margin: 10px 0;
`;

export const SubtitleWrapper = styled.div`
  font-size: 1.3rem;
  color: white;
  margin: 10px 0;
`;