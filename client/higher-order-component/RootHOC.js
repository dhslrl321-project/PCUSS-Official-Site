import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import Navigation from "../components/organisms/Navigation";
import Sidebar from "../components/organisms/Sidebar";
import Footer from "../components/organisms/Footer";

import { loadRefreshedUser } from "../reducer/user";

import AOS from "aos";
import "aos/dist/aos.css";

const RootHOC = ({ children }) => {
  const dispatch = useDispatch();

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
    dispatch(loadRefreshedUser());
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
