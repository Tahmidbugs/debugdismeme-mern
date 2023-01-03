import React, { useContext } from 'react';
import './register.css';
import {useRef} from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

function Register(props) {
    const fullname= useRef();
    const username = useRef();
    const email= useRef();
    const password= useRef();
    const confirmPassword= useRef();
    const navigate= useNavigate();
    const {isFetching}= useContext(AuthContext);
    const handleRegister = async(e) => {
        e.preventDefault();
        if(password.current.value !== confirmPassword.current.value){
            alert("Passwords do not match");
            return;
        }
        else{
            const user={
                fullname: fullname.current.value,
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try{
            const res = await axios.post('https://debugthismeme.onrender.com/api/auth/register', user);
            console.log("dispatiching",res.data);
            navigate("/accountSetUp", {state:res.data});    
           
            
            
        }
            catch(err){
                alert(err);
            }


        }
        

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

                    <form className="registerBox" onSubmit={handleRegister}>
                        <input  type="text" ref={fullname} className="registerInput" placeholder="Full name"/>
                        <input required type="text" ref={username} className="registerInput" placeholder="Username"/>
                        <input required type="email" ref={email} className="registerInput" placeholder="Email" />
                        <input required type="password"  ref={password} className="registerInput" placeholder="Password"  minLength={6}/>
                        <input required type="password" ref={confirmPassword} className="registerInput" placeholder="Re-enter password"  minLength={6}/>
                        <button className="registerButton" type='submit' >"Sign up"</button>
                        <span className="registerText3">Already have an account? </span><Link to="/login" className="loginLink"><button className="LoginButton1">Sign in</button></Link>

                    </form>
                </div>
                </div>
            
        </div>
    );
}

export default Register;