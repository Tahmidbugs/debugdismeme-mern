import React from 'react';
import './register.css';

function Register(props) {
    return (
        <div className='register'>
            <div className='registerwrapper'>
                <div className="registerLeft">
                   <img src={require('../../assets/logo.png')} alt="debugdismeme" className="registerLogo"/>
                   <span className="registerText">Connect with programmers that have the same broken sense of humor as you</span>
                </div>
                <div className="registerRight">
                    <div className="registerRightTop">
                        <span className="registerText2">Sign up and explore</span>
                        </div>

                    <div className="registerBox">
                        <input type="text" className="registerInput" placeholder="Full name"/>
                        <input type="text" className="registerInput" placeholder="Username"/>
                        <input type="text" className="registerInput" placeholder="Email"/>
                        <input type="password" className="registerInput" placeholder="Password"/>
                        <button className="registerButton">Create Account</button>
                        <span className="registerText3">Already have an account? <a href="/signup">Login</a></span>

                    </div>
                </div>
                </div>
            
        </div>
    );
}

export default Register;