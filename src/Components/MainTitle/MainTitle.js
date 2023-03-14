import React from "react";
import "./maintitle.css";

const MainTitle = (props) => {
  const { title } = props;
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

export default MainTitle;
