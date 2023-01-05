import React from 'react';
import { ImExit } from "react-icons/im";
import Searchbar from './Searchbar';
import './HomeCStyle.css';
import {Link, useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '../../../context/AuthContext';

function Navbar(props) {
    const {user,dispatch}= useContext(AuthContext);
    const navigate= useNavigate();
    const handleLogout = () => {
        dispatch({type: 'LOGOUT'});
        console.log("logged out");
        navigate("/login");

    }
    return (
        <div className="navbar" >
<ImExit onClick={handleLogout} style={{color:"#F9883E" , fontSize:40, alignSelf:"center", cursor:"pointer", marginRight:30, transform: "rotate(180deg)"}}/>          <Link to="/"> 
        <img src={require("../../../assets/logo.png")} className="headerLogo" />      
        </Link>
        <div></div>
        
      
 
        
        </div>
    );
}

export default Navbar;