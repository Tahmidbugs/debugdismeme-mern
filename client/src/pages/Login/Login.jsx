import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';
function Login(props) {
    return (
        <div className='login'>
            <div className='loginwrapper'>
                <div className="loginLeft">
                   <img src={require('../../assets/logo3.png')} alt="debugdismeme" className="loginLogo"/>
                   <span className="loginText">Connect with programmers that have the same broken sense of humor as you</span>
                </div>
                <div className="loginRight">
                    <div className="loginRightWrapper">
                    <div className="loginRightTop">
                        <span className="loginText2">Login and stay connected</span>
                        </div>

                    <div className="loginBox">
                        <input type="text" className="loginInput" placeholder="Username or Email"/>
                        <input type="password" className="loginInput" placeholder="Password"/>
                        <button className="loginButton">Login</button>
                        <span className="loginText3">Don't have an account? <a href="/register">Sign up</a></span>

                    </div>
                    </div>
                </div>
                </div>
            
        </div>
    );
}

export default Login;