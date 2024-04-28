import {React, useState} from "react";
import "./Login.css";
import { IoEyeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
const Login = () => {
    const [state, setState] = useState(true)
    const handleClick = () => {
        setState(!state);
    }
  return (
    <div className="container-login">
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
      <div className="logreg-box">
        <div className="form-box login">
          <form action="#">
            <h2 style={{ color: "white" }}>Sign In</h2>
            <div className="input-box">
              <span className="icon"></span>
              <input type="email" required></input>
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <IoEyeOutline />
              </span>
              <input type="password" required></input>
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
          <form action="#">
            <h2 style={{ color: "white" }}>Sign Up</h2>
            <div className="input-box">
              <span className="icon">
                <FaUser />
              </span>
              <input type="text" required></input>
              <label>Name</label>
            </div>
            <div className="input-box">
              <span className="icon"></span>
              <input type="email" required></input>
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <IoEyeOutline />
              </span>
              <input type="password" required></input>
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
    </div>
  );
};

export default Login;
