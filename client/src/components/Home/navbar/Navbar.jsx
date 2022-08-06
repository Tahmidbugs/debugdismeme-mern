import React from 'react';
import { BiExit } from "react-icons/bi";
import Searchbar from './Searchbar';
import './HomeCStyle.css';
import {Link} from 'react-router-dom';
function Navbar(props) {
    return (
        <div className="navbar" >
            
          <Link to="/"> 
        <img src={require("../../../assets/logo.png")} style={{height:120, width:300, alignSelf:"center"}}/>      
        </Link>
        <Searchbar/>
        <Link to="/login">
        <BiExit style={{color:"orange" , fontSize:40, alignSelf:"center", cursor:"pointer", marginRight:30 }}/>
        </Link>
        </div>
    );
}

export default Navbar;