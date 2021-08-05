import { useRouter } from "next/router";
import { useEffect } from "react";

import { useDispatch } from "react-redux";

import styled from "styled-components";

import { loadLogout } from "../reducer/user";

const logout = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLogout());
    router.replace("/");
    router.reload(window.location.pathname);
  }, []);
  return <Container />;
};

export default logout;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
