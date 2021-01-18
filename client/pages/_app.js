import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from "styled-components"; // common theme
import theme from "../commons/theme";
import Reset from "../commons/reset";
import AOS from "aos";
import "aos/dist/aos.css";

export default class RootApp extends App {
  render() {
    const { Component, ...other } = this.props;
    return (
      <>
        <Reset />
        <Head>
          <title>Test</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...other} />
        </ThemeProvider>
      </>
    );
  }
}