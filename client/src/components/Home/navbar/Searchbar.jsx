

import React from 'react';
import "./HomeCStyle.css";
function Searchbar(props) {
    return (
        
        <div className='search' style={{backgroundColor:"#231201", width:"50%", height:50, marginRight:150,  display:"flex", alignItems:"center",borderRadius:20}}>
         
            <input className="searchInput" type='text' placeholder='Search for friends/puns/memes' style={{width:"100%", borderRadius:30, backgroundColor:"#231201", color:"orange",fontSize:16, border:"none"}} />
        </div>
       
    );
}

export default Searchbar;