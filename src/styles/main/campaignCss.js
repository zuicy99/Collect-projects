import styled from "styled-components";
import { Common } from "../CommonCss";

export const CampaignWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;
export const CampaignLeftCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${Common.color.blue};
  width: 28.5rem;
  height: 41.5rem;
  border-radius: 1.3rem;
  text-align: center;
  padding: 3rem 2rem 2rem 2rem;
  button {
    width: 100%;
    height: 4rem;
    background: #00188e;
    border-radius: 1.2rem;
    border: none;
    color: ${Common.color.p000};
    font-size: 1.4rem;
    cursor: pointer;
  }
  button:hover {
    background: #00185e;
  }
`;
