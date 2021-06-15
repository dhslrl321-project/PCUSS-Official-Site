import { useState, useEffect } from "react";

import Navigation from "../components/organisms/Navigation";
import Sidebar from "../components/organisms/Sidebar";
import Footer from "../components/organisms/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const RootHOC = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen({
      isSidebarOpen: !isSidebarOpen,
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <>
      <Navigation handleSidebarToggle={handleSidebarToggle} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        handleSidebarToggle={handleSidebarToggle}
      />
      {children}
      <Footer />
    </>
  );
};

export default RootHOC;
