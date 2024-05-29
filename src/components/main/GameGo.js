import React from "react";
import styled from "styled-components";

const GameGo = () => {
  const GameGrid = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  `;

  const GameCard = styled.div`
    position: relative; /* Ensures that the absolute positioned elements are relative to this container */
    width: 59rem;

    img {
      width: 100%;
    }

    .card-absolute {
      position: relative;
    }

    .card-bt {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
    }
  `;

  return (
    <GameGrid>
      <GameCard>
        <div className="card-absolute">
          <img
            src="https://creators-cdn.nexon.com/creators-support/assets/home/game/community2/game_2092_1711501497407.png"
            alt="Game Image 1"
          />
          <div className="card-bt">
            <a></a>
            <button>Button 1</button>
          </div>
        </div>
      </GameCard>

      <GameCard>
        <div className="card-absolute">
          <img
            src="https://creators-cdn.nexon.com/creators-support/assets/home/game/community2/game_2092_1711501497407.png"
            alt="Game Image 2"
          />
          <div className="card-bt">
            <button>Button 2</button>
          </div>
        </div>
      </GameCard>
    </GameGrid>
  );
};

export default GameGo;
