import React from "react";
import * as ReactDOMServer from "react-dom/server";
import styled from "styled-components";
import { Common } from "../../styles/CommonCss";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CampaignWrap } from "../../styles/main/campaignCss";
import CampaignLeft from "./CampaignLeft";

const Campaign = () => {
  const CampaignSwiper = styled.div`
    .swiper {
      padding: 1.6rem 0;
      width: 89.5rem;
      height: 39.6rem;
    }
    .swiper-pagination {
      position: absolute;
      overflow: visible;
      z-index: 1000;
    }
    .swiper-pagination-bullet {
      position: relative; /* 절대 위치 설정 */
      /* left: -50px; */
      top: -360px; /* 원하는 위치로 이동 */
      transform: translateY(-50%);
      overflow: visible;
    }
    .swiper-pagination-bullet-active {
      background: none;
      width: 2.5rem;
      height: 2.5rem;
      background-image: url("images/CurrentIndex.svg");
      background-size: cover;
      background-repeat: no-repeat;
      border: none;
    }
  `;

  return (
    <>
      <CampaignWrap>
        <CampaignLeft />
        <CampaignSwiper>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: Common.color.p900,
              }}
            >
              <img title="cash" alt="cash" src="images/PopularCampaign.png" />
              인기 캠페인
            </p>
            <button>버튼1</button>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                className.includes("swiper-pagination-bullet-active")
                  ? ReactDOMServer.renderToStaticMarkup(
                      <div className={className}>
                        <img
                          src="images/CurrentIndex.svg"
                          alt={`Bullet ${index}`}
                        />
                      </div>,
                    )
                  : `<span class="${className}"></span>`,
            }}
            modules={[Pagination]}
            className="myCamSwiper"
          >
            <SwiperSlide>
              <img
                src="https://creators-cdn.nexon.com/creators/campaigns/34F914900E3CD4968BB978C220A3462BB1C8041F4B07F4ACD54A63D07C1E9A03"
                alt="Campaign Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </CampaignSwiper>
      </CampaignWrap>
    </>
  );
};

export default Campaign;
