import styled from "styled-components";
import { Common } from "../CommonCss";

export const CreatorWrap = styled.div`
  .swiper {
    width: 120rem;
    overflow: visible;
    margin: 0 auto;
    scroll-behavior: auto;
    justify-content: center;
  }
  .swiper-slide {
    /* width: 28.3rem; */
    /* height: 39.9rem; */
  }
`;
export const CreatorBoxCss = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  min-width: 28.3rem;
  min-height: 39.9rem;
  background: ${Common.color.p000};
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  border-radius: 1.2rem;
  text-align: center;
  padding: 0 2rem;
  /* overflow: hidden; */
  .creator-content {
    width: 28.3rem;
    height: 39.9rem;
    padding: 0 2rem;
  }
  &:hover {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
    border-radius: 1.2rem;
  }
  .creator-img {
    position: absolute;
    width: 11rem;
    height: 11rem;
    margin: auto; /* 수직과 수평 방향으로 중앙 정렬 */
    margin-bottom: -20px; /* 음수 값으로 설정하여 요소를 위로 이동 */
    border: 6px solid ${Common.color.p000};
    top: -32px;
    z-index: 10;
    border-radius: 10rem;
    transform: translateX(-50%);
  }
  .creator-name {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .creator-tag {
    font-size: 1.4rem;
    color: ${Common.color.p600};
  }
  .creator-info {
    font-size: 1.4rem;
    color: ${Common.color.p600};
    text-align: left;
    word-wrap: break-word;
  }
  .creator-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    align-items: center;
  }
`;
export const PlayGame = styled.ul`
  position: relative;
  height: 7.5rem;
  text-align: left;

  overflow: auto;

  li {
    display: flex;
    align-items: center;
  }
  span {
    font-size: 1.4rem;
  }
  img {
    width: 2rem;
    height: 2.4rem;
  }
`;
export const Streaming = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  a {
    width: 30px;
    height: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${Common.color.p200};
  }
  a:hover {
    background: ${Common.color.p100};
  }
`;
