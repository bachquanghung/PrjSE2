import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='container-login'>
            <div className='content-login'>
            </div>
            <div className='content-login-layer'>
            <div className='welcome'>Welcome to our Community</div>
            
            </div>
            <div className='logreg-box'>
                <div className='form-box login'>
                    <form action='#'>
                    <h2>Sign In</h2>
                    <div className='input-box'>
                        <span className='icon'></span>
                        <input type='email' required></input>
                        <label>Email</label>
                    </div>
                    <div className='input-box'>
                        <span className='icon'></span>
                        <input type='password' required></input>
                        <label>Password</label>
                    </div>
                    <div className='remember-forgot'>
                        <label><input type='checkbox'></input>Remember Me</label>
                        <a href='#'>Forgot Password?</a>
                    </div>

                    <button type='submit' className='btn'>Sign in</button>
                    <div className='login-register'>
                        <p>Don't have an account?<a href='#' className='register-link'>Sign up</a></p>
                    </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;