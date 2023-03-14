import React from "react";
import MainLeftHeader from "./MainLeftHeader/MainLeftHeader";
import MainLeftPost from "./MainLeftPost/MainLeftPost";
import "./mainleftpart.css";

const MainLeftPart = () => {
  return (
    <main className="main">
      <MainLeftHeader />
      <MainLeftPost
        source="assets/Reactimage.png"
        caption="February 12, 2023 | 3 comments"
        title="React"
        description="React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development."
        sub="CONTINUE READING"
      />
      <MainLeftPost
        source="assets/Angularimage.png"
        caption="February 12, 2023 | 3 comments"
        title="Angular"
        description="Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework, Angular has clear advantages while also providing a standard structure for developers to work with. It enables users to create large applications in a maintainable manner."
        sub="CONTINUE READING"
      />
      <MainLeftPost
        source="assets/Vueimage.png"
        caption="February 12, 2023 | 3 comments"
        title="Vue JS"
        description="What is Vue.js? Dubbed the ‘progressive’ framework, Vue.js is most notable for its particular design philosophy, which centers incremental adoption in regards to the software development process. Despite its nickname, Vue.js is not exactly filled to the brim with feature after feature. In fact, Vue.js offers the bare minimum of what you’d expect from a JavaScript framework."
        sub="CONTINUE READING"
      />
    </main>
  );
};

export default MainLeftPart;
