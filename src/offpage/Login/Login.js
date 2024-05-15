import { React, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

const Login = ({ show, handleLoginShow }) => {
  const [state, setState] = useState(true);
  const [hide, setHide] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleClick = () => {
    setState(!state);
  };

  const handleShow = () => {
    setHide(!hide);
  };

  const showPopup = (message) => {
    setPopupMessage(message);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setPopupMessage("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
   
    try {
      const loginResponse = await fetch("https://d28f-58-186-128-18.ngrok-free.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!loginResponse.ok) {
        throw new Error("Failed to login");
      }

      const loginData = await loginResponse.json();
      if (!loginData.success) {
        showPopup(loginData.data);
        return;
      }

      const { accessToken, accountId, role } = loginData.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("accountId", accountId);
      localStorage.setItem("role", role);

      const userDetailsResponse = await fetch("https://d28f-58-186-128-18.ngrok-free.app/getProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "access-token": localStorage.getItem("accessToken")
        },
       
      });

      if (!userDetailsResponse.ok) {
        throw new Error("Failed to fetch user details");
      }

      const userDetails = await userDetailsResponse.json();
      const { email, displayName, balancePoint, avatarURL, roundPlayed, createdAt } = userDetails.data;

      console.log("cec1");

      localStorage.setItem("email", email);
      localStorage.setItem("displayName", displayName);
      localStorage.setItem("balancePoint", balancePoint);
      localStorage.setItem("avatarURL", avatarURL);
      localStorage.setItem("roundPlayed", roundPlayed);
      localStorage.setItem("createdAt", createdAt);
      localStorage.setItem("username", userData.username);

      window.location.reload()
    } catch (error) {
      console.error("Error:", error.message);
      showPopup("Failed to login. Please try again.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = {
      username: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: 'PLAYER'
    };

    try {
      const response = await fetch("https://d28f-58-186-128-18.ngrok-free.app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const data = await response.json();
      if (data.success) {
        handleClick();
      } else {
        showPopup(data.data || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      showPopup("Failed to register. Please try again.");
    }
  };

  return (
    <div className={show ? "container-login" : "container-login-off"}>
      <span style={{ position: 'absolute', right: '2%', top: '2%', fontSize: '25px', zIndex: '100000', color: 'white', cursor: 'pointer' }} onClick={() => { handleLoginShow(!show) }}><IoMdCloseCircle /></span>
      <div className="content-login"></div>
      <div className="content-login-layer">
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: "10%",
            top: "5%",
          }}
        >
          <div className="fun">FUN</div>
          <div className="play">PLAY</div>
        </div>
        <div className="welcome">
          Roll the dice of fate and shape your destiny!
        </div>
      </div>
      <div className={state ? "logreg-box" : 'logreg-box active'}>
        <div className="form-box login">
          <form onSubmit={handleLogin}>
            <h2 style={{ color: "white" }}>Sign In</h2>
            <div className="input-box">
              <span className="icon"></span>
              <input type="text" name="username" required></input>
              <label>Username</label>
            </div>
            <div className="input-box">
              <span className="icon" onClick={handleShow}>
                {hide ? <IoEyeOutline /> : <RiEyeCloseLine />}
              </span>
              <input type={hide ? "text" : "password"} name="password" required></input>
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox"></input>Remember Me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="submit-btn">
              Sign in
            </button>
            <div className="login-register">
              <p>
                Don't have an account?
                <a href="#" className="register-link" onClick={handleClick}>
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form onSubmit={handleRegister}>
            <h2 style={{ color: "white" }}>Sign Up</h2>
            <div className="input-box">
              <span className="icon">
                <FaUser />
              </span>
              <input type="text" name="name" required></input>
              <label>Username</label>
            </div>
            <div className="input-box">
              <span className="icon"></span>
              <input type="text" name="username" required></input>
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon" onClick={handleShow}>
                {hide ? <IoEyeOutline /> : <RiEyeCloseLine />}
              </span>
              <input type={hide ? "text" : "password"} name="password" required></input>
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox"></input>I agree to the terms & conditions
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Sign Up
            </button>
            <div className="login-register">
              <p>
                Already have an account?
                <a href="#" className="register-link" onClick={handleClick}>
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="popup-close" onClick={handleClosePopup}>&times;</span>
            <p>{popupMessage}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
