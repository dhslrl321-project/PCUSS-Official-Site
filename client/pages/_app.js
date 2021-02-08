import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from "styled-components"; // common theme
import theme from "../commons/theme";
import Reset from "../commons/reset";
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
          <title>Test</title>
        </Head>
        <main>
          <ThemeProvider theme={theme}>
            <Navbar handleSidebarToggle={this.handleSidebarToggle} />
            <Sidebar isSidebarOpen={this.state.isSidebarOpen} handleSidebarToggle={this.handleSidebarToggle} />
            <Component {...other} />
            <Footer />
          </ThemeProvider>
        </main>
      </>
    );
  }
}