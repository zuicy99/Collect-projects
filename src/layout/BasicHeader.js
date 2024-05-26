import React from "react";
import styled from "styled-components";
import HeaderNav from "../components/basic/HeaderNav";

const BasicHeader = () => {
  const HeaderWrap = styled.div`
    position: relative;
  `;

  return (
    <>
      <HeaderWrap>
        <HeaderNav />
      </HeaderWrap>
    </>
  );
};

export default BasicHeader;
