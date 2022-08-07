import React from 'react';
import './feed.css';
import axios from 'axios';
import TimeAgo from 'timeago-react';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
function Post({post}) {
    const [neutralimage, setNeutralimage] = React.useState(require("../../../assets/neutral_unclicked.png"));
    const [lolimage, setLolimage] = React.useState(require("../../../assets/lol_unclicked.png"));
    const[roflimage, setRoflimage] = React.useState(require("../../../assets/rofl_unclicked.png"));
    const[postOwner, setPostOwner] = React.useState({});  
    const{user}= useContext(AuthContext);
    const fetchPostOwner = async() => {
        await axios.get(`/users?userid=${post.userid}`)
        .then(res => {
            setPostOwner(res.data);
        }
        ).catch(err => {
            console.log(err);
        }
        );
        console.log("fetched user: ",postOwner);
    }
    React.useEffect(() => {
        fetchPostOwner();
    }
    , []);

    const handleNeutral = async() => {
        const neutralscopy= post.neutrals;
        if(neutralscopy.includes(user.username)){
            neutralscopy.splice(neutralscopy.indexOf(user.username),1);
            setNeutralimage(require("../../../assets/neutral_unclicked.png"));
        }
        else{
            neutralscopy.push(user.username);
            setNeutralimage(require("../../../assets/neutral_clicked.png"));
        }
        console.log("neutralscopy: ",neutralscopy);
        await axios.put(`/posts/${post._id}`, {neutrals: neutralscopy}) 
        .then(res => {
            console.log(res);
        }
        ).catch(err => {
            console.log(err);
        }
        );
        
    }
    const handleLol = async() => {
        const lolscopy= post.lols;
        if(lolscopy.includes(user.username)){
            lolscopy.splice(lolscopy.indexOf(user.username),1);
            setLolimage(require("../../../assets/lol_unclicked.png"));
        }
        else{
            lolscopy.push(user.username);
            setLolimage(require("../../../assets/lol_clicked.png"));
        }
        console.log("lolscopy: ",lolscopy);
        await axios.put(`/posts/${post._id}`, {lols: lolscopy}) 
        .then(res => {
            console.log(res);
        }
        ).catch(err => {
            console.log(err);
        }
        );
        
    };
    const handleRofl = async() => {
        const roflscopy= post.rofls;
        if(roflscopy.includes(user.username)){
            roflscopy.splice(roflscopy.indexOf(user.username),1);
            setRoflimage(require("../../../assets/rofl_unclicked.png"));
        }
        else{
            roflscopy.push(user.username);
            setRoflimage(require("../../../assets/rofl_clicked.png"));
        }
        console.log("roflscopy: ",roflscopy);
        await axios.put(`/posts/${post._id}`, {rofls: roflscopy}) 
        .then(res => {
            console.log(res);
        }
        ).catch(err => {
            console.log(err);
        }
        );
                   
    };


    return (
        <div className='post'>
            <div className='post-wrapper'>
<div className="postTop">
    <div className="postTopLeft">
        <Link to={`profile/${postOwner.username}`}>
        <img src={postOwner.profilePicture} alt="" className='postprofilepic'/>
        </Link>
        <div className="postTopLeftText">
        <span className="postUsername">{postOwner.username}</span>
        <span className='postTime'><TimeAgo
  datetime={post.createdAt}
    locale="en-US"
/></span>
        </div>
    </div>
    <div className="postTopRight"></div>
    </div>
</div>
<div className="postCenter">
    <div><span className="postCaption">{post.caption}</span></div>
    {post.imageURL && <div className="postImage"><img src={post.imageURL} alt="" className='postimage'/></div>}
</div>
<div className="postBottom">
    <div className="postBottomLeft">
        <div className="postBottomLeftIcon">
            <img src={neutralimage} alt="" className='postReaction'  onClick={()=>handleNeutral()}/>
            <img src={lolimage} alt="" className='postReaction' onClick={handleLol} />
            <img src={roflimage} alt="" className='postReaction' onClick={handleRofl} />

            </div>
</div>
</div>
            
        </div>
    );
}

export default Post;
