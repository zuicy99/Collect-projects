import React from "react";
import styled from "styled-components";
import { Common } from "../../styles/CommonCss";
import { IoMdOpen } from "react-icons/io";
import { gamegoData } from "../../mock/gamegoData";

const GameGo = () => {
  const GameGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    position: relative;
  `;

  const GameCardContainer = styled.div`
    position: relative;
  `;

  const GameCard = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 59rem;
    height: 20.8rem;
    /* background-color: aqua; */

    .card-bt {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 9.2rem;
      padding: 0 4rem;
      margin-top: 1.8rem;
      a {
        cursor: pointer;
      }
      p {
        font-size: 2.4rem;
        font-weight: bold;
        color: ${Common.color.p000};
      }

      button {
        width: 12rem;
        height: 3.6rem;
        background: linear-gradient(to left, #00d683, #037fff);
        border: none;
        border-radius: 2rem;
        color: ${Common.color.p000};
        font-weight: 600;
        font-size: 1.1rem;
      }

      button:hover {
        background: linear-gradient(to left, #00a362, #025fcc);
      }
    }
  `;

  const CardImg = styled.div`
    img {
      width: 100%;
      height: auto;
    }
  `;

  return (
    <GameGrid>
      {gamegoData.map((card, index) => (
        <GameCardContainer key={index}>
          <GameCard>
            <div className="card-bt">
              <a>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>{card.title}</p>
                  <IoMdOpen
                    style={{ fontSize: "2.4rem", color: Common.color.p000 }}
                  />
                </div>
              </a>

              <button>{card.buttonText}</button>
            </div>
          </GameCard>
          <CardImg>
            <img src={card.imgSrc} alt={card.title} />
          </CardImg>
        </GameCardContainer>
      ))}
      <div style={{ height: "3rem" }} />
      <p style={{ color: Common.color.p400, fontSize: "1.4rem" }}>
        - 게임별 정책이 상이하므로, 일부 게임은 서포터의 상품 결제로 인한 포인트
        적립이 되지 않습니다.
      </p>
    </GameGrid>
  );
};

export default GameGo;
