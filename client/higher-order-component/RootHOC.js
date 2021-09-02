import { useState, useEffect, useMemo } from "react";

import { useRouter } from "next/router";

import { useDispatch } from "react-redux";

import { throttle } from "lodash";

import Navigation from "../components/organisms/Navigation";
import Sidebar from "../components/organisms/Sidebar";
import Footer from "../components/organisms/Footer";

import { loadRefreshedUser } from "../reducer/user";

import AOS from "aos";
import "aos/dist/aos.css";

const RootHOC = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = () => {
    if (window.scrollY <= 600 && isScrolled === true) {
      setIsScrolled(false);
    } else if (window.scrollY > 600 && isScrolled === false) {
      setIsScrolled(true);
    }
  };

  const throttledScroll = useMemo(() => handleScroll, [isScrolled]);

  const useMemoForSilentRefresh = useMemo(() => dispatch(loadRefreshedUser()), [
    router.asPath,
  ]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    useMemoForSilentRefresh;

    window.addEventListener(
      "scroll",
      router.asPath === "/"
        ? _.throttle(throttledScroll, 1000)
        : setIsScrolled(true)
    );
    return () => {
      window.removeEventListener(
        "scroll",
        router.asPath === "/"
          ? _.throttle(throttledScroll, 1000)
          : setIsScrolled(false)
      );
    };
  }, [isScrolled, router.asPath]);

  return (
    <>
      <Navigation
        handleSidebarToggle={handleSidebarToggle}
        isScrolled={isScrolled}
      />
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
