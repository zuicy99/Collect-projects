import React from "react";
import {
  CreatorBoxCss,
  PlayGame,
  Streaming,
} from "../../styles/main/creatorBoxCss";

import { Common } from "../../styles/CommonCss";

const CreatorBox = ({ data }) => {
  return (
    <>
      <CreatorBoxCss>
        <a href={data.href} className="creator-content">
          <img className="creator-img" src={data.imgSrc}></img>
          <div style={{ height: "8.8rem" }}></div>
          <p className="creator-name">{data.name}</p>
          <div style={{ height: "0.8rem" }}></div>
          <p className="creator-tag">{data.tag}</p>
          <div style={{ height: "3rem" }}></div>
          <p className="creator-info" style={{ height: "3rem" }}>
            {data.info}
          </p>
          <div style={{ height: "3rem" }}></div>
          <p className="creator-info" style={{ color: Common.color.p900 }}>
            활동게임
          </p>
          <div style={{ height: "1.6rem" }}></div>
          <PlayGame>
            {data.games.map((game, gameIndex) => (
              <li key={gameIndex}>
                <img src={game.imgSrc} alt={game.alt} />
                <span>{game.title}</span>
              </li>
            ))}
          </PlayGame>
          <div
            style={{
              height: "0.1rem",
              backgroundColor: Common.color.p300,
              marginTop: "0.4rem",
            }}
          ></div>
          <div style={{ height: "1.6rem" }}></div>
          <div className="creator-bottom">
            <div style={{ display: "flex" }}>
              <p style={{ color: Common.color.p900 }}>서포터순</p>
              <p
                style={{
                  color: Common.color.blue,
                  fontWeight: "bold",
                  marginLeft: "0.5rem",
                }}
              >
                {data.supporterRank}
              </p>
            </div>
            <Streaming>
              {data.streamingLinks.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  style={{ marginLeft: linkIndex > 0 ? "0.4rem" : "0" }}
                >
                  {link.icon}
                </a>
              ))}
            </Streaming>
          </div>
        </a>
      </CreatorBoxCss>
    </>
  );
};

export default CreatorBox;
