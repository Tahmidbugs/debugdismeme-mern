import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';
import {loginCall} from "../../apiCalls";
import {useRef} from 'react';
import { useContext } from 'react';
import {AuthContext} from "../../context/AuthContext";
import { CircularProgress } from '@material-ui/core';
function Login(props) {
    const email= useRef();
    const password= useRef();
    const {user,dispatch, isFetching}= useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        loginCall({email:email.current.value,password:password.current.value}, dispatch);
        console.log(user);
    }
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

                    <form className="loginBox" onSubmit={handleLogin}>
                        <input type="text" className="loginInput" placeholder="Username or Email" ref={email}/>
                        <input type="password" className="loginInput" placeholder="Password" ref={password}/>
                        <button className="loginButton">{isFetching? <CircularProgress/> : "Login"}</button>
                        <span className="loginText3">Don't have an account? <a href="/register">Sign up</a></span>

                    </form>
                    </div>
                </div>
                </div>
            
        </div>
    );
}

export default Login;