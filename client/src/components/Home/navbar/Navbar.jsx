import React from 'react';
import { BiExit } from "react-icons/bi";
import Searchbar from './Searchbar';
import './HomeCStyle.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '../../../context/AuthContext';

function Navbar(props) {
    const {user,dispatch}= useContext(AuthContext);
    const handleLogout = () => {
        dispatch({type: 'LOGOUT'});
        console.log("logged out");
    }
    return (
        <div className="navbar" >
            <BiExit onClick={handleLogout} style={{color:"orange" , fontSize:40, alignSelf:"center", cursor:"pointer", marginRight:30 }}/>
          <Link to="/"> 
        <img src={require("../../../assets/logo.png")} style={{height:120, width:300, alignSelf:"center"}}/>      
        </Link>
        <div></div>
        
        
        
        </div>
    );
}

export default Navbar;