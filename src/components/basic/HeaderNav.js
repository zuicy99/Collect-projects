import React from "react";
import { RiUserFill } from "react-icons/ri";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { cateState } from "../../atom/cateState";
import { categoryData } from "../../mock/categoryData";
import {
  HeaderNavCss,
  HeaderNavWrapCss,
} from "../../styles/basic/headerNavCss";
const HeaderNav = () => {
  const navigate = useNavigate();
  const [activecate, setActiveCate] = useRecoilState(cateState);
  const handleCateClick = id => {
    setActiveCate(id);
    console.log("Selected category ID:", id);
  };

  const MainStyle = {
    width: "1.5rem",
  };
  return (
    <>
      <HeaderNavWrapCss>
        <HeaderNavCss>
          <a href="/">
            <img
              style={{ width: "15rem" }}
              src="https://creators-cdn.nexon.com/creators-support/assets/home/game/black-icon/game_2355_1711500673719.png"
            ></img>
          </a>
          <div>
            {categoryData.map((cate, index) => (
              <a
                onClick={() => {
                  handleCateClick(cate.id);
                  //   navigate(cate.link);
                }}
                key={cate.id}
                className={activecate === cate.id ? "active" : ""}
              >
                {cate.main}
              </a>
            ))}
          </div>
          <div style={{ display: "flex" }}>
            <a style={{ display: "flex", alignItems: "center" }}>
              <RiUserFill style={MainStyle} />
              MY 스튜디오
            </a>
            <button>로그인</button>
          </div>
        </HeaderNavCss>
      </HeaderNavWrapCss>
    </>
  );
};

export default HeaderNav;
