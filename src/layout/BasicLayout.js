import React from "react";
import MainSwiper from "../components/main/MainSwiper";

import BasicHeader from "./BasicHeader";
import MainCount from "../components/main/MainCount";

const BasicLayout = ({ children }) => {
  const MainStyle = {
    width: "120rem",
    margin: "0 auto",
  };
  return (
    <>
      {/* <div>BasicLayout</div> */}
      <header>
        <BasicHeader />
      </header>
      <div style={{ height: "5rem" }}></div>
      <MainCount />
      <MainSwiper />
      <main style={MainStyle}>{children}</main>
    </>
  );
};

export default BasicLayout;
