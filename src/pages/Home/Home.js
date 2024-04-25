import React from "react";
import "./Home.css";

import wallpaper from "../../assets/wallpaper.png";
import sponsors from "../../assets/sponsors.png";
import onChainDice from "../../assets/on-chain-dice.png";

import goldenDice from "../../assets/goldenDice.png";
import chip from "../../assets/chip.png";
import CountUp from "react-countup";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <div className="banner-texts">
          <div className="banner-small-text">SIGN UP & GET REWARD</div>
          <div className="banner-big-text">
            <span className="up-to">UP TO</span>
            <span className="after-up-to">20,000 Coin</span>
          </div>
          <div className="banner-btn"></div>
        </div>
        <img alt="wallpaper" src={wallpaper} className="wallpaper"></img>
      </div>

      <div className="on-chain-section">
        <div className="on-chain-title">On-Chain Static</div>
        <div className="on-chain-items">
          <div className="on-chain-item">
            <CountUp end={44910} duration={8} className="on-chain-number"></CountUp>
            <div className="on-chain-unit">Player Online</div>
          </div>
          <div className="on-chain-item">
            <CountUp end={1387} duration={8} className="on-chain-number"></CountUp>
            <div className="on-chain-unit">Boardcast games</div>
          </div>
          <div className="on-chain-item">
            <CountUp end={200000000} duration={8} className="on-chain-number"></CountUp>
            <div className="on-chain-unit">Reward for today</div>
          </div>
        </div>
        <img alt="" src={onChainDice} className="on-chain-image"></img>
      </div>
      <div className="game1">
        <div className="backgroundGame g1"></div>
        <div className="game-content">
          <div className="game-second-line">
            Dive in to our wide range of in-house games, live casino and slots
            to experience a thrilling casino adventure.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button>Play Now</button>
          </div>
        </div>
      </div>

      <div className="sponsors">
        <div className="sponsors-title">Sponsor and Associate</div>
        <img alt="sponsors" src={sponsors} className="main-image"></img>
        <img alt="sponsors" src={goldenDice} className="golden-dice"></img>
        <img alt="sponsors" src={chip} className="chip"></img>
        <div className="sponsors-title">Tons of reward await!</div>
      </div>
      <div className="extra-section">
    
      </div>
    </div>
  );
};

export default Home;
