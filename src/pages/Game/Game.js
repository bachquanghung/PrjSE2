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
  const [showCongrats, setShowCongrats] = useState(false);
  const [showLoss, setShowLoss] = useState(false);
  useEffect(() => {
    const myString = 'Game';
    localStorage.setItem('myPage', myString);
  }, []);

  useEffect(() => {
    if (rolling) {
      const interval1 = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 6);
        setCurrentNumber1(randomNumber);
      }, 200);

      const interval2 = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 6);
        setCurrentNumber2(randomNumber);
      }, 200);

      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
      };
    }
  }, [rolling]);

  const handleStartGame = (diceResults, isWinning) => {
    setTimeout(() => {
      setCurrentNumber1(diceResults[0] - 1);
      setCurrentNumber2(diceResults[1] - 1);
      setRolling(false);
      if(isWinning){
        setShowCongrats(true)
      }
      else{
        setShowLoss(true)
      }
    }, 2000);
  };

  const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  const placeBet = async () => {
    const url = 'https://d28f-58-186-128-18.ngrok-free.app/bet'; 
    const accountID = localStorage.getItem('accountID');

    const payload = {
      accountID: accountID,
      typeBet: bet,
      amount: amount
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'access-token': localStorage.getItem('accessToken')
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(`Expected JSON but got ${contentType}: ${text}`);
      }

      const data = await response.json();

      const { result, rewardAmount, currentBalance, isWinning } = data.data;

      console.log('Bet Result:', result);
      console.log('Reward Amount:', rewardAmount);
      console.log('Current Balance:', currentBalance);
      console.log('Is Winning:', isWinning);

      localStorage.setItem('balancePoint', currentBalance);

     

      handleStartGame(result, isWinning);

      return data;

    } catch (error) {
      console.error('Error placing bet:', error);
    }
  };

  return (
    <div style={{ backgroundColor: "#0C141A", position: "relative" }}>
      <div className="game-title-section">
        <img className="game-title-img" src={firstBanner} alt="First Banner"></img>
        <div className="game-title">Dice Roller Game</div>
        <img className="game-title-img" src={secondBanner} alt="Second Banner"></img>
      </div>
      <div className="select-option">
        {bet === "" ? "Select Option" : "Bet"}
      </div>

      <div className="bet-options">
        <div
          className={bet === "UNDER" || bet === "" ? "bet-option" : "bet-option off"}
          onClick={() => handleBet("UNDER")}
        >
          <div className="range">2 to 6</div>
          <div className="up-down">DOWN</div>
          <div className="bet-amount">
            <div
              className={bet === "UNDER" ? "change-amount-btn active" : "change-amount-btn"}
              onClick={() => {
                if (amount === 0) {
                  return;
                }
                setAmount(amount - 100);
              }}
            >
              -
            </div>
            <div className={bet === "UNDER" ? "amount active" : "amount"}>
              {amount} G
            </div>
            <div
              className={bet === "UNDER" ? "change-amount-btn active" : "change-amount-btn"}
              onClick={() => {
                setAmount(amount + 100);
              }}
            >
              +
            </div>
          </div>
        </div>
        <div
          className={bet === "LUCKY" || bet === "" ? "bet-option" : "bet-option off"}
          onClick={() => handleBet("LUCKY")}
        >
          <div className="range">7</div>
          <div className="up-down">LUCKY</div>
          <div className="bet-amount">
            <div
              className={bet === "LUCKY" ? "change-amount-btn active" : "change-amount-btn"}
              onClick={() => {
                if (amount === 0) {
                  return;
                }
                setAmount(amount - 100);
              }}
            >
              -
            </div>
            <div className={bet === "LUCKY" ? "amount active" : "amount"}>
              {amount} G
            </div>
            <div
              className={bet === "LUCKY" ? "change-amount-btn active" : "change-amount-btn"}
              onClick={() => {
                setAmount(amount + 100);
              }}
            >
              +
            </div>
          </div>
        </div>
        <div
          className={bet === "OVER" || bet === "" ? "bet-option" : "bet-option off"}
          onClick={() => handleBet("OVER")}
        >
          <div className="range">8 to 12</div>
          <div className="up-down">UP</div>
          <div className="bet-amount">
            <div
              className={bet === "OVER" ? "change-amount-btn active" : "change-amount-btn"}
              onClick={() => {
                if (amount === 0) {
                  return;
                }
                setAmount(amount - 100);
              }}
            >
              -
            </div>
            <div className={bet === "OVER" ? "amount active" : "amount"}>
              {amount} G
            </div>
            <div
              className={bet === "OVER" ? "change-amount-btn active" : "change-amount-btn"}
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
              setRolling(true);
              placeBet();
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
      {openGame && (
        <div>
          <div className="inGame"></div>
          <div className="dish">
            <div className={`dice ${rolling ? 'rolling' : ''}`}>
              {currentNumber1 !== null && <img src={diceImages[currentNumber1]} alt={`Dice ${currentNumber1 + 1}`} />}
              {currentNumber2 !== null && <img src={diceImages[currentNumber2]} alt={`Dice ${currentNumber2 + 1}`} />}
            </div>
            <div className="play-again-btn" onClick={() => { setOpenGame(false); setShowCongrats(false); window.location.reload(); }}>
              Play again
            </div>
          </div>
        </div>
      )}
      {showCongrats && (
        <div className="congrats-screen" style={{display:'flex', flexDirection:'column'}}>
          <div className="congrats-message">
            Congratulations! You won!
          </div>
          <button className="close-congrats-btn" onClick={() => setShowCongrats(false)}>
            Close
          </button>
        </div>
      )}
        {showLoss && (
        <div className="loss-screen" style={{display: 'flex', flexDirection:'column'}}>
          <div className="loss-message">
            Sorry, you lost!
          </div>
          <button className="close-loss-btn" onClick={() => setShowLoss(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
