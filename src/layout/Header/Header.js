import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "../../offpage/Login/Login";
import "./Header.css";
const Header = () => {
  const items = [
    {
      id: 1,
      to: "/",
      type: "Home",
      text: false,
    },
    {
      id: 2,
      to: "/game",
      type: "Game",
      text: false,
    },
    {
      id: 3,
      to: "/instruction",
      type: "Instruction",
      text: false,
    },

    {
      id: 4,
      to: "/achievement",
      type: "Achievement",
      text: false,
    },
    {
      id: 5,
      to: "/store",
      type: "Store",
      text: false,
    },
    {
      id: 6,
      to: "/aboutus",
      type: "About us",
      text: false,
    },
  ];

  const [types, setTypes] = useState("Home");
  const [localUsername, setLocalUsername] = useState(false);

  return (
    <div className="wrapper">
      <Login></Login>
      <Container>
        <div className="header">
          <div className="header-above">
            <div className="header-logo">
              <Link
                to="/"
                className="title"
                style={{ textDecoration: "none", color: "#8A8A8A" }}
              >
                <span className="fun">FUN</span>
                <span className="play">PLAY</span>
              </Link>
            </div>
            {localUsername ? (
              <div className="user-header">
                <image className="avatar"></image>
              </div>
            ) : (
              <div className="Sign-in-out">
          
                <span className="sign-header" style={{ color: "white" }}>
                  Sign in
                </span>
            
                <span
                  className="sign-header"
                  style={{
                    color: "white",
                    backgroundColor: "#D3AA5E",
                    marginLeft: "20px",
                  }}
                >
                  Sign up
                </span>
              </div>
            )}
          </div>
          <div className="header-item">
            {items.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className="item"
                style={
                  types === item.type
                    ? {
                        borderBottom: "2px solid #ff9950",
                        borderRadius: "3px",
                        color: "#8A8A8A",

                        textDecoration: "none",
                      }
                    : { textDecoration: "none", color: "#8A8A8A" }
                }
                onClick={() => {
                  setTypes(item.type);
                }}
              >
                {item.type}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
