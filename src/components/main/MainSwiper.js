import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { mainSwiperData } from "../../mock/mainSwiperData";
import styled from "styled-components";
import { Common } from "../../styles/CommonCss";
const MainSwiper = () => {
  const SwiperCss = styled.div`
    position: relative;
    display: flex;
    overflow: hidden;
    background: ${Common.color.bgr};
    .swiper {
      width: 120rem;
      overflow: visible;
      margin: 0 auto;
      scroll-behavior: auto;
      justify-content: center;
    }
    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;

      background-color: ${Common.color.p000};
      opacity: 0; /* 초기 상태에서 투명하게 설정 */
      height: 6rem;
      width: 6rem;
      border-radius: 50px;
      color: ${Common.color.p600} !important;
      transition: opacity 0.3s ease; /* 부드러운 전환 효과 추가 */
      box-shadow: 1px 4px 20px 0px rgba(0, 0, 0, 0.2);
    }
    .swiper-button-prev {
      left: -3rem;
    }
    .swiper-button-next {
      right: -3rem;
    }
    .swiper-button-prev:after,
    .swiper-button-next:after {
      font-size: 1.5rem !important;
      font-weight: 600 !important;
    }

    &:hover .swiper-button-prev,
    &:hover .swiper-button-next {
      opacity: 1;
    }
    .swiper-slide {
      /* overflow: visible; */
    }
    .swiper-slide img {
      border-radius: 2.2rem;
    }
  `;
  return (
    <SwiperCss>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loopAdditionalSlides={3}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="bannerSwiper"
        // style={{ width: "120rem" }}
      >
        {mainSwiperData.map(banner => (
          <SwiperSlide key={banner.id}>
            <img src={banner.srcLink} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperCss>
  );
};

export default MainSwiper;
