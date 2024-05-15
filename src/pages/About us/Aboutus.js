import React from "react";
import "./../Instruction/Instruction.css";
import onChainDice from "../../assets/on-chain-dice.png";
import goldenDice from "../../assets/goldenDice.png";
import chip from "../../assets/chip.png";
const Instruction = () => {
  return (
    <div className="instruction-container">
      <img alt="" src={onChainDice} style={{ left: "50%", top: "50%" }}></img>
      <img alt="" src={goldenDice} style={{ left: "20%", top: "20%" }}></img>
      <img alt="" src={chip} style={{ left: "20%", top: "80%" }}></img>
      <div className="instruction-title">Who are we!</div>
      <div className="instruction-content">
        <div className="instruction-text">
          Welcome to FUNPLAY, the ultimate destination for thrill-seekers and
          sports enthusiasts who love the excitement of betting. At FUNPLAY, we
          combine the thrill of sports and casino gaming with the reliability
          and security you deserve. Whether you're a seasoned bettor or a
          newcomer eager to dive into the world of online betting, FUNPLAY
          offers an unparalleled experience designed just for you.
        </div>
        <div className="instruction-text">What We Offer</div>
        <div className="instruction-text">
          <ul>
            <li>
              Live Betting: Experience the thrill of real-time betting with our
              live betting options. Place your bets as the action unfolds and
              make the most of every moment.
            </li>
            <li>
              User-Friendly Interface: Our website is designed with you in mind.
              It's easy to navigate, allowing you to find your favorite sports
              and games quickly and place your bets effortlessly.
            </li>
            <li>
              Secure Transactions: Your security is our top priority. We use
              state-of-the-art encryption technology to ensure that your
              personal and financial information is always protected.
            </li>
          </ul>
        </div>
        <div className="instruction-text">
          At FUNPLAY, we are dedicated to providing excellent customer service.
          Our support team is available 24/7 to assist you with any questions or
          issues you may have. We strive to create a community where every
          member feels valued and supported.
        </div>
        <div className="instruction-text">
          We advocate for responsible betting and provide tools and resources to
          help you stay in control. From setting betting limits to
          self-exclusion options, we're here to support you in making informed
          and responsible choices.
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
