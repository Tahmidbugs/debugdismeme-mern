import React from 'react';
import Feed from '../../components/Home/feed/Feed';
import Navbar from '../../components/Home/navbar/Navbar';

import Sidebar from '../../components/Home/sidebar/Sidebar';
import './profile.css'

import { MdChat, MdSupervisorAccount } from 'react-icons/md';
import axios from 'axios';
import {useParams} from 'react-router-dom';
function Profile(props) {
    const[user, setUser] = React.useState(null);  
    const username = useParams().username;
    const fetchUser = async() => {
        await axios.get(`/users?username=${username}`)
        .then(res => {
            setUser(res.data);
        }
        ).catch(err => {
            console.log(err);
        }
        );
        console.log("fetched user: ",user);
    }
    React.useEffect(() => {
        fetchUser();
    }
    , []);

    return (
      <div style={{backgroundColor:"black"}}>
           <Navbar/>
           <div className="topandside">
            <Sidebar />
            { user && 
            <div  className="profile">
            <ProfileTop user={user}/>
            <ProfileStats user={user}/>
            <FollowOrMessage/>
          <Feed username={user.username}/>
         
            
           
           </div>
           
            }
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
const ProfileStats = ({user}) => {
    return (
      
        <div className="profilestats">
            <div className="profilestatswrapper">
                <div className="profilestatsitem">
                    <span className="profilestatsitemnumber"> 08 </span>
                    <span className="profilestatsitemtext"> Posts </span>
                    
                </div>
                <div className="profilestatsitem">
                    <span className="profilestatsitemnumber"> {user.following.length} </span>
                    <span className="profilestatsitemtext"> Followings </span>
                    
                </div>
                <div className="profilestatsitem">
                    <span className="profilestatsitemnumber">{user.followers.length} </span>
                    <span className="profilestatsitemtext"> Followers </span>
                    
                </div>
            </div>

        </div>
    );
}


const ProfileTop = ({user}) => {
    return (
        <div className="profiletop">
            <div className="profiletopwrapper">
                <div className="coverPhoto">
                    <img src={user.coverPicture} style={{height:200, width:"100%", objectFit:"cover"}}/>
                </div>
                <div className="profiletopwrapperleft">
                    <img src={user.profilePicture} style={{height:150, width:150, borderRadius:"50%", alignSelf:"center"}}/>
                    <div className="profiletopwrapperlefttext">
                        <h1>{user.username}</h1>
                        <p>@{user.username}</p>
                    </div>
                </div>
               
            </div>
        </div>
    );
}