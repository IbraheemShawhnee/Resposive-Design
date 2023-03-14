import React from "react";
import "./Description.css";

const Description = (props) => {
  const { description } = props;
  return <p>{description}</p>;
};

export default Description;
