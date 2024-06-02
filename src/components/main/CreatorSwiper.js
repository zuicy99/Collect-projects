import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { creatorBoxData } from "../../mock/creatorBoxData";
import { CreatorWrap } from "../../styles/main/creatorBoxCss";
import CreatorBox from "./CreatorBox";
const CreatorSwiper = () => {
  return (
    <div>
      <CreatorWrap>
        <Swiper
          slidesPerView={4}
          spaceBetween={50}
          //   centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loopAdditionalSlides={3}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="bannerSwiper"
          // style={{ width: "120rem" }}
        >
          {creatorBoxData.map((creator, index) => (
            <SwiperSlide key={index}>
              <div style={{ height: "3.2rem" }}></div>
              <CreatorBox data={creator} />
            </SwiperSlide>
          ))}
        </Swiper>
      </CreatorWrap>
    </div>
  );
};

export default CreatorSwiper;
