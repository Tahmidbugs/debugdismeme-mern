import React from 'react';
import { BiExit } from "react-icons/bi";
import Searchbar from './Searchbar';
import './HomeCStyle.css';
function Navbar(props) {
    return (
        <div className="navbar" >
            
           
        <img src={require("../../../assets/logo.png")} style={{height:120, width:300, alignSelf:"center"}}/>      
        
        <Searchbar/>
        <BiExit style={{color:"orange" , fontSize:40, alignSelf:"center", cursor:"pointer", marginRight:30 }}/>
        </div>
    );
}

export default Navbar;