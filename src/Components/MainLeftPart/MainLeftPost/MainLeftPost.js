import React from "react";
import Caption from "../../Caption";
import MainTitle from "../../MainTitle/MainTitle";
import Description from "../../Description";
import SubTitle from "../../SubTitle";
import "./mainleftpost.css";
const MainLeftPost = (props) => {
  const { source, caption, title, description, sub } = props;
  return (
    <article className="article-recent">
      <div className="article-recent-secondary">
        <img src={source} alt="" />
        <Caption caption={caption} />
      </div>
      <div className="article-recent-main">
        <MainTitle title={title} />
        <Description description={description} />
        <a href="#" class="article-read-more">
          <SubTitle sub={sub} />
        </a>
      </div>
    </article>
  );
};

export default MainLeftPost;
