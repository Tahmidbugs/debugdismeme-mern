import React from 'react';
import './register.css';
import {useRef} from 'react';
function Register(props) {
    const email= useRef();
    const password= useRef();
    const handleCLick = (e) => {
        e.preventDefault();
       console.log(email.current.value,password.current.value);
      
    }
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

                    <form className="registerBox" onSubmit={handleCLick}>
                        <input type="text" className="registerInput" placeholder="Full name"/>
                        <input type="text" className="registerInput" placeholder="Username"/>
                        <input type="text" className="registerInput" placeholder="Email" ref={email} required/>
                        <input type="password" className="registerInput" placeholder="Password" ref={password} minLength={6}/>
                        <button className="registerButton">Create Account</button>
                        <span className="registerText3">Already have an account? <a href="/login">Login</a></span>

                    </form>
                </div>
                </div>
            
        </div>
    );
}

export default Register;