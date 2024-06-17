import React from "react";
import styled from "styled-components";
import { Common } from "../../styles/CommonCss";
import { PiUserFill } from "react-icons/pi";
import { TbHeartFilled } from "react-icons/tb";

const CampaignCardWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
  background-color: rgba(0, 0, 0, 0.5); /* 불투명한 검정 오버레이 */
  background-blend-mode: darken;
  width: 28.5rem;
  height: 36.4rem;
  border-radius: 1.3rem;
  padding: 2rem;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3); /* 불투명한 흰색 오버레이 */
    pointer-events: none;
  }
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
const CampaignCardWrap2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  background-size: cover;
  background-position: center;

  /* background-color: rgba(0, 0, 0, 0.5);  */
  /* background-blend-mode: hard-light; */
  width: 28.5rem;
  height: 36.4rem;
  border-radius: 1.3rem;
  padding: 2rem;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3); /* 불투명한 흰색 오버레이 */
    pointer-events: none;
  }
  .card-header {
    width: 4rem;
    display: flex;
    height: 2.5rem;
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

const CampaignCard = ({ data }) => {
  return (
    <>
      {data.flag === "마감" ? (
        <CampaignCardWrap style={{ backgroundImage: `url(${data.imgSrc})` }}>
          <div className="overlay" />
          {data.flag === "마감" ? (
            <div className="card-header">{data.flag}</div>
          ) : (
            <div style={{ height: "2.3rem" }}></div>
          )}
          <div
            style={{
              height: "36rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <div>
              <h1
                style={{
                  color: Common.color.p000,
                }}
              >
                {data.titleText}
              </h1>
              <div className="card-tag">
                {data.hashTag.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </div>
              <div className="card-date">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <PiUserFill />
                  <p style={{ fontWeight: "bold" }}>{data.total}</p>
                </div>
                <p>{data.date}</p>
              </div>
              <div
                style={{
                  height: "1.2rem",
                  borderTop: `1px solid ${Common.color.p600}`,
                }}
              />
              <div className="card-end">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src="images/Cash.png" alt="Cash icon" />
                  <p>{data.cash}</p>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src="images/Energy.png" alt="Energy icon" />
                  <p>{data.energy}</p>
                  <TbHeartFilled />
                </div>
              </div>
            </div>
          </div>
        </CampaignCardWrap>
      ) : (
        <CampaignCardWrap2 style={{ backgroundImage: `url(${data.imgSrc})` }}>
          <div className="overlay" />
          <div className="card-header">{data.flag}</div>
          <div style={{ height: "2.3rem" }}></div>
          <div
            style={{
              height: "36rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
              <h1
                style={{
                  color: Common.color.p000,
                }}
              >
                {data.titleText}
              </h1>
              <div className="card-tag">
                {data.hashTag.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </div>
              <div className="card-date">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <PiUserFill />
                  <p style={{ fontWeight: "bold" }}>{data.total}</p>
                </div>
                <p>{data.date}</p>
              </div>
              <div
                style={{
                  height: "1.2rem",
                  borderTop: `1px solid ${Common.color.p600}`,
                }}
              />
              <div className="card-end">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src="images/Cash.png" alt="Cash icon" />
                  <p>{data.cash}</p>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src="images/Energy.png" alt="Energy icon" />
                  <p>{data.energy}</p>
                  <TbHeartFilled />
                </div>
              </div>
            </div>
          </div>
        </CampaignCardWrap2>
      )}
    </>
  );
};

export default CampaignCard;
