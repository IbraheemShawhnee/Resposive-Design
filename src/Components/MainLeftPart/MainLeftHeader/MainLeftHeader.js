import React from "react";
import Caption from "../../Caption";
import MainTitle from "../../MainTitle/MainTitle";
import Description from "../../Description/index";
import SubTitle from "../../SubTitle/index";
import "./mainleftheader.css";

const MainLeftHeader = () => {
  return (
    <article className="article-featured">
      <MainTitle title="What is frameworks?" />
      <img src="assets/banner.png" alt="" />
      <Caption caption="February 12, 2023 | 3 comments" />
      <Description
        description=" A framework is a bit of software that facilitates the development 
                    and maintenance of large projects. 
                    Frameworks are collections of fundamental software modules that include prepared code 
                    that programmers could use to fix common programming tasks like handling AJAX requests
                     or trying to define a file structure."
      />
      <a href="#" class="article-read-more">
        <SubTitle sub="CONTINUE READING" />
      </a>
    </article>
  );
};

export default MainLeftHeader;
