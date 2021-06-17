import App from "next/app";
import Head from "next/head";

import RootHoc from "../higher-order-component/RootHOC";

import { Provider } from "react-redux";

import store from "../reducer";

import { ThemeProvider } from "styled-components"; // common theme
import theme from "../commons/theme";
import Reset from "../commons/reset";

export default class RootApp extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, ...other } = this.props;
    return (
      <>
        <Reset />
        <Head>
          <title>배재대학교 정보보안학과</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta
            name="description"
            content="배재대학교 지능 SW 공학부 정보보안학과 자체 홈페이지"
          />
          <meta property="og:title" content="배재대학교 정보보안학과" />
          <meta
            property="og:description"
            content="배재대학교 지능 SW 공학부 정보보안학과 자체 홈페이지"
          />
        </Head>
        <main>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <RootHoc>
                <Component {...other} />
              </RootHoc>
            </Provider>
          </ThemeProvider>
        </main>
      </>
    );
  }
}
