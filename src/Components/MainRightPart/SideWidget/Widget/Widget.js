import React from "react";
import MainTitle from "../../../MainTitle/MainTitle";
import "./widget.css";
const Widget = (props) => {
  const { titl, source, wdth } = props;
  return (
    <div className="widget-recent-post">
      <img src={source} alt="" style={{ width: wdth }} />
      <MainTitle title={titl} />
    </div>
  );
};

export default Widget;
