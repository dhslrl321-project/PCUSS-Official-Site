import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";

import { loadUser } from "../../reducer/user";
// kakao 가 돌려줄 authorization_code 를 query parameter 에서 받기
// server 로 authorization_code 를 전송
// server 로부터 로그인된 데이터를 가지고 react_persist 에 저장

const kakao = ({ pageProps: { code } }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(code));
    router.replace("/");
  }, []);

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
