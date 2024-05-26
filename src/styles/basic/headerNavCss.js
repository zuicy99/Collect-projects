import styled from "styled-components";
import { Common } from "../CommonCss";

export const HeaderNavWrapCss = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 0 auto;

  height: 6.8rem;
  align-items: center;
  border-bottom: 1px solid transparent;
  &:hover {
    background-color: ${Common.color.p000};
    border-bottom: 1px solid ${Common.color.p200};
  }
`;
export const HeaderNavCss = styled.div`
  display: flex;
  width: 120rem;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  a {
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 700;
    margin-right: 2.5rem;
    align-items: center;
    &:hover {
      color: ${Common.color.blue};
    }
    &.active {
      color: ${Common.color.blue};
      font-weight: bold;
    }
  }
  button {
    cursor: pointer;
    background: transparent;
    width: 8.3rem;
    height: 3.6rem;
    border-radius: 2rem;
    border: 0.2rem solid ${Common.color.p1000};
    font-size: 1.6rem;
    font-weight: 700;
    &:hover {
      color: ${Common.color.blue};
      border: 0.2rem solid ${Common.color.blue};
    }
    &.active {
      color: ${Common.color.blue};
      font-weight: 700;
    }
  }
`;
