import React from "react";
import "./Caption.css";

const Caption = (props) => {
  const { caption } = props;
  return <p className="article-info">{caption}</p>;
};

export default Caption;
