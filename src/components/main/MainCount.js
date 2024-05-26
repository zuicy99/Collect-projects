import React from "react";
import { MainCountCss } from "../../styles/main/mainheaderCss";
import { RiUserFill } from "react-icons/ri";

const MainCount = () => {
  return (
    <div>
      <MainCountCss>
        <div className="count-right">
          <ul>
            <li>
              <RiUserFill style={{ marginRight: "10px" }} />
            </li>
            <li>전체 넥슨 크리에이터즈</li>
          </ul>
          <ul>
            <li style={{ color: "yellowgreen", fontSize: "3.9rem" }}>2,123</li>
            <li>명</li>
          </ul>
          <p className="date">2024.05.21 기준</p>
        </div>
      </MainCountCss>
    </div>
  );
};

export default MainCount;
