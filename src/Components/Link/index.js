import React from "react";
import "./Link.css";

const Link = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">Recent posts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Link;
