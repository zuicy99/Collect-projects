import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import styled, { css, keyframes } from "styled-components";
import { Common } from "../../styles/CommonCss";
import { IoChevronDown } from "react-icons/io5";
const ShortTitle = ({ title, flag, soltFlag }) => {
  const [clickBt, setClickBt] = useState(false);
  const [activeItem, setActiveItem] = useState("최신순");
  const rotateOpen = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  `;

  const rotateClose = keyframes`
    from {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(0deg);
    }
  `;

  const handleDropBt = () => {
    setClickBt(!clickBt);
  };
  const handleActive = item => {
    setActiveItem(item);
    setClickBt(false);
  };

  const Short = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
  `;
  const ShortTitleCss = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;

    font-size: 3rem;
    p {
      font-size: 3.6rem;
      font-weight: 700;
    }
  `;
  const DropBt = styled.button`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    font-size: 1.4rem;
    color: ${({ active }) =>
      active ? `${Common.color.blue}` : `${Common.color.p600}`};
    font-weight: ${({ active }) => (active ? "bold" : "")};

    svg {
      ${({ active }) =>
        active
          ? css`
              transform: rotate(180deg);
            `
          : css`
              transform: rotate(0deg);
            `}
      ${({ active }) =>
        active
          ? css`
              animation: ${rotateOpen} 0.1s linear;
            `
          : css`
              animation: ${rotateClose} 0.1s linear;
            `}
    }
  `;

  const DropdownContent = styled.div`
    display: ${({ show }) => (show ? "block" : "none")};
    transition: max-height 0.6s ease;

    position: absolute;
    z-index: 10;

    min-width: 8.57rem;
    margin: 5px;
    border: 1px solid ${Common.color.blue};
    border-radius: 1.2rem;
    background: ${Common.color.p000};
    right: -10px;
    overflow: hidden;
  `;
  const DropdownItem = styled.p`
    padding: 11px 12px 14px;
    text-align: left;
    margin: 0.3rem;
    border-radius: 1rem;
    text-decoration: none;
    display: block;
    font-size: 1.4rem;
    cursor: pointer;
    color: ${({ active }) =>
      active ? `${Common.color.blue}` : `${Common.color.p600}`};
    font-weight: ${({ active }) => (active ? "bold" : "")};
    &:hover {
      background-color: #f2f7ff;
    }
  `;
  return (
    <Short>
      <ShortTitleCss>
        <p>{title}</p>
        {flag === 1 && <GrNext style={{ color: Common.color.p300 }} />}
      </ShortTitleCss>
      <div>
        {soltFlag === 1 && (
          <>
            <DropBt onClick={handleDropBt} active={clickBt}>
              {activeItem}
              <IoChevronDown />
            </DropBt>
            <DropdownContent show={clickBt}>
              {[
                "서포터 순",
                "인기 순",
                "최신 순",
                "구독자 순",
                "오래된 순",
              ].map(item => (
                <DropdownItem
                  key={item}
                  active={item === activeItem}
                  onClick={() => handleActive(item)}
                >
                  {item}
                </DropdownItem>
              ))}
            </DropdownContent>
          </>
        )}
      </div>
    </Short>
  );
};

export default ShortTitle;
