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
    const [neutral, setNeutral] = React.useState(false);
    const [lol, setLol] = React.useState(false);
    const [rofl, setRofl] = React.useState(false);
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
        // console.log("fetched user: ",postOwner);
    }
    React.useEffect(() => {
        fetchPostOwner();
        setNeutral(post.neutrals.includes(user.username));
        setLol(post.lols.includes(user.username));
        setRofl(post.rofls.includes(user.username));
    }
    , [post.neutral, post.lol, post.rofl]);

    const handleNeutral = async() => {
        const neutralscopy= post.neutrals;
        if(neutralscopy.includes(user.username)){
            neutralscopy.splice(neutralscopy.indexOf(user.username),1);
            setNeutralimage(require("../../../assets/neutral_unclicked.png"));
            setNeutral(false);
        }
        else{
            neutralscopy.push(user.username);
            setNeutralimage(require("../../../assets/neutral_clicked.png"));
            setNeutral(true);
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
            setLol(false);
        }
        else{
            lolscopy.push(user.username);
            setLolimage(require("../../../assets/lol_clicked.png"));
            setLol(true);
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
            setRofl(false);
        }
        else{
            roflscopy.push(user.username);
            setRoflimage(require("../../../assets/rofl_clicked.png"));
            setRofl(true);
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
    {post.imageURL && <div className="postImage"><img src={require(`../../../../../api/public/images/${post.imageURL}`)} alt="" className='postimage'/></div>}
</div>
<div className="postBottom">
    <div className="postBottomLeft">
        <div className="postBottomLeftIcon">
            <img src={neutral? require("../../../assets/neutral_clicked.png") : neutralimage} alt="" className='postReaction'  onClick={()=>handleNeutral()}/>
            <img src={lol? require("../../../assets/lol_clicked.png") : lolimage } alt="" className='postReaction' onClick={()=>handleLol()} />
            <img src={rofl? require("../../../assets/rofl_clicked.png") : roflimage} alt="" className='postReaction' onClick={()=>handleRofl()} />

            </div>
            <div className="postBottomLeftText" >
                <span className="postReactionCount">({post.neutrals.length})</span>
                <span className="postReactionCount">({post.lols.length})</span>
                <span className="postReactionCount">({post.rofls.length})</span>
                </div>

</div>
</div>
            
        </div>
    );
}

export default Post;
