import React from "react";
import "./SubTitle.css";

const SubTitle = (props) => {
  const { sub } = props;
  return <p className="SubTitle">{sub}</p>;
};

export default SubTitle;
