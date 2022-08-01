import React from 'react';
import './feed.css';
function Post(props) {
    return (
        <div className='post'>
            <div className='post-wrapper'>
<div className="postTop">
    <div className="postTopLeft">
        <img src={require("../../../assets/1.png")} alt="" className='postprofilepic'/>
        <div className="postTopLeftText">
        <span className="postUsername">TedCodes</span>
        <span className='postTime'>1 hour ago</span>
        </div>
    </div>
    <div className="postTopRight"></div>
    </div>
</div>
<div className="postCenter">
    <div><span className="postCaption">Hey. This is a post</span></div>
    <div className="postImage"><img src={require("../../../assets/memetemplates/2.jpg")} alt="" className='postimage'/></div>
</div>
<div className="postBottom">
    <div className="postBottomLeft">
        <div className="postBottomLeftIcon">
            <img src={require("../../../assets/neutral_unclicked.png")} alt="" className='postReaction'/>
            <img src={require("../../../assets/lol_unclicked.png")} alt="" className='postReaction'/>
            <img src={require("../../../assets/rofl_unclicked.png")} alt="" className='postReaction'/>

            </div>
</div>
</div>
            
        </div>
    );
}

export default Post;
