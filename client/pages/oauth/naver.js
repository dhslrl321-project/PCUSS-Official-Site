import styled from "styled-components";

const naver = ({ pageProps: { code } }) => {
  console.log(code);
  return <Container />;
};

export const getServerSideProps = async (context) => {
  return {
    props: {
      code: context.query,
    },
  };
};

export default naver;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
