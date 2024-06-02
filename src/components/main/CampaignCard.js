import React from "react";
import styled from "styled-components";
import { Common } from "../../styles/CommonCss";
import { PiUserFill } from "react-icons/pi";
import { TbHeartFilled } from "react-icons/tb";
const CampaignCard = () => {
  const CampaignCardWrap = styled.div`
    position: relative;
    display: flex;
    /* justify-content: end; */
    flex-direction: column;
    background-image: url("https://creators-cdn.nexon.com/creators/campaigns/34F914900E3CD4968BB978C220A3462BB1C8041F4B07F4ACD54A63D07C1E9A03");
    width: 28.5rem;
    height: 36.4rem;
    border-radius: 1.3rem;
    padding: 2rem;
    .card-header {
      width: 4rem;
      display: flex;
      height: 2.3rem;
      border-radius: 1rem;
      background-color: ${Common.color.p700};
      font-size: 1.2rem;
      color: ${Common.color.p000};
      font-weight: bold;
      justify-content: center;
      align-items: center;
    }
    .card-tag {
      display: flex;
      font-size: 1.4rem;
      font-weight: bold;
      color: ${Common.color.p000};
    }
    .card-date {
      justify-content: space-between;
      align-items: center;
      display: flex;
      font-size: 1.2rem;
      color: ${Common.color.p000};
      padding: 2rem 0 0.8rem 0;
    }
    .card-end {
      display: flex;
      justify-content: space-between;
      font-size: 1.6rem;
    }
  `;
  return (
    <>
      <CampaignCardWrap>
        <div>
          <div className="card-header">마감</div>
        </div>
        <div
          style={{
            // width: "28.5rem",
            height: "36rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          <div>
            <h1>나의 최고 넥슨 ost</h1>
            <div className="card-tag">
              <p>#참여형</p>
              <p>#참여형</p>
            </div>
            <div className="card-date">
              <div style={{ display: "flex", alignItems: "center" }}>
                <PiUserFill />
                <p style={{ fontWeight: "bold" }}>11명</p>
              </div>
              <p>2024-12-30</p>
            </div>
            <div
              style={{
                height: "1.2rem",
                borderTop: `1px solid ${Common.color.p600}`,
              }}
            />
            <div className="card-end">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src="images/Cash.png"></img>
                <p>100000</p>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <img src="images/Energy.png"></img>
                <p>1</p>
                <TbHeartFilled />
              </div>
            </div>
          </div>
        </div>
      </CampaignCardWrap>
    </>
  );
};

export default CampaignCard;
