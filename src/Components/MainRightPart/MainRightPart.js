import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import SideWidget from "./SideWidget/SideWidget";
import "./mainrightpart.css";

const MainRightPart = () => {
  return (
    <aside>
      <AboutMe wdth="80%" />
      <SideWidget />
    </aside>
  );
};

export default MainRightPart;
