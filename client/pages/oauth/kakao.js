import styled from "styled-components";
// kakao �� ������ authorization_code �� query parameter ���� �ޱ�
// server �� authorization_code �� ����
// server �κ��� �α��ε� �����͸� ������ react_persist �� ����

const kakao = ({ pageProps: { code } }) => {
  console.log(code);
  return <Container />;
};

export const getServerSideProps = async (context) => {
  return {
    props: {
      code: context.query,
    }, // will be passed to the page component as props
  };
};

export default kakao;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
