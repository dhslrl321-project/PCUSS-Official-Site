import React from 'react';
import Navbar from '../modules/Navbar';
import Hero from '../sections/Hero';
import Merit from "../sections/Merit";
import { data as meritData } from "../sections/Merit/data";
import Qualification from "../sections/Qualification";
import { data as qualificationData } from "../sections/Qualification/data";
import Footer from "../modules/Footer";
import styled from 'styled-components';

const Main = styled.div`
  width: 100vw;
`;
const Home = () => {
  return (
    <Main>
      <Navbar toggle={false} />
      <Hero />
      {/* <Merit data={meritData} /> */}
      <Qualification data={qualificationData} />
      <Footer />
    </Main>
  )
}

export default Home
