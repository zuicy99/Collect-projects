import React, { useEffect } from "react";
import * as ReactDOMServer from "react-dom/server";
import styled from "styled-components";
import { Common } from "../../styles/CommonCss";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CampaignWrap } from "../../styles/main/campaignCss";
import CampaignLeft from "./CampaignLeft";
import CampaignCard from "./CampaignCard";
import { campaignData } from "../../mock/campaignData";

const Campaign = () => {
  const CampaignSwiper = styled.div`
    .swiper {
      padding: 1.6rem 0;
      width: 89.5rem;
      height: 39.6rem;
    }

    .swiper-pagination {
      position: absolute;
      /* overflow: visible; */
      /* z-index: 1000; */
    }
    .swiper-pagination-bullet {
      position: relative;
      /* top: -360px;
      transform: translateY(-50%);
      overflow: visible;
      z-index: 1001; */
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

  useEffect(() => {
    const customBullets = document.querySelectorAll(
      ".custom-pagination-bullet",
    );
    customBullets.forEach((bullet, index) => {
      bullet.addEventListener("click", () => {
        document.querySelector(".myCamSwiper").swiper.slideTo(index);
      });
    });
  }, []);
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
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={20}
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
            {campaignData.map((campaign, index) => (
              <SwiperSlide key={index}>
                <CampaignCard data={campaign} />
              </SwiperSlide>
            ))}
          </Swiper>
        </CampaignSwiper>
      </CampaignWrap>
    </>
  );
};

export default Campaign;
