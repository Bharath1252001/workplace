import React from "react";
import Allcandidate from "./Allcandidate";
import Footer from "./Footer";
import OnePlatform from "./OnePlatform";
import RightJobSection from "./RightJobSection";
import TopBar from "./TopBar";
import "./landingpage.css"

function Landingpage() {
  return (
    <>
      
      <TopBar />
      <RightJobSection/>
      <OnePlatform />
    </>
  );
}

export default Landingpage;
