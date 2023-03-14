import React from "react";
import RightNav from "./RIghtNav/RightNav";
import LeftNav from "./LeftNav/LeftNav";
import "./navbar.css";
const Navbar = () => {
  return (
    <header>
      <div className="container container-flex">
        <LeftNav />
        <RightNav />
      </div>
    </header>
  );
};

export default Navbar;
