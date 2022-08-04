import React from 'react';
import Feed from '../../components/Profile/feed/Feed';
import Navbar from '../../components/Home/navbar/Navbar';
import Rightbar from '../../components/Home/rightbar/Rightbar';
import Sidebar from '../../components/Profile/sidebar/Sidebar';
import './profile.css'
import { GrUserAdd } from "react-icons/gr";
import { MdChat, MdSupervisorAccount } from 'react-icons/md';

function Profile(props) {
    return (
        <div style={{backgroundColor:"black"}}>
           <Navbar/>
           <div className="topandside">
            <Sidebar />
            <div  className="profile">
            <ProfileTop/>
            <ProfileStats/>
            <FollowOrMessage/>
          <Feed/>
         
            
           
           </div>
           
          
           </div>
        </div>
    );
}

export default Profile;

const FollowOrMessage = () => {
    return (
        <div className="followormessage">
            <div className="followormessagecontainer">
                <div className="followormessageitem1">
                    <MdSupervisorAccount />
                    <span className="followormessagetext"> Follow </span>
                    
                    
                </div>
                <div className="followormessageitem2">
                <MdChat className="sidebarlistitemicon"   />
                    <span className="followormessagetext">Message </span>
                    
                    
                </div>
            </div>
        </div>
    );
    }
const ProfileStats = () => {
    return (
        <div className="profilestats">
            <div className="profilestatswrapper">
                <div className="profilestatsitem">
                    <span className="profilestatsitemnumber"> 08 </span>
                    <span className="profilestatsitemtext"> Posts </span>
                    
                </div>
                <div className="profilestatsitem">
                    <span className="profilestatsitemnumber"> 90 </span>
                    <span className="profilestatsitemtext"> Followings </span>
                    
                </div>
                <div className="profilestatsitem">
                    <span className="profilestatsitemnumber"> 120 </span>
                    <span className="profilestatsitemtext"> Followers </span>
                    
                </div>
            </div>

        </div>
    );
}


const ProfileTop = () => {
    return (
        <div className="profiletop">
            <div className="profiletopwrapper">
                <div className="coverPhoto">
                    <img src={"https://i.pinimg.com/originals/9e/8d/74/9e8d747819250be17bff875604223894.jpg"} style={{height:200, width:"100%", objectFit:"cover"}}/>
                </div>
                <div className="profiletopwrapperleft">
                    <img src={require("../../assets/3.png")} style={{height:150, width:150, borderRadius:"50%", alignSelf:"center"}}/>
                    <div className="profiletopwrapperlefttext">
                        <h1>John Doe</h1>
                        <p>@johndoe</p>
                    </div>
                </div>
                <div className="profiletopwrapperright">
                    <div className="profiletopwrapperrighttext">
                        <p>1234</p>
                        <p>Following</p>
                    </div>
                    <div className="profiletopwrapperrighttext">
                        <p>1234</p>
                        <p>Followers</p>
                    </div>
                </div>
            </div>
        </div>
    );
}