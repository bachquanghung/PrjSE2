import {React, useState} from "react";
import "./Login.css";
import { IoEyeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
const Login = ({show, handleLoginShow}) => {
    const [state, setState] = useState(true)
    const [hide, setHide] = useState(false)
    const handleClick = () => {
        setState(!state);
    }
    const handleShow = () => {
      setHide(!hide);
  }
  
  return (
    <div className={show ? "container-login" : "container-login-off"}>
      <span style={{position:'absolute', right:'2%', top: '2%', fontSize:'25px', zIndex: '100000', color:'white', cursor:'pointer'}} onClick={() => {handleLoginShow(!show)}}><IoMdCloseCircle/></span>
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
          <form action="#">
            <h2 style={{ color: "white" }}>Sign In</h2>
            <div className="input-box">
              <span className="icon"></span>
              <input type="text" required></input>
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon" onClick={handleShow}>
                {hide ? <IoEyeOutline /> : <RiEyeCloseLine/>}
                
              </span>
              <input type={hide ? "text" : "password"} required></input>
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
              <input type="text" required></input>
              <label>Email</label>
            </div>
            <div className="input-box">
             
              <span className="icon" onClick={handleShow}>
                {hide ? <IoEyeOutline /> : <RiEyeCloseLine/>}
              </span>

              <input type={hide ? "text" : "password"} required></input>
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
