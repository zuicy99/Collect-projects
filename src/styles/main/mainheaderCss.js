import styled from "styled-components";
import { Common } from "../CommonCss";

export const MainCountCss = styled.div`
  height: 18rem;
  width: 120rem;
  margin: auto;
  /* position: absolute; */
  /* padding: 2rem; */
  /* background-color: aqua; */
  .count-right {
    position: relative;
    /* display: flex; */
    align-items: center;
    float: right;
    text-align: right;
    line-height: 1.5;
  }
  ul {
    display: flex;
    justify-content: flex-end;
    gap: 0.2rem;
    /* padding: 0; */
    /* list-style: none; */
    /* margin: 0; */
    align-items: baseline;

    li {
      font-size: 1.8rem;
      font-weight: 700;
      color: ${Common.color.p000};
      text-align: right;
    }
  }
  .date {
    font-size: 1.3rem;
    /* font-weight: 700; */
    text-align: right;
    color: ${Common.color.p300};
  }
`;

export const Height100 = styled.div`
  height: 5rem;
`;
