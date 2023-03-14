import React from "react";
import MainLeftPart from "../MainLeftPart/MainLeftPart";
import MainRightPart from "../MainRightPart/MainRightPart";
const MainContentPage = () => {
  return (
    <div className="container container-flex">
      <MainLeftPart />
      <MainRightPart />
    </div>
  );
};

export default MainContentPage;
