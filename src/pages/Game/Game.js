import React, { useState, useEffect } from 'react';
import firstBanner from "../../assets/01banner.png";
import secondBanner from "../../assets/02banner.png";
import Dice1 from "../../assets/dice1.png";
import Dice2 from "../../assets/dice2.png";
import Dice3 from "../../assets/dice3.png";
import Dice4 from "../../assets/dice4.png";
import Dice5 from "../../assets/dice5.png";
import Dice6 from "../../assets/dice6.png";
import "./Game.css";
const Game = () => {
  const [bet, handleBet] = useState("");
  const [amount, setAmount] = useState(500);
  const [openGame, setOpenGame] = useState(false);
  const [currentNumber1, setCurrentNumber1] = useState(null);
  const [currentNumber2, setCurrentNumber2] = useState(null);
  const [rolling, setRolling] = useState(false);

  useEffect(() => {
    if (rolling) {
      const interval1 = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 5) + 1; // Add 1 here
        setCurrentNumber1(randomNumber);
      }, 300); // Change image every 100ms for smooth animation

      const interval2 = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 5) + 1; // Add 1 here
        setCurrentNumber2(randomNumber);
      }, 300); // Change image every 100ms for smooth animation

      setTimeout(() => {
        clearInterval(interval1);
        clearInterval(interval2);
        // Display 4 and 6 after 4 seconds
        setCurrentNumber1([3, 5][Math.floor(Math.random() * 2)]);
        setCurrentNumber2([3, 5][Math.floor(Math.random() * 2)]);
        setRolling(false);
      }, 4000);

      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
      };
    }
  }, [rolling]);

  const handleStartGame = () => {
    setCurrentNumber1(null);
    setCurrentNumber2(null);
    setRolling(true);
  };
  const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  return (
    <div style={{ backgroundColor: "#0C141A", position: "relative" }}>
      <div className="game-title-section">
        <img className="game-title-img" src={firstBanner}></img>
        <div className="game-title">Dice Roller Game</div>
        <img className="game-title-img" src={secondBanner}></img>
      </div>
      <div className="select-option">
        {bet === "" ? "Select Option" : "Bet"}
      </div>

      <div className="bet-options">
        <div
          className={
            bet === "down" || bet === "" ? "bet-option" : "bet-option off"
          }
          onClick={() => {
            handleBet("down");
          }}
        >
          <div className="range">2 to 6</div>
          <div className="up-down">DOWN</div>
          <div className="bet-amount">
            <div
              className={
                bet == "down" ? "change-amount-btn active" : "change-amount-btn"
              }
              onClick={() => {
                if (amount == 0) {
                  return;
                }
                setAmount(amount - 100);
              }}
            >
              -
            </div>
            <div className={bet == "down" ? "amount active" : "amount"}>
              {amount} G
            </div>
            <div
              className={
                bet == "down" ? "change-amount-btn active" : "change-amount-btn"
              }
              onClick={() => {
                setAmount(amount + 100);
              }}
            >
              +
            </div>
          </div>
        </div>
        <div
          className={
            bet === "lucky" || bet === "" ? "bet-option" : "bet-option off"
          }
          onClick={() => {
            handleBet("lucky");
          }}
        >
          <div className="range">7</div>
          <div className="up-down">LUCKY</div>
          <div className="bet-amount">
            <div
              className={
                bet == "lucky"
                  ? "change-amount-btn active"
                  : "change-amount-btn"
              }
              onClick={() => {
                if (amount == 0) {
                  return;
                }
                setAmount(amount - 100);
              }}
            >
              -
            </div>
            <div className={bet == "lucky" ? "amount active" : "amount"}>
              {amount} G
            </div>
            <div
              className={
                bet == "lucky"
                  ? "change-amount-btn active"
                  : "change-amount-btn"
              }
              onClick={() => {
                setAmount(amount + 100);
              }}
            >
              +
            </div>
          </div>
        </div>
        <div
          className={
            bet === "up" || bet === "" ? "bet-option" : "bet-option off"
          }
          onClick={() => {
            handleBet("up");
          }}
        >
          <div className="range">8 to 12</div>
          <div className="up-down">UP</div>
          <div className="bet-amount">
            <div
              className={
                bet == "up" ? "change-amount-btn active" : "change-amount-btn"
              }
              onClick={() => {
                if (amount == 0) {
                  return;
                }
                setAmount(amount - 100);
              }}
            >
              -
            </div>
            <div className={bet == "up" ? "amount active" : "amount"}>
              {amount} G
            </div>
            <div
              className={
                bet == "up" ? "change-amount-btn active" : "change-amount-btn"
              }
              onClick={() => {
                setAmount(amount + 100);
              }}
            >
              +
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {bet !== "" ? (
          <button
            className="roll-btn"
            onClick={() => {
              setOpenGame(true);
              handleStartGame()
              
            }}
            disabled={rolling}
          >
            Roll Dice
          </button>
        ) : (
          <button className="roll-btn off" disabled>
            Roll Dice
          </button>
        )}
      </div>
      {openGame == true ? (
        <div>
          <div className="inGame"></div>

          <div className="dish">
          <div className={`dice ${rolling ? 'rolling' : ''}`}>
          {currentNumber1 !== null && <img src={diceImages[currentNumber1]} alt={`Dice ${currentNumber1 + 1}`} />}
        {currentNumber2 !== null && <img src={diceImages[currentNumber2]} alt={`Dice ${currentNumber2 + 1}`} />}
      </div>
      
            <div className="play-again-btn">Play again</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Game;
