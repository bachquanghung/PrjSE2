import React from "react";
import "./Instruction.css";
import onChainDice from "../../assets/on-chain-dice.png";
import goldenDice from "../../assets/goldenDice.png";
import chip from "../../assets/chip.png";
const Instruction = () => {
  return (
    <div className="instruction-container">
      <img alt="" src={onChainDice} style={{ left: "50%", top: "50%" }}></img>
      <img alt="" src={goldenDice} style={{ left: "20%", top: "20%" }}></img>
      <img alt="" src={chip} style={{ left: "20%", top: "80%" }}></img>
      <div className="instruction-title">The rule is simple!</div>
      <div className="instruction-content">
        <div className="instruction-text">
          The 7 Up 7 Down Betting is a popular, simple dice game that depends on
          luck. The player needs two dice and a flat surface to play the game.
        </div>
        <div className="instruction-text">
          Here’s how it works – players bet on the total of the two dice after
          they’re rolled. They have three choices for betting:
        </div>
        <div className="instruction-text">
          <ul>
            <li>7 Down – They bet the total will be less than 7.</li>
            <li>7 Up – They bet the total will be more than 7.</li>
            <li>Lucky 7 – They bet the total will be exactly 7.</li>
          </ul>
        </div>
        <div className="instruction-text">
          Players start by placing their bets on one of these options. Then, the
          dealer rolls the dice, and the total determines who wins. If a
          player’s bet matches the total, they win; otherwise, the house keeps
          their bet.
        </div>
        <div className="instruction-text">
          Winning 7 Down or 7 Up pays out the same as players bet. But if they
          bet on Lucky 7 and win, they usually get a higher payout, like 4 times
          their bet.
        </div>
        <div className="instruction-text">
          The game isn’t just about luck; it also involves risk and reward. Its
          simplicity might trick players into thinking they can predict or
          control the outcome.
        </div>
      </div>
    </div>
  );
};

export default Instruction;
