import React from "react";
import SubTitle from "../../SubTitle";
import Widget from "./Widget/Widget";
import "./sidewidget.css";
const SideWidget = () => {
  return (
    <div className="sidebar-widget">
      <SubTitle sub="Recent Posts" />
      <Widget titl="React" source="assets/Reactimage.png" wdth="40%" />
      <Widget titl="Angular" source="assets/Angularimage.png" wdth="40%" />
      <Widget titl="Vue JS" source="assets/Vueimage.png" wdth="40%" />
    </div>
  );
};

export default SideWidget;
