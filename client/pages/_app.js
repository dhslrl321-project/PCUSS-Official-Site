import App from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { ThemeProvider } from "styled-components"; // common theme
import theme from "../commons/theme";
import Reset from "../commons/reset";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../components/modules/Navbar';
import Footer from '../components/modules/Footer';
import Sidebar from "../components/modules/Sidebar";

export default class RootApp extends App {

  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false
    }
  }

  handleSidebarToggle = () => {
    console.log(this.state.isSidebarOpen);
    this.setState({
      isSidebarOpen: !this.state.isSidebarOpen
    })
  }


  render() {
    const { Component, ...other } = this.props;
    return (
      <>
        <Reset />
        <Head>
          <title>배재대학교 정보보안학과</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="description" content="배재대학교 지능 SW 공학부 정보보안학과 자체 홈페이지" />
          <meta property="og:title" content="배재대학교 정보보안학과" />
          <meta property="og:description" content="배재대학교 지능 SW 공학부 정보보안학과 자체 홈페이지" />
        </Head>
        <main>
          <ThemeProvider theme={theme}>
            <DefaultContainer>
              <Navbar handleSidebarToggle={this.handleSidebarToggle} />
              <Sidebar isSidebarOpen={this.state.isSidebarOpen} handleSidebarToggle={this.handleSidebarToggle} />
              <Component {...other} />
              <Footer />
            </DefaultContainer>
          </ThemeProvider>
        </main>
      </>
    );
  }
}

const DefaultContainer = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  })
  return (
    <div>
      {children}
    </div>
  )
}