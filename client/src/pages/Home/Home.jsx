import React from 'react';
import Feed from '../../components/Home/feed/Feed';
import Navbar from '../../components/Home/navbar/Navbar';
import Rightbar from '../../components/Home/rightbar/Rightbar';
import Sidebar from '../../components/Home/sidebar/Sidebar';


function Home(props) {
    return (
        <div style={{backgroundColor:"black"}}>
           <Navbar/>
           <div style={{display:"flex"}}>
           <Feed/>
           </div>
        </div>
    );
}

export default Home;