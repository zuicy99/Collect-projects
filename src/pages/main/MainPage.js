import React, { useEffect, useRef } from "react";
import BasicLayout from "../../layout/BasicLayout";
import { VideoSize } from "../../styles/main/videoCss";
import { GrNext } from "react-icons/gr";
import CreatorSwiper from "../../components/main/CreatorSwiper";
import ShortTitle from "../../components/main/ShortTitle";
import GameGo from "../../components/main/GameGo";
const MainPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.muted = true; // 비디오를 음소거 상태로 설정
  }, []);

  const MainStyle = {
    marginRight: "10px",
  };
  return (
    <>
      <BasicLayout>
        <VideoSize
          ref={videoRef}
          autoPlay
          playsInline
          loop
          data-sentry-component="BackgroundVideo"
          data-sentry-source-file="AboveBanner.tsx"
        >
          <source
            src="https://dev-creators-cdn.na.nexon.com/creators/hardcoding/static/mainvisual.mp4"
            type="video/mp4"
          />
        </VideoSize>

        <div style={{ height: "9rem" }}>ddd</div>
        <ShortTitle title="넥슨 크리에이터즈 둘러보기" flag={1} soltFlag={1} />
        <div style={{ height: "3rem" }}></div>
        <CreatorSwiper />
        <div style={{ height: "12rem" }}></div>
        <ShortTitle title="게임 바로가기" flag={0} soltFlag={0} />
        <div style={{ height: "3rem" }} />
        <GameGo />
      </BasicLayout>
    </>
  );
};

export default MainPage;
