import React from "react";
import { Common } from "../../styles/CommonCss";
import { CampaignLeftCss } from "../../styles/main/campaignCss";

const CampaignLeft = () => {
  return (
    <>
      <CampaignLeftCss>
        <div
          style={{
            width: "12.3rem",
            height: "11.8rem",
            background: Common.color.p000,
          }}
        ></div>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: Common.color.p000,
          }}
        >
          넥슨 크리에이터즈 캠페인과 게임을 더 즐겁게! 콘텐츠 제작하고
          <img title="cash" alt="cash" src="images/Cash.png" />
          캐시도 받아보세요
        </p>
        <p
          style={{
            fontSize: "1.4rem",
            color: Common.color.p200,
          }}
        >
          로그인하고, 캠페인에 참여하세요!
        </p>
        <button>로그인</button>
      </CampaignLeftCss>
    </>
  );
};

export default CampaignLeft;
