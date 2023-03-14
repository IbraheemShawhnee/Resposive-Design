/* import MainTitle from "./Components/MainTitle/index";
import SubTitle from "./Components/SubTitle/index";
import Link from "./Components/Link/index";
import Caption from "./Components/Caption/index";
import Description from "./Components/Description";
import Divider from "./Components/Divider/index";
import RecentPost from "./Components/RecentPost";
 */
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import MainContentPage from "./Components/MainContentPage/MainContentPage";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <MainContentPage />

      <Footer />
    </div>
  );
}

export default App;
