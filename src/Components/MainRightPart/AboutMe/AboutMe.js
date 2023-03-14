import React from "react";
import SubTitle from "../../SubTitle/index";
import Description from "../../Description/index";
import "./aboutme.css";

const AboutMe = (props) => {
  const { wdth } = props;
  return (
    <div className="sidebar-widget">
      <SubTitle sub="About Me" />
      <img
        src="assets/Personalimg.jpg"
        alt="Personal Image"
        style={{ width: wdth }}
      />
      <Description
        description="
              I'm Ibraheem Mohanad Shawhnee, Frontend Developer.
                    Based in Jenin. 
            "
      />
    </div>
  );
};

export default AboutMe;
