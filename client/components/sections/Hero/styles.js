import styled from "styled-components";
import { theme } from "styled-tools";

// export const Container = styled.div`
//   ${theme("shortcuts.flexCenterColumn")};
//   margin-top: -80px;
//   width: 100vw;
//   height: 100vh;
//   padding-bottom: 180px;
// `;

export const TitleWrapper = styled.div`
  font-size: 2rem;
  color: white;
  margin: 10px 0;
  font-weight: bold;
`;

export const SubtitleWrapper = styled.div`
  font-size: 1.3rem;
  color: white;
  margin: 10px 0;
  font-weight: bold;
`;

export const Container = styled.div`
  z-index: 1;
  background: #22272e;
  height: 100vh;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  overflow: hidden;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 58%;
`;

export const HeroContent = styled.div`
  position: absolute;
  color: #fff;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  z-index: 3;
`;
