import { React } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import anhthe from "../../assets/anhthe.png";
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

  let namePage = "";
  useEffect(() => {
    const myString = localStorage.getItem("myString");

    if (myString !== null) {
      console.log("String from local storage:", myString);
      namePage = myString;
    } else {
      namePage = "Home";
    }
  }, []);

  const [loginShow, setLoginShow] = useState(false);
  const [types, setTypes] = useState(namePage);
  const [localUsername, setLocalUsername] = useState(false);
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");

    if (storedUsername) {
      setLocalUsername(storedUsername);
    } else {
      // If no username is stored, set it to an empty string
      setLocalUsername("");
    }
  }, [localUsername]);
  const onClickSignIn = () => {
    setLoginShow(!loginShow);
  };
  const handleLogOut = () => {
    localStorage.clear();
    setLocalUsername(true);
    window.location.reload();
  };
  return (
    <div className="wrapper">
      <Login show={loginShow} handleLoginShow={setLoginShow}></Login>
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
            <div>
             
            {localUsername ? (
              <>
                <div
                  className="user"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{display: 'flex'}}>
                    <div className="currentBalance">{localStorage.getItem('balancePoint')}</div>
                  <Link
                    className="btn-user"
                    to="/profile"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span>
                      <img
                        src={anhthe}
                        style={{
                          height: "30px",
                          width: "30px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      ></img>
                    </span>
                    {localUsername}
                  </Link>
                  </div>
                  <div className="user-box"> 
                  <Link
                    onClick={handleLogOut}
                    className="btn-log"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span style={{ fontSize: "25px", marginRight: "10px" }}>
                      <BiLogOut />
                    </span>
                    Log out
                  </Link>
                  <Link
                    className="btn-change"
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span style={{ fontSize: "25px", marginRight: "10px" }}>
                      <FaExchangeAlt></FaExchangeAlt>
                    </span>
                    Change Password
                  </Link>
                  </div>
                 
                </div>
              </>
            ) : (
              <div className="Sign-in-out">
                <span
                  className="sign-header"
                  style={{ color: "white" }}
                  onClick={onClickSignIn}
                >
                  Sign in
                </span>

                <span
                  className="sign-header"
                  style={{
                    color: "white",
                    backgroundColor: "#D3AA5E",
                    marginLeft: "20px",
                  }}
                  onClick={onClickSignIn}
                >
                  Sign up
                </span>
              </div>
            )}
            </div>
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
