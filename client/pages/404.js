import styled from 'styled-components';

export default function Custom404() {
  return (
    <Container>
      <IconWrapper>
        ㄴ(°0°)ㄱ...❗️
      </IconWrapper>
      상상도 못한 URL 요청
      <MessageWrapper>
        <MessageItem>해당 URL은 존재하지 않습니다..🙅🏻</MessageItem>
        <MessageItem>정상적인 경로를 입력하시거나 상단의 네비게이션을 이용해주세요🙏</MessageItem>
      </MessageWrapper>
    </Container>)
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const IconWrapper = styled.div`
  font-size: 4rem;
  margin: 48px;
`;
export const MessageItem = styled.div`
  font-size: 1.2rem;
  margin: 24px 0;
  color: #B4B4B4;
`;
export const MessageWrapper = styled.div`
  margin: 48px;
`;