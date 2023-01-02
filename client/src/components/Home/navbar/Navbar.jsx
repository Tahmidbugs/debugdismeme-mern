import React from 'react';
import { RiLogoutBoxFill } from "react-icons/ri";
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
            <RiLogoutBoxFill onClick={handleLogout} style={{color:"orange" , fontSize:40, alignSelf:"center", cursor:"pointer", marginRight:30 }}/>
          <Link to="/"> 
        <img src={require("../../../assets/logo.png")} className="headerLogo" />      
        </Link>
        <div></div>
        
      
 
        
        </div>
    );
}

export default Navbar;